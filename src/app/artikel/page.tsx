import Image from 'next/image'
import Link from 'next/link'
import ContactFooter from '@/components/layouts/ContactFooter'

interface ArticleItem {
  id: number
  title: string
  category?: string
  date?: string
  image: string
  slug: string
}

// Data simulasi artikel
const topFeatured: ArticleItem[] = [
  {
    id: 1,
    title: 'Penting! Cara Mudah agar Bisa Kuliah di Luar Negeri dengan Beasiswa',
    image: '/assets/img/featured-1.png',
    slug: 'cara-mudah-kuliah-luar-negeri-beasiswa-1',
  },
  {
    id: 2,
    title: 'Penting! Cara Mudah agar Bisa Kuliah di Luar Negeri dengan Beasiswa',
    image: '/assets/img/featured-2.png',
    slug: 'cara-mudah-kuliah-luar-negeri-beasiswa-2',
  },
]

const latestArticles: ArticleItem[] = [
  {
    id: 3,
    title: 'Penting! Cara Mudah agar Bisa Kuliah di Luar Negeri dengan Beasiswa',
    date: 'Selasa, 18 Feb 2020 12:01 WIB',
    image: '/assets/img/list-1.png',
    slug: 'cara-mudah-kuliah-luar-negeri-beasiswa-3',
  },
  {
    id: 4,
    title: 'Penting! Cara Mudah agar Bisa Kuliah di Luar Negeri dengan Beasiswa',
    date: 'Selasa, 18 Feb 2020 12:01 WIB',
    image: '/assets/img/list-2.png',
    slug: 'cara-mudah-kuliah-luar-negeri-beasiswa-4',
  },
  {
    id: 5,
    title: 'Penting! Cara Mudah agar Bisa Kuliah di Luar Negeri dengan Beasiswa',
    date: 'Selasa, 18 Feb 2020 12:01 WIB',
    image: '/assets/img/list-3.png',
    slug: 'cara-mudah-kuliah-luar-negeri-beasiswa-5',
  },
  {
    id: 6,
    title: 'Penting! Cara Mudah agar Bisa Kuliah di Luar Negeri dengan Beasiswa',
    date: 'Selasa, 18 Feb 2020 12:01 WIB',
    image: '/assets/img/list-4.png',
    slug: 'cara-mudah-kuliah-luar-negeri-beasiswa-6',
  },
  {
    id: 7,
    title: 'Penting! Cara Mudah agar Bisa Kuliah di Luar Negeri dengan Beasiswa',
    date: 'Selasa, 18 Feb 2020 12:01 WIB',
    image: '/assets/img/list-5.png',
    slug: 'cara-mudah-kuliah-luar-negeri-beasiswa-7',
  },
]

export default function ArtikelPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. HERO FEATURED BANNER */}
      <section className="relative w-full h-95 md:h-112.5 flex items-end">
        <Image
          src="/assets/img/hero-artikel.png"
          alt="Featured Article"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

        <div className="relative z-10 max-w-4xl w-full mx-auto px-6 pb-10 text-white">
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-sm mb-3 inline-block">
            TIPS
          </span>
          <h1 className="text-xl md:text-3xl font-bold leading-tight max-w-2xl">
            Penting! Cara Mudah agar Bisa Kuliah di Luar Negeri dengan Beasiswa
          </h1>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* 2. TOP FEATURED CARDS (GRID 2 KOLOM) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-16">
          {topFeatured.map((item) => (
            <Link key={item.id} href={`/artikel/${item.slug}`} className="group">
              <div className="relative w-full h-48 md:h-52 rounded-xl overflow-hidden shadow-sm border border-gray-100 mb-3">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-[#1E40AF] transition-colors leading-snug">
                {item.title}
              </h3>
            </Link>
          ))}
        </section>

        {/* 3. LIST ARTIKEL TERBARU (VERTIKAL) */}
        <section className="mb-12">
          <h2 className="text-xs md:text-sm font-bold tracking-widest text-gray-500 uppercase mb-6">
            ARTIKEL TERBARU
          </h2>

          <div className="space-y-6">
            {latestArticles.map((article) => (
              <Link
                key={article.id}
                href={`/artikel/${article.slug}`}
                className="group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start pb-6 border-b border-gray-100"
              >
                {/* Thumbnail Gambar */}
                <div className="relative w-full sm:w-52 h-36 sm:h-32 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Info & Judul Artikel */}
                <div className="flex flex-col justify-center py-1">
                  <h3 className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-[#1E40AF] transition-colors leading-snug mb-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">
                    {article.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 4. PAGINATION */}
        <div className="flex items-center justify-center gap-2 pt-4 pb-8">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2B6CB0] text-white text-xs font-semibold shadow-sm">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 text-xs font-semibold transition-colors">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 text-xs font-semibold transition-colors">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 text-xs font-semibold transition-colors">
            4
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 text-xs font-semibold transition-colors">
            5
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 text-xs font-semibold transition-colors">
            →
          </button>
        </div>

      </div>

      {/* 5. FOOTER HUBUNGI KAMI */}
      <ContactFooter />
    </main>
  )
}