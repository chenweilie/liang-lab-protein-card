import type {
  ColorTheme,
  RepresentationType,
  CardAspectRatio,
  CardThemeMode,
  CardResolution,
} from '../types'

interface ControlPanelProps {
  colorTheme: ColorTheme
  representation: RepresentationType
  aspectRatio: CardAspectRatio
  cardTheme: CardThemeMode
  cardResolution: CardResolution
  includeDetails: boolean
  isAlphaFold: boolean
  onColorChange(t: ColorTheme): void
  onReprChange(r: RepresentationType): void
  onAspectRatioChange(a: CardAspectRatio): void
  onCardThemeChange(t: CardThemeMode): void
  onCardResolutionChange(r: CardResolution): void
  onIncludeDetailsChange(v: boolean): void
  onGenerateCard(): void
  onResetCamera(): void
  isLoading: boolean
}

const COLOR_OPTIONS: { value: ColorTheme; label: string; note?: string }[] = [
  { value: 'chain-id',           label: 'By Chain' },
  { value: 'plddt-confidence',   label: 'By pLDDT',          note: 'AlphaFold only' },
  { value: 'secondary-structure', label: 'Secondary Structure' },
  { value: 'uncertainty',        label: 'By B-factor',       note: 'Exp. only' },
  { value: 'hydrophobicity',     label: 'Hydrophobicity' },
  { value: 'uniform',            label: 'Uniform' },
]

const REPR_OPTIONS: { value: RepresentationType; label: string }[] = [
  { value: 'cartoon',           label: 'Cartoon' },
  { value: 'gaussian-surface',  label: 'Surface' },
  { value: 'ball-and-stick',    label: 'Ball & Stick' },
  { value: 'ribbon',            label: 'Ribbon' },
]

const ASPECT_OPTIONS: { value: CardAspectRatio; label: string; sub: string }[] = [
  { value: 'square',     label: '1 : 1',   sub: 'Social media' },
  { value: 'widescreen', label: '16 : 9',  sub: 'Presentation' },
  { value: 'portrait',   label: 'A4',      sub: 'Paper figure' },
]

const CARD_THEME_OPTIONS: { value: CardThemeMode; label: string; sub: string }[] = [
  { value: 'dark', label: 'Dark', sub: 'Slides / social' },
  { value: 'light', label: 'Light', sub: 'Paper friendly' },
]

const CARD_RESOLUTION_OPTIONS: { value: CardResolution; label: string; sub: string }[] = [
  { value: 'standard', label: 'Standard', sub: 'Faster export' },
  { value: 'hd', label: 'HD', sub: '2x resolution' },
]

export default function ControlPanel({
  colorTheme,
  representation,
  aspectRatio,
  cardTheme,
  cardResolution,
  includeDetails,
  isAlphaFold,
  onColorChange,
  onReprChange,
  onAspectRatioChange,
  onCardThemeChange,
  onCardResolutionChange,
  onIncludeDetailsChange,
  onGenerateCard,
  onResetCamera,
  isLoading,
}: ControlPanelProps) {
  return (
    <aside className="flex flex-col gap-6 p-5 bg-navy-800 border-l border-white/10 overflow-y-auto">

      {/* ── Colour theme ─────────────────────────────────────────── */}
      <section>
        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-3">
          Colour mode
        </h3>
        <div className="flex flex-col gap-1">
          {COLOR_OPTIONS.map(({ value, label, note }) => {
            const disabled =
              (value === 'plddt-confidence' && !isAlphaFold) ||
              (value === 'uncertainty' && isAlphaFold)
            return (
              <button
                key={value}
                disabled={disabled}
                onClick={() => onColorChange(value)}
                className={`
                  flex items-center justify-between px-3 py-2 rounded-lg text-sm
                  transition-colors duration-150
                  ${colorTheme === value
                    ? 'bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/50'
                    : disabled
                      ? 'text-white/20 cursor-not-allowed'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'}
                `}
              >
                <span>{label}</span>
                {note && (
                  <span className="text-xs opacity-50">{note}</span>
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* ── Representation ───────────────────────────────────────── */}
      <section>
        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-3">
          Style
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {REPR_OPTIONS.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => onReprChange(value)}
              className={`
                px-3 py-2 rounded-lg text-sm text-center transition-colors duration-150
                ${representation === value
                  ? 'bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/50'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'}
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* ── Export aspect ratio ──────────────────────────────────── */}
      <section>
        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-3">
          Card format
        </h3>
        <div className="flex flex-col gap-1">
          {ASPECT_OPTIONS.map(({ value, label, sub }) => (
            <button
              key={value}
              onClick={() => onAspectRatioChange(value)}
              className={`
                flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors duration-150
                ${aspectRatio === value
                  ? 'bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/50'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'}
              `}
            >
              <span className="font-mono w-12 shrink-0">{label}</span>
              <span className="text-xs opacity-60">{sub}</span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-3">
          Card theme
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {CARD_THEME_OPTIONS.map(({ value, label, sub }) => (
            <button
              key={value}
              onClick={() => onCardThemeChange(value)}
              className={`
                px-3 py-2 rounded-lg text-sm transition-colors duration-150 text-left
                ${cardTheme === value
                  ? 'bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/50'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'}
              `}
            >
              <div>{label}</div>
              <div className="text-xs opacity-60">{sub}</div>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-3">
          Resolution
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {CARD_RESOLUTION_OPTIONS.map(({ value, label, sub }) => (
            <button
              key={value}
              onClick={() => onCardResolutionChange(value)}
              className={`
                px-3 py-2 rounded-lg text-sm transition-colors duration-150 text-left
                ${cardResolution === value
                  ? 'bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/50'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'}
              `}
            >
              <div>{label}</div>
              <div className="text-xs opacity-60">{sub}</div>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-xs uppercase tracking-widest text-white/40 mb-3">
          Export content
        </h3>
        <label className="flex items-center justify-between px-3 py-2 rounded-lg border border-white/10">
          <span className="text-sm text-white/70">Show details</span>
          <input
            type="checkbox"
            checked={includeDetails}
            onChange={e => onIncludeDetailsChange(e.target.checked)}
            className="accent-cyan-500"
          />
        </label>
        <p className="mt-2 text-xs text-white/35">
          Liang Lab branding is always included.
        </p>
      </section>

      {/* ── Actions ──────────────────────────────────────────────── */}
      <div className="mt-auto flex flex-col gap-2">
        <button
          onClick={onResetCamera}
          className="w-full px-4 py-2 rounded-lg border border-white/10 text-white/60 text-sm hover:bg-white/5 transition-colors"
        >
          Reset view
        </button>
        <button
          onClick={onGenerateCard}
          disabled={isLoading}
          className="
            w-full px-4 py-2.5 rounded-lg font-semibold text-sm
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:from-cyan-400 hover:to-blue-500
            text-white shadow-lg shadow-cyan-500/20
            disabled:opacity-40 disabled:cursor-not-allowed
            transition-all duration-150
          "
        >
          {isLoading ? 'Generating…' : 'Generate Card'}
        </button>
      </div>

    </aside>
  )
}
