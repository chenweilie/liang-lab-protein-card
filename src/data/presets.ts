import type { PresetProtein } from '../types'

/**
 * Liang Lab core research proteins.
 * All PDB IDs have been verified on RCSB PDB.
 * Research focus: cyclic di-GMP signaling, synthetic biology, natural product biosynthesis.
 */
export const PRESET_PROTEINS: PresetProtein[] = [
  {
    pdbId: '5CZR',
    displayName: 'MapZ–CheR1–c-di-GMP Complex',
    description:
      'Co-crystal structure of PilZ adaptor protein MapZ bound to chemotaxis methyltransferase CheR1 with cyclic di-GMP. Key to understanding c-di-GMP-mediated chemotaxis regulation.',
    organism: 'Pseudomonas aeruginosa',
  },
  {
    pdbId: '3SY8',
    displayName: 'RocR (EAL Phosphodiesterase)',
    description:
      'EAL domain phosphodiesterase RocR that degrades cyclic di-GMP. Central regulator of biofilm dispersal and virulence in P. aeruginosa.',
    organism: 'Pseudomonas aeruginosa',
  },
  {
    pdbId: '4F5D',
    displayName: 'STING–c-di-GMP Complex',
    description:
      'Innate immune adaptor STING bound to cyclic di-GMP. Demonstrates the conserved c-di-GMP binding mode relevant to host-pathogen interactions.',
    organism: 'Homo sapiens',
  },
  {
    pdbId: '3KLN',
    displayName: 'VpsR PilZ Domain',
    description:
      'PilZ domain of the c-di-GMP receptor VpsR, a biofilm regulator. Representative of the widespread PilZ receptor family studied in the Liang Lab.',
    organism: 'Vibrio cholerae',
  },
  {
    pdbId: '2VEA',
    displayName: 'PleD Diguanylate Cyclase',
    description:
      'PleD, a c-di-GMP synthesising diguanylate cyclase bearing a GGDEF catalytic domain. Paradigm for understanding cyclic di-GMP synthesis regulation.',
    organism: 'Caulobacter crescentus',
  },
]

/** c-di-GMP residue names recognised in PDB structures */
export const CDIGMP_RESIDUES = ['7GP', 'CGP', 'CG2', 'CDG']

/** Default structure URL builder */
export function getPdbUrl(pdbId: string): string {
  return `https://files.rcsb.org/download/${pdbId.toUpperCase()}.cif`
}
