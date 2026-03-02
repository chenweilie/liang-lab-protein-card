
type MemberRole = 'Research Fellow' | 'Research Assistant' | 'PhD Student'

const members: { name: string; role: MemberRole; img: string }[] = [
    { name: 'Wang Xuejiao',       role: 'Research Fellow',    img: 'wang-xuejiao_research-fellow.tmb-thumb160.jpg' },
    { name: 'Hartono Candra',     role: 'Research Fellow',    img: 'hartono-candra_research-fellow.tmb-thumb160.jpg' },
    { name: 'Tan Swee Ching',     role: 'Research Assistant', img: 'tan-swee-ching_research-assistant.tmb-thumb160.jpeg' },
    { name: 'Chang Shu Ting',     role: 'Research Assistant', img: 'chang-shu-ting_research-assistant.tmb-thumb160.jpg' },
    { name: 'Sirus Kongjaroon',   role: 'Research Assistant', img: 'sirus-kongjaroon_research-assistant.tmb-thumb160.jpg' },
    { name: 'Liao Yanghui',       role: 'PhD Student',        img: 'liao-yanghui_phd-student.tmb-thumb160.jpeg' },
    { name: 'Huang Huawei',       role: 'PhD Student',        img: 'huang-huawei_phd-student.tmb-thumb160.jpg' },
    { name: 'Srashti Khandelwal', role: 'PhD Student',        img: 'srashti-khandelwal_phd-student.tmb-thumb160.jpg' },
    { name: 'Sun Yunke',          role: 'PhD Student',        img: 'sun-yunke_phd-student.tmb-thumb160.jpg' },
    { name: 'You Jiaqi',          role: 'PhD Student',        img: 'you-jiaqi_phd-student.tmb-thumb160.jpg' },
]

const roleOrder: MemberRole[] = ['Research Fellow', 'Research Assistant', 'PhD Student']

