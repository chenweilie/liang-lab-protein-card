import type { ProteinInfo, StructureSource } from '../types'

// ─── PDB REST metadata ───────────────────────────────────────────────────────

interface PdbCoreEntry {
  rcsb_entry_info?: {
    structure_determination_methodology?: string
    resolution_combined?: number[]
  }
  struct?: { title?: string }
  rcsb_entry_container_identifiers?: { entry_id?: string }
}

interface PdbEntitySource {
  taxonomy_lineage?: Array<{ name?: string }>
  rcsb_entity_source_organism?: Array<{ ncbi_scientific_name?: string }>
}

export async function fetchPdbMetadata(pdbId: string): Promise<{
  name: string
  organism: string
  method: string
  resolution: string
}> {
  const id = pdbId.toUpperCase()

  const [entryRes, entityRes] = await Promise.allSettled([
    fetch(`https://data.rcsb.org/rest/v1/core/entry/${id}`),
    fetch(`https://data.rcsb.org/rest/v1/core/polymer_entity/${id}/1`),
  ])

  let name = id
  let organism = 'Unknown organism'
  let method = 'X-ray crystallography'
  let resolution = ''

  if (entryRes.status === 'fulfilled' && entryRes.value.ok) {
    const entry: PdbCoreEntry = await entryRes.value.json()
    name = entry.struct?.title ?? id
    const info = entry.rcsb_entry_info
    if (info?.structure_determination_methodology) {
      method = info.structure_determination_methodology
    }
    const res = info?.resolution_combined
    if (res && res.length > 0) {
      resolution = `${res[0].toFixed(2)} Å`
    }
  }

  if (entityRes.status === 'fulfilled' && entityRes.value.ok) {
    const entity: PdbEntitySource = await entityRes.value.json()
    const orgName =
      entity.rcsb_entity_source_organism?.[0]?.ncbi_scientific_name ??
      entity.taxonomy_lineage?.slice(-1)[0]?.name
    if (orgName) organism = orgName
  }

  return { name, organism, method, resolution }
}

// ─── UniProt functional description ─────────────────────────────────────────

interface UniprotEntry {
  proteinDescription?: {
    recommendedName?: { fullName?: { value?: string } }
  }
  comments?: Array<{ commentType: string; texts?: Array<{ value: string }> }>
  organism?: { scientificName?: string }
}

export async function fetchUniprotInfo(uniprotId: string): Promise<{
  name: string
  description: string
  organism: string
}> {
  const res = await fetch(
    `https://rest.uniprot.org/uniprotkb/${uniprotId}?format=json`,
  )
  if (!res.ok) throw new Error(`UniProt fetch failed: ${res.status}`)
  const data: UniprotEntry = await res.json()

  const name =
    data.proteinDescription?.recommendedName?.fullName?.value ?? uniprotId

  const organism = data.organism?.scientificName ?? 'Unknown organism'

  const functionComment = data.comments?.find(
    (c) => c.commentType === 'FUNCTION',
  )
  const description = functionComment?.texts?.[0]?.value ?? ''

  return { name, description, organism }
}

// ─── AlphaFold DB ────────────────────────────────────────────────────────────

interface AlphaFoldEntry {
  pdbUrl?: string
  cifUrl?: string
  uniprotDescription?: string
}

export async function fetchAlphaFoldStructure(uniprotId: string): Promise<{
  structureUrl: string
  description: string
}> {
  const res = await fetch(
    `https://alphafold.ebi.ac.uk/api/prediction/${uniprotId}`,
  )
  if (!res.ok) throw new Error(`AlphaFold API failed: ${res.status}`)
  const entries: AlphaFoldEntry[] = await res.json()
  const entry = entries[0]
  if (!entry) throw new Error('No AlphaFold prediction found')

  const structureUrl = entry.cifUrl ?? entry.pdbUrl ?? ''
  return { structureUrl, description: entry.uniprotDescription ?? '' }
}

// ─── Combined protein info resolver ─────────────────────────────────────────

/**
 * Detect whether an ID looks like a PDB ID (4 chars, starts with digit) or UniProt.
 */
export function detectIdType(id: string): StructureSource {
  const trimmed = id.trim().toUpperCase()
  // PDB IDs: exactly 4 chars starting with a digit, or new 8-char format
  if (/^\d[A-Z0-9]{3}$/.test(trimmed) || /^\d[A-Z0-9]{7}$/.test(trimmed)) {
    return 'pdb'
  }
  return 'alphafold'
}

export async function resolveProteinInfo(id: string): Promise<ProteinInfo> {
  const source = detectIdType(id)
  const trimmedId = id.trim().toUpperCase()

  if (source === 'pdb') {
    const meta = await fetchPdbMetadata(trimmedId)

    // Try to get a one-line description from PDB search API
    let description = ''
    try {
      const descRes = await fetch(
        `https://data.rcsb.org/rest/v1/core/entry/${trimmedId}`,
      )
      if (descRes.ok) {
        const d = await descRes.json()
        description = d.struct?.pdbx_descriptor ?? d.struct?.title ?? ''
      }
    } catch {
      // ignore
    }

    return {
      id: trimmedId,
      source: 'pdb',
      name: meta.name,
      organism: meta.organism,
      method: meta.method,
      resolution: meta.resolution,
      description: description || meta.name,
      structureUrl: `https://files.rcsb.org/download/${trimmedId}.cif`,
    }
  } else {
    // AlphaFold
    const [uniprotInfo, afInfo] = await Promise.all([
      fetchUniprotInfo(trimmedId),
      fetchAlphaFoldStructure(trimmedId),
    ])

    return {
      id: trimmedId,
      source: 'alphafold',
      name: uniprotInfo.name,
      organism: uniprotInfo.organism,
      description: uniprotInfo.description || afInfo.description,
      structureUrl: afInfo.structureUrl,
    }
  }
}
