
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <aside className="space-y-8">
            {/* Profile Photo */}
            <div className="w-full">
                <img
                    src="/images/profile-pic.webp"
                    alt="Professor Zhaoxun Liang"
                    className="w-full h-auto rounded-sm shadow-sm border border-gray-200"
                />
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-sm text-gray-700">
                <div>
                    <h3 className="font-bold text-navy-900 border-b border-gray-200 pb-1 mb-2">Contact</h3>
                    <p>
                        <strong>Email:</strong> <a href="mailto:zxliang@ntu.edu.sg" className="text-cyan-700 hover:underline">zxliang@ntu.edu.sg</a><br />
                        <strong>Phone:</strong> (65) 6592 7736
                    </p>
                </div>

                {/* Affiliations */}
                <div>
                    <h3 className="font-bold text-navy-900 border-b border-gray-200 pb-1 mb-2">Affiliations</h3>
                    <ul className="space-y-1">
                        <li>Professor, School of Biological Sciences</li>
                        <li>Associate Dean (Faculty), College of Science</li>
                        <li>Nanyang Technological University</li>
                    </ul>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="font-bold text-navy-900 border-b border-gray-200 pb-1 mb-2">Links</h3>
                <ul className="space-y-2 text-sm">
                    <li>
                        <a href="https://dr.ntu.edu.sg/entities/person/Liang-Zhao-Xun" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline block">
                            NTU Faculty Profile
                        </a>
                    </li>
                    <li>
                        <a href="https://scholar.google.com/citations?user=F-DuOAkAAAAJ" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline block">
                            Google Scholar Profile
                        </a>
                    </li>
                    <li>
                        <a href="https://www.researchgate.net/profile/Zhao-Xun-Liang" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline block">
                            ResearchGate
                        </a>
                    </li>
                    <li>
                        <a href="https://sg.linkedin.com/in/zhao-xun-liang-45224b60" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline block">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <Link to="/team" className="text-cyan-700 hover:underline block">Liang Lab Members</Link>
                    </li>
                    <li>
                        <Link to="/join" className="text-cyan-700 hover:underline block">Join the Lab</Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
}
