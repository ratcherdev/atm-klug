import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layouts/Navbar";
import ContactFooter from "@/components/layouts/ContactFooter";
import PageArrows from "@/components/layouts/PageArrows";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "klug - Ingin Kuliah dan Berkarir di Luar Negeri?",
  description:
    "INAKLUG adalah konsultan pendidikan internasional untuk kuliah, perjalanan wisata, dan berkarir di luar negeri.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="bg-white font-sans text-[#4a4a4a] antialiased">
        <div className="design-canvas min-h-screen">
          <Navbar />
          <main>{children}</main>
          <ContactFooter />
        </div>
        <PageArrows />
      </body>
    </html>
  );
}
