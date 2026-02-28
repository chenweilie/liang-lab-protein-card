export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-navy-900 text-white py-16 md:py-20 mb-12">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Gallery</h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Moments and memories from the Liang Laboratory.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-5xl pb-20">

                {/* 
                  Since we don't have all the exact photos yet, we will place some placeholders 
                  for the gallery. User can replace these with actual paths later. 
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="group relative aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <img
                                src={`https://picsum.photos/seed/${item * 123}/600/600`}
                                alt={`Gallery Item ${item}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <span className="text-white font-medium p-6">Lab Event {2020 + item}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    )
}
