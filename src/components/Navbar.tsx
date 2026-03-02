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
        </nav>

        {/* Mobile menu placeholder (simplified) */}
        <div className="md:hidden flex items-center gap-4">
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
