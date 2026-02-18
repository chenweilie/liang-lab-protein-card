import { Link } from 'react-router-dom'
import ProfessorBio from '../components/ProfessorBio'

export default function NotFoundPage() {
  return (
    <main className="max-w-2xl mx-auto px-5 py-16 flex flex-col items-center">

      {/* 404 headline */}
      <div className="text-center mb-10">
        <p className="font-mono text-cyan-400 text-xs tracking-widest uppercase mb-3">
          Error 404
        </p>
        <h1 className="text-4xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-white/40 text-base max-w-sm mx-auto leading-relaxed">
          The page you're looking for doesn't exist.
          Try searching for a PDB ID or UniProt accession from the search bar.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500/15 text-cyan-400 hover:bg-cyan-500/25 transition-colors text-sm font-medium"
        >
          ← Back to Home
        </Link>
      </div>

      <div className="w-full h-px bg-white/8 mb-10" />

      <ProfessorBio />

    </main>
  )
}
