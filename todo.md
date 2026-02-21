Next.js (App Router) kullanarak otofarparlatma.com alan adı için 
HIZLI, SEO uyumlu, mobil öncelikli bir web sitesi geliştir.

GENEL TEKNİK GEREKSİNİMLER:
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Tüm sayfalar SEO uyumlu olacak
- Tüm sayfalar SSG (Static Site Generation) olacak
- Sadece /randevu-al sayfası ileride Supabase bağlanacağı için client-side hazırlanacak
- Sayfa açılışları çok hızlı olmalı (Lighthouse >90 hedefle)
- Mock data kullanılacak (ileride Supabase bağlanacak)
- Domain: otofarparlatma.com
- Dil: Türkçe
- Responsive (mobil-first)
- Clean ve güven veren tasarım
- Sticky header + mobilde sabit “Randevu Al” ve “Ara” butonu

--------------------------------------------------
SAYFA YAPISI & İÇERİKLER
--------------------------------------------------

### 1) ANA SAYFA (/)
SEO Title:
"Bursa Mobil Oto Far Parlatma | Yerinde Far Temizleme - otofarparlatma.com"

Meta Description:
"Bursa’nın her yerine yerinde mobil oto far parlatma hizmeti. 45 dakikada profesyonel far temizleme, 6 ay garantili. Hemen randevu al."

İçerik bölümleri:
- HERO:
  Başlık (H1):
  "Bursa’da Yerinde Mobil Oto Far Parlatma"

  Alt metin:
  "Aracınızı sanayiye götürmeden, 45 dakikada profesyonel far temizleme ve parlatma."

  Bullet avantajlar:
  - Bursa’nın her yerine mobil servis
  - Ortalama 45 dakika
  - 6 ay garanti
  - Ön ödeme yok

  CTA:
  - Randevu Al
  - Ara

- Öncesi / Sonrası görsel alanı (mock image)
- Hizmet özetleri
- Fiyat bilgisi özet
- Nasıl çalışır (4 adım)
- Güven alanı (yorum placeholder)
- Alt CTA

--------------------------------------------------

### 2) RANDEVU AL (/randevu-al)
CLIENT COMPONENT olarak yaz.

Form alanları (mock):
- Ad Soyad
- Telefon
- Araç Marka / Model
- Konum (ilçe seçimi)
- Hizmet Paketi (Standart / Üst Paket)
- Tarih & Saat

Bilgi metni:
"Randevular telefonla onaylanmaktadır. Ön ödeme alınmaz."

Form submit şimdilik console.log yapsın.

--------------------------------------------------

### 3) HİZMETLER (/hizmetler)
SEO uyumlu detay sayfası.

Hizmetler:
- Mobil Far Temizleme
- UV Koruma Uygulaması
- Yerinde Mobil Servis

NOT:
"Far yenileme hizmeti vermiyoruz" bilgisi sade bir bilgilendirme olarak yazılsın.

--------------------------------------------------

### 4) ÖNCESİ / SONRASI (/oncesi-sonrasi)
- Araç marka/model bazlı mock galeri
- Gerçekçi açıklamalar
- SEO için açıklayıcı metinler

--------------------------------------------------

### 5) FİYAT TARİFESİ (Ana sayfa + Hizmetler içinde)
Fiyat bilgileri:
- Bursa’nın her yerine servis: 1200₺
- Standart Paket: 1200₺
- Üst Paket (UV koruma): 1400₺
- 6 ay garanti
- Aynı araç için 2. çağırma: %40 indirim
- Referans ile çağırma: %30 indirim

--------------------------------------------------

### 6) HAKKIMIZDA (/hakkimizda)
- Mobil hizmet anlayışı
- Neden yerinde servis?
- Güven ve profesyonellik vurgusu
- Bursa geneli hizmet

--------------------------------------------------

### 7) İLETİŞİM (/iletisim)
- Telefon
- WhatsApp
- Instagram
- Hizmet alanı: Bursa
- Çalışma saatleri

--------------------------------------------------

### 8) YASAL SAYFALAR
Footer’da linkli olacak:
- Gizlilik Politikası (/gizlilik-politikasi)
- KVKK Aydınlatma Metni (/kvkk)
- Çerez Politikası (/cerez-politikasi)

--------------------------------------------------

SEO & PERFORMANS:
- Her sayfa için metadata API kullan
- H1, H2, H3 hiyerarşisine dikkat et
- Görseller lazy-load
- Font ve asset optimizasyonu yap
- Canonical URL ekle
- Open Graph & Twitter Card ekle

--------------------------------------------------

Kod yapısını clean, ölçeklenebilir ve Supabase entegrasyonuna hazır yaz.

not: Görseller SEO için alt text şart:
- “Bursa mobil oto far parlatma öncesi sonrası” gibi...

Kullanacağın görselleri public/images altına ekledim. Tüm images klasörünü incele ve oradaki görsellerin tamamını kullanabilirsin. images altında kategorize bir şekilde görselleri ekledim. Images altında 4 adet klasör var: before-after, hero, services, trust -> Tüm resimleri kullanabilirsin. 

public/logo.png -> logomuz olarak kullanabilirsin.


ÖNERİLEN ANA PALET (En Doğru Seçim)
Ana Renk – Derin Mavi

Hex: #0F172A veya #111827
Algı: Güven, teknik servis, profesyonellik
Otomotiv sektöründe en çok dönüşüm alan renk

Yardımcı Renk – Beyaz / Açık Gri

Hex: #FFFFFF, #F8FAFC
Algı: Temizlik, şeffaflık
Far temizleme işine birebir

Vurgu Rengi – Amber / Sarı

Hex: #FBBF24 veya #F59E0B
Algı: Far ışığı, dikkat, CTA
Sadece butonlarda & ikonlarda kullan

Opsiyonel Destek Rengi – Açık Yeşil

Hex: #22C55E
Algı: Garanti, onay, başarı
“6 ay garanti” badge’lerinde

Kaçınılması Gerekenler:
- Kırmızı ağırlıklı palet (agresif)
- Çok koyu siyah (kirli algı)
- Fazla renk (amatör görünür)