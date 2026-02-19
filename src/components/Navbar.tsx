import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  // Clean, academic style navbar
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <Link to="/" className="text-xl font-bold text-navy-900 tracking-tight hover:text-cyan-700 transition-colors">
          Liang Lab <span className="text-gray-400 font-normal text-sm ml-2">NTU Singapore</span>
        </Link>

        {/* Global Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/join">Join Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <div className="h-4 w-px bg-gray-300 mx-2"></div>

          <Link to="/tools" className="flex items-center gap-1 text-cyan-600 hover:text-cyan-800 transition-colors">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10 1c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zM8 7.25a.75.75 0 011.5 0v2.5h2.5a.75.75 0 010 1.5h-2.5v2.5a.75.75 0 01-1.5 0v-2.5h-2.5a.75.75 0 010-1.5h2.5v-2.5z" clipRule="evenodd" />
            </svg>
            Tools
          </Link>
        </nav>

        {/* Mobile menu placeholder (simplified) */}
        <div className="md:hidden">
          <Link to="/tools" className="text-cyan-600 font-medium text-sm">Tools</Link>
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
        transition-colors hover:text-cyan-700
        ${active ? 'text-cyan-700 font-bold' : ''}
      `}
    >
      {children}
    </Link>
  )
}
