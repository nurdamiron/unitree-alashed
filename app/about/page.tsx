import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight01Icon,
  Location01Icon,
  StarIcon,
  GraduationScrollIcon,
  CustomerServiceIcon,
  SecurityCheckIcon,
  DeliveryBox01Icon,
  UserGroup02Icon,
  Tick01Icon,
} from "hugeicons-react"

export const metadata: Metadata = {
  title: "О нас — Alashed | Официальный дистрибьютор Unitree в Центральной Азии",
  description:
    "Alashed — официальный дистрибьютор Unitree Robotics в Центральной Азии. Продажа, аренда и обучение в Казахстане, Узбекистане, Кыргызстане и других странах ЦА.",
  alternates: { canonical: "https://unitree.alashed.kz/about" },
}

const countries = [
  { name: "Казахстан", flag: "🇰🇿", cities: "Алматы, Астана, Шымкент", status: "Основная база" },
  { name: "Узбекистан", flag: "🇺🇿", cities: "Ташкент, Самарканд", status: "Активные поставки" },
  { name: "Кыргызстан", flag: "🇰🇬", cities: "Бишкек", status: "Поставки" },
  { name: "Таджикистан", flag: "🇹🇯", cities: "Душанбе", status: "Поставки" },
  { name: "Туркменистан", flag: "🇹🇲", cities: "Ашхабад", status: "Поставки" },
]

const values = [
  {
    Icon: StarIcon,
    title: "Официальное партнёрство",
    desc: "Прямые поставки от Unitree Robotics. Официальная гарантия производителя, оригинальные запчасти, актуальные прошивки.",
  },
  {
    Icon: GraduationScrollIcon,
    title: "Образование и обучение",
    desc: "Собственные программы обучения для операторов, инженеров и AI-исследователей. Курсы очно и онлайн по всей ЦА.",
  },
  {
    Icon: DeliveryBox01Icon,
    title: "Поставки по всей ЦА",
    desc: "Таможенное оформление, логистика и доставка в Казахстан, Узбекистан, Кыргызстан, Таджикистан и Туркменистан.",
  },
  {
    Icon: CustomerServiceIcon,
    title: "Техподдержка 24/7",
    desc: "Инженерная поддержка, обновления ПО, плановое ТО и ремонт. Поддержка на русском, казахском, узбекском языках.",
  },
  {
    Icon: SecurityCheckIcon,
    title: "Гарантия и сервис",
    desc: "Официальная гарантия Unitree на все модели. Авторизованный сервисный центр в Алматы.",
  },
  {
    Icon: UserGroup02Icon,
    title: "Локальная команда",
    desc: "Наша команда знает рынок ЦА. Работаем с госструктурами, промышленными компаниями и университетами.",
  },
]

