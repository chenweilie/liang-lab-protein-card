/**
 * MolstarViewer — wraps the Mol* plugin for protein 3D rendering.
 *
 * Strategy:
 *  - createPluginUI with all default panels hidden (we build our own UI)
 *  - Imperative API exposed via forwardRef + useImperativeHandle
 *  - Lazy-import of Mol* so the homepage bundle stays small
 */
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import type { ColorTheme, RepresentationType } from '../types'

// ─── Public handle ────────────────────────────────────────────────────────────

export interface MolstarHandle {
  /** Capture current canvas as PNG data-URL at given dimensions */
  screenshot(width: number, height: number): Promise<string>
  /** Reset camera to default view */
  resetCamera(): void
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface MolstarViewerProps {
  structureUrl: string
  colorTheme: ColorTheme
  representation: RepresentationType
  /** Background colour for the 3D canvas (hex string) */
  background?: string
  onLoaded?(): void
  onError?(msg: string): void
  className?: string
}

// ─── Internal Mol* types (avoid importing full type graph) ───────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyPlugin = any

function getStructureComponents(plugin: AnyPlugin): AnyPlugin[] {
  const structures = plugin.managers.structure.hierarchy.current.structures ?? []
  return structures.flatMap((s: AnyPlugin) =>
    Array.isArray(s?.components) ? s.components.filter(Boolean) : [],
  )
}

// ─── Helper: apply colour theme to all representations ───────────────────────

async function applyColorTheme(plugin: AnyPlugin, theme: ColorTheme) {
  const components = getStructureComponents(plugin)
  if (!components.length) return
  await plugin.managers.structure.component.updateRepresentationsTheme(components, {
    color: theme,
  })
}

// ─── Helper: rebuild representations ─────────────────────────────────────────

const REPR_TO_MOLSTAR: Record<RepresentationType, string> = {
  cartoon:          'cartoon',
  'gaussian-surface': 'gaussian-surface',
  'ball-and-stick': 'ball-and-stick',
  ribbon:           'backbone',   // Mol* uses "backbone" for ribbon-like
}

async function applyRepresentation(
  plugin: AnyPlugin,
  repr: RepresentationType,
  colorTheme: ColorTheme,
) {
  const components = getStructureComponents(plugin)
  if (!components.length) return

  const componentManager = plugin.managers.structure.component
  const reprType = REPR_TO_MOLSTAR[repr]

  // Rebuild representation type for all current components, then re-apply color theme.
  await componentManager.removeRepresentations(components)
  await componentManager.addRepresentation(components, reprType)
  await componentManager.updateRepresentationsTheme(components, { color: colorTheme })
}

// ─── Component ────────────────────────────────────────────────────────────────

const MolstarViewer = forwardRef<MolstarHandle, MolstarViewerProps>(
  function MolstarViewer(
    {
      structureUrl,
      colorTheme,
      representation,
      background = '#0d0d23',
      onLoaded,
      onError,
      className = '',
    },
    ref,
  ) {
    const containerRef = useRef<HTMLDivElement>(null)
    const pluginRef = useRef<AnyPlugin | null>(null)
    const loadedUrlRef = useRef<string>('')
    const [isReady, setIsReady] = useState(false)

    // ── Expose imperative handle ──────────────────────────────────────────────
    useImperativeHandle(ref, () => ({
      async screenshot(width: number, height: number): Promise<string> {
        const plugin = pluginRef.current
        if (!plugin) return ''

        // Try Mol* screenshot helper first
        try {
          const helper = plugin.helpers?.viewportScreenshot
          if (helper) {
            return (await helper.getImageDataUri({ width, height, transparent: false })) as string
          }
        } catch {
          // fall through
        }

        // Fallback: grab the WebGL canvas directly
        const canvas = plugin.canvas3d?.webgl?.gl?.canvas as HTMLCanvasElement | undefined
        if (canvas) return canvas.toDataURL('image/png')

        return ''
      },
      resetCamera() {
        pluginRef.current?.managers.camera.reset()
      },
    }))

    // ── Initialise plugin once ────────────────────────────────────────────────
    useEffect(() => {
      if (!containerRef.current) return
      let disposed = false

      ;(async () => {
        try {
          // Dynamic import keeps Mol* out of the initial bundle
          const { createPluginUI } = await import('molstar/lib/mol-plugin-ui')
          const { DefaultPluginUISpec } = await import('molstar/lib/mol-plugin-ui/spec')
          const { renderReact18 } = await import('molstar/lib/mol-plugin-ui/react18')
          // @ts-expect-error — Mol* ships SCSS only; Vite+sass handles the import
          await import('molstar/lib/mol-plugin-ui/skin/dark.scss')

          if (disposed || !containerRef.current) return

          const plugin = await createPluginUI({
            target: containerRef.current,
            render: renderReact18,
            spec: {
              ...DefaultPluginUISpec(),
              layout: {
                initial: {
                  isExpanded: false,
                  showControls: false,
                  regionState: {
                    top: 'hidden',
                    left: 'hidden',
                    right: 'hidden',
                    bottom: 'hidden',
                  },
                },
              },
              components: {
                remoteState: 'none',
              },
            },
          })

          if (disposed) {
            plugin.dispose()
            return
          }

          // Set background colour using Mol*'s Color branded type
          if (plugin.canvas3d) {
            const { Color } = await import('molstar/lib/mol-util/color')
            const bg = Color.fromHexStyle(background)
            plugin.canvas3d.setProps({ renderer: { backgroundColor: bg } })
          }

          pluginRef.current = plugin
          setIsReady(true)
        } catch (err) {
          onError?.(String(err))
        }
      })()

      return () => {
        disposed = true
        pluginRef.current?.dispose()
        pluginRef.current = null
        setIsReady(false)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // ── Load / reload structure when URL changes ──────────────────────────────
    useEffect(() => {
      if (!isReady || !pluginRef.current || !structureUrl) return
      if (loadedUrlRef.current === structureUrl) return

      const plugin = pluginRef.current
      loadedUrlRef.current = structureUrl

      ;(async () => {
        try {
          await plugin.clear()

          const data = await plugin.builders.data.download(
            { url: structureUrl, isBinary: false },
            { state: { isGhost: true } },
          )

          const format = structureUrl.endsWith('.pdb') ? 'pdb' : 'mmcif'
          const trajectory = await plugin.builders.structure.parseTrajectory(data, format)
          await plugin.builders.structure.hierarchy.applyPreset(trajectory, 'default')

          // After loading, apply chosen representation and color.
          await applyRepresentation(plugin, representation, colorTheme)
          onLoaded?.()
        } catch (err) {
          onError?.(String(err))
        }
      })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReady, structureUrl])

    // ── Update colour theme ───────────────────────────────────────────────────
    useEffect(() => {
      if (!isReady || !pluginRef.current) return
      applyColorTheme(pluginRef.current, colorTheme).catch(console.error)
    }, [isReady, colorTheme])

    // ── Update representation ─────────────────────────────────────────────────
    useEffect(() => {
      if (!isReady || !pluginRef.current) return
      applyRepresentation(pluginRef.current, representation, colorTheme).catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReady, representation])

    return (
      <div className={`relative w-full h-full ${className}`}>
        {/* Mol* mounts its own React root inside this div */}
        <div
          ref={containerRef}
          className="w-full h-full"
          style={{ background }}
        />
        {/* Loading overlay */}
        {!isReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-800">
            <div className="text-center">
              <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-cyan-400 text-sm font-mono">Loading viewer…</p>
            </div>
          </div>
        )}
      </div>
    )
  },
)

export default MolstarViewer
