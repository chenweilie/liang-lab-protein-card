import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { ColorTheme, RepresentationType, CardAspectRatio, ProteinInfo } from '../types'
import { resolveProteinInfo } from '../services/api'
import type { MolstarHandle } from '../components/MolstarViewer'
import CardExportModal from '../components/CardExportModal'
import { buildCard } from '../utils/cardExport'
import { CARD_DIMENSIONS } from '../types'

const MolstarViewer = lazy(() => import('../components/MolstarViewer'))

// ─── Single panel ─────────────────────────────────────────────────────────────

interface PanelProps {
  label: string
  defaultId?: string
  colorTheme: ColorTheme
  representation: RepresentationType
  viewerRef: React.RefObject<MolstarHandle>
}

function ViewerPanel({ label, defaultId = '', colorTheme, representation, viewerRef }: PanelProps) {
  const [inputId, setInputId] = useState(defaultId)
  const [submittedId, setSubmittedId] = useState(defaultId)
  const [info, setInfo] = useState<ProteinInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleLoad(e: React.FormEvent) {
    e.preventDefault()
    const t = inputId.trim().toUpperCase()
    if (!t) return
    setSubmittedId(t)
  }

  useEffect(() => {
    if (!submittedId) return
    setLoading(true)
    setError('')
    resolveProteinInfo(submittedId)
      .then(setInfo)
      .catch(e => setError(String(e)))
      .finally(() => setLoading(false))
  }, [submittedId])

  return (
    <div className="flex flex-col h-full">
      {/* Panel header */}
      <div className="flex items-center gap-2 px-3 py-2 bg-navy-800 border-b border-white/8 shrink-0">
        <span className="text-xs text-white/40 font-mono uppercase tracking-wider">{label}</span>
        <form onSubmit={handleLoad} className="flex flex-1 gap-2">
          <input
            value={inputId}
            onChange={e => setInputId(e.target.value)}
            placeholder="PDB or UniProt ID"
            className="
              flex-1 h-7 px-2 rounded text-xs
              bg-white/6 border border-white/10
              text-white placeholder-white/25
              focus:outline-none focus:ring-1 focus:ring-cyan-500/50
            "
          />
          <button
            type="submit"
            className="h-7 px-3 rounded bg-cyan-500/20 text-cyan-400 text-xs hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
          >
            Load
          </button>
        </form>
      </div>

      {/* Viewer area */}
      <div className="flex-1 relative overflow-hidden bg-navy-800">
        {error && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <p className="text-red-400 text-sm text-center px-4">{error}</p>
          </div>
        )}

        {info && (
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <div className="bg-navy-900/80 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/8">
              <p className="text-cyan-400 font-mono text-xs">{info.id}</p>
              <p className="text-white text-xs font-medium leading-snug">{info.name}</p>
              <p className="text-white/40 text-xs italic">{info.organism}</p>
            </div>
          </div>
        )}

        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          {info && (
            <MolstarViewer
              ref={viewerRef}
              structureUrl={info.structureUrl}
              colorTheme={colorTheme}
              representation={representation}
              background="#0d0d23"
              className="absolute inset-0"
            />
          )}
        </Suspense>

        {!info && !loading && !error && (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/20 text-sm font-mono">Enter a protein ID above</p>
          </div>
        )}

        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Compare page ─────────────────────────────────────────────────────────────

export default function ComparePage() {
  const [searchParams] = useSearchParams()
  const idA = searchParams.get('a') ?? ''
  const idB = searchParams.get('b') ?? ''

  const [colorTheme] = useState<ColorTheme>('chain-id')
  const [representation] = useState<RepresentationType>('cartoon')

  const refA = useRef<MolstarHandle>(null)
  const refB = useRef<MolstarHandle>(null)

  const [infoA, setInfoA] = useState<ProteinInfo | null>(null)
  const [infoB, setInfoB] = useState<ProteinInfo | null>(null)

  // Keep track of infos for card export
  // (panels manage their own info internally, we mirror it for the export button)
  const [showExport, setShowExport] = useState<'A' | 'B' | null>(null)

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">

      {/* Toolbar */}
      <div className="flex items-center gap-3 px-4 py-2 bg-navy-800 border-b border-white/8 shrink-0">
        <span className="text-xs text-white/40 font-mono uppercase tracking-widest">Compare</span>
        <div className="flex-1" />
        <p className="text-white/30 text-xs hidden sm:block">
          Load two structures to compare them side-by-side
        </p>
      </div>

      {/* Two panels */}
      <div className="flex flex-1 overflow-hidden divide-x divide-white/8">
        <div className="flex-1 overflow-hidden">
          <ViewerPanel
            label="Structure A"
            defaultId={idA}
            colorTheme={colorTheme}
            representation={representation}
            viewerRef={refA}
          />
        </div>
        <div className="flex-1 overflow-hidden">
          <ViewerPanel
            label="Structure B"
            defaultId={idB}
            colorTheme={colorTheme}
            representation={representation}
            viewerRef={refB}
          />
        </div>
      </div>
    </div>
  )
}
