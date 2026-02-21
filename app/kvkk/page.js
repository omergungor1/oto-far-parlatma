export const metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "otofarparlatma.com KVKK aydınlatma metni. Kişisel verilerin işlenmesi hakkında bilgilendirme.",
  openGraph: { title: "KVKK Aydınlatma Metni | otofarparlatma.com", url: "/kvkk" },
  alternates: { canonical: "/kvkk" },
  robots: "index, follow",
};

export default function KvkkPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-[var(--color-primary)]">KVKK Aydınlatma Metni</h1>
      <p className="mt-2 text-[var(--color-muted)]">6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.</p>

      <div className="prose prose-slate mt-10 max-w-none space-y-6 text-[var(--color-foreground)]">
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">1. Veri Sorumlusu</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Kişisel verileriniz, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca veri sorumlusu sıfatıyla otofarparlatma.com tarafından işlenmektedir.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">2. İşlenen Kişisel Veriler</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Kimlik (ad, soyad), iletişim (telefon, e-posta), araç bilgisi ve konum (ilçe) verileriniz randevu ve hizmet süreçleri kapsamında işlenebilmektedir.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">3. İşleme Amaçları ve Hukuki Sebepler</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Verileriniz; randevu oluşturma, iletişim kurma, hizmet sunumu ve sözleşmesel/meşru menfaat kapsamında KVKK&apos;nın 5. ve 6. maddelerine uygun olarak işlenmektedir.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">4. Aktarım</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            Kişisel verileriniz, yalnızca yasal zorunluluk veya hizmet gerekliliği hallerinde ve KVKK&apos;da öngörülen şartlara uygun olarak üçüncü kişilere aktarılabilir.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">5. Haklarınız</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            KVKK&apos;nın 11. maddesi kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik/yanlış işlenmişse düzeltilmesini isteme, silme veya yok etme talep etme ve otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme haklarına sahipsiniz. Başvurularınızı yazılı veya Kayıtlı Elektronik Posta (KEP) ile iletebilirsiniz.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]">6. İletişim</h2>
          <p className="mt-2 text-[var(--color-muted)]">
            KVKK ile ilgili talepleriniz için <a href="/iletisim" className="text-[var(--color-accent)] hover:underline">İletişim</a> sayfamızdan bize ulaşabilirsiniz.
          </p>
        </section>
      </div>
    </div>
  );
}
