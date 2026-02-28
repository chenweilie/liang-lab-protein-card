
export default function TeamPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-navy-950 text-white py-24 md:py-32 mb-16 relative overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-bg.png"
                        alt="Team Background"
                        className="w-full h-full object-cover opacity-40 mix-blend-screen"
                    />
                    {/* Gradient Overlays for blending */}
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent md:w-3/4"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">The Liang Group</h1>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-4 drop-shadow font-light">
                            We are a diverse team of researchers passionate about discovery. Our alumni have successfully transitioned into top-tier academic positions and leading roles in the biotech industry.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-5xl pb-32">
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-navy-900 border-b border-gray-200 pb-3">Principal Investigator</h2>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-48 h-48 bg-gray-200 rounded-lg shrink-0 overflow-hidden shadow-md">
                            <img src="/images/team/pi.jpeg" alt="Professor Zhaoxun Liang" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Zhao-Xun Liang</h3>
                            <p className="text-lg text-cyan-600 font-medium mb-4">Professor, Nanyang Technological University</p>
                            <p className="text-gray-700 leading-relaxed mb-4 max-w-2xl">
                                Prof. Liang leads the lab at the School of Biological Sciences, NTU Singapore. His research integrates enzymology, pathway engineering, and synthetic microbiology to explore natural product biosynthesis and bacterial pathogenesis.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-navy-900 border-b border-gray-200 pb-3">Current Members</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: 'Wang Xuejiao', role: 'Research Fellow', img: 'member-1.jpeg' },
                            { name: 'Hartono Candra', role: 'Research Fellow', img: 'member-2.jpeg' },
                            { name: 'Tan Swee Ching', role: 'Research Assistant', img: 'member-3.jpeg' },
                            { name: 'Chang Shu Ting', role: 'Research Assistant', img: 'member-4.jpeg' },
                            { name: 'Sirus Kongjaroon', role: 'Research Assistant', img: 'member-5.jpeg' },
                            { name: 'Liao Yanghui', role: 'PhD Student', img: 'member-6.jpeg' },
                            { name: 'Huang Huawei', role: 'PhD Student', img: 'member-7.jpeg' },
                            { name: 'Srashti Khandelwal', role: 'PhD Student', img: 'member-8.jpeg' },
                            { name: 'Sun Yunke', role: 'PhD Student', img: 'member-9.jpeg' },
                            { name: 'You Jiaqi', role: 'PhD Student', img: 'member-10.jpeg' },
                        ].map((member, i) => (
                            <div key={i} className="flex gap-4 items-center bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 bg-gray-200 rounded-full shrink-0 overflow-hidden border-2 border-white shadow-sm">
                                    <img src={`/images/team/${member.img}`} alt={member.name} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(member.name) + '&background=e5e7eb&color=374151' }} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">{member.name}</h3>
                                    <p className="text-sm text-cyan-600 font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-8 text-navy-900 border-b border-gray-200 pb-3">Alumni</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead className="bg-gray-50 border-b border-gray-200">
                                <tr>
                                    <th className="px-4 py-3 font-semibold text-gray-900">Name</th>
                                    <th className="px-4 py-3 font-semibold text-gray-900">Year</th>
                                    <th className="px-4 py-3 font-semibold text-gray-900">Topic / Title</th>
                                    <th className="px-4 py-3 font-semibold text-gray-900">Current Position</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { name: 'Rao Feng', year: '2007-2011', topic: 'Catalysis and regulation of cyclic dinucleotide...', pos: 'Professor, Science & Technology University of South China' },
                                    { name: 'Qi Yaning', year: '2007-2011', topic: 'Structure and function of GGDEF-EAL didomain...', pos: 'University of Macau' },
                                    { name: 'Kong Rong', year: '2007-2011', topic: 'Proteins in early stage of enediyne biosynthesis', pos: 'Procter & Gamble Corporation, Singapore' },
                                    { name: 'Ela Murugan', year: '2008-2012', topic: 'Iterative polyketide synthase in enediyne...', pos: 'Director, PrEI’s Technologies Pte Ltd' },
                                    { name: 'Sun Huihua', year: '2008-2012', topic: 'Polyketide synthesis in enediyne and mellein', pos: 'Shanghai, China' },
                                    { name: 'Lawrence Ho Chun Long', year: '2009-2013', topic: 'Cyclic di-GMP fluorescent biosensors', pos: 'Assoc Prof, Shenzhen Advanced SynBiol Institute' },
                                    { name: 'Liew Chong Wai', year: '2009-2013', topic: 'Structural studies of enzymes from enediyne...', pos: 'A*STAR, Singapore' },
                                    { name: 'Chen Ming Wei', year: '2009-2013', topic: 'Enzymes regulating life style and cell wall...', pos: 'School of biological Sciences, NTU' },
                                    { name: 'Mary Chuah', year: '2010-2014', topic: 'Cyclic di-GMP signaling in Bacillus subtilis', pos: 'United Kingdom' },
                                    { name: 'Alolika Cakrabortti', year: '2012-2016', topic: 'Genomics-guided discovery of microbial metabolites', pos: 'Research scientist, Lonza Group Ltd, Singapore' },
                                    { name: 'Prabhadevi Venkataramani', year: '2012-2016', topic: 'Regulation of two-component signaling by PilZ', pos: 'Research fellow, National Institute of Health, USA' },
                                    { name: 'Cheang Qing Wei', year: '2013-2017', topic: 'Cyclic di-GMP signaling through PilZ adaptor', pos: 'Scientist, ThermoFisher, Singapore' },
                                    { name: 'Pang Li Mei', year: '2014-2018', topic: 'Bioprospecting local actinomycetes', pos: 'A*STAR, Singapore' },
                                    { name: 'Low Zhen Jie', year: '2014-2018', topic: 'Natural product biosynthesis in actinomycetes', pos: 'Research scientist, Waters Inc. Singapore' },
                                    { name: 'Xin Ling Yi', year: '2014-2018', topic: 'MapZ-mediated c-di-GMP signaling in P. aeruginosa', pos: 'Tianjin, China' },
                                    { name: 'Hartono Candra', year: '2018-2022', topic: 'Genome-guided discovery of natural products', pos: 'Research fellow, NTU' },
                                    { name: 'Sean Lee', year: '2020-2024', topic: 'Heterologous expression in Streptomyces hosts', pos: 'Singapore Botanical Garden' },
                                    { name: 'Jamila Oppong (MS)', year: '2013-2014', topic: 'Molecular mechanism of cyclic di-GMP signaling', pos: 'Ph.D. student, Manchester University, UK' },
                                    { name: 'Daryn Tan Fu Ern (MS)', year: '2018-2019', topic: 'Genome-guided natural product discovery', pos: 'Secondary school teacher, Singapore' },
                                    { name: 'Rachel Chua (MS)', year: '2018-2020', topic: 'Streptomyces sp. MD102 as heterologous host', pos: 'Research staff, NUS' },
                                    { name: 'Chong Zhi Soon', year: '2018-2020', topic: 'Genome-guided discovery of natural products', pos: 'NUS' },
                                    { name: 'Howard Saw', year: '2017-2019', topic: 'Genome-guided discovery of microbial natural products', pos: 'Singapore' },
                                    { name: 'Yang Lifeng', year: '2012-2014', topic: 'Engineering of nitrile reductase', pos: 'Singapore' },
                                    { name: 'Xu Linghui', year: '2010-2014', topic: 'PilZ protein-mediated bacterial signaling', pos: 'Professor, Southern China Agricultural University' },
                                    { name: 'Wu Long', year: '2011', topic: 'Bacterial signaling mediated by cyclic di-AMP', pos: 'Xi’an, China' },
                                    { name: 'Ma Guang-Lei', year: '2018-2023', topic: 'Heterologous expression of cannabinoid pathway', pos: 'Assoc Prof, Zhejiang University, China' },
                                ].map((alumnus, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50">
                                        <td className="px-4 py-3 font-medium text-gray-900">{alumnus.name}</td>
                                        <td className="px-4 py-3 text-gray-600">{alumnus.year}</td>
                                        <td className="px-4 py-3 text-gray-600 max-w-xs truncate" title={alumnus.topic}>{alumnus.topic}</td>
                                        <td className="px-4 py-3 text-cyan-700">{alumnus.pos}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </main>
    )
}
