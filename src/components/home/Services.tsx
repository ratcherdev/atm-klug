import Image from 'next/image'

// 1. Definisikan data layanan agar kode rapi dan modular
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

export default function Services() {
  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Judul Section */}
        <h2 className="text-xl md:text-2xl font-bold tracking-widest text-gray-800 uppercase text-center mb-12">
          LAYANAN KAMI
        </h2>

        {/* Grid 6 Card (1 kolom di HP, 2 di Tablet, 3 di Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative h-64 md:h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Gambar Background Card */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient Overlay & Badge Teks di Kiri Bawah */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

              <div className="absolute bottom-4 left-0 max-w-[85%] bg-linear-to-r from-[#200A49]/90 via-[#1E40AF]/80 to-[#0284C7]/75 backdrop-blur-sm px-5 py-3 rounded-r-lg text-white shadow-lg border-y border-r border-white/20">
                <span className="text-sm md:text-base font-semibold tracking-wide">
                  {service.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}