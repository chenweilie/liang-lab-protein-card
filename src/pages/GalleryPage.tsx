export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-navy-950 text-white py-24 md:py-32 mb-16 relative overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-bg.png"
                        alt="Gallery Background"
                        className="w-full h-full object-cover opacity-40 mix-blend-screen"
                    />
                    {/* Gradient Overlays for blending */}
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent md:w-3/4"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">Gallery</h1>
                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-4 drop-shadow font-light">
                            Moments and memories from the Liang Laboratory.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-5xl pb-32">

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
