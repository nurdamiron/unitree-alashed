import type { Metadata } from "next"
import { Inter, Exo_2 } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const exo2 = Exo_2({
  subsets: ["latin", "cyrillic"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
})

const BASE = "https://unitree.alashed.kz"

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Unitree Alashed — Официальный дистрибьютор Unitree Robotics в Центральной Азии",
    template: "%s | Unitree Alashed",
  },
  description:
    "Официальный дистрибьютор Unitree Robotics в Центральной Азии. Продажа, аренда и обучение. Роботы Go2, B2, G1, H2, R1 в Казахстане, Узбекистане, Кыргызстане. Гарантия, техподдержка 24/7.",
  keywords: [
    "Unitree Казахстан",
    "роботы Центральная Азия",
    "купить робота Казахстан",
    "Unitree дистрибьютор",
    "аренда роботов",
    "Unitree Go2",
    "Unitree B2",
    "Unitree G1",
    "гуманоидный робот",
    "обучение робототехнике",
    "Alashed IT",
    "Unitree Узбекистан",
    "промышленные роботы ЦА",
  ],
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: BASE,
    siteName: "Unitree Alashed",
    title: "Unitree Alashed — Официальный дистрибьютор Unitree в Центральной Азии",
    description: "Продажа, аренда и обучение. Go2 от $1 600, G1 от $13 500, B2 от $76 900. 5 стран ЦА.",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unitree Alashed — Роботы Unitree в Центральной Азии",
    description: "Официальный дистрибьютор Unitree в ЦА. Go2, B2, G1, H2, R1. Продажа, аренда, обучение.",
    images: [`${BASE}/og-default.jpg`],
  },
  alternates: {
    canonical: BASE,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${exo2.variable}`}>
      <body>{children}</body>
    </html>
  )
}
