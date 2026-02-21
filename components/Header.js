"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/oncesi-sonrasi", label: "Öncesi / Sonrası" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const [menuAcik, setMenuAcik] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex h-14 min-h-[56px] max-w-6xl items-center justify-between gap-2 px-3 sm:h-16 sm:gap-4 sm:px-6">
        {/* Logo - solda, her zaman görünür */}
        <Link
          href="/"
          className="flex shrink-0 items-center overflow-hidden"
          onClick={() => setMenuAcik(false)}
        >
          <Image
            src="/logo.png"
            alt="Otofarparlatma - Bursa mobil oto far parlatma"
            width={110}
            height={36}
            className="h-8 w-auto min-w-[80px] sm:h-10 sm:min-w-[100px]"
            priority
          />
        </Link>

        {/* Masaüstü: nav linkleri */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Sağ taraf: Ara + Randevu Al (masaüstü) */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+905551234567"
            className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--color-primary)] px-4 text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
          >
            Ara
          </a>
          <Link
            href="/randevu-al"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--color-accent)] px-4 text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            Randevu Al
          </Link>
        </div>

        {/* Mobil: Ara + Randevu Al + Hamburger - hepsi üst barda */}
        <div className="flex shrink-0 items-center gap-1.5 md:hidden">
          <a
            href="tel:+905551234567"
            className="inline-flex h-9 min-w-[44px] items-center justify-center rounded-full border-2 border-[var(--color-primary)] px-2.5 text-xs font-semibold text-[var(--color-primary)] active:bg-slate-100"
          >
            Ara
          </a>
          <Link
            href="/randevu-al"
            className="inline-flex h-9 min-w-[44px] items-center justify-center rounded-full bg-[var(--color-accent)] px-2.5 text-xs font-semibold text-[var(--color-primary)] active:bg-[var(--color-accent-hover)]"
          >
            Randevu
          </Link>
          <button
            type="button"
            onClick={() => setMenuAcik((a) => !a)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-[var(--color-primary)] hover:bg-slate-100 active:bg-slate-200"
            aria-label={menuAcik ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuAcik}
          >
            {menuAcik ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobil açılır menü - sadece nav linkleri (Ara/Randevu zaten üstte) */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-200 ease-out md:hidden ${
          menuAcik ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuAcik}
      >
        <nav className="flex flex-col py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuAcik(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-[var(--color-primary)] hover:bg-[var(--color-surface)] active:bg-slate-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
