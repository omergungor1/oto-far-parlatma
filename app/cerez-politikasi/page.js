export const metadata = {
  title: "Çerez Politikası",
  description: "otofarparlatma.com çerez politikası. Web sitesinde kullanılan çerezler hakkında bilgi.",
  openGraph: { title: "Çerez Politikası | otofarparlatma.com", url: "/cerez-politikasi" },
  alternates: { canonical: "/cerez-politikasi" },
  robots: "index, follow",
};

export default function CerezPolitikasiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-[var(--color-primary)]">Çerez Politikası</h1>
      <p className="mt-2 text-[var(--color-muted)]">Son güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>

      <div className="prose prose-slate mt-10 max-w-none space-y-6 text-[var(--color-foreground)]">
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">1. Çerez Nedir?</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Çerezler, web siteleri tarafından cihazınıza (bilgisayar, tablet, telefon) kaydedilen küçük metin dosyalarıdır. Site deneyimini iyileştirmek, trafik analizi ve tercihlerinizi hatırlamak amacıyla kullanılabilir.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">2. Kullandığımız Çerezler</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Web sitemizde zorunlu (site işlevselliği), performans ve analitik amaçlı çerezler kullanılabilir. Üçüncü taraf hizmetleri (ör. analitik) kendi çerez politikalarına tabidir.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">3. Çerez Yönetimi</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Tarayıcı ayarlarınızdan çerezleri silebilir veya belirli siteler için engelleyebilirsiniz. Çerezleri kapatmanız halinde bazı site özellikleri düzgün çalışmayabilir.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">4. İletişim</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Çerez politikası hakkında sorularınız için <a href="/iletisim" className="text-[var(--color-accent)] hover:underline">İletişim</a> sayfamızdan bize ulaşabilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
