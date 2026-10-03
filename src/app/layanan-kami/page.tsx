import Image from 'next/image'
import ContactFooter from '@/components/layouts/ContactFooter'

interface ServiceItem {
  id: number
  title: string
  image: string
}

const servicesData: ServiceItem[] = [
{
    id: 1,
    title: 'Studi S1 - Bachelor',
    image: '/assets/img/s1.jpg',
  },
  {
    id: 2,
    title: 'Studi S2 - Master',
    image: '/assets/img/s2.png',
  },
  {
    id: 3,
    title: 'Studi S3 - Ph.D',
    image: '/assets/img/s3.png',
  },
  {
    id: 4,
    title: 'Kursus Bahasa Asing',
    image: '/assets/img/kursus.png',
  },
  {
    id: 5,
    title: 'Study Tour',
    image: '/assets/img/study-tour.png',
  },
  {
    id: 6,
    title: 'Ausbildung',
    image: '/assets/img/ausbildung.jpg',
  },
]

export default function LayananKamiPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative w-full h-72 md:h-122.5 flex items-end">
        <Image
          src="/assets/img/services-hero.jpg"
          alt="Layanan Kami Header"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Title Box Overlay */}
        <div className="relative z-10 max-w-6xl w-full mx-auto px-6 pb-8">
          <div className="inline-block px-8 py-4 text-white">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider uppercase">
              LAYANAN KAMI
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group relative h-64 md:h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

                <div className="absolute bottom-4 left-0 max-w-[85%] bg-linear-to-r from-[#200A49]/95 via-[#1E40AF]/90 to-[#0284C7]/85 backdrop-blur-sm px-5 py-3 rounded-r-lg text-white shadow-lg border-y border-r border-white/20">
                  <span className="text-sm md:text-base font-semibold tracking-wide">
                    {service.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  )
}