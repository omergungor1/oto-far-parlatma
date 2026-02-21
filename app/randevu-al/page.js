"use client";

import { useState, useMemo } from "react";

const AYLAR = [
  "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran",
  "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık",
];

const ILCELER = [
  "Nilüfer", "Osmangazi", "Yıldırım", "Mudanya", "Gemlik", "İnegöl",
  "Mustafakemalpaşa", "Orhangazi", "Kestel", "Gürsu", "Büyükorhan",
  "Harmancık", "İznik", "Karacabey", "Keles", "Orhaneli",
];

// Her seans 2 saat, ilk seans 10:00
const SEANSLAR = [
  { baslangic: "10:00", bitis: "12:00", id: "10:00" },
  { baslangic: "12:00", bitis: "14:00", id: "12:00" },
  { baslangic: "14:00", bitis: "16:00", id: "14:00" },
  { baslangic: "16:00", bitis: "18:00", id: "16:00" },
  { baslangic: "18:00", bitis: "20:00", id: "18:00" },
];

const PAKETLER = [
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
    aciklama: "Seramik kaplama uygulaması. Koruyuculuk 6–12 ay; UV ve hafif çizilmelere karşı dayanıklılık.",
  },
  {
    id: "ppf",
    ad: "Paket 3 – PPF / TPU Film Kaplama",
    fiyat: "3.200₺",
    aciklama: "PPF/TPU film kaplama. Koruyuculuk 5–10 yıl; çizilme ve taş darbelerine karşı yüksek koruma.",
  },
];

function getTodayStr() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function addDays(dateStr, n) {
  const d = new Date(dateStr + "T12:00:00");
  d.setDate(d.getDate() + n);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

// Mock: Tamamen dolu günler (takvimde kırmızı)
function getDoluGunler() {
  const today = getTodayStr();
  const set = new Set();
  for (let i = 1; i <= 60; i += 7) set.add(addDays(today, i)); // 1, 8, 15, 22... günler dolu
  set.add(addDays(today, 2));
  set.add(addDays(today, 5));
  return set;
}

// Mock: Belirli bir günde dolu seanslar (saat id'leri)
function getDoluSeanslar(dateStr) {
  const doluGunler = getDoluGunler();
  if (doluGunler.has(dateStr)) return ["10:00", "12:00", "14:00", "16:00", "18:00"];
  const day = new Date(dateStr).getDate();
  const mod = day % 4;
  if (mod === 0) return ["10:00", "16:00"];
  if (mod === 1) return ["12:00"];
  if (mod === 2) return ["14:00", "18:00"];
  return [];
}

function getTakvimGunleri(baslangicTarih, gunSayisi = 42) {
  const gunler = [];
  for (let i = 0; i < gunSayisi; i++) {
    const tarihStr = addDays(baslangicTarih, i);
    gunler.push({ tarihStr, gun: new Date(tarihStr + "T12:00:00").getDate() });
  }
  return gunler;
}

function getHaftaninIlkGunu(yil, ay) {
  const d = new Date(yil, ay, 1);
  const gun = d.getDay();
  return gun === 0 ? 6 : gun - 1;
}


export default function RandevuAlPage() {
  const [adim, setAdim] = useState("takvim");
  const [seciliTarih, setSeciliTarih] = useState(null);
  const [seciliSeans, setSeciliSeans] = useState(null);
  const [takvimAy, setTakvimAy] = useState(() => {
    const d = new Date();
    return { yil: d.getFullYear(), ay: d.getMonth() };
  });
  const [form, setForm] = useState({
    adSoyad: "",
    telefon: "",
    aracMarkaModel: "",
    konum: "",
    paket: "standart",
  });

  const bugunStr = getTodayStr();
  const doluGunler = useMemo(() => getDoluGunler(), []);
  const doluSeanslar = useMemo(() => (seciliTarih ? getDoluSeanslar(seciliTarih) : []), [seciliTarih]);

  const takvimGunleri = useMemo(() => {
    const { yil, ay } = takvimAy;
    const ilkGunOffset = getHaftaninIlkGunu(yil, ay);
    const ilkTarih = addDays(`${yil}-${String(ay + 1).padStart(2, "0")}-01`, -ilkGunOffset);
    return getTakvimGunleri(ilkTarih, 42);
  }, [takvimAy]);

  function tarihDolu(tarihStr) {
    return doluGunler.has(tarihStr);
  }

  function tarihGecmis(tarihStr) {
    return tarihStr < bugunStr;
  }

  function tarihMusait(tarihStr) {
    return !tarihGecmis(tarihStr) && !tarihDolu(tarihStr);
  }

  function seansDolu(seansId) {
    return doluSeanslar.includes(seansId);
  }

  function handleTarihSec(tarihStr) {
    if (tarihGecmis(tarihStr) || tarihDolu(tarihStr)) return;
    setSeciliTarih(tarihStr);
    setSeciliSeans(null);
    setAdim("seans");
  }

  function handleSeansSec(seansId) {
    if (seansDolu(seansId)) return;
    setSeciliSeans(seansId);
  }

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const randevu = {
      ...form,
      tarih: seciliTarih,
      seans: seciliSeans,
    };
    console.log("Randevu:", randevu);
    setAdim("basarili");
  }

  function oncekiAy() {
    setTakvimAy((prev) => {
      if (prev.ay === 0) return { yil: prev.yil - 1, ay: 11 };
      return { yil: prev.yil, ay: prev.ay - 1 };
    });
  }

  function sonrakiAy() {
    setTakvimAy((prev) => {
      if (prev.ay === 11) return { yil: prev.yil + 1, ay: 0 };
      return { yil: prev.yil, ay: prev.ay + 1 };
    });
  }


  // ——— Başarı ekranı ———
  if (adim === "basarili") {
    return (
      <div className="mx-auto max-w-lg px-4 py-12 sm:px-6">
        <div className="rounded-2xl border border-[var(--color-success)] bg-[var(--color-success)]/10 p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-success)] text-3xl text-white">
            ✓
          </div>
          <h1 className="mt-6 text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">
            Randevunuz başarıyla oluşturulmuştur
          </h1>
          <p className="mt-4 text-[var(--color-muted)]">
            Randevu bilgileri telefonunuza SMS ile iletilmiştir.
          </p>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Randevular telefonla onaylanmaktadır. Ön ödeme alınmaz.
          </p>
          <button
            type="button"
            onClick={() => {
              setAdim("takvim");
              setSeciliTarih(null);
              setSeciliSeans(null);
              setForm({ adSoyad: "", telefon: "", aracMarkaModel: "", konum: "", paket: "standart" });
            }}
            className="mt-8 w-full rounded-full bg-[var(--color-accent)] py-3 font-medium text-[var(--color-primary)] hover:bg-[var(--color-accent-hover)]"
          >
            Yeni Randevu Al
          </button>
        </div>
      </div>
    );
  }

  // ——— Adım 1: Takvim ———
  if (adim === "takvim") {
    return (
      <div className="mx-auto max-w-lg px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">Randevu Al</h1>
        <p className="mt-1 text-[var(--color-muted)]">Önce bir gün seçin</p>

        <div className="mt-6 flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
          <button
            type="button"
            onClick={oncekiAy}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-primary)] hover:bg-slate-100"
            aria-label="Önceki ay"
          >
            ←
          </button>
          <span className="font-semibold text-[var(--color-primary)]">
            {AYLAR[takvimAy.ay]} {takvimAy.yil}
          </span>
          <button
            type="button"
            onClick={sonrakiAy}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-primary)] hover:bg-slate-100"
            aria-label="Sonraki ay"
          >
            →
          </button>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-1 text-center text-xs font-medium text-[var(--color-muted)]">
          {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map((g) => (
            <div key={g}>{g}</div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-1">
          {takvimGunleri.map(({ tarihStr, gun }) => {
            const buAy = takvimAy.ay === new Date(tarihStr + "T12:00:00").getMonth();
            const gecmis = tarihGecmis(tarihStr);
            const dolu = tarihDolu(tarihStr);
            const musait = !gecmis && !dolu;
            const bugun = tarihStr === bugunStr;
            return (
              <button
                key={tarihStr}
                type="button"
                disabled={gecmis || dolu}
                onClick={() => handleTarihSec(tarihStr)}
                className={`
                  aspect-square min-h-[44px] rounded-lg text-sm font-medium transition touch-manipulation
                  sm:min-h-[48px]
                  ${!buAy ? "text-slate-400" : ""}
                  ${gecmis ? "cursor-not-allowed bg-slate-100 text-slate-400" : ""}
                  ${dolu ? "cursor-not-allowed bg-[var(--color-danger-bg)] text-[var(--color-danger)]" : ""}
                  ${musait ? "bg-[var(--color-success)]/20 text-[var(--color-success)] hover:bg-[var(--color-success)]/30 active:scale-95" : ""}
                  ${bugun && musait ? "ring-2 ring-[var(--color-primary)]" : ""}
                `}
              >
                {gun}
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-[var(--color-muted)]">
          <span className="flex items-center gap-1">
            <span className="h-4 w-4 rounded bg-[var(--color-success)]/20" /> Müsait gün
          </span>
          <span className="flex items-center gap-1">
            <span className="h-4 w-4 rounded bg-[var(--color-danger-bg)]" /> Dolu gün
          </span>
        </div>
      </div>
    );
  }

  // ——— Adım 2: Seans ———
  if (adim === "seans") {
    const tarihObj = seciliTarih ? new Date(seciliTarih + "T12:00:00") : null;
    const tarihLabel = tarihObj
      ? `${tarihObj.getDate()} ${AYLAR[tarihObj.getMonth()]} ${tarihObj.getFullYear()}`
      : "";

    return (
      <div className="mx-auto max-w-lg px-4 py-8 sm:px-6">
        <button
          type="button"
          onClick={() => setAdim("takvim")}
          className="mb-4 text-sm font-medium text-[var(--color-accent)] hover:underline"
        >
          ← Tarih değiştir
        </button>
        <h1 className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">Seans seçin</h1>
        <p className="mt-1 text-[var(--color-muted)]">{tarihLabel}</p>
        <p className="mt-4 text-sm text-[var(--color-muted)]">Her seans 2 saattir. Müsait seansları seçebilirsiniz.</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {SEANSLAR.map((seans) => {
            const dolu = seansDolu(seans.id);
            const secili = seciliSeans === seans.id;
            return (
              <button
                key={seans.id}
                type="button"
                disabled={dolu}
                onClick={() => handleSeansSec(seans.id)}
                className={`
                  rounded-xl border-2 px-4 py-4 text-left transition
                  ${dolu ? "cursor-not-allowed border-[var(--color-danger)]/30 bg-[var(--color-danger-bg)] text-[var(--color-danger)]" : ""}
                  ${!dolu && secili ? "border-[var(--color-accent)] bg-[var(--color-accent)]/20 text-[var(--color-primary)]" : ""}
                  ${!dolu && !secili ? "border-slate-200 bg-[var(--color-success)]/10 text-[var(--color-success)] hover:border-[var(--color-success)]" : ""}
                `}
              >
                <span className="font-semibold">{seans.baslangic} – {seans.bitis}</span>
                {dolu && <span className="mt-1 block text-xs">Dolu</span>}
              </button>
            );
          })}
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-xs text-[var(--color-muted)]">
          <span className="flex items-center gap-1">
            <span className="h-4 w-4 rounded bg-[var(--color-success)]/20" /> Müsait
          </span>
          <span className="flex items-center gap-1">
            <span className="h-4 w-4 rounded bg-[var(--color-danger-bg)]" /> Dolu
          </span>
        </div>
        <button
          type="button"
          disabled={!seciliSeans}
          onClick={() => setAdim("form")}
          className="mt-8 w-full rounded-full bg-[var(--color-accent)] py-3 font-medium text-[var(--color-primary)] disabled:opacity-50 hover:bg-[var(--color-accent-hover)] disabled:hover:bg-[var(--color-accent)]"
        >
          Devam et
        </button>
      </div>
    );
  }

  // ——— Adım 3: Form (araç + hizmetler) ———
  const seansBilgi = SEANSLAR.find((s) => s.id === seciliSeans);
  const tarihObj = seciliTarih ? new Date(seciliTarih + "T12:00:00") : null;
  const tarihLabel = tarihObj ? `${tarihObj.getDate()} ${AYLAR[tarihObj.getMonth()]} ${tarihObj.getFullYear()}` : "";

  return (
    <div className="mx-auto max-w-lg px-4 py-8 sm:px-6">
      <button
        type="button"
        onClick={() => setAdim("seans")}
        className="mb-4 text-sm font-medium text-[var(--color-accent)] hover:underline"
      >
        ← Seans değiştir
      </button>
      <h1 className="text-2xl font-bold text-[var(--color-primary)] sm:text-3xl">Randevu bilgileri</h1>
      <p className="mt-1 text-[var(--color-muted)]">
        {tarihLabel} · {seansBilgi ? `${seansBilgi.baslangic} – ${seansBilgi.bitis}` : ""}
      </p>

      <form onSubmit={handleFormSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="adSoyad" className="block text-sm font-medium text-[var(--color-foreground)]">Ad Soyad</label>
          <input
            id="adSoyad"
            name="adSoyad"
            type="text"
            required
            value={form.adSoyad}
            onChange={handleFormChange}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 shadow-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-[var(--color-foreground)]">Telefon</label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            required
            value={form.telefon}
            onChange={handleFormChange}
            placeholder="05XX XXX XX XX"
            className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 shadow-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>
        <div>
          <label htmlFor="aracMarkaModel" className="block text-sm font-medium text-[var(--color-foreground)]">Araç Marka / Model</label>
          <input
            id="aracMarkaModel"
            name="aracMarkaModel"
            type="text"
            required
            value={form.aracMarkaModel}
            onChange={handleFormChange}
            placeholder="Örn: Toyota Corolla"
            className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 shadow-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          />
        </div>
        <div>
          <label htmlFor="konum" className="block text-sm font-medium text-[var(--color-foreground)]">Konum (İlçe)</label>
          <select
            id="konum"
            name="konum"
            required
            value={form.konum}
            onChange={handleFormChange}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 shadow-sm focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
          >
            <option value="">İlçe seçin</option>
            {ILCELER.map((ilce) => (
              <option key={ilce} value={ilce}>{ilce}</option>
            ))}
          </select>
        </div>

        <div>
          <span className="block text-sm font-medium text-[var(--color-foreground)]">Paket seçin</span>
          <p className="mt-1 text-xs text-[var(--color-muted)]">Randevunuz için bir paket seçin.</p>
          <div className="mt-3 space-y-3">
            {PAKETLER.map((p) => (
              <label
                key={p.id}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-3 transition ${
                  form.paket === p.id ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10" : "border-slate-200"
                }`}
              >
                <input
                  type="radio"
                  name="paket"
                  checked={form.paket === p.id}
                  onChange={handleFormChange}
                  value={p.id}
                  className="mt-1 h-4 w-4 border-slate-300 text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
                />
                <div className="flex-1 min-w-0">
                  <span className="block font-medium text-[var(--color-foreground)]">{p.ad}</span>
                  <span className="text-sm font-semibold text-[var(--color-accent)]">{p.fiyat}</span>
                  <p className="mt-1 text-xs text-[var(--color-muted)]">{p.aciklama}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        <p className="text-sm text-[var(--color-muted)]">
          Randevular telefonla onaylanmaktadır. Ön ödeme alınmaz.
        </p>
        <button
          type="submit"
          className="w-full rounded-full bg-[var(--color-accent)] py-3 font-medium text-[var(--color-primary)] hover:bg-[var(--color-accent-hover)]"
        >
          Randevu Oluştur
        </button>
      </form>
    </div>
  );
}
