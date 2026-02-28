
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
                    <div className="border-b border-gray-100 pb-6 group">
                        <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight group-hover:text-cyan-700 transition-colors">
                            Biosynthesis of tasikamides via pathway coupling and diazonium-mediated hydrazone formation
                        </h3>
                        <p className="text-gray-600 italic mb-1">Journal of the American Chemical Society (2022)</p>
                        <p className="text-sm text-gray-500 mb-3">
                            Ma, G.L., Candra, H., Pang, L.M., Xiong, J., Ding, Y., Tran, H.T., Low, Z.J., Ye, H., Liu, M., Zheng, J., Fang, M., Cao, B., and Liang, Z.-X.
                        </p>
                        <div className="flex gap-3 text-sm font-medium">
                            <a href="https://doi.org/10.1021/jacs.1c10369" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800">DOI</a>
                        </div>
                    </div>

                    {/* Paper 2 */}
                    <div className="border-b border-gray-100 pb-6 group">
                        <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight group-hover:text-cyan-700 transition-colors">
                            Pathway retrofitting yields insights into the biosynthesis of anthraquinone-fused enediynes
                        </h3>
                        <p className="text-gray-600 italic mb-1">Journal of the American Chemical Society (2021)</p>
                        <p className="text-sm text-gray-500 mb-3">
                            Ma, G.-L., Tran, H.T., Low, Z.J., Candra, H., Pang, L.M., Chang, Q.W., Fan, M.L., and Liang, Z.-X.
                        </p>
                        <div className="flex gap-3 text-sm font-medium">
                            <a href="https://doi.org/10.1021/jacs.1c03911" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800">DOI</a>
                        </div>
                    </div>

                    {/* Paper 3 */}
                    <div className="border-b border-gray-100 pb-6 group">
                        <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight group-hover:text-cyan-700 transition-colors">
                            Sungeidines from a non-canonical enediyne biosynthetic pathway
                        </h3>
                        <p className="text-gray-600 italic mb-1">Journal of the American Chemical Society (2020)</p>
                        <p className="text-sm text-gray-500 mb-3">
                            Low, Z.J., Ma, G.-L., Tran, H.T., Zou, Y., Juan, X., Pang, L., Nuryyeva, S., Hong, Y., Hu, J., Houk, K.N., and Liang, Z.-X.
                        </p>
                        <div className="flex gap-3 text-sm font-medium">
                            <a href="https://doi.org/10.1021/jacs.9b10086" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800">DOI</a>
                        </div>
                    </div>

                    {/* Paper 4 */}
                    <div className="border-b border-gray-100 pb-6 group">
                        <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight group-hover:text-cyan-700 transition-colors">
                            A cyclic di-GMP–binding adaptor protein interacts with a chemotaxis methyltransferase to control flagellar motor switching
                        </h3>
                        <p className="text-gray-600 italic mb-1">Science Signaling (2016)</p>
                        <p className="text-sm text-gray-500 mb-3">
                            Xu, L.H., Xing, L.Y., Zeng, Y., Yam, J.K.H., Ding, Y., Venkataramani, P., Cheang, Q.W., Yang, X., Tang, X., Zhang, L.-H., Chiam, K.-H., Yang, L., and Liang, Z.-X.
                        </p>
                        <div className="flex gap-3 text-sm font-medium">
                            <a href="https://doi.org/10.1126/scisignal.aaf7584" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800">DOI</a>
                        </div>
                    </div>

                    {/* Paper 5 */}
                    <div className="border-b border-gray-100 pb-6 group">
                        <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight group-hover:text-cyan-700 transition-colors">
                            Visualizing the perturbation of cellular cyclic di-GMP levels in bacterial cells
                        </h3>
                        <p className="text-gray-600 italic mb-1">Journal of the American Chemical Society (2013)</p>
                        <p className="text-sm text-gray-500 mb-3">
                            Ho, C.L., Chong, K.S.J., Oppong, J.A., Chuah, M.L.C., Tan, S.M., and Liang, Z.-X.
                        </p>
                        <div className="flex gap-3 text-sm font-medium">
                            <a href="https://doi.org/10.1021/ja310497x" target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-800">DOI</a>
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
