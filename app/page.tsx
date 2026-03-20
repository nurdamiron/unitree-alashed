import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StatsBar from "@/components/stats-bar"
import ProductsSection from "@/components/products-section"
import RentalSection from "@/components/rental-section"
import TrainingSection from "@/components/training-section"
import UseCasesSection from "@/components/use-cases-section"
import WhyUsSection from "@/components/why-us-section"
import HowToBuySection from "@/components/how-to-buy-section"
import FAQSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { products } from "@/lib/products"

const BASE = "https://unitree.alashed.kz"

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Сколько стоит Unitree Go2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unitree Go2 доступен в четырёх версиях: Air от $1 600, Pro от $2 800, X от $4 500, EDU — по запросу. Цены указаны без учёта доставки и таможенных расходов.",
      },
    },
    {
      "@type": "Question",
      name: "Как арендовать робота Unitree?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Аренда доступна от 1 дня. Оставьте заявку, укажите нужную модель и даты. В аренду доступны: Go2 Pro, B2, G1, R1.",
      },
    },
    {
      "@type": "Question",
      name: "Есть ли гарантия на роботов Unitree?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, все роботы поставляются с официальной гарантией производителя: Go2 и B2 — 12 месяцев, G1 стандарт — 8 месяцев, G1 EDU — 18 месяцев, R1 AIR — 6 месяцев, R1 Pro — 8 месяцев, R1 EDU — 12 месяцев.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько времени занимает доставка?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Среднее время поставки — 3–6 недель с учётом производства, таможенного оформления и доставки в Казахстан.",
      },
    },
    {
      "@type": "Question",
      name: "Можно ли купить в рассрочку или лизинг?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Да, для юридических лиц доступны лизинг и рассрочка. Работаем с документами для бухгалтерии: счёт-фактура, накладная, НДС.",
      },
    },
    {
      "@type": "Question",
      name: "Чем Unitree Go2 отличается от Unitree B2?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Go2 — потребительский/образовательный квадрупод (~15 кг, от $1 600), идеален для обучения и исследований. B2 — промышленный (~60 кг, от $76 900), способный нести 120 кг, работать при -20°C.",
      },
    },
    {
      "@type": "Question",
      name: "Что такое Unitree G1 и для кого он подходит?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "G1 — самый доступный полноразмерный гуманоид на рынке ($13 500). Подходит для университетов, исследовательских лабораторий и компаний, работающих над воплощённым ИИ.",
      },
    },
  ],
}

const jsonLdItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Роботы Unitree в Казахстане и Центральной Азии",
  description: "Полный каталог роботов Unitree Robotics — официальный дистрибьютор Alashed IT",
  url: BASE,
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: `${BASE}/products/${p.id}`,
    name: p.name,
    description: p.description,
  })),
}

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE}/#localbusiness`,
  name: "Unitree Alashed",
  image: `${BASE}/alashed-wide-logo.png`,
  description:
    "Официальный дистрибьютор Unitree Robotics в Центральной Азии. Продажа, аренда и обучение по роботам Go2, B2, G1, H2, R1.",
  url: BASE,
  telephone: "+77009001917",
  email: "unitree@alashed.kz",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Алматы",
    addressCountry: "KZ",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  priceRange: "$$$",
  currenciesAccepted: "USD, KZT",
  paymentAccepted: "Cash, Bank Transfer, Invoice, Leasing",
  areaServed: "Central Asia",
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ProductsSection />
        <RentalSection />
        <TrainingSection />
        <UseCasesSection />
        <WhyUsSection />
        <HowToBuySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
