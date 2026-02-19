
import ProfileLayout from '../layouts/ProfileLayout';

export default function JoinPage() {
    return (
        <ProfileLayout>
            <h1 className="text-3xl font-bold text-navy-900 mb-8 pb-4 border-b border-gray-200">Join the Lab</h1>

            <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="text-xl italic text-gray-500 border-l-4 border-cyan-500 pl-4 py-2 bg-gray-50 mb-8">
                    "Research is an adventure. We value curiosity, interdisciplinary thinking, and the drive to explore the unknown boundaries between chemistry and biology."
                </p>

                <h3 className="text-navy-900 font-bold mt-8 mb-4">Prospective Students & Postdocs</h3>
                <p>
                    We are always looking for motivated individuals to join our team. Ideal candidates should have a strong foundation in:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-8">
                    <li><strong>Chemistry / Biochemistry:</strong> Enzyme kinetics, protein purification, structural biology.</li>
                    <li><strong>Molecular Biology:</strong> Cloning, genetic engineering, synthetic biology.</li>
                    <li><strong>Microbiology:</strong> Bacterial physiology, biofilm assays.</li>
                </ul>

                <div className="bg-cyan-50 border border-cyan-100 p-6 rounded-md my-8">
                    <h4 className="text-lg font-bold text-cyan-800 mb-2">How to Apply</h4>
                    <p className="mb-4 text-sm">
                        Please email Prof. Liang directly at <a href="mailto:zxliang@ntu.edu.sg" className="underline font-bold">zxliang@ntu.edu.sg</a>.
                    </p>
                    <p className="font-bold text-sm mb-2">Include the following:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Changes CV (with list of publications)</li>
                        <li>Brief statement of research interests</li>
                        <li>Academic transcripts (for students)</li>
                        <li>Contact info for 2-3 referees</li>
                    </ul>
                </div>
            </div>
        </ProfileLayout>
    )
}
