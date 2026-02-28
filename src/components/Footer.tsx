export default function Footer() {
    return (
        <footer className="bg-navy-950 text-gray-400 py-12 border-t border-gray-800 font-sans">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold text-lg tracking-tight mb-2">Zhao-Xun Liang Group</h4>
                        <p className="text-sm leading-relaxed">School of Biological Sciences<br />Nanyang Technological University, Singapore 637551</p>
                    </div>
                    <div className="text-sm text-center md:text-right">
                        <p>&copy; {new Date().getFullYear()} Liang Lab. All rights reserved.</p>
                        <div className="flex justify-center md:justify-end gap-4 mt-2">
                            <a href="https://dr.ntu.edu.sg/entities/person/Liang-Zhao-Xun" className="hover:text-cyan-400 transition-colors">NTU Directory</a>
                            <a href="https://scholar.google.com/citations?user=F-DuOAkAAAAJ" className="hover:text-cyan-400 transition-colors">Google Scholar</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
