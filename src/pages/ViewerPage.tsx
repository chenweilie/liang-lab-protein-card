import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { useSearchParams, Link, Navigate } from 'react-router-dom'
import type { ColorTheme, RepresentationType, CardAspectRatio, ProteinInfo } from '../types'
import { resolveProteinInfo } from '../services/api'
import type { MolstarHandle } from '../components/MolstarViewer'
import ControlPanel from '../components/ControlPanel'
import CardExportModal from '../components/CardExportModal'
import ProfessorBio from '../components/ProfessorBio'

// Lazy-load Mol* viewer so the homepage bundle stays lightweight
const MolstarViewer = lazy(() => import('../components/MolstarViewer'))

export default function ViewerPage() {
  const [searchParams] = useSearchParams()
  const inputId = searchParams.get('id') ?? ''

  // ── Viewer state ────────────────────────────────────────────────────────────
  const [colorTheme, setColorTheme] = useState<ColorTheme>('chain-id')
  const [representation, setRepresentation] = useState<RepresentationType>('cartoon')
  const [aspectRatio, setAspectRatio] = useState<CardAspectRatio>('square')

  // ── Protein info ────────────────────────────────────────────────────────────
  const [proteinInfo, setProteinInfo] = useState<ProteinInfo | null>(null)
  const [infoLoading, setInfoLoading] = useState(false)
  const [infoError, setInfoError] = useState('')

  // ── Card export ─────────────────────────────────────────────────────────────
  const [showExport, setShowExport] = useState(false)
  const [viewerLoading, setViewerLoading] = useState(true)
  const [viewerError, setViewerError] = useState('')

  const molstarRef = useRef<MolstarHandle>(null)

  // ── Fetch metadata whenever the ID changes ──────────────────────────────────
  useEffect(() => {
    if (!inputId) return
    setInfoLoading(true)
    setInfoError('')
    setViewerLoading(true)
    setViewerError('')

    resolveProteinInfo(inputId)
      .then(setProteinInfo)
      .catch(e => setInfoError(String(e)))
      .finally(() => setInfoLoading(false))
  }, [inputId])

  // ── No ID supplied — redirect home ──────────────────────────────────────────
  if (!inputId) {
    return <Navigate to="/" replace />
  }

  const structureUrl = proteinInfo?.structureUrl ?? ''
  const isAlphaFold = proteinInfo?.source === 'alphafold'

  async function handleGenerateCard() {
    if (!molstarRef.current || !proteinInfo) return
    setShowExport(true)
  }

  async function getScreenshot(width: number, height: number): Promise<string> {
    if (!molstarRef.current) return ''
    return molstarRef.current.screenshot(width, height)
  }

  return (
    <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden">

      {/* ── Left: 3D viewer ──────────────────────────────────────────────── */}
      <div className="flex-1 relative overflow-hidden">

        {/* Protein header overlay */}
        {proteinInfo && (
          <div className="absolute top-4 left-4 right-64 z-10 pointer-events-none">
            <div className="inline-flex flex-col gap-0.5 max-w-md bg-navy-900/80 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/8">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                  {proteinInfo.id}
                </span>
                {proteinInfo.source === 'alphafold' && (
                  <span className="text-xs text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded">
                    AlphaFold
                  </span>
                )}
              </div>
              <h2 className="text-white font-semibold text-sm leading-snug line-clamp-1">
                {infoLoading ? 'Loading…' : proteinInfo.name}
              </h2>
              <p className="text-white/40 text-xs italic">{proteinInfo.organism}</p>
              {proteinInfo.method && (
                <p className="text-white/30 text-xs">
                  {proteinInfo.method}
                  {proteinInfo.resolution && ` · ${proteinInfo.resolution}`}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Protein not found — full-pane friendly state */}
        {infoError && (
          <div className="absolute inset-0 z-20 overflow-y-auto bg-navy-900/95 backdrop-blur-sm flex items-start justify-center">
            <div className="w-full max-w-xl px-6 py-12 flex flex-col items-center gap-8">
              {/* Error header */}
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-red-400">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="font-mono text-red-400 text-xs tracking-widest uppercase mb-2">
                  Structure Not Found
                </p>
                <h2 className="text-white font-bold text-2xl mb-2">
                  "{inputId}" couldn't be loaded
                </h2>
                <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto">
                  Please verify the PDB ID or UniProt accession and try again.
                  PDB IDs are 4 characters starting with a digit (e.g.&nbsp;5CZR).
                </p>
                <Link
                  to="/"
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/15 text-cyan-400 hover:bg-cyan-500/25 transition-colors text-sm font-medium"
                >
                  ← Back to Home
                </Link>
              </div>

              <div className="w-full h-px bg-white/8" />

              <ProfessorBio />
            </div>
          </div>
        )}

        {viewerError && (
          <div className="absolute bottom-4 left-4 z-10 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
            <p className="text-red-400 text-xs">{viewerError}</p>
          </div>
        )}

        {/* Mol* canvas */}
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center bg-navy-800">
              <div className="text-center">
                <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                <p className="text-cyan-400 text-sm font-mono">Loading Mol*…</p>
              </div>
            </div>
          }
        >
          {structureUrl && (
            <MolstarViewer
              ref={molstarRef}
              structureUrl={structureUrl}
              colorTheme={colorTheme}
              representation={representation}
              background="#0d0d23"
              onLoaded={() => setViewerLoading(false)}
              onError={msg => {
                setViewerError(msg)
                setViewerLoading(false)
              }}
              className="absolute inset-0"
            />
          )}
        </Suspense>

        {/* Keyboard hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <p className="text-white/20 text-xs font-mono hidden sm:block">
            Left-drag: rotate · Scroll: zoom · Right-drag: pan · Dbl-click: reset
          </p>
        </div>
      </div>

      {/* ── Right: control panel ─────────────────────────────────────────── */}
      <div className="w-56 shrink-0">
        <ControlPanel
          colorTheme={colorTheme}
          representation={representation}
          aspectRatio={aspectRatio}
          isAlphaFold={isAlphaFold}
          onColorChange={setColorTheme}
          onReprChange={setRepresentation}
          onAspectRatioChange={setAspectRatio}
          onGenerateCard={handleGenerateCard}
          onResetCamera={() => molstarRef.current?.resetCamera()}
          isLoading={viewerLoading}
        />
      </div>

      {/* ── Export modal ────────────────────────────────────────────────── */}
      {showExport && proteinInfo && (
        <CardExportModal
          screenshotFn={getScreenshot}
          proteinInfo={proteinInfo}
          aspectRatio={aspectRatio}
          onClose={() => setShowExport(false)}
        />
      )}
    </div>
  )
}
