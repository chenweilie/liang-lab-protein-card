
import ProfileLayout from '../layouts/ProfileLayout';

export default function PublicationsPage() {
    return (
        <ProfileLayout>
            <h1 className="text-3xl font-bold text-navy-900 mb-8 pb-4 border-b border-gray-200">Selected Publications</h1>

            <div className="space-y-8">

                {/* Paper 1 */}
                <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                        Biosynthesis of tasikamides via pathway coupling and diazonium-mediated hydrazone formation
                    </h3>
                    <p className="text-gray-600 italic mb-1">Journal of the American Chemical Society (2022)</p>
                    <p className="text-sm text-gray-500 mb-2">
                        Ma, G.L., Candra, H., Pang, L.M., Xiong, J., Ding, Y., Tran, H.T., Low, Z.J., Ye, H., Liu, M., Zheng, J., Fang, M., Cao, B., and Liang, Z.-X.
                    </p>
                    <div className="flex gap-3 text-sm font-medium">
                        <a href="https://doi.org/10.1021/jacs.1c10369" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-navy-900">DOI</a>
                    </div>
                </div>

                {/* Paper 2 */}
                <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                        Pathway retrofitting yields insights into the biosynthesis of anthraquinone-fused enediynes
                    </h3>
                    <p className="text-gray-600 italic mb-1">Journal of the American Chemical Society (2021)</p>
                    <p className="text-sm text-gray-500 mb-2">
                        Ma, G.-L., Tran, H.T., Low, Z.J., Candra, H., Pang, L.M., Chang, Q.W., Fan, M.L., and Liang, Z.-X.
                    </p>
                    <div className="flex gap-3 text-sm font-medium">
                        <a href="https://doi.org/10.1021/jacs.1c03911" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-navy-900">DOI</a>
                    </div>
                </div>

                {/* Paper 3 */}
                <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                        Sungeidines from a non-canonical enediyne biosynthetic pathway
                    </h3>
                    <p className="text-gray-600 italic mb-1">Journal of the American Chemical Society (2020)</p>
                    <p className="text-sm text-gray-500 mb-2">
                        Low, Z.J., Ma, G.-L., Tran, H.T., Zou, Y., Juan, X., Pang, L., Nuryyeva, S., Hong, Y., Hu, J., Houk, K.N., and Liang, Z.-X.
                    </p>
                    <div className="flex gap-3 text-sm font-medium">
                        <a href="https://doi.org/10.1021/jacs.9b10086" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-navy-900">DOI</a>
                    </div>
                </div>

                {/* Paper 4 */}
                <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                        A cyclic di-GMP–binding adaptor protein interacts with a chemotaxis methyltransferase to control flagellar motor switching
                    </h3>
                    <p className="text-gray-600 italic mb-1">Science Signaling (2016)</p>
                    <p className="text-sm text-gray-500 mb-2">
                        Xu, L.H., Xing, L.Y., Zeng, Y., Yam, J.K.H., Ding, Y., Venkataramani, P., Cheang, Q.W., Yang, X., Tang, X., Zhang, L.-H., Chiam, K.-H., Yang, L., and Liang, Z.-X.
                    </p>
                    <div className="flex gap-3 text-sm font-medium">
                        <a href="https://doi.org/10.1126/scisignal.aaf7584" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-navy-900">DOI</a>
                    </div>
                </div>

                {/* Paper 5 */}
                <div className="border-b border-gray-100 pb-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">
                        Visualizing the perturbation of cellular cyclic di-GMP levels in bacterial cells
                    </h3>
                    <p className="text-gray-600 italic mb-1">Journal of the American Chemical Society (2013)</p>
                    <p className="text-sm text-gray-500 mb-2">
                        Ho, C.L., Chong, K.S.J., Oppong, J.A., Chuah, M.L.C., Tan, S.M., and Liang, Z.-X.
                    </p>
                    <div className="flex gap-3 text-sm font-medium">
                        <a href="https://doi.org/10.1021/ja310497x" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-navy-900">DOI</a>
                    </div>
                </div>

            </div>

            <div className="mt-12">
                <a href="https://scholar.google.com/citations?user=F-DuOAkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Z" /><path d="M12.9 6.5h-1.8v3.6h-3.6v1.8h3.6v3.6h1.8v-3.6h3.6v-1.8h-3.6V6.5Z" /></svg>
                    View Full List on Google Scholar
                </a>
            </div>
        </ProfileLayout>
    )
}
