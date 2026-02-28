
export default function PublicationsPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-navy-900 text-white py-16 md:py-20 mb-12">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Publications</h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Selected recent publications from our laboratory.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-5xl pb-20">
                <div className="space-y-8">
                    {/* Paper 1 */}
                    <div className="border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow bg-gray-50/50 group flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/3 shrink-0">
                            <img src="/images/publications/tasikamides.png" alt="Tasikamides Biosynthesis Graphic" className="w-full h-auto rounded-lg shadow-sm group-hover:shadow-md transition-shadow object-cover aspect-video md:aspect-square" />
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight group-hover:text-cyan-700 transition-colors">
                                Biosynthesis of tasikamides via pathway coupling and diazonium-mediated hydrazone formation
                            </h3>
                            <p className="text-gray-600 italic mb-1">Journal of the American Chemical Society (2022)</p>
                            <p className="text-sm text-gray-500 mb-4">
                                Ma, G.L., Candra, H., Pang, L.M., Xiong, J., Ding, Y., Tran, H.T., Low, Z.J., Ye, H., Liu, M., Zheng, J., Fang, M., Cao, B., and Liang, Z.-X.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm mb-4">
                                Naturally occurring hydrazones are rare despite their universal usage in organic synthesis. This study details the discovery of tasikamides A-C, microbial metabolites with a unique cyclic pentapeptide scaffold and a hydrazone group. The biosynthesis involves the coupling of two discrete gene clusters—an NRPS pathway for the cyclic peptide and an AHA-synthesizing pathway. A novel enzyme catalyzes an unprecedented in vivo Japp–Klingemann reaction, demonstrating pathway coupling for complex metabolite formation.
                            </p>
                            <div className="flex gap-3 text-sm font-medium border-t border-gray-200 pt-4 mt-auto">
                                <a href="https://doi.org/10.1021/jacs.1c10369" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 flex items-center gap-1">
                                    View DOI <span>&nearr;</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Paper 2 */}
                    <div className="border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow bg-gray-50/50 group flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/3 shrink-0">
                            <img src="/images/publications/anthraquinone.png" alt="Anthraquinone-fused enediynes Graphic" className="w-full h-auto rounded-lg shadow-sm group-hover:shadow-md transition-shadow object-cover aspect-video md:aspect-square" />
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight group-hover:text-cyan-700 transition-colors">
                                Pathway retrofitting yields insights into the biosynthesis of anthraquinone-fused enediynes
                            </h3>
                            <p className="text-gray-600 italic mb-1">Journal of the American Chemical Society (2021)</p>
                            <p className="text-sm text-gray-500 mb-4">
                                Ma, G.-L., Tran, H.T., Low, Z.J., Candra, H., Pang, L.M., Chang, Q.W., Fan, M.L., and Liang, Z.-X.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm mb-4">
                                Anthraquinone-fused enediynes (AQEs) possess unique structures and potent anticancer properties, yet their biosynthesis has remained elusive. This study elucidates the biosynthesis of the AQE carbon skeleton by retrofitting the 'degenerative' sungeidine pathway with genes from the dynemicin pathway. These findings reveal a surprising enzymatic cascade involving an FAD-dependent monooxygenase and uncover the mechanisms behind the charactertistic anthraquinone moiety, C8-C9 linkage, and epoxide functionality.
                            </p>
                            <div className="flex gap-3 text-sm font-medium border-t border-gray-200 pt-4 mt-auto">
                                <a href="https://doi.org/10.1021/jacs.1c03911" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 flex items-center gap-1">
                                    View DOI <span>&nearr;</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Paper 3 */}
                    <div className="border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow bg-gray-50/50 group flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/3 shrink-0">
                            <img src="/images/publications/sungeidines.png" alt="Sungeidines Biosynthesis Graphic" className="w-full h-auto rounded-lg shadow-sm group-hover:shadow-md transition-shadow object-cover aspect-video md:aspect-square" />
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight group-hover:text-cyan-700 transition-colors">
                                Sungeidines from a non-canonical enediyne biosynthetic pathway
                            </h3>
                            <p className="text-gray-600 italic mb-1">Journal of the American Chemical Society (2020)</p>
                            <p className="text-sm text-gray-500 mb-4">
                                Low, Z.J., Ma, G.-L., Tran, H.T., Zou, Y., Juan, X., Pang, L., Nuryyeva, S., Hong, Y., Hu, J., Houk, K.N., and Liang, Z.-X.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm mb-4">
                                Sungeidines represent a novel class of microbial secondary metabolites discovered through genome-guided mining. While evolutionarily related to dynemicin-type enediynes, sungeidines are generated by a highly distinct biosynthetic gene cluster (BGC). Their assembly features unique octaketide processing, a distinctive activating sulfotransferase, and lacks canonical epoxidase genes. This divergence highlights the remarkable evolutionary plasticity of enediyne biosynthetic pathways.
                            </p>
                            <div className="flex gap-3 text-sm font-medium border-t border-gray-200 pt-4 mt-auto">
                                <a href="https://doi.org/10.1021/jacs.9b10086" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 flex items-center gap-1">
                                    View DOI <span>&nearr;</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Paper 4 */}
                    <div className="border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow bg-gray-50/50 group flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/3 shrink-0">
                            <img src="/images/publications/cyclic_digmp.png" alt="c-di-GMP adaptor protein Graphic" className="w-full h-auto rounded-lg shadow-sm group-hover:shadow-md transition-shadow object-cover aspect-video md:aspect-square" />
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight group-hover:text-cyan-700 transition-colors">
                                A cyclic di-GMP-binding adaptor protein interacts with a chemotaxis methyltransferase to control flagellar motor switching
                            </h3>
                            <p className="text-gray-600 italic mb-1">Science Signaling (2016)</p>
                            <p className="text-sm text-gray-500 mb-4">
                                Xu, L.H., Xing, L.Y., Zeng, Y., Yam, J.K.H., Ding, Y., Venkataramani, P., Cheang, Q.W., Yang, X., Tang, X., Zhang, L.-H., Chiam, K.-H., Yang, L., and Liang, Z.-X.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm mb-4">
                                Cyclic di-GMP is a central second messenger regulating diverse processes in pathogenic bacteria, including motility and biofilm formation. This research identifies a novel c-di-GMP-binding adaptor protein that directly interacts with a chemotaxis methyltransferase. By controlling flagellar motor switching, this complex spatiotemporal signaling network allows bacteria to dynamically adapt to host environments, revealing potential new vulnerabilities for antimicrobial strategies.
                            </p>
                            <div className="flex gap-3 text-sm font-medium border-t border-gray-200 pt-4 mt-auto">
                                <a href="https://doi.org/10.1126/scisignal.aaf7584" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 flex items-center gap-1">
                                    View DOI <span>&nearr;</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Paper 5 */}
                    <div className="border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow bg-gray-50/50 group flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/3 shrink-0">
                            <img src="/images/publications/visualizing_cdigmp.png" alt="Visualizing c-di-GMP Graphic" className="w-full h-auto rounded-lg shadow-sm group-hover:shadow-md transition-shadow object-cover aspect-video md:aspect-square" />
                        </div>
                        <div className="md:w-2/3">
                            <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight group-hover:text-cyan-700 transition-colors">
                                Visualizing the perturbation of cellular cyclic di-GMP levels in bacterial cells
                            </h3>
                            <p className="text-gray-600 italic mb-1">Journal of the American Chemical Society (2013)</p>
                            <p className="text-sm text-gray-500 mb-4">
                                Ho, C.L., Chong, K.S.J., Oppong, J.A., Chuah, M.L.C., Tan, S.M., and Liang, Z.-X.
                            </p>
                            <p className="text-gray-700 leading-relaxed text-sm mb-4">
                                Understanding cyclic dinucleotide signaling requires precise visualization of its spatiotemporal dynamics within live cells. This study presents a novel method for visualizing the perturbation of cellular cyclic di-GMP levels in bacterial cells. By tracking these fluctuations, researchers can elucidate the complex regulatory circuits governed by synthases and phosphodiesterases, providing critical insights into how bacteria mediate infection, virulence, and antibiotic resistance.
                            </p>
                            <div className="flex gap-3 text-sm font-medium border-t border-gray-200 pt-4 mt-auto">
                                <a href="https://doi.org/10.1021/ja310497x" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800 flex items-center gap-1">
                                    View DOI <span>&nearr;</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-12">
                    <a href="https://scholar.google.com/citations?user=F-DuOAkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        View Full List on Google Scholar &rarr;
                    </a>
                </div>
            </div>
        </main>
    )
}
