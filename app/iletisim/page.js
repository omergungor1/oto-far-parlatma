export const metadata = {
  title: "İletişim | Bursa Mobil Oto Far Parlatma",
  description:
    "Bursa mobil oto far parlatma iletişim: telefon, WhatsApp, Instagram. Hizmet alanı Bursa, çalışma saatleri.",
  openGraph: {
    title: "İletişim | otofarparlatma.com",
    description: "Telefon, WhatsApp, Instagram. Bursa hizmet alanı.",
    url: "/iletisim",
  },
  alternates: { canonical: "/iletisim" },
};

const contactItems = [
  { label: "Telefon", value: "+90 555 123 45 67", href: "tel:+905551234567" },
  { label: "WhatsApp", value: "+90 555 123 45 67", href: "https://wa.me/905551234567" },
  { label: "Instagram", value: "@otofarparlatma", href: "https://instagram.com/otofarparlatma" },
];

export default function IletisimPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-[var(--color-primary)] sm:text-4xl">
        İletişim
      </h1>
      <p className="mt-2 text-lg text-[var(--color-muted)]">
        Randevu ve bilgi için bize ulaşın.
      </p>

      <div className="mt-10 space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        {contactItems.map((item) => (
          <div key={item.label}>
            <span className="block text-sm font-medium text-[var(--color-muted)]">{item.label}</span>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="mt-1 block text-lg font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {item.value}
            </a>
          </div>
        ))}
        <div>
          <span className="block text-sm font-medium text-[var(--color-muted)]">Hizmet Alanı</span>
          <p className="mt-1 text-[var(--color-foreground)]">Bursa (tüm ilçeler)</p>
        </div>
        <div>
          <span className="block text-sm font-medium text-[var(--color-muted)]">Çalışma Saatleri</span>
          <p className="mt-1 text-[var(--color-foreground)]">
            Hafta içi ve hafta sonu randevu ile hizmet veriyoruz. Randevu alarak uygun saatte yerinde servis talep edebilirsiniz.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="tel:+905551234567"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-6 font-medium text-[var(--color-primary)] hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          Hemen Ara
        </a>
      </div>
    </div>
  );
}
