import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  // Premium, academic style navbar inspired by Silverman Group
  return (
    <header className="bg-navy-900 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="text-xl font-bold tracking-tight hover:text-cyan-400 transition-colors flex items-center gap-3">
          <span>Liang Lab</span>
          <span className="hidden sm:inline-block text-cyan-500 font-normal text-sm border-l border-gray-600 pl-3">NTU Singapore</span>
        </Link>

        {/* Global Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <div className="h-4 w-px bg-gray-600 mx-1"></div>

          <Link to="/tools" className="flex items-center gap-1.5 text-cyan-400 hover:text-white transition-colors">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zM8 7.25a.75.75 0 011.5 0v2.5h2.5a.75.75 0 010 1.5h-2.5v2.5a.75.75 0 01-1.5 0v-2.5h-2.5a.75.75 0 010-1.5h2.5v-2.5z" clipRule="evenodd" />
            </svg>
            Tools
          </Link>
        </nav>

        {/* Mobile menu placeholder (simplified) */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/tools" className="text-cyan-400 font-medium text-sm">Tools</Link>
          <button className="text-white hover:text-cyan-400">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
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
        transition-colors hover:text-cyan-400 relative py-2
        ${active ? 'text-white font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400' : 'text-gray-300'}
      `}
    >
      {children}
    </Link>
  )
}
