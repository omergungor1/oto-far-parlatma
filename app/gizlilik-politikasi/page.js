export const metadata = {
  title: "Gizlilik Politikası",
  description: "otofarparlatma.com gizlilik politikası. Kişisel verilerinizin işlenmesi ve korunması.",
  openGraph: { title: "Gizlilik Politikası | otofarparlatma.com", url: "/gizlilik-politikasi" },
  alternates: { canonical: "/gizlilik-politikasi" },
  robots: "index, follow",
};

export default function GizlilikPolitikasiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-[var(--color-primary)]">Gizlilik Politikası</h1>
      <p className="mt-2 text-[var(--color-muted)]">Son güncelleme: {new Date().toLocaleDateString("tr-TR")}</p>

      <div className="prose prose-slate mt-10 max-w-none space-y-6 text-[var(--color-foreground)]">
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">1. Giriş</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            otofarparlatma.com (&quot;biz&quot;, &quot;bizim&quot;) olarak kişisel verilerinizin güvenliği ve gizliliği konusunda hassasız. Bu Gizlilik Politikası, web sitemizi ziyaret ettiğinizde veya hizmetlerimizi kullandığınızda toplanan bilgilerin nasıl işlendiğini açıklamaktadır.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">2. Toplanan Veriler</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Randevu formu ve iletişim kanalları aracılığıyla ad soyad, telefon numarası, e-posta, araç bilgisi ve konum (ilçe) gibi kişisel verileriniz toplanabilir. Ziyaret bilgileri (IP, tarayıcı, cihaz) teknik amaçlarla kaydedilebilir.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">3. Verilerin Kullanım Amaçları</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Toplanan veriler randevu yönetimi, iletişim, hizmet sunumu ve yasal yükümlülüklerimizin yerine getirilmesi amacıyla kullanılmaktadır.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">4. Veri Güvenliği</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Kişisel verilerinizi yetkisiz erişime, kayba veya değişikliğe karşı korumak için uygun teknik ve idari tedbirleri alıyoruz.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">5. Haklarınız</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            KVKK kapsamında kişisel verilerinize erişim, düzeltme, silme ve itiraz haklarınız bulunmaktadır. Talepleriniz için iletişim sayfamızdaki kanalları kullanabilirsiniz.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">6. İletişim</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Gizlilik ile ilgili sorularınız için <a href="/iletisim" className="text-[var(--color-accent)] hover:underline">İletişim</a> sayfamızdan bize ulaşabilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
