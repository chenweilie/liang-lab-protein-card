
import ProfileLayout from '../layouts/ProfileLayout';

export default function ContactPage() {
    return (
        <ProfileLayout>
            <h1 className="text-3xl font-bold text-navy-900 mb-8 pb-4 border-b border-gray-200">Contact Information</h1>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6 text-gray-700">
                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Mailing Address</h3>
                        <p>
                            School of Biological Sciences<br />
                            Nanyang Technological University<br />
                            60 Nanyang Drive<br />
                            Singapore 637551
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Office & Lab Location</h3>
                        <p>
                            <strong>Office:</strong> SBS-04s-26<br />
                            <strong>Lab:</strong> SBS-04n-26
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Email & Phone</h3>
                        <p>
                            Email: <a href="mailto:zxliang@ntu.edu.sg" className="text-cyan-700 hover:underline">zxliang@ntu.edu.sg</a><br />
                            Phone: (65) 6592 7736
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-1">Professional Profiles</h3>
                        <ul className="space-y-1">
                            <li><a href="https://dr.ntu.edu.sg/entities/person/Liang-Zhao-Xun" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline">NTU Faculty Profile</a></li>
                            <li><a href="https://scholar.google.com/citations?user=F-DuOAkAAAAJ" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline">Google Scholar Profile</a></li>
                            <li><a href="https://www.researchgate.net/profile/Zhao-Xun-Liang" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline">ResearchGate</a></li>
                            <li><a href="https://sg.linkedin.com/in/zhao-xun-liang-45224b60" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>

                <div className="h-64 bg-gray-100 rounded border border-gray-200 overflow-hidden">
                    {/* Placeholder for map */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7505417835157!2d103.6808216!3d1.34567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0f7ec50c68bf%3A0x6a05e5330a10385!2sSchool%20of%20Biological%20Sciences!5e0!3m2!1sen!2ssg!4v1620000000000!5m2!1sen!2ssg"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        title="NTU SBS Map"
                    ></iframe>
                </div>
            </div>
        </ProfileLayout>
    )
}
