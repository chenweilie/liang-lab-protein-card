import { useEffect, useRef, useState } from 'react'
import type { ProteinInfo, CardExportOptions } from '../types'
import { buildCard } from '../utils/cardExport'

interface Props {
  screenshotFn: (width: number, height: number) => Promise<string>
  proteinInfo: ProteinInfo
  exportOptions: CardExportOptions
  onClose(): void
}

export default function CardExportModal({
  screenshotFn,
  proteinInfo,
  exportOptions,
  onClose,
}: Props) {
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const [isBuilding, setIsBuilding] = useState(true)
  const [error, setError] = useState('')
  const previewRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    ;(async () => {
      try {
        setIsBuilding(true)
        setError('')

        // Get 3D screenshot from Mol*
        const { width, height } = getViewerDims(exportOptions)
        const raw3d = await screenshotFn(width, height)

        if (!raw3d) throw new Error('Failed to capture 3D view — please try again.')

        // Composite card
        const cardUrl = await buildCard(raw3d, proteinInfo, exportOptions)
        setPreviewUrl(cardUrl)
      } catch (e) {
        setError(String(e))
      } finally {
        setIsBuilding(false)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleDownload() {
    if (!previewUrl) return
    const a = document.createElement('a')
    a.href = previewUrl
    a.download = `${proteinInfo.id}_LiangLab.png`
    a.click()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-navy-800 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h2 className="text-white font-semibold">Export Card</h2>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-white/80 transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          {isBuilding && (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              <p className="text-white/50 text-sm">Compositing card…</p>
            </div>
          )}

          {error && !isBuilding && (
            <div className="text-red-400 text-sm bg-red-500/10 rounded-lg p-4">
              {error}
            </div>
          )}

          {previewUrl && !isBuilding && (
            <div className="space-y-4">
              <img
                ref={previewRef}
                src={previewUrl}
                alt="Card preview"
                className="w-full rounded-xl border border-white/10 shadow-lg"
              />
              <div className="flex gap-3">
                <button
                  onClick={handleDownload}
                  className="
                    flex-1 py-2.5 rounded-lg font-semibold text-sm
                    bg-gradient-to-r from-cyan-500 to-blue-600
                    hover:from-cyan-400 hover:to-blue-500
                    text-white shadow-lg shadow-cyan-500/20
                    transition-all duration-150
                  "
                >
                  Download PNG
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-lg border border-white/10 text-white/60 text-sm hover:bg-white/5 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/** Compute viewer screenshot dimensions for a given aspect ratio */
function getViewerDims(options: CardExportOptions): { width: number; height: number } {
  const ratio = options.aspectRatio
  const base = ratio === 'widescreen'
    ? { width: 1920, height: 1080 }
    : ratio === 'portrait'
      ? { width: 1240, height: 1754 }
      : { width: 1200, height: 1200 }
  const scale = options.resolution === 'hd' ? 2 : 1
  return { width: base.width * scale, height: base.height * scale }
}
