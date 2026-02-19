
import ProfileLayout from '../layouts/ProfileLayout';

export default function ResearchPage() {
    return (
        <ProfileLayout>
            <h1 className="text-3xl font-bold text-navy-900 mb-8 pb-4 border-b border-gray-200">Research Focus</h1>

            <div className="space-y-12">

                {/* Area 1 */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-cyan-700">Natural Product Biosynthesis & Enzyme Discovery</h2>
                    <div className="flex flex-col md:flex-row gap-6 mb-4">
                        <div className="md:w-full">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our lab focuses on discovering novel enzymes, pathways, and mechanisms involved in natural product biosynthesis and bacterial pathogenesis. We leverage genomics, biochemistry, and synthetic biology to awaken cryptic biosynthetic pathways, revealing new enzymatic strategies for building and modifying molecular scaffolds.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Area 2 */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-cyan-700">Synthetic Biology & Pathway Engineering</h2>
                    <div className="flex flex-col md:flex-row gap-6 mb-4">
                        <div className="md:w-full">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Building on nature's biosynthetic diversity, we also strive to engineer microbes to produce "unnatural" natural products. With powerful DNA synthesis and genome editing tools, we redesign entire pathways by combining enzymes from different systems or creating entirely new biochemical routes. This synthetic biology approach will expand nature's chemical repertoire for drug discovery applications.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Area 3 */}
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-cyan-700">Cyclic Dinucleotide Signaling</h2>
                    <div className="flex flex-col md:flex-row gap-6 mb-4">
                        <div className="md:w-full">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Another focus of our research examines cyclic dinucleotides, key signaling molecules that regulate critical bacterial processes. These bacterial messengers function through sophisticated networks of enzymes and effector proteins, which ensure precise spatiotemporal control over bacterial behaviour. By elucidating these signaling pathways, we seek to uncover novel therapeutic targets for disrupting pathogenic infections, aiming to develop innovative antimicrobial and biofilm-disrupting strategies.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </ProfileLayout>
    )
}
