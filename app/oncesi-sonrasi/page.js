import Image from "next/image";

export const metadata = {
  title: "Öncesi Sonrası | Bursa Mobil Oto Far Parlatma Galerisi",
  description:
    "Bursa mobil oto far parlatma öncesi sonrası görselleri. Araç marka ve model bazlı far temizleme sonuçları.",
  openGraph: {
    title: "Öncesi Sonrası | otofarparlatma.com",
    description: "Bursa oto far parlatma öncesi sonrası galerisi.",
    url: "/oncesi-sonrasi",
  },
  alternates: { canonical: "/oncesi-sonrasi" },
};

const galeri = [
  { src: "/images/before-after/bmw-before-after-10.webp", marka: "BMW", aciklama: "Bursa mobil oto far parlatma öncesi sonrası BMW far temizliği." },
  { src: "/images/before-after/before-after-15.webp", marka: "Genel", aciklama: "Bursa far parlatma öncesi sonrası örnek çalışma." },
  { src: "/images/before-after/before-after-6.webp", marka: "Genel", aciklama: "Far sararması giderilmiş, parlak sonuç." },
  { src: "/images/before-after/before-after-1.jpg", marka: "Genel", aciklama: "Mobil far temizleme Bursa öncesi sonrası." },
  { src: "/images/before-after/before-after-2.jpeg", marka: "Genel", aciklama: "Bursa mobil oto far parlatma öncesi sonrası." },
  { src: "/images/before-after/before-after-3.jpeg", marka: "Genel", aciklama: "Far parlatma sonrası net görüş." },
  { src: "/images/before-after/before-after-4.jpeg", marka: "Genel", aciklama: "Yerinde far temizleme Bursa örnek." },
  { src: "/images/before-after/before-after-5.png", marka: "Genel", aciklama: "Bursa mobil far parlatma öncesi sonrası." },
  { src: "/images/before-after/before-after-7.jpg", marka: "Genel", aciklama: "Far cila ve parlatma sonucu." },
  { src: "/images/before-after/before-after-8.jpeg", marka: "Genel", aciklama: "Bursa oto far parlatma galeri." },
  { src: "/images/before-after/before-after-9.jpg", marka: "Genel", aciklama: "Mobil far parlatma öncesi sonrası." },
  { src: "/images/before-after/before-after-11.jpg", marka: "Genel", aciklama: "Bursa mobil oto far parlatma öncesi sonrası." },
  { src: "/images/before-after/before-after-12.jpg", marka: "Genel", aciklama: "Far temizleme Bursa görsel." },
  { src: "/images/before-after/before-after-13.jpg", marka: "Genel", aciklama: "Yerinde far parlatma Bursa." },
  { src: "/images/before-after/before-after-14.jpg", marka: "Genel", aciklama: "Bursa mobil far parlatma öncesi sonrası." },
];

export default function OncesiSonrasiPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
        Öncesi / Sonrası
      </h1>
      <p className="mt-2 text-lg text-[var(--color-muted)]">
        Bursa mobil oto far parlatma öncesi sonrası galerisi. Araç marka ve model bazlı çalışma örnekleri.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galeri.map((item, i) => (
          <figure key={i} className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src={item.src}
                alt={item.aciklama}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <figcaption className="border-t border-slate-100 bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-muted)]">
              <span className="font-medium text-[var(--color-primary)]">{item.marka}</span> — {item.aciklama}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
