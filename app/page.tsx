import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import StatsBar from "@/components/stats-bar"
import ProductsSection from "@/components/products-section"
import ServicesSection from "@/components/services-section"
import RentalSection from "@/components/rental-section"
import WhyUsSection from "@/components/why-us-section"
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
      name: "Какие услуги предоставляет Alashed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Мы предоставляем полный цикл: продажу роботов Unitree, аренду от 1 дня, разработку ИИ-модулей (голосовое управление, компьютерное зрение, автономный агент), обучение персонала и техподдержку.",
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
        text: "Да, все роботы поставляются с официальной гарантией производителя от 12 до 18 месяцев в зависимости от модели.",
      },
    },
    {
      "@type": "Question",
      name: "Сколько времени занимает поставка?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Производство и доставка с завода Unitree: 4–8 недель. Логистика и таможня: 2–4 недели. Итого от договора до запуска: 3–5 месяцев.",
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
      name: "Какие ИИ-модули вы разрабатываете?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Голосовой оператор (STT + LLM), чат-интерфейс, компьютерное зрение (YOLO/GPT-4o Vision), автономный агент с памятью, дообучение (imitation/RL learning).",
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
    "Официальный дистрибьютор Unitree Robotics в Центральной Азии. Продажа, аренда, ИИ-разработка и обучение.",
  url: BASE,
  telephone: "+77479001790",
  email: "unitree@alashed.kz",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Емцова 9В",
    addressLocality: "Алматы",
    addressCountry: "KZ",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
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
        <ServicesSection />
        <RentalSection />
        <WhyUsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
