import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PRESET_PROTEINS } from '../data/presets'

const ORGANISM_ABBREV: Record<string, string> = {
  'Pseudomonas aeruginosa': 'P. aeruginosa',
  'Homo sapiens': 'H. sapiens',
  'Vibrio cholerae': 'V. cholerae',
  'Caulobacter crescentus': 'C. crescentus',
}

/** Deterministic "hue" per protein — for subtle accent colour variety */
const CARD_ACCENTS = [
  'from-cyan-500/20 to-blue-600/10',
  'from-blue-500/20 to-indigo-600/10',
  'from-teal-500/20 to-cyan-600/10',
  'from-sky-500/20 to-blue-700/10',
  'from-violet-500/20 to-blue-600/10',
]

export default function PresetGrid() {
  const navigate = useNavigate()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {PRESET_PROTEINS.map((protein, i) => {
        const accent = CARD_ACCENTS[i % CARD_ACCENTS.length]
        const orgShort = ORGANISM_ABBREV[protein.organism] ?? protein.organism

        return (
          <button
            key={protein.pdbId}
            onClick={() => navigate(`/viewer?id=${protein.pdbId}`)}
            className={`
              group text-left rounded-2xl border border-white/8
              bg-gradient-to-br ${accent} backdrop-blur-sm
              p-5 transition-all duration-200
              hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10
              hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-cyan-500/40
            `}
          >
            {/* PDB badge */}
            <div className="flex items-start justify-between mb-3">
              <span className="font-mono text-xs px-2 py-0.5 rounded-md bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                {protein.pdbId}
              </span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="w-4 h-4 text-white/20 group-hover:text-cyan-400 transition-colors mt-0.5"
              >
                <path d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" fill="currentColor"/>
                <path d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" fill="currentColor"/>
              </svg>
            </div>

            {/* Name */}
            <h3 className="font-semibold text-white text-sm leading-snug mb-1.5 group-hover:text-cyan-50 transition-colors">
              {protein.displayName}
            </h3>

            {/* Organism */}
            <p className="text-xs text-white/40 italic mb-2">{orgShort}</p>

            {/* Description */}
            <p className="text-xs text-white/50 leading-relaxed line-clamp-3">
              {protein.description}
            </p>
          </button>
        )
      })}

      {/* "Load custom" card */}
      <SearchCard />
    </div>
  )
}

function SearchCard() {
  const navigate = useNavigate()
  const [id, setId] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const t = id.trim()
    if (!t) return
    navigate(`/viewer?id=${encodeURIComponent(t)}`)
  }

  return (
    <div className="rounded-2xl border border-dashed border-white/15 p-5 flex flex-col gap-3">
      <p className="text-white/40 text-xs font-mono uppercase tracking-widest">Custom</p>
      <p className="text-white/60 text-sm">Enter any PDB ID or UniProt accession</p>
      <form onSubmit={handleSubmit} className="mt-auto flex gap-2">
        <input
          value={id}
          onChange={e => setId(e.target.value)}
          placeholder="e.g. 1TIM or P00533"
          className="
            flex-1 h-8 px-3 rounded-lg text-sm
            bg-navy-700/95 border border-white/20
            text-white placeholder-white/55 caret-cyan-300
            focus:outline-none focus:ring-1 focus:ring-cyan-500/70 focus:border-cyan-500/70
          "
          style={{ colorScheme: 'dark' }}
        />
        <button
          type="submit"
          className="h-8 px-3 rounded-lg bg-cyan-500/20 text-cyan-400 text-sm hover:bg-cyan-500/30 transition-colors border border-cyan-500/30"
        >
          Go
        </button>
      </form>
    </div>
  )
}
