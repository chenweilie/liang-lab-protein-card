export default function AboutPage() {
  return (
    <div className="min-h-screen bg-navy-900 text-white">
      <main className="max-w-5xl mx-auto px-5 py-10">
        <section className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-cyan-400/80 font-mono mb-3">
            About Us
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Liang Lab Protein Card
          </h1>
          <p className="text-white/60 leading-relaxed">
            This platform is built for the Liang Lab at NTU to turn protein structures into
            publication-ready or presentation-ready visual cards. It combines structural
            exploration and fast export in one workflow.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-white font-semibold mb-2">What it does</h2>
            <ul className="text-white/60 text-sm leading-relaxed space-y-1">
              <li>Load structures from PDB IDs or UniProt accessions.</li>
              <li>View proteins interactively with multiple styles and color modes.</li>
              <li>Export polished cards in multiple aspect ratios for slides, social, and paper.</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-white font-semibold mb-2">Why we built it</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Lab members often need consistent, high-quality structure visuals for meetings,
              manuscripts, and outreach. This tool standardizes output while keeping day-to-day use
              simple and fast.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:col-span-2">
            <h2 className="text-white font-semibold mb-2">Background and stack</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              The project is developed around Mol* for molecular visualization, React for UI
              interaction, and Cloudflare Pages for deployment. It is tailored to Liang Lab research
              communication, especially c-di-GMP related structural biology work.
            </p>
          </article>
        </section>
      </main>
    </div>
  )
}
