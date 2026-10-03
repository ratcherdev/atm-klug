'use client'

import { useState } from 'react'
import Image from 'next/image'
import ContactFooter from '@/components/layouts/ContactFooter'

export default function HubungiKamiPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Process form submission logic
    console.log('Data terkirim:', formData)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-72 md:h-122.5 flex items-end">
        <Image
          src="/assets/img/contact-hero.jpg"
          alt="Hubungi Kami Header"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 max-w-5xl w-full mx-auto px-6 pb-8">
          <div className="inline-block px-8 py-4 text-white">
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider uppercase">
              HUBUNGI KAMI
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* 2. FORM KIRIM PESAN */}
        <section className="mb-20">
          <h2 className="text-xl md:text-2xl font-bold tracking-widest text-gray-800 uppercase mb-8">
            KIRIM PESAN
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Grid Input 2 Kolom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nama */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Nama*
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama lengkap Anda..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pb-2 border-b border-gray-300 focus:border-[#1E40AF] focus:outline-none text-sm transition-colors bg-transparent"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  E-Mail*
                </label>
                <input
                  type="email"
                  required
                  placeholder="Alamat E-Mail Anda..."
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pb-2 border-b border-gray-300 focus:border-[#1E40AF] focus:outline-none text-sm transition-colors bg-transparent"
                />
              </div>

              {/* Perusahaan / Organisasi */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Perusahaan / Organisasi
                </label>
                <input
                  type="text"
                  placeholder="Nama Perusahaan / Organisasi..."
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full pb-2 border-b border-gray-300 focus:border-[#1E40AF] focus:outline-none text-sm transition-colors bg-transparent"
                />
              </div>

              {/* Telepon */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Telepon
                </label>
                <input
                  type="tel"
                  placeholder="Nomor telepon Anda..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pb-2 border-b border-gray-300 focus:border-[#1E40AF] focus:outline-none text-sm transition-colors bg-transparent"
                />
              </div>
            </div>

            {/* Isi Pesan */}
            <div className="flex flex-col space-y-2 pt-2">
              <label className="text-sm font-semibold text-gray-700">
                Isi Pesan*
              </label>
              <textarea
                rows={4}
                required
                placeholder="Pesan Anda..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full pb-2 border-b border-gray-300 focus:border-[#1E40AF] focus:outline-none text-sm transition-colors resize-none bg-transparent"
              />
            </div>

            {/* ReCAPTCHA & Tombol Submit */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
              {/* Visual Mockup reCAPTCHA */}
              <div className="flex items-center gap-3 p-3 border border-gray-200 rounded bg-gray-50 text-xs text-gray-500 min-w-60">
                <input type="checkbox" className="w-5 h-5 accent-blue-600 cursor-pointer" id="recaptcha" />
                <label htmlFor="recaptcha" className="cursor-pointer select-none">I&apos;m not a robot</label>
                <div className="ml-auto flex flex-col items-end text-[10px] text-gray-400">
                  <span>reCAPTCHA</span>
                  <span>Privacy - Terms</span>
                </div>
              </div>

              {/* Tombol Kirim Pesan */}
              <button
                type="submit"
                className="w-full sm:w-auto border-2 border-gray-400 hover:border-gray-800 text-gray-700 hover:text-black font-semibold text-xs px-10 py-3 rounded-full uppercase tracking-wider transition-all"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </section>

        {/* 3. SECTION LOKASI KAMI */}
        <section className="space-y-8 border-t border-gray-100 pt-12">
          <h2 className="text-xl md:text-2xl font-bold tracking-widest text-gray-800 uppercase mb-6">
            LOKASI KAMI
          </h2>

          {/* Kantor Pusat */}
          <div className="space-y-2 text-gray-600 text-sm leading-relaxed">
            <h3 className="font-bold text-gray-800 tracking-wider text-base uppercase">
              KANTOR PUSAT
            </h3>
            <p>
              Gedung Ir. H. M. Suseno - Jl. R.P Soeroso No.6, Menteng, Jakarta Pusat
            </p>
            <p>
              Phone : (+62 21) 398 38706 - Fax : (+62 21) 316 1701
            </p>
            <p>
              Hotline : +6281519040071 / +62811998167
            </p>
          </div>

          {/* Kantor Cabang */}
          <div className="space-y-2 text-gray-600 text-sm leading-relaxed pt-4">
            <h3 className="font-bold text-gray-800 tracking-wider text-base uppercase">
              KANTOR CABANG
            </h3>
            <p>
              Gedung Ir. H. M. Suseno - Jl. R.P Soeroso No.6, Menteng, Jakarta Pusat
            </p>
            <p>
              Phone : (+62 21) 398 38706 - Fax : (+62 21) 316 1701
            </p>
            <p>
              Hotline : +6281519040071 / +62811998167
            </p>
          </div>
        </section>
      </div>

       <ContactFooter />
    </main>
  )
}