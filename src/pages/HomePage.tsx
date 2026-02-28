import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900 via-navy-900 to-navy-950"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Discovering Nature's <br className="hidden md:block" />
            <span className="text-cyan-400">Chemical Repertoire</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-10">
            Our lab focuses on discovering novel enzymes, pathways, and mechanisms involved in natural product biosynthesis and bacterial pathogenesis. We leverage genomics, biochemistry, and synthetic biology to awaken cryptic biosynthetic pathways, revealing new enzymatic strategies for building and modifying molecular scaffolds.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/research" className="bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-3 px-8 rounded transition-colors duration-200">
              Explore Our Research
            </Link>
            <Link to="/publications" className="bg-transparent border border-gray-500 hover:border-white text-gray-300 hover:text-white font-medium py-3 px-8 rounded transition-all duration-200">
              Recent Publications
            </Link>
          </div>
        </div>
      </section>

      {/* Research Areas / Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Research Focus</h2>
            <div className="h-1 w-20 bg-cyan-600 mx-auto rounded"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-navy-900 mb-3">Natural Products</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Identifying cryptic biosynthetic gene clusters using genome mining, followed by functional characterization to uncover new enzymes.
              </p>
              <Link to="/research" className="text-cyan-600 font-semibold text-sm hover:text-cyan-800 flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <span>&rarr;</span>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-navy-900 mb-3">Artificial Pathways</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Designing artificial biosynthetic pathways by combining enzymes from different domains to synthesize novel chemical scaffolds.
              </p>
              <Link to="/research" className="text-cyan-600 font-semibold text-sm hover:text-cyan-800 flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <span>&rarr;</span>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-navy-900 mb-3">Bacterial Pathogenesis</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Investigating cyclic dinucleotides and signaling mechanisms to uncover therapeutic vulnerabilities in pathogenic bacteria.
              </p>
              <Link to="/research" className="text-cyan-600 font-semibold text-sm hover:text-cyan-800 flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn More <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer (Used across non-profile layouts) */}
      <footer className="bg-navy-950 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold text-lg tracking-tight mb-2">Zhao-Xun Liang Group</h4>
              <p className="text-sm">School of Biological Sciences<br />Nanyang Technological University, Singapore</p>
            </div>
            <div className="text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Liang Lab. All rights reserved.</p>
              <div className="flex justify-center md:justify-end gap-4 mt-2">
                <a href="https://dr.ntu.edu.sg/entities/person/Liang-Zhao-Xun" className="hover:text-cyan-400 transition-colors">NTU Directory</a>
                <a href="https://scholar.google.com/citations?user=F-DuOAkAAAAJ" className="hover:text-cyan-400 transition-colors">Google Scholar</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
