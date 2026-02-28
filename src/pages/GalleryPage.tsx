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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        'event-1.jpg', 'event-2.jpg', 'event-3.jpeg', 'event-4.jpeg',
                        'event-5.jpeg', 'event-6.jpeg', 'event-7.JPG', 'event-8.jpeg',
                        'event-9.jpg', 'event-10.JPG', 'event-11.jpeg', 'event-12.jpeg'
                    ].map((filename, i) => (
                        <div key={filename} className="group relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <img
                                src={`/images/gallery/${filename}`}
                                alt={`Gallery Event ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </main>
    )
}
