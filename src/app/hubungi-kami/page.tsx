"use client";

import { FormEvent, useState } from "react";
import Photo from "@/components/Photo";

const address = {
  line: "Gedung Ir. H. M. Suseno - Jl. R.P Soeroso No.6, Menteng, Jakarta Pusat",
  phone: "Phone : (+62 21) 398 38706 - Fax : (+62 21) 316 1701",
  hotline: "Hotline : +6281519040071 / +62811998167",
};

export default function HubungiKamiPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div>
      <Photo src="/design/hero-hubungi.jpg" alt="Hubungi Kami" className="block h-auto w-full" />

      <div className="mx-auto max-w-[860px] px-8 pt-16 pb-8">
        <section id="pesan">
          <h2 className="text-[18px] font-semibold tracking-[0.22em] text-[#4a4a4a] uppercase">
            Kirim Pesan
          </h2>
          <form onSubmit={onSubmit} className="mt-10">
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
              <Field label="Nama*" name="name" placeholder="Nama lengkap Anda" required />
              <Field label="E-Mail*" name="email" type="email" placeholder="Alamat Email Anda" required />
              <Field
                label="Perusahaan / Organisasi"
                name="organization"
                placeholder="Nama Perusahaan / Organisasi"
              />
              <Field label="Telepon" name="phone" placeholder="Nomor telepon Anda" />
            </div>

            <label className="mt-10 block text-[14px] text-[#4a4a4a]">
              Isi Pesan*
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Isi pesan Anda..."
                className="mt-3 w-full resize-none border-b border-[#cfcfcf] bg-transparent py-2 text-[14px] text-[#4a4a4a] placeholder:text-[#9a9a9a] focus:border-[#4a4a4a] focus:outline-none"
              />
            </label>

            <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div className="flex min-w-[260px] items-center gap-3 rounded-[4px] border border-white/15 bg-white px-3 py-2.5 text-black">
                <input id="robot" type="checkbox" className="h-5 w-5" />
                <label htmlFor="robot" className="text-[13px]">
                  I&apos;m not a robot
                </label>
                <span className="ml-auto text-right text-[9px] leading-tight text-neutral-500">
                  reCAPTCHA
                  <br />
                  Privacy - Terms
                </span>
              </div>
              <button
                type="submit"
                className="inline-flex rounded-full bg-gradient-to-r from-[#6a2788] via-[#3d62c8] to-[#3aa4e4] p-[1.5px]"
              >
                <span className="rounded-full bg-white px-8 py-2.5 text-[12px] font-semibold tracking-[0.14em] text-[#4a4a4a] uppercase">
                  Kirim Pesan
                </span>
              </button>
            </div>
            {sent ? (
              <p className="mt-6 text-[13px] text-[#4a4a4a]">Pesan Anda sudah tercatat di formulir ini.</p>
            ) : null}
          </form>
        </section>

        <div className="rule mt-14" />

        <section id="lokasi" className="pt-12 pb-6">
          <h2 className="text-[18px] font-semibold tracking-[0.22em] text-[#4a4a4a] uppercase">
            Lokasi Kami
          </h2>
          <div className="mt-8 space-y-8 text-[14px] leading-7 text-[#4a4a4a]">
            <div>
              <h3 className="font-semibold tracking-[0.16em] text-[#4a4a4a] uppercase">Kantor Pusat</h3>
              <p className="mt-2">{address.line}</p>
              <p>{address.phone}</p>
              <p>{address.hotline}</p>
            </div>
            <div>
              <h3 className="font-semibold tracking-[0.16em] text-[#4a4a4a] uppercase">Kantor Cabang</h3>
              <p className="mt-2">{address.line}</p>
              <p>{address.phone}</p>
              <p>{address.hotline}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-[14px] text-[#4a4a4a]">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-[#cfcfcf] bg-transparent py-2 text-[14px] text-[#4a4a4a] placeholder:text-[#9a9a9a] focus:border-[#4a4a4a] focus:outline-none"
      />
    </label>
  );
}
