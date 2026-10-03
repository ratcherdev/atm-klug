import Image from 'next/image'
import Link from 'next/link'

interface Article {
  id: number
  title: string
  image: string
  slug: string
}

const articlesData: Article[] = [
  {
    id: 1,
    title: '5 Fakta yang Harus Kamu Ketahui Sebelum Studi di Jerman',
    image: '/images/articles/jerman.jpg',
    slug: '5-fakta-studi-di-jerman',
  },
  {
    id: 2,
    title: 'Uni Eropa Menghadapi Virus Corona',
    image: '/images/articles/corona.jpg',
    slug: 'uni-eropa-menghadapi-corona',
  },
  {
    id: 3,
    title: 'Belajar Bahasa Jerman Bersama Goethe Institut',
    image: '/images/articles/goethe.jpg',
    slug: 'belajar-bahasa-jerman-goethe',
  },
  {
    id: 4,
    title: 'Apa itu Gelar Cambridge? Yuk Cek Tahu',
    image: '/images/articles/cambridge.jpg',
    slug: 'apa-itu-gelar-cambridge',
  },
]

export default function Articles() {
  return (
    <section className="py-16 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        {/* Judul Section */}
        <h2 className="text-xl md:text-2xl font-bold tracking-widest text-gray-800 uppercase text-center mb-12">
          ARTIKEL TERBARU
        </h2>

        {/* Grid 2x2 Artikel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mb-12">
          {articlesData.map((article) => (
            <Link
              key={article.id}
              href={`/artikel/${article.slug}`}
              className="group flex flex-col items-center"
            >
              {/* Gambar Card */}
              <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Judul Artikel */}
              <h3 className="mt-4 text-center font-semibold text-gray-800 text-sm md:text-base group-hover:text-[#1E40AF] transition-colors leading-snug">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Tombol "ARTIKEL LAINNYA" */}
        <div className="flex justify-center">
          <Link
            href="/artikel"
            className="border-2 border-gray-400 hover:border-gray-700 text-gray-600 hover:text-gray-900 text-xs font-semibold px-8 py-2.5 rounded-full uppercase tracking-wider transition-all"
          >
            Artikel Lainnya
          </Link>
        </div>
      </div>
    </section>
  )
}