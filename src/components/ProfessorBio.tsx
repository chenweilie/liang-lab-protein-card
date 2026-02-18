/**
 * Reusable professor profile card for Prof. Liang Zhao-Xun.
 * Used in the 404 page and the "protein not found" error state.
 */
export default function ProfessorBio() {
  const tags = [
    'c-di-GMP Signaling',
    'Structural Biology',
    'Biofilm & Virulence',
    'Synthetic Biology',
    'Natural Products',
  ]

  return (
    <div className="w-full bg-navy-800/60 border border-white/8 rounded-2xl p-6 sm:p-8">
      <p className="text-xs uppercase tracking-widest text-white/30 font-mono mb-5">
        About the Lab
      </p>

      <div className="flex flex-col sm:flex-row gap-5">
        {/* Avatar */}
        <div className="w-24 h-24 shrink-0 rounded-2xl bg-navy-700 border border-cyan-500/20 overflow-hidden">
          <img
            src="/liang-zhao-xun.png"
            alt="Professor Liang Zhao-Xun"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-2 min-w-0">
          <div>
            <h2 className="text-white font-bold text-xl leading-tight">Liang Zhao-Xun</h2>
            <p className="text-cyan-400 text-sm">Associate Professor</p>
            <p className="text-white/40 text-sm">School of Biological Sciences, Nanyang Technological University</p>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mt-1">
            Prof. Liang's laboratory investigates the biochemistry and structural biology of bacterial
            second messengers, with a focus on cyclic di-GMP (c-di-GMP). His team employs
            X-ray crystallography, cryo-EM, and biochemical approaches to uncover how c-di-GMP
            controls biofilm formation, motility, and virulence in pathogens such as{' '}
            <em className="text-white/75">Pseudomonas aeruginosa</em> and{' '}
            <em className="text-white/75">Vibrio cholerae</em>. Current research also extends
            into synthetic biology and the biosynthesis of natural products.
          </p>

          <div className="flex flex-wrap gap-1.5 mt-2">
            {tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
