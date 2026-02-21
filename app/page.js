import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Bursa Mobil Oto Far Parlatma | Yerinde Far Temizleme",
  description:
    "Bursa'nın her yerine yerinde mobil oto far parlatma hizmeti. 45 dakikada profesyonel far temizleme, 6 ay garantili. Hemen randevu al.",
  openGraph: {
    title: "Bursa Mobil Oto Far Parlatma | Yerinde Far Temizleme",
    description:
      "Bursa'nın her yerine yerinde mobil oto far parlatma. 45 dakikada profesyonel far temizleme, 6 ay garantili.",
    url: "/",
  },
  alternates: { canonical: "/" },
};

const advantages = [
  "Bursa'nın her yerine mobil servis",
  "Ortalama 45 dakika",
  "6 ay garanti",
  "Ön ödeme yok",
];

const steps = [
  { title: "Randevu Al", desc: "Telefon veya web üzerinden randevu oluşturun." },
  { title: "Yer ve Saat", desc: "Adresinizi ve uygun saatinizi belirleyin." },
  { title: "Yerinde Servis", desc: "Ekibimiz aracınızın yanına gelir." },
  { title: "Far Parlatma", desc: "45 dakikada profesyonel far temizliği tamamlanır." },
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

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--color-primary)] text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero/bmw-gece-far.webp"
            alt="Bursa mobil oto far parlatma öncesi sonrası"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Bursa&apos;da Yerinde Mobil Oto Far Parlatma
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Aracınızı sanayiye götürmeden, 45 dakikada profesyonel far temizleme ve parlatma.
          </p>
          <ul className="mt-6 space-y-2">
            {advantages.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/randevu-al"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-6 font-medium text-[var(--color-primary)] hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Randevu Al
            </Link>
            <a
              href="tel:+905551234567"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white px-6 font-medium hover:bg-white/10 transition-colors"
            >
              Ara
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
          Öncesi / Sonrası
        </h2>
        <p className="mt-2 text-[var(--color-muted)]">
          Bursa mobil oto far parlatma öncesi sonrası görselleri.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "/images/before-after/bmw-before-after-10.webp",
            "/images/before-after/before-after-15.webp",
            "/images/before-after/before-after-6.webp",
          ].map((src, i) => (
            <div key={src} className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <Image
                src={src}
                alt={`Bursa mobil oto far parlatma öncesi sonrası örnek ${i + 1}`}
                width={600}
                height={400}
                className="h-56 w-full object-cover"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/oncesi-sonrasi"
            className="inline-flex items-center text-[var(--color-accent)] font-medium hover:underline"
          >
            Tüm galeriye git →
          </Link>
        </div>
      </section>

      <section className="bg-[var(--color-surface)] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
            Hizmet Özetleri
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="relative h-40 overflow-hidden rounded-lg">
                <Image
                  src="/images/services/far-zipara-1.jpg"
                  alt="Mobil far temizleme - Bursa oto far parlatma"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <h3 className="mt-4 font-semibold text-[var(--color-primary)]">Mobil Far Temizleme</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Aracınızın bulunduğu yerde profesyonel far temizliği.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="relative h-40 overflow-hidden rounded-lg">
                <Image
                  src="/images/services/far-seramik-kaplama.webp"
                  alt="UV koruma uygulaması - far parlatma Bursa"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <h3 className="mt-4 font-semibold text-[var(--color-primary)]">UV Koruma</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Far yüzeyine UV koruma uygulaması ile uzun ömür.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="relative h-40 overflow-hidden rounded-lg">
                <Image
                  src="/images/trust/far-cila-3.webp"
                  alt="Yerinde mobil servis Bursa far parlatma"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <h3 className="mt-4 font-semibold text-[var(--color-primary)]">Yerinde Servis</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                Bursa genelinde adresinize kadar geliyoruz.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/hizmetler"
              className="inline-flex items-center text-[var(--color-accent)] font-medium hover:underline"
            >
              Hizmet detayları →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
          Fiyat Bilgisi
        </h2>
        <p className="mt-2 text-[var(--color-muted)]">
          Bursa geneli servis dahil. İstediğiniz paketi seçebilirsiniz.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {paketler.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
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
        <div className="mt-6 rounded-xl border border-slate-200 bg-[var(--color-surface)] p-4 md:max-w-2xl">
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
      </section>

      <section className="bg-[var(--color-surface)] py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
            Nasıl Çalışır?
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="rounded-xl bg-white p-6 shadow-sm">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-bold text-[var(--color-primary)]">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-semibold text-[var(--color-primary)]">{step.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
          Müşteri Güveni
        </h2>
        <p className="mt-2 text-[var(--color-muted)]">
          Bursa&apos;da binlerce araca yerinde far parlatma hizmeti verdik.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="relative h-64 overflow-hidden rounded-xl">
            <Image
              src="/images/trust/bmw-before-after-10.webp"
              alt="Bursa mobil oto far parlatma öncesi sonrası BMW"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="relative h-64 overflow-hidden rounded-xl">
            <Image
              src="/images/trust/far-cila-3.webp"
              alt="Far cila ve parlatma Bursa mobil servis"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="mt-8 rounded-xl border border-slate-200 bg-[var(--color-surface)] p-6">
          <p className="italic text-[var(--color-muted)]">
            &ldquo;Aracımı sanayiye götürmeden evimin önünde far parlatma yaptırdım. Çok memnunum.&rdquo;
          </p>
          <p className="mt-2 text-sm font-medium text-[var(--color-primary)]">— Bursa</p>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Hemen Randevu Alın
          </h2>
          <p className="mt-4 text-white/90">
            45 dakikada profesyonel far temizliği. Bursa&apos;nın her yerine mobil servis.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/randevu-al"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-6 font-medium text-[var(--color-primary)] hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Randevu Al
            </Link>
            <a
              href="tel:+905551234567"
              className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white px-6 font-medium hover:bg-white/10 transition-colors"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
