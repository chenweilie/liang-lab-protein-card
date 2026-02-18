import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = query.trim()
    if (!trimmed) return
    navigate(`/viewer?id=${encodeURIComponent(trimmed)}`)
    setQuery('')
  }

  const isOnViewer = location.pathname.startsWith('/viewer') || location.pathname.startsWith('/compare')

  return (
    <header className="sticky top-0 z-40 h-14 flex items-center gap-4 px-5 bg-navy-900/90 backdrop-blur-md border-b border-white/8">

      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 shrink-0 group"
      >
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
          <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
            <circle cx="10" cy="7" r="4" stroke="white" strokeWidth="1.5"/>
            <circle cx="5" cy="15" r="3" stroke="white" strokeWidth="1.5"/>
            <circle cx="15" cy="15" r="3" stroke="white" strokeWidth="1.5"/>
            <line x1="10" y1="11" x2="5" y2="12.4" stroke="white" strokeWidth="1.2"/>
            <line x1="10" y1="11" x2="15" y2="12.4" stroke="white" strokeWidth="1.2"/>
          </svg>
        </div>
        <span className="font-semibold text-white text-sm group-hover:text-cyan-400 transition-colors">
          Liang Lab
          <span className="text-white/40 font-normal ml-1">Protein Card</span>
        </span>
      </Link>

      {/* Search bar */}
      <form onSubmit={handleSearch} className="flex-1 max-w-sm">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="PDB ID or UniProt ID…"
            className="
              w-full h-8 pl-3 pr-10 rounded-lg text-sm
              bg-navy-700/95 border border-white/20
              text-white placeholder-white/55 caret-cyan-300
              focus:outline-none focus:ring-1 focus:ring-cyan-500/70 focus:border-cyan-500/70
              transition-colors
            "
          style={{ colorScheme: 'dark' }}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/30 hover:text-cyan-400 transition-colors"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </form>

      {/* Nav links */}
      <nav className="hidden sm:flex items-center gap-1 ml-auto">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/compare">Compare</NavLink>
      </nav>

    </header>
  )
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation()
  const active = location.pathname === to || (to !== '/' && location.pathname.startsWith(to))
  return (
    <Link
      to={to}
      className={`
        px-3 py-1.5 rounded-md text-sm transition-colors
        ${active
          ? 'bg-cyan-500/15 text-cyan-400'
          : 'text-white/50 hover:text-white/80 hover:bg-white/5'}
      `}
    >
      {children}
    </Link>
  )
}
