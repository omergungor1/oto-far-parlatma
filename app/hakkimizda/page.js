import Image from "next/image";

export const metadata = {
  title: "Hakkımızda | Bursa Mobil Oto Far Parlatma",
  description:
    "Bursa'da yerinde mobil oto far parlatma hizmeti veriyoruz. Mobil hizmet anlayışı, güven ve profesyonellik.",
  openGraph: {
    title: "Hakkımızda | otofarparlatma.com",
    description: "Mobil hizmet anlayışı, neden yerinde servis, Bursa geneli hizmet.",
    url: "/hakkimizda",
  },
  alternates: { canonical: "/hakkimizda" },
};

export default function HakkimizdaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
        Hakkımızda
      </h1>
      <p className="mt-2 text-lg text-[var(--color-muted)]">
        Bursa&apos;da yerinde mobil oto far parlatma hizmeti veriyoruz.
      </p>

      <div className="relative mt-12 aspect-video max-h-80 overflow-hidden rounded-xl border border-slate-200 shadow-sm lg:max-h-96">
        <Image
          src="/images/hero/temiz-bmw-far.jpg"
          alt="Bursa mobil oto far parlatma hizmeti - temiz far"
          fill
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 1024px"
        />
      </div>

      <section className="mt-12 space-y-8">
        <div>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">Mobil Hizmet Anlayışı</h2>
          <p className="mt-3 text-[var(--color-muted)]">
            Aracınızı sanayiye veya servise götürmeden, sizin belirlediğiniz adreste far parlatma hizmeti sunuyoruz. Ev, iş yeri veya park yerinizde 45 dakika içinde profesyonel far temizliği yapıyoruz.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">Neden Yerinde Servis?</h2>
          <p className="mt-3 text-[var(--color-muted)]">
            Zaman ve konfor önemli. Yerinde servis ile hem zaman kazanıyorsunuz hem de aracınız gözünüzün önünde işlem görüyor. Bursa&apos;nın tüm ilçelerine mobil ekip ile ulaşıyoruz.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">Güven ve Profesyonellik</h2>
          <p className="mt-3 text-[var(--color-muted)]">
            Far parlatma işlemlerimizde profesyonel malzeme ve yöntemler kullanıyoruz. 6 ay garanti veriyoruz; müşteri memnuniyeti önceliğimizdir.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">Bursa Geneli Hizmet</h2>
          <p className="mt-3 text-[var(--color-muted)]">
            Nilüfer, Osmangazi, Yıldırım başta olmak üzere Bursa&apos;nın her ilçesine yerinde mobil far parlatma hizmeti veriyoruz. Randevu alarak size en uygun gün ve saati belirleyebilirsiniz.
          </p>
        </div>
      </section>
    </div>
  );
}
