import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://otofarparlatma.com"),
  title: {
    default: "Bursa Mobil Oto Far Parlatma | otofarparlatma.com",
    template: "%s | otofarparlatma.com",
  },
  description:
    "Bursa'nın her yerine yerinde mobil oto far parlatma. 45 dakikada profesyonel far temizleme, 6 ay garantili.",
  openGraph: {
    locale: "tr_TR",
    siteName: "otofarparlatma.com",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Otofarparlatma Bursa mobil far parlatma" }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