const roleSectionLabel: Record<MemberRole, string> = {
    'Research Fellow':    'Research Fellows',
    'Research Assistant': 'Research Assistants',
    'PhD Student':        'PhD Students',
}

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-navy-950 text-white py-24 md:py-32 mb-16 relative overflow-hidden">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-navy-900 via-navy-950 to-[#000d1f]"></div>
                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">The Liang Group</h1>
                        <p className="text-xl md:text-2xl text-gray-100 leading-relaxed mb-4 font-light">
                            We are an interdisciplinary research team composed of students and staff with backgrounds in chemistry and biology.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-5xl pb-32">

                {/* Principal Investigator */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-navy-900 border-b border-gray-200 pb-3">Principal Investigator</h2>

                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="h-1 bg-cyan-500"></div>
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-52 shrink-0 bg-gray-50">
                                <div className="aspect-square md:aspect-auto md:h-full overflow-hidden">
                                    <img
                                        src="/images/team/pi.jpeg"
                                        alt="Professor Zhao-Xun Liang"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">Zhao-Xun Liang</h3>
                                <p className="text-base text-cyan-600 font-medium mb-1">Professor</p>
                                <p className="text-sm text-gray-400 mb-5">
                                    Associate Dean (Faculty), College of Science<br />
                                    School of Biological Sciences, Nanyang Technological University
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl text-sm">
                                    Prof. Liang's laboratory uses an interdisciplinary approach to study the molecular basis of natural product biosynthesis and bacterial pathogenesis. His group has contributed to advancing our understanding of cyclic dinucleotide signaling and microbial secondary metabolite biosynthesis.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        { label: 'NTU Profile',     href: 'https://dr.ntu.edu.sg/cris/rp/rp00358' },
                                        { label: 'Google Scholar',  href: 'https://scholar.google.com/citations?user=F-DuOAkAAAAJ' },
                                        { label: 'ORCID',           href: 'https://orcid.org/0000-0002-3128-1330' },
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

                {/* Current Members — grouped by role */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold mb-12 text-navy-900 border-b border-gray-200 pb-3">Current Members</h2>

                    <div className="space-y-14">
                        {roleOrder.map((role) => {
                            const group = members.filter((m) => m.role === role)
                            if (group.length === 0) return null
                            return (
                                <div key={role}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-600 shrink-0">
                                            {roleSectionLabel[role]}
                                        </h3>
                                        <div className="flex-1 h-px bg-gray-100"></div>
                                        <span className="text-xs text-gray-300 font-medium tabular-nums">{group.length}</span>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                                        {group.map((member, i) => (
                                            <div
                                                key={i}
                                                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                                            >
                                                <div className="h-0.5 bg-gray-100 group-hover:bg-cyan-500 transition-colors duration-300"></div>
                                                <div className="aspect-square bg-gray-100 overflow-hidden">
                                                    <img
                                                        src={`/images/team/${member.img}`}
                                                        alt={member.name}
                                                        className="w-full h-full object-cover object-top"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src =
                                                                'https://ui-avatars.com/api/?name=' +
                                                                encodeURIComponent(member.name) +
                                                                '&background=e5e7eb&color=374151&size=200'
                                                        }}
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <h4 className="font-bold text-gray-900 text-sm leading-snug">{member.name}</h4>
                                                    <p className="text-xs text-cyan-600 font-medium mt-1">{member.role}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Alumni */}
                <section>
                    <h2 className="text-2xl font-bold mb-8 text-navy-900 border-b border-gray-200 pb-3">Alumni</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm whitespace-nowrap">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200">
                                    <th className="px-4 py-3 font-semibold text-gray-700">Name</th>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Year</th>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Topic / Title</th>
                                    <th className="px-4 py-3 font-semibold text-gray-700">Current Position</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[
                                    { name: 'Rao Feng',                   year: '2007–2011', topic: 'Catalysis and regulation of cyclic dinucleotide…',     pos: 'Professor, Science & Technology University of South China' },
                                    { name: 'Qi Yaning',                  year: '2007–2011', topic: 'Structure and function of GGDEF-EAL didomain…',         pos: 'University of Macau' },
                                    { name: 'Kong Rong',                  year: '2007–2011', topic: 'Proteins in early stage of enediyne biosynthesis',       pos: 'Procter & Gamble Corporation, Singapore' },
                                    { name: 'Ela Murugan',                year: '2008–2012', topic: 'Iterative polyketide synthase in enediyne…',             pos: "Director, PrEI\u2019s Technologies Pte Ltd" },
                                    { name: 'Sun Huihua',                 year: '2008–2012', topic: 'Polyketide synthesis in enediyne and mellein',           pos: 'Shanghai, China' },
                                    { name: 'Lawrence Ho Chun Long',      year: '2009–2013', topic: 'Cyclic di-GMP fluorescent biosensors',                   pos: 'Assoc Prof, Shenzhen Advanced SynBiol Institute' },
                                    { name: 'Liew Chong Wai',             year: '2009–2013', topic: 'Structural studies of enzymes from enediyne…',           pos: 'A*STAR, Singapore' },
                                    { name: 'Chen Ming Wei',              year: '2009–2013', topic: 'Enzymes regulating life style and cell wall…',           pos: 'School of Biological Sciences, NTU' },
                                    { name: 'Mary Chuah',                 year: '2010–2014', topic: 'Cyclic di-GMP signaling in Bacillus subtilis',           pos: 'United Kingdom' },
                                    { name: 'Xu Linghui',                 year: '2010–2014', topic: 'PilZ protein-mediated bacterial signaling',              pos: 'Professor, Southern China Agricultural University' },
                                    { name: 'Wu Long',                    year: '2011',      topic: 'Bacterial signaling mediated by cyclic di-AMP',          pos: 'Xi\'an, China' },
                                    { name: 'Alolika Cakrabortti',        year: '2012–2016', topic: 'Genomics-guided discovery of microbial metabolites',     pos: 'Research Scientist, Lonza Group Ltd, Singapore' },
                                    { name: 'Prabhadevi Venkataramani',   year: '2012–2016', topic: 'Regulation of two-component signaling by PilZ',          pos: 'Research Fellow, National Institute of Health, USA' },
                                    { name: 'Yang Lifeng',                year: '2012–2014', topic: 'Engineering of nitrile reductase',                       pos: 'Singapore' },
                                    { name: 'Cheang Qing Wei',            year: '2013–2017', topic: 'Cyclic di-GMP signaling through PilZ adaptor',           pos: 'Scientist, ThermoFisher, Singapore' },
                                    { name: 'Jamila Oppong (MS)',         year: '2013–2014', topic: 'Molecular mechanism of cyclic di-GMP signaling',         pos: 'PhD student, Manchester University, UK' },
                                    { name: 'Pang Li Mei',                year: '2014–2018', topic: 'Bioprospecting local actinomycetes',                     pos: 'A*STAR, Singapore' },
                                    { name: 'Low Zhen Jie',               year: '2014–2018', topic: 'Natural product biosynthesis in actinomycetes',          pos: 'Research Scientist, Waters Inc., Singapore' },
                                    { name: 'Xin Ling Yi',                year: '2014–2018', topic: 'MapZ-mediated c-di-GMP signaling in P. aeruginosa',      pos: 'Tianjin, China' },
                                    { name: 'Howard Saw',                 year: '2017–2019', topic: 'Genome-guided discovery of microbial natural products',  pos: 'Singapore' },
                                    { name: 'Hartono Candra',             year: '2018–2022', topic: 'Genome-guided discovery of natural products',            pos: 'Research Fellow, NTU' },
                                    { name: 'Daryn Tan Fu Ern (MS)',      year: '2018–2019', topic: 'Genome-guided natural product discovery',                pos: 'Secondary school teacher, Singapore' },
                                    { name: 'Rachel Chua (MS)',           year: '2018–2020', topic: 'Streptomyces sp. MD102 as heterologous host',            pos: 'Research Staff, NUS' },
                                    { name: 'Chong Zhi Soon',             year: '2018–2020', topic: 'Genome-guided discovery of natural products',            pos: 'NUS' },
                                    { name: 'Sean Lee',                   year: '2020–2024', topic: 'Heterologous expression in Streptomyces hosts',          pos: 'Singapore Botanical Garden' },
                                    { name: 'Ma Guang-Lei',               year: '2018–2023', topic: 'Heterologous expression of cannabinoid pathway',         pos: 'Assoc Prof, Zhejiang University, China' },
                                ].map((alumnus, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                                        <td className="px-4 py-3 font-medium text-gray-900">{alumnus.name}</td>
                                        <td className="px-4 py-3 text-gray-500 tabular-nums">{alumnus.year}</td>
                                        <td className="px-4 py-3 text-gray-500 max-w-xs truncate" title={alumnus.topic}>{alumnus.topic}</td>
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
