import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hizmetler | Mobil Far Temizleme, UV Koruma, Yerinde Servis",
  description:
    "Bursa'da mobil far temizleme, UV koruma uygulaması ve yerinde mobil servis. Far parlatma hizmetleri.",
  openGraph: {
    title: "Hizmetler | otofarparlatma.com",
    description: "Mobil far temizleme, UV koruma, yerinde servis.",
    url: "/hizmetler",
  },
  alternates: { canonical: "/hizmetler" },
};

const hizmetler = [
  {
    slug: "mobil-far-temizleme",
    title: "Mobil Far Temizleme",
    desc: "Aracınızın bulunduğu yerde profesyonel far temizliği yapıyoruz. Sararma, bulanıklık ve çizikler giderilir; far yüzeyi parlatılır.",
    image: "/images/services/far-zipara-1.jpg",
    alt: "Bursa mobil oto far parlatma far temizleme hizmeti",
  },
  {
    slug: "uv-koruma",
    title: "UV Koruma Uygulaması",
    desc: "Far yüzeyine UV koruma uygulaması ile güneş ve dış etkenlere karşı koruma sağlanır. Üst paket ile sunulur.",
    image: "/images/services/far-seramik-kaplama.webp",
    alt: "Far UV koruma uygulaması Bursa oto far parlatma",
  },
  {
    slug: "yerinde-mobil-servis",
    title: "Yerinde Mobil Servis",
    desc: "Bursa genelinde adresinize kadar geliyoruz. Sanayiye gitmeden ev, iş veya park yerinizde far parlatma hizmeti.",
    image: "/images/trust/far-cila-3.webp",
    alt: "Yerinde mobil far parlatma servisi Bursa",
  },
];

const paketler = [
  {
    id: "standart",
    ad: "Paket 1 – Standart",
    fiyat: "1.200₺",
    aciklama: "Servis ücreti dahil, 6 ay garanti. Far temizleme ve parlatma; sararma ve bulanıklık giderilir.",
  },
  {
    id: "seramik",
    ad: "Paket 2 – Seramik Kaplamalı",
    fiyat: "1.500₺",
    aciklama: "Standart işleme ek olarak seramik kaplama uygulaması. Koruyuculuk 6–12 ay; UV ve hafif çizilmelere karşı dayanıklılık, parlak görünüm.",
  },
  {
    id: "ppf",
    ad: "Paket 3 – PPF / TPU Film Kaplama",
    fiyat: "3.200₺",
    aciklama: "Far yüzeyine PPF/TPU film kaplama. Koruyuculuk 5–10 yıl; çizilme ve taş darbelerine karşı yüksek koruma, uzun ömürlü kullanım.",
  },
];

const indirimler = [
  { label: "Aynı araç 2. çağrı", value: "%40 indirim" },
  { label: "Referans ile çağrı", value: "%30 indirim" },
];

export default function HizmetlerPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
        Hizmetler
      </h1>
      <p className="mt-2 text-lg text-[var(--color-muted)]">
        Bursa&apos;da mobil oto far parlatma ve far temizleme hizmetleri.
      </p>

      <div className="mt-12 space-y-16">
        {hizmetler.map((h) => (
          <article key={h.slug} className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <Image
                src={h.image}
                alt={h.alt}
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)]">{h.title}</h2>
              <p className="mt-4 text-[var(--color-muted)]">{h.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="text-xl font-bold text-[var(--color-primary)]">Paketler ve Fiyatlar</h2>
        <p className="mt-1 text-sm text-[var(--color-muted)]">Bursa geneli servis dahil. Randevu alırken paket seçebilirsiniz.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {paketler.map((p) => (
            <div key={p.id} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-bold text-[var(--color-primary)]">{p.ad}</h3>
              <p className="mt-1 text-lg font-semibold text-[var(--color-accent)]">{p.fiyat}</p>
              <p className="mt-3 text-sm text-[var(--color-muted)]">{p.aciklama}</p>
              {p.id === "standart" && (
                <span className="mt-3 inline-flex rounded-full bg-[var(--color-success)]/20 px-2 py-0.5 text-xs font-medium text-[var(--color-success)]">
                  6 ay garanti dahil
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-slate-200 bg-[var(--color-surface)] p-4">
          <p className="text-sm font-medium text-[var(--color-foreground)]">İndirimler</p>
          <ul className="mt-2 space-y-1 text-sm text-[var(--color-muted)]">
            {indirimler.map(({ label, value }) => (
              <li key={label} className="flex justify-between">
                <span>{label}</span>
                <span className="font-medium text-[var(--color-primary)]">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/randevu-al"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-6 font-medium text-[var(--color-primary)] hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          Randevu Al
        </Link>
      </div>
    </div>
  );
}
