import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="relative bg-navy-950 text-white py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-navy-900 via-navy-950 to-[#000d1f]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 z-0 bg-gradient-to-t from-gray-50 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              <span className="text-white drop-shadow-[0_2px_16px_rgba(255,255,255,0.25)]">Discovering Nature's</span>
              <br className="hidden md:block" />
              <span className="text-cyan-400 drop-shadow-md">Chemical Repertoire</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12 font-light">
              Our lab focuses on discovering novel enzymes, pathways, and mechanisms involved in natural product biosynthesis and bacterial pathogenesis. We leverage genomics, biochemistry, and synthetic biology to awaken cryptic biosynthetic pathways, revealing new enzymatic strategies for building and modifying molecular scaffolds.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/research" className="bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-4 px-10 rounded-lg transition-colors duration-200 shadow-lg shadow-cyan-900/50 text-lg">
                Explore Our Research
              </Link>
              <Link to="/publications" className="bg-navy-900/40 backdrop-blur-md border border-gray-500 hover:border-white text-gray-200 hover:text-white font-medium py-4 px-10 rounded-lg transition-all duration-200 text-lg">
                Recent Publications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PI Introduction */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
            <div className="shrink-0">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-md border border-gray-100">
                <img
                  src="/images/team/pi.jpeg"
                  alt="Prof. Zhao-Xun Liang"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-2">Principal Investigator</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy-900 mb-1 tracking-tight">Zhao-Xun Liang</h2>
              <p className="text-sm text-gray-400 mb-5">
                Professor &amp; Associate Dean (Faculty), College of Science<br />
                School of Biological Sciences, Nanyang Technological University
              </p>
              <p className="text-gray-600 leading-relaxed text-sm max-w-2xl mb-5">
                Prof. Liang's laboratory uses an interdisciplinary approach to study the molecular basis of natural product biosynthesis and bacterial pathogenesis. His group has contributed to advancing our understanding of cyclic dinucleotide signaling and microbial secondary metabolite biosynthesis.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {[
                  { label: 'NTU Profile',    href: 'https://dr.ntu.edu.sg/cris/rp/rp00358' },
                  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=F-DuOAkAAAAJ' },
                  { label: 'ORCID',          href: 'https://orcid.org/0000-0002-3128-1330' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-gray-500 border border-gray-200 hover:border-cyan-500 hover:text-cyan-600 transition-colors px-3 py-1.5 rounded-md"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-2">Research Programme</p>
            <h2 className="text-3xl font-bold text-navy-900">Three Interconnected Areas</h2>
          </div>

          <div className="space-y-5">
            {[
              {
                num: '01',
                id: 'natural-products',
                title: 'Natural Products',
                desc: 'Identifying cryptic biosynthetic gene clusters using genome mining, followed by functional characterization to uncover new enzymes.',
              },
              {
                num: '02',
                id: 'artificial-pathways',
                title: 'Artificial Pathways',
                desc: 'Designing artificial biosynthetic pathways by combining enzymes from different domains to synthesize novel chemical scaffolds.',
              },
              {
                num: '03',
                id: 'cyclic-dinucleotides',
                title: 'Bacterial Pathogenesis',
                desc: 'Investigating cyclic dinucleotides and signaling mechanisms to uncover therapeutic vulnerabilities in pathogenic bacteria.',
              },
            ].map((area) => (
              <div
                key={area.num}
                className="group flex gap-5 items-start bg-white rounded-xl p-7 shadow-sm border border-gray-100 hover:shadow-md hover:border-cyan-100 transition-all duration-300"
              >
                <span className="text-4xl font-extrabold text-gray-100 group-hover:text-cyan-100 transition-colors leading-none select-none shrink-0 w-12 text-right pt-0.5">
                  {area.num}
                </span>
                <div className="w-0.5 self-stretch bg-gray-100 group-hover:bg-cyan-500 transition-colors duration-300 shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-navy-900 mb-2">{area.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{area.desc}</p>
                  <Link
                    to={`/research#${area.id}`}
                    className="text-cyan-600 font-semibold text-xs uppercase tracking-wide hover:text-cyan-800 transition-colors"
                  >
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