const timeline = [
  { year: "2020", event: "Основание Alashed IT — IT-аутсорсинг и автоматизация бизнеса в Казахстане" },
  { year: "2023", event: "Первые переговоры с Unitree Robotics. Тестирование Go2 в условиях казахстанской зимы" },
  { year: "2024", event: "Получение статуса официального дистрибьютора Unitree в Центральной Азии" },
  { year: "2025", event: "Запуск образовательных программ. Первые корпоративные клиенты в нефтегазовой отрасли" },
  { year: "2026", event: "Расширение на Узбекистан и Кыргызстан. Запуск сервисного центра в Алматы" },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="relative bg-slate-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://www.unitree.com/images/52688de58de044358e4792a5b7c1593d_2740x1720.jpg"
              alt="Alashed — дистрибьютор Unitree в ЦА"
              fill
              className="object-cover opacity-15"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
                О компании
              </p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-5">
                Alashed — мост между роботами Unitree и Центральной Азией
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Мы — официальный и единственный дистрибьютор Unitree Robotics в Центральной Азии.
                Наша миссия: сделать передовую робототехнику доступной для бизнеса, образования
                и государственных структур в 5 странах региона.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors">
                  Связаться с нами
                  <ArrowRight01Icon size={16} color="currentColor" />
                </a>
                <Link href="/products/go2" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
                  Смотреть каталог
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-blue-600 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { v: "5", l: "стран Центральной Азии" },
                { v: "10+", l: "моделей Unitree" },
                { v: "3", l: "формата обучения" },
                { v: "24/7", l: "техподдержка" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-3xl font-display font-bold text-white mb-1">{s.v}</p>
                  <p className="text-blue-100 text-sm">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Alashed */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Наша история</p>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-5">
                  IT-компания, ставшая первопроходцем в робототехнике ЦА
                </h2>
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Alashed IT основана в Алматы как компания по IT-аутсорсингу и автоматизации бизнеса.
                    За годы работы мы глубоко погрузились в вопросы цифровой трансформации казахстанских
                    предприятий — от нефтегаза до образования.
                  </p>
                  <p>
                    В 2023 году мы увидели в роботах Unitree уникальную возможность для региона:
                    мировые лидеры по соотношению цена/качество, с открытым SDK и реальными промышленными
                    применениями. После тестирования Go2 при -18°C в Алматы мы приняли решение стать
                    официальным дистрибьютором.
                  </p>
                  <p>
                    Сегодня мы — единственная компания в Центральной Азии, которая не просто продаёт
                    роботов Unitree, но и обучает работе с ними, интегрирует в производственные процессы
                    и обеспечивает долгосрочную техническую поддержку.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {timeline.map((t) => (
                  <div key={t.year} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex-shrink-0 w-14 text-center">
                      <span className="text-lg font-display font-bold text-blue-600">{t.year}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{t.event}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Почему Alashed</p>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                Полный цикл — от продажи до поддержки
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <v.Icon size={20} color="#2563eb" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">География</p>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                Работаем по всей Центральной Азии
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Поставки, обучение и техподдержка во всех 5 странах региона.
                Таможенное оформление и логистика — под ключ.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {countries.map((c) => (
                <div key={c.name} className="bg-slate-50 rounded-2xl border border-slate-200 p-5 text-center hover:border-blue-200 transition-colors">
                  <p className="text-3xl mb-2">{c.flag}</p>
                  <p className="font-display font-bold text-slate-900 mb-1">{c.name}</p>
                  <p className="text-xs text-slate-500 mb-2">{c.cities}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    c.status === "Основная база"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership with Unitree */}
        <section className="py-20 bg-slate-900 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">Партнёрство</p>
                <h2 className="text-3xl font-display font-bold text-white mb-5">
                  Официальный дистрибьютор Unitree Robotics
                </h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  Unitree Robotics — мировой лидер по соотношению цена/качество среди производителей
                  квадруподов и гуманоидов. Более 200 патентов, клиенты в 50+ странах,
                  роботы на Олимпиаде 2022, Азиатских играх 2023 и Суперкубке США 2023.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Прямые поставки с завода Unitree в Ханчжоу, Китай",
                    "Официальная гарантия производителя на все модели",
                    "Приоритетный доступ к новым моделям",
                    "Техническая документация и обновления прошивок",
                    "Поддержка на русском языке от Unitree",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                      <Tick01Icon size={15} color="#60a5fa" className="flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.unitree.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  unitree.com — официальный сайт производителя
                  <ArrowRight01Icon size={14} color="currentColor" />
                </a>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-800">
                <Image
                  src="https://www.unitree.com/images/b5fffd3e4fc04e6f9fcafedb9516b341_3840x2146.jpg"
                  alt="Unitree Robotics"
                  fill
                  className="object-cover opacity-80"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
              Готовы работать с Alashed?
            </h2>
            <p className="text-slate-600 mb-8">
              Обсудим ваши задачи и подберём оптимальное решение — от покупки до корпоративного обучения.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Написать нам
                <ArrowRight01Icon size={16} color="currentColor" />
              </a>
              <Link
                href="/industry"
                className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-900 font-semibold px-8 py-3.5 rounded-xl hover:bg-slate-200 transition-colors"
              >
                Промышленные решения
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
