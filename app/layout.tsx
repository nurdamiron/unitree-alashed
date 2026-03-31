import type { Metadata } from "next"
import { Inter, Exo_2 } from "next/font/google"
import "./globals.css"
import { ExchangeRateProvider } from "@/components/exchange-rate-provider"
import { getExchangeRate } from "@/lib/exchange-rate"

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

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE}/#organization`,
  name: "Unitree Alashed",
  alternateName: "Alashed IT — Unitree",
  url: BASE,
  logo: {
    "@type": "ImageObject",
    url: `${BASE}/alashed-logo.svg`,
    width: 180,
    height: 40,
  },
  description:
    "Официальный дистрибьютор Unitree Robotics в Центральной Азии. Продажа, аренда, ИИ-разработка и обучение. Роботы Go2, B2, G1, H2, R1.",
  email: "unitree@alashed.kz",
  telephone: "+77479001790",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Емцова 9В",
    addressLocality: "Алматы",
    addressCountry: "KZ",
    addressRegion: "Алматинская область",
  },
  areaServed: [
    { "@type": "Country", name: "Kazakhstan" },
    { "@type": "Country", name: "Uzbekistan" },
    { "@type": "Country", name: "Kyrgyzstan" },
    { "@type": "Country", name: "Tajikistan" },
    { "@type": "Country", name: "Turkmenistan" },
  ],
  sameAs: [
    "https://wa.me/77479001790",
    "https://t.me/alashed",
    "https://www.instagram.com/alashed.kz/",
    "https://it.alashed.kz",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Alashed IT",
    url: "https://it.alashed.kz",
  },
}

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE}/#website`,
  url: BASE,
  name: "Unitree Alashed",
  description:
    "Официальный дистрибьютор Unitree Robotics в Центральной Азии",
  publisher: { "@id": `${BASE}/#organization` },
  inLanguage: "ru-KZ",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Unitree Alashed — Официальный дистрибьютор Unitree Robotics в Центральной Азии",
    template: "%s | Unitree Alashed",
  },
  description:
    "Официальный дистрибьютор Unitree Robotics в Центральной Азии. Продажа, аренда, ИИ-разработка и обучение. Роботы Go2, B2, G1, H2, R1 в Казахстане, Узбекистане, Кыргызстане. Гарантия, техподдержка.",
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
    "ИИ-интеграция роботов",
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
    description: "Продажа, аренда, ИИ-разработка. Go2, B2, G1, H2, R1. 5 стран ЦА.",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unitree Alashed — Роботы Unitree в Центральной Азии",
    description: "Официальный дистрибьютор Unitree в ЦА. Go2, B2, G1, H2, R1. Продажа, аренда, ИИ-интеграция.",
    images: [`${BASE}/og-default.jpg`],
  },
  alternates: {
    canonical: BASE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "KZ",
    "geo.placename": "Almaty, Kazakhstan",
    "geo.position": "43.238949;76.889709",
    ICBM: "43.238949, 76.889709",
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const exchangeRate = await getExchangeRate()

  return (
    <html lang="ru" className={`${inter.variable} ${exo2.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
      </head>
      <body>
        <ExchangeRateProvider initialRate={{ rate: exchangeRate.rate, date: exchangeRate.date }}>
          {children}
        </ExchangeRateProvider>
      </body>
    </html>
  )
}
