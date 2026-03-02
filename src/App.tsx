import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ResearchPage from './pages/ResearchPage'
import PublicationsPage from './pages/PublicationsPage'
import TeamPage from './pages/TeamPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import ToolsPage from './pages/ToolsPage'
import ViewerPage from './pages/ViewerPage'
import ComparePage from './pages/ComparePage'
import NotFoundPage from './pages/NotFoundPage'
import '@fontsource/inter';

export default function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/viewer" element={<ViewerPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {location.pathname !== '/research' && <Footer />}
    </div>
  )
}
