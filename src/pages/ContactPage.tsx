export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-navy-900 text-white py-16 md:py-20 mb-12">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact</h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Get in touch or join our laboratory.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-5xl pb-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* Contact details */}
                    <div className="space-y-10 text-gray-700">
                        <section>
                            <h2 className="text-2xl font-bold text-navy-900 mb-6 border-b border-gray-200 pb-3">Principal Investigator</h2>
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
                                <h3 className="font-bold text-lg text-gray-900 mb-2">Zhao-Xun Liang</h3>
                                <p className="mb-4">
                                    School of Biological Sciences<br />
                                    Nanyang Technological University<br />
                                    60 Nanyang Drive<br />
                                    Singapore 637551
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        <span className="font-medium text-gray-800">6592 7736</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        <a href="mailto:zxliang@ntu.edu.sg" className="text-cyan-600 hover:text-cyan-800 font-medium transition-colors">zxliang@ntu.edu.sg</a>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
                                        <span className="font-medium text-gray-800">Fax: 6791 3856</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy-900 mb-6 border-b border-gray-200 pb-3">Job Opening</h2>
                            <div className="bg-cyan-50 border border-cyan-100 rounded-xl p-6 shadow-sm">
                                <p className="text-gray-800 leading-relaxed mb-4">
                                    For inquiries regarding postdoctoral fellow, research assistant, or PhD student positions, please reach out to us directly.
                                </p>
                                <a href="mailto:zxliang@ntu.edu.sg" className="btn-primary">
                                    Email Prof. Liang
                                </a>
                            </div>
                        </section>
                    </div>

                    {/* Map column */}
                    <div>
                        <h2 className="text-2xl font-bold text-navy-900 mb-6 border-b border-gray-200 pb-3">Location</h2>
                        <div className="h-96 w-full bg-gray-200 rounded-xl shadow-inner border border-gray-200 overflow-hidden relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7505417835157!2d103.6808216!3d1.34567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0f7ec50c68bf%3A0x6a05e5330a10385!2sSchool%20of%20Biological%20Sciences!5e0!3m2!1sen!2ssg!4v1620000000000!5m2!1sen!2ssg"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                title="NTU SBS Map"
                                className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}
