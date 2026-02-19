
import ProfileLayout from '../layouts/ProfileLayout';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Since ProfileLayout includes Navbar, we use it as a wrapper in App.tsx or directly here. 
          Actually, the plan said "Implement ProfileLayout in HomePage". 
          But ProfileLayout has Navbar, so we should replace the main structure.
      */}
      <ProfileLayout>
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-navy-900 mb-6">Zhaoxun Liang Group</h1>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Our lab focuses on discovering novel enzymes, pathways, and mechanisms involved in natural product biosynthesis and bacterial pathogenesis. We leverage genomics, biochemistry, and synthetic biology to awaken cryptic biosynthetic pathways, revealing new enzymatic strategies for building and modifying molecular scaffolds.
            </p>
            <p>
              Building on nature's biosynthetic diversity, we also strive to engineer microbes to produce "unnatural" natural products. With powerful DNA synthesis and genome editing tools, we redesign entire pathways by combining enzymes from different systems or creating entirely new biochemical routes. This synthetic biology approach will expand nature's chemical repertoire for drug discovery applications.
            </p>
            <p>
              Another focus of our research examines cyclic dinucleotides, key signaling molecules that regulate critical bacterial processes. By elucidating these signaling pathways, we seek to uncover novel therapeutic targets for disrupting pathogenic infections, aiming to develop innovative antimicrobial and biofilm-disrupting strategies.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 border-b border-gray-200 pb-2">Research Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-cyan-700 mb-2">Synthetic Biology</h3>
              <p className="text-gray-600 text-sm">
                Engineering microbes to produce "unnatural" natural products and expanding nature's chemical repertoire.
              </p>
              <Link to="/research" className="text-xs font-bold text-gray-500 uppercase mt-4 block hover:text-cyan-700">Learn More &rarr;</Link>
            </div>
            <div className="border border-gray-200 rounded p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-cyan-700 mb-2">Enzyme Biotechnology</h3>
              <p className="text-gray-600 text-sm">
                Discovering and characterizing novel enzymatic strategies for building and modifying molecular scaffolds.
              </p>
              <Link to="/research" className="text-xs font-bold text-gray-500 uppercase mt-4 block hover:text-cyan-700">Learn More &rarr;</Link>
            </div>
            <div className="border border-gray-200 rounded p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-cyan-700 mb-2">Natural Product Biosynthesis</h3>
              <p className="text-gray-600 text-sm">
                Awakening cryptic biosynthetic pathways to discover novel compounds.
              </p>
              <Link to="/research" className="text-xs font-bold text-gray-500 uppercase mt-4 block hover:text-cyan-700">Learn More &rarr;</Link>
            </div>
            <div className="border border-gray-200 rounded p-6 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-cyan-700 mb-2">Biosynthetic Mechanism</h3>
              <p className="text-gray-600 text-sm">
                Elucidating mechanisms of enzymes and signaling pathways to uncover therapeutic targets.
              </p>
              <Link to="/research" className="text-xs font-bold text-gray-500 uppercase mt-4 block hover:text-cyan-700">Learn More &rarr;</Link>
            </div>
          </div>
        </section>

      </ProfileLayout>
    </div>
  );
}
