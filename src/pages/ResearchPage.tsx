export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-navy-950 text-white py-24 md:py-32 mb-16 relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-navy-900 via-navy-950 to-[#000d1f]"></div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">Research</h1>
                        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-4 font-light">
                            Our research program integrates discovery-driven enzymology with pathway engineering and synthetic microbiology, and currently spans three interconnected areas.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-5xl pb-20">
                <div className="space-y-24">
                    {/* Area 1 */}
                    <section className="scroll-mt-24" id="natural-products">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">Area</span>
                            <span className="text-5xl font-extrabold text-gray-100 leading-none select-none">01</span>
                            <div className="flex-1 h-px bg-gray-100"></div>
                        </div>
                        <div className="pl-5 border-l-2 border-cyan-500">
                            <h2 className="text-3xl font-bold mb-5 text-navy-900">Biosynthesis of natural products</h2>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                Microbial specialized metabolites exhibit remarkable structural complexity and diverse bioactivities, making them a rich source of pharmaceuticals and chemical probes. The assembly of these molecules depends on highly coordinated biosynthetic enzymes that construct core scaffolds and introduce precise tailoring modifications.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                Advances in genome sequencing have revealed that many microorganisms encode far more biosynthetic capacity than is reflected in their known metabolites. In particular, numerous cryptic or silent biosynthetic gene clusters (BGCs) remain uncharacterized. These hidden pathways represent a substantial reservoir of unexplored enzymatic chemistry.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                In our lab, we maintain a collection of unique microbial strains. We sequence and mine their genomes to identify cryptic BGCs, followed by functional characterization using chemical, biochemical, and genetic approaches. By activating and reconstructing these pathways, we uncover new scaffold-forming and tailoring enzymes, define their catalytic mechanisms, and expand the known repertoire of enzymatic transformations in nature.
                            </p>
                        </div>
                    </section>

                    {/* Area 2 */}
                    <section className="scroll-mt-24" id="artificial-pathways">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">Area</span>
                            <span className="text-5xl font-extrabold text-gray-100 leading-none select-none">02</span>
                            <div className="flex-1 h-px bg-gray-100"></div>
                        </div>
                        <div className="pl-5 border-l-2 border-cyan-500">
                            <h2 className="text-3xl font-bold mb-5 text-navy-900">Design of artificial biosynthetic pathways</h2>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                Many clinically important drugs are derived from natural product scaffolds that have been chemically modified to improve potency or pharmacokinetic properties. Recent advances in DNA synthesis, genome editing, and pathway engineering now allow us to redesign biosynthesis at the genetic level.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                We are developing strategies to engineer or create biosynthetic pathways to generate natural product derivatives and entirely new ("non-natural") chemical scaffolds. This approach involves modular recombination of biosynthetic gene clusters, as well as enzymatic or non-enzymatic coupling of pathway intermediates.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                By merging distinct biosynthetic logics, we aim to create artificial pathways that expand the chemical space. Ultimately, this work seeks to harness nature's catalytic machinery in a programmable manner, enabling the scalable production of structurally novel compounds with potential therapeutic value.
                            </p>
                        </div>
                    </section>

                    {/* Area 3 */}
                    <section className="scroll-mt-24" id="cyclic-dinucleotides">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-xs font-bold uppercase tracking-widest text-cyan-600">Area</span>
                            <span className="text-5xl font-extrabold text-gray-100 leading-none select-none">03</span>
                            <div className="flex-1 h-px bg-gray-100"></div>
                        </div>
                        <div className="pl-5 border-l-2 border-cyan-500">
                            <h2 className="text-3xl font-bold mb-5 text-navy-900">Cyclic dinucleotide–mediated bacterial pathogenesis</h2>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                Cyclic dinucleotides such as c-di-GMP and c-di-AMP have emerged as central second messengers in many clinically significant pathogens. These messengers regulate diverse processes including virulence factor expression, motility, biofilm formation, and stress responses. Accumulating evidence indicates that cyclic dinucleotide signaling is governed by complex networks of synthases, phosphodiesterases, receptors, and effector proteins.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                                These components operate in a tightly controlled spatiotemporal network, allowing bacteria to dynamically adapt to host environments. Our research aims to identify previously uncharacterized enzymes and effector proteins involved in cyclic dinucleotide signaling and to elucidate their mechanistic roles in infection and antibiotic resistance.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                By dissecting these regulatory circuits at the molecular level, we seek to reveal new vulnerabilities in pathogenic bacteria. This work has the potential to inform the development of next-generation antimicrobial strategies, including inhibitors targeting signaling proteins and approaches to disrupt biofilm formation.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}
