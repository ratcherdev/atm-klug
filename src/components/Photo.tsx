import Image from "next/image";

const dimension: Record<string, { width: number; height: number }> = {
  "/design/hero.jpg": { width: 2000, height: 996 },
  "/design/hero-tentang.jpg": { width: 1100, height: 336 },
  "/design/hero-layanan.jpg": { width: 1100, height: 355 },
  "/design/hero-artikel.jpg": { width: 1100, height: 384 },
  "/design/hero-hubungi.jpg": { width: 1100, height: 339 },
  "/design/hero-ausbildung.jpg": { width: 1100, height: 341 },
  "/design/detail-hero.jpg": { width: 787, height: 323 },
  "/design/s1.png": { width: 720, height: 540 },
  "/design/s2.png": { width: 720, height: 540 },
  "/design/s3.png": { width: 720, height: 540 },
  "/design/kursus.png": { width: 720, height: 540 },
  "/design/tour.png": { width: 720, height: 540 },
  "/design/ausbildung.png": { width: 720, height: 540 },
  "/design/partner-1.png": { width: 404, height: 229 },
  "/design/partner-2.png": { width: 344, height: 229 },
  "/design/partner-3.png": { width: 360, height: 229 },
  "/design/partner-4.png": { width: 404, height: 229 },
  "/design/article-1.png": { width: 720, height: 390 },
  "/design/article-2.png": { width: 720, height: 390 },
  "/design/article-3.png": { width: 720, height: 389 },
  "/design/article-4.png": { width: 720, height: 389 },
  "/design/feat-1.png": { width: 292, height: 167 },
  "/design/feat-2.png": { width: 292, height: 167 },
  "/design/list-1.png": { width: 167, height: 130 },
  "/design/list-2.png": { width: 231, height: 131 },
  "/design/list-3.png": { width: 231, height: 133 },
  "/design/list-4.png": { width: 231, height: 133 },
  "/design/list-5.png": { width: 231, height: 133 },
  "/design/visi.png": { width: 392, height: 208 },
  "/design/misi.png": { width: 392, height: 208 },
};

export default function Photo({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const size = dimension[src] ?? { width: 1200, height: 800 };
  const fluid = className?.includes("h-auto");
  return (
    <Image
      src={src}
      alt={alt}
      width={size.width}
      height={size.height}
      priority={priority}
      className={className}
      style={fluid ? { width: "100%", height: "auto" } : undefined}
    />
  );
}
