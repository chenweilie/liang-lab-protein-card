
import ProfileLayout from '../layouts/ProfileLayout';

export default function TeamPage() {
    return (
        <ProfileLayout>
            <h1 className="text-3xl font-bold text-navy-900 mb-4 pb-4 border-b border-gray-200">The Liang Group</h1>
            <p className="text-gray-700 mb-12 text-lg">
                We are a diverse team of researchers passionate about discovery. Our alumni have successfully transitioned into top-tier academic positions and leading roles in the biotech industry.
            </p>

            <section className="mb-16">
                <h2 className="text-xl font-bold mb-6 text-navy-900 uppercase tracking-wide">Current Members</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Wang Xuejiao */}
                    <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 bg-gray-200 rounded shrink-0 overflow-hidden">
                            <img src="/images/team/wang-xuejiao_research-fellow.tmb-thumb160.jpg" alt="Wang Xuejiao" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Wang Xuejiao</h3>
                            <p className="text-sm text-cyan-700 font-medium mb-1">Research Fellow</p>
                        </div>
                    </div>
                    {/* Hartono Candra */}
                    <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 bg-gray-200 rounded shrink-0 overflow-hidden">
                            <img src="/images/team/hartono-candra_research-fellow.tmb-thumb160.jpg" alt="Hartono Candra" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Hartono Candra</h3>
                            <p className="text-sm text-cyan-700 font-medium mb-1">Research Fellow</p>
                        </div>
                    </div>
                    {/* Sirus Kongjaroon */}
                    <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 bg-gray-200 rounded shrink-0 overflow-hidden">
                            <img src="/images/team/sirus-kongjaroon_research-assistant.tmb-thumb160.jpg" alt="Sirus Kongjaroon" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Sirus Kongjaroon</h3>
                            <p className="text-sm text-cyan-700 font-medium mb-1">Research Assistant</p>
                        </div>
                    </div>
                    {/* Chang Shu Ting */}
                    <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 bg-gray-200 rounded shrink-0 overflow-hidden">
                            <img src="/images/team/chang-shu-ting_research-assistant.tmb-thumb160.jpg" alt="Chang Shu Ting" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Chang Shu Ting</h3>
                            <p className="text-sm text-cyan-700 font-medium mb-1">Research Assistant</p>
                        </div>
                    </div>
                    {/* Tan Swee Ching */}
                    <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 bg-gray-200 rounded shrink-0 overflow-hidden">
                            <img src="/images/team/tan-swee-ching_research-assistant.tmb-thumb160.jpeg" alt="Tan Swee Ching" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Tan Swee Ching</h3>
                            <p className="text-sm text-cyan-700 font-medium mb-1">Research Assistant</p>
                        </div>
                    </div>
                    {/* Huang Huawei */}
                    <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 bg-gray-200 rounded shrink-0 overflow-hidden">
                            <img src="/images/team/huang-huawei_phd-student.tmb-thumb160.jpg" alt="Huang Huawei" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Huang Huawei</h3>
                            <p className="text-sm text-cyan-700 font-medium mb-1">PhD Student</p>
                        </div>
                    </div>
                    {/* Liao Yanghui */}
                    <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 bg-gray-200 rounded shrink-0 overflow-hidden">
                            <img src="/images/team/liao-yanghui_phd-student.tmb-thumb160.jpeg" alt="Liao Yanghui" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Liao Yanghui</h3>
                            <p className="text-sm text-cyan-700 font-medium mb-1">PhD Student</p>
                        </div>
                    </div>
                    {/* Mallar Dasgupta */}
                    <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 bg-gray-200 rounded shrink-0 overflow-hidden">
                            <img src="/images/team/mallar-dasgupta_phd-student.tmb-thumb160.jpg" alt="Mallar Dasgupta" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Mallar Dasgupta</h3>
                            <p className="text-sm text-cyan-700 font-medium mb-1">PhD Student</p>
                        </div>
                    </div>
                    {/* Srashti Khandelwal */}
                    <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 bg-gray-200 rounded shrink-0 overflow-hidden">
                            <img src="/images/team/srashti-khandelwal_phd-student.tmb-thumb160.jpg" alt="Srashti Khandelwal" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Srashti Khandelwal</h3>
                            <p className="text-sm text-cyan-700 font-medium mb-1">PhD Student</p>
                        </div>
                    </div>
                    {/* Sun Yunke */}
                    <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 bg-gray-200 rounded shrink-0 overflow-hidden">
                            <img src="/images/team/sun-yunke_phd-student.tmb-thumb160.jpg" alt="Sun Yunke" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">Sun Yunke</h3>
                            <p className="text-sm text-cyan-700 font-medium mb-1">PhD Student</p>
                        </div>
                    </div>
                    {/* You Jiaqi */}
                    <div className="flex gap-4 items-start">
                        <div className="w-20 h-20 bg-gray-200 rounded shrink-0 overflow-hidden">
                            <img src="/images/team/you-jiaqi_phd-student.tmb-thumb160.jpg" alt="You Jiaqi" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">You Jiaqi</h3>
                            <p className="text-sm text-cyan-700 font-medium mb-1">PhD Student</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold mb-6 text-navy-900 uppercase tracking-wide">Alumni Success</h2>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                    <ul className="space-y-4">
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                            <div>
                                <span className="font-bold text-gray-800">Dr. Alumni A</span>
                                <span className="text-gray-500 text-sm ml-2">(Former PhD)</span>
                            </div>
                            <div className="text-sm text-cyan-700 font-semibold mt-1 sm:mt-0">
                                Postdoc, Harvard Medical School
                            </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                            <div>
                                <span className="font-bold text-gray-800">Dr. Alumni B</span>
                                <span className="text-gray-500 text-sm ml-2">(Former Postdoc)</span>
                            </div>
                            <div className="text-sm text-cyan-700 font-semibold mt-1 sm:mt-0">
                                Senior Scientist, WuXi AppTec
                            </div>
                        </li>
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                            <div>
                                <span className="font-bold text-gray-800">Dr. Alumni C</span>
                                <span className="text-gray-500 text-sm ml-2">(Former PhD)</span>
                            </div>
                            <div className="text-sm text-cyan-700 font-semibold mt-1 sm:mt-0">
                                Director, BGI Genomics
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </ProfileLayout>
    )
}
