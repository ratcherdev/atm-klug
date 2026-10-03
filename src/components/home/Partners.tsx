import Image from 'next/image'

interface Partner {
  id: number
  name: string
  logo: string
}

const partnersData: Partner[] = [
  { id: 1, name: '424 Aviation', logo: '/images/partners/424aviation.png' },
  { id: 2, name: 'St. Andrews College', logo: '/images/partners/st-andrews.png' },
  { id: 3, name: 'HTW Berlin', logo: '/images/partners/htw.png' },
  { id: 4, name: 'Study Group', logo: '/images/partners/study-group.png' },
]

export default function Partners() {
  return (
    <section className="py-12 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Judul Section */}
        <h2 className="text-xl md:text-2xl font-bold tracking-widest text-gray-800 uppercase text-center mb-10">
          MITRA KAMI
        </h2>

        {/* Grid Logo Partner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="bg-white border border-gray-200 rounded-lg p-6 h-24 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}