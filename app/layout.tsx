import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
})

const BASE = "https://unitree.alashed.kz"

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Unitree Alashed — Роботы Unitree в Казахстане | Продажа и аренда",
    template: "%s | Unitree Alashed",
  },
  description:
    "Официальный партнёр Unitree Robotics в Казахстане. Продажа и аренда роботов Go2, B2, G1, H2, R1. Доставка по Казахстану, гарантия, техподдержка.",
  keywords: [
    "Unitree Казахстан",
    "роботы Казахстан",
    "купить робота Казахстан",
    "аренда роботов",
    "Unitree Go2",
    "Unitree G1",
    "робособака Казахстан",
    "гуманоидный робот",
    "Alashed IT",
  ],
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: BASE,
    siteName: "Unitree Alashed",
    title: "Unitree Alashed — Роботы Unitree в Казахстане",
    description: "Продажа и аренда роботов Unitree. Go2 от $1 600, G1 от $13 500. Официальная гарантия.",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unitree Alashed — Роботы Unitree в Казахстане",
    description: "Продажа и аренда роботов Unitree в Казахстане. Go2, B2, G1, H2, R1.",
    images: [`${BASE}/og-default.jpg`],
  },
  alternates: {
    canonical: BASE,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  )
}
