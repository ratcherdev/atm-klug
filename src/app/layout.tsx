import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Klug - Ingin Kuliah dan Berkarir di Luar Negeri?",
  description: "Portal pendaftaran kuliah luar negeri",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased flex flex-col">
        {/* Navbar otomatis ada di paling atas seluruh halaman */}
        <Navbar />

        {/* Halaman dinamis (page.tsx) akan dirender di sini */}
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
