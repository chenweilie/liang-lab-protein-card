
import Sidebar from '../components/Sidebar';

interface ProfileLayoutProps {
    children: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">

            {/* Main Container */}
            <div className="container mx-auto px-6 py-12 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-12">

                    {/* Main Content Column (2/3) */}
                    <main className="md:w-3/4 order-2 md:order-1">
                        {children}
                    </main>

                    {/* Sidebar Column (1/3) */}
                    <aside className="md:w-1/4 order-1 md:order-2 shrink-0">
                        <Sidebar />
                    </aside>

                </div>
            </div>

            <footer className="border-t border-gray-200 py-8 mt-12 bg-gray-50 text-center text-sm text-gray-500">
                <div className="container mx-auto px-6">
                    &copy; {new Date().getFullYear()} Liang Lab, Nanyang Technological University.
                </div>
            </footer>
        </div>
    );
}
