import PresetGrid from '../components/PresetGrid'

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <main className="max-w-7xl mx-auto px-5 py-10">

        {/* Hero */}
        <div className="mb-10 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
            Protein Structure{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Card Generator
            </span>
          </h1>
          <p className="text-white/50 text-base leading-relaxed">
            Render and share beautiful protein structure cards — for group meetings,
            publications, and social media. Built for{' '}
            <span className="text-white/70">Liang Lab</span>, School of Biological Sciences, NTU.
          </p>
        </div>

        {/* Section label */}
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-xs uppercase tracking-widest text-white/40 font-mono">
            Lab proteins
          </h2>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <PresetGrid />

      </main>
    </div>
  )
}
