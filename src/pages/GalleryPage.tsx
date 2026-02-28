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
                        { file: 'event-1.jpg', caption: 'Annual Lab Retreat' },
                        { file: 'event-2.jpg', caption: 'International Conference Presentation' },
                        { file: 'event-3.jpeg', caption: 'Celebrating Recent Publications' },
                        { file: 'event-4.jpeg', caption: 'PhD Graduation Ceremony' },
                        { file: 'event-5.jpeg', caption: 'Poster Session at Gordon Research' },
                        { file: 'event-6.jpeg', caption: 'Joint Seminar with Visiting Researchers' },
                        { file: 'event-7.JPG', caption: 'Lab Team Building Activity' },
                        { file: 'event-8.jpeg', caption: 'Year-end Gathering & Celebration' },
                        { file: 'event-9.jpg', caption: 'Alumni Meetup in Singapore' },
                        { file: 'event-10.JPG', caption: 'Welcoming New Lab Members' },
                        { file: 'event-11.jpeg', caption: 'Group Photo after Research Symposium' },
                        { file: 'event-12.jpeg', caption: 'Farewell Dinner for Graduating Students' }
                    ].map((item, i) => (
                        <div key={item.file} className="group relative aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            <img
                                src={`/images/gallery/${item.file}`}
                                alt={`Gallery Event: ${item.caption}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Dark Gradient Overlay on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <p className="text-white font-medium text-lg leading-snug translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">
                                    {item.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    )
}
