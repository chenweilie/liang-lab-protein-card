import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ViewerPage from './pages/ViewerPage'
import ComparePage from './pages/ComparePage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/viewer" element={<ViewerPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
