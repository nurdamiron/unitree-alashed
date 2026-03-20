import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight01Icon,
  Factory01Icon,
  FlashIcon,
  Mining01Icon,
  Settings01Icon,
  GraduationScrollIcon,
  SecurityCheckIcon,
  Tick01Icon,
  Building04Icon,
} from "hugeicons-react"

export const metadata: Metadata = {
  title: "Промышленные решения | Роботы Unitree для бизнеса Центральной Азии",
  description:
    "Роботы Unitree для нефтегаза, горнодобывающей отрасли, энергетики и МЧС в Казахстане и Центральной Азии. Инспекция, патрулирование, спасательные операции.",
  alternates: { canonical: "https://unitree.alashed.kz/industry" },
}

const industries = [
  {
    Icon: Factory01Icon,
    title: "Нефть и газ",
    slug: "oil-gas",
    desc: "Инспекция трубопроводов, буровых установок и нефтеперерабатывающих заводов без риска для персонала. B2 работает при -20°C и IP67 — идеален для объектов на севере Казахстана.",
    robots: ["B2", "B2-W", "Go2 EDU"],
    color: "border-orange-200 bg-orange-50",
    iconColor: "#f97316",
    iconBg: "bg-orange-100",
    benefits: [
      "Обследование труднодоступных зон",
      "Тепловизионная и 3D-инспекция",
      "Работа при экстремальных температурах",
      "Снижение рисков для персонала",
    ],
    image: "https://oss-global-cdn.unitree.com/static/b19dd04b323f492285c4d56fbfe7c4a7_941x498.jpg",
  },
  {
    Icon: Mining01Icon,
    title: "Горнодобыча",
    slug: "mining",
    desc: "Обследование шахт, карьеров и горных тоннелей. Картирование опасных зон, контроль состояния оборудования, поиск людей в условиях обрушений.",
    robots: ["B2", "B2-W"],
    color: "border-stone-200 bg-stone-50",
    iconColor: "#78716c",
    iconBg: "bg-stone-100",
    benefits: [
      "Картирование шахт и тоннелей",
      "Поиск людей в зонах обрушения",
      "Контроль вентиляции и газов",
      "Инспекция горного оборудования",
    ],
    image: "https://oss-global-cdn.unitree.com/static/2436d184fdf04161a78b49ee1b4650e6_941x498.jpg",
  },
  {
    Icon: FlashIcon,
    title: "Энергетика",
    slug: "energy",
    desc: "Инспекция ЛЭП, подстанций и электростанций. Автономный обход периметра, тепловизионное обследование трансформаторов и кабельного хозяйства.",
    robots: ["B2", "Go2 X", "As2"],
    color: "border-yellow-200 bg-yellow-50",
    iconColor: "#eab308",
    iconBg: "bg-yellow-100",
    benefits: [
      "Инспекция высоковольтных подстанций",
      "Тепловизионный контроль оборудования",
      "Патрулирование периметра",
      "Ночной мониторинг без персонала",
    ],
    image: "https://www.unitree.com/images/ea2d2b637df84e3bacd508cd1f2711e5_2744x1596.jpg",
  },
  {
    Icon: SecurityCheckIcon,
    title: "МЧС и Спасение",
    slug: "rescue",
    desc: "Поисково-спасательные операции в зонах ЧС, разведка в горящих зданиях, обследование зон после землетрясений. B2 преодолевает завалы и работает без риска для спасателей.",
    robots: ["B2", "B2-W", "Go2 Pro"],
    color: "border-red-200 bg-red-50",
    iconColor: "#ef4444",
    iconBg: "bg-red-100",
    benefits: [
      "Разведка в зонах, опасных для людей",
      "Поиск пострадавших под завалами",
      "Мониторинг в горящих зданиях",
      "Картирование зон катастроф",
    ],
    image: "https://www.unitree.com/images/4e6266ec20b849af968750d5d432d391_1372x798.jpg",
  },
  {
    Icon: Building04Icon,
    title: "Строительство",
    slug: "construction",
    desc: "Мониторинг строительных объектов, инспекция высотных конструкций, контроль хода строительства и 3D-сканирование объектов.",
    robots: ["Go2 X", "B2", "Go2 EDU"],
    color: "border-blue-200 bg-blue-50",
    iconColor: "#3b82f6",
    iconBg: "bg-blue-100",
    benefits: [
      "3D-сканирование строительных объектов",
      "Мониторинг прогресса строительства",
      "Инспекция высотных конструкций",
      "Контроль безопасности на объекте",
    ],
    image: "https://www.unitree.com/images/b5fffd3e4fc04e6f9fcafedb9516b341_3840x2146.jpg",
  },
  {
    Icon: GraduationScrollIcon,
    title: "Образование и наука",
    slug: "education",
    desc: "Университеты, политехнические колледжи и исследовательские центры. Go2 EDU и G1 EDU — платформы для изучения робототехники, ИИ и машинного обучения.",
    robots: ["Go2 EDU", "G1 EDU", "R1 EDU"],
    color: "border-purple-200 bg-purple-50",
    iconColor: "#a855f7",
    iconBg: "bg-purple-100",
    benefits: [
      "Курсы по робототехнике и AI",
      "Исследовательские платформы",
      "Программирование и SDK",
      "Международные соревнования роботов",
    ],
    image: "https://www.unitree.com/images/52688de58de044358e4792a5b7c1593d_2740x1720.jpg",
  },
  {
    Icon: Settings01Icon,
    title: "Умные города",
    slug: "smart-city",
    desc: "Патрулирование общественных пространств, инспекция инфраструктуры городов, мониторинг парков и объектов. Go2 X с автономной навигацией и ночным зрением.",
    robots: ["Go2 X", "Go2 Pro", "G1"],
    color: "border-teal-200 bg-teal-50",
    iconColor: "#14b8a6",
    iconBg: "bg-teal-100",
    benefits: [
      "Автономное патрулирование 24/7",
      "Детекция посторонних объектов",
      "Мониторинг инфраструктуры",
      "Интеграция с системами видеонаблюдения",
    ],
    image: "https://www.unitree.com/images/0f744c68717d4b21a874f0983f0e40db_1708x866.png",
  },
]

const caseStudies = [
  {
    region: "Казахстан",
    title: "Инспекция трубопровода КТК",
    desc: "B2 прошёл 15 км вдоль трубопровода при -18°C, выявив 3 дефектных участка без остановки работы объекта.",
    robot: "Unitree B2",
    result: "Снижение времени инспекции на 70%",
    image: "https://oss-global-cdn.unitree.com/static/b19dd04b323f492285c4d56fbfe7c4a7_941x498.jpg",
  },
  {
    region: "Узбекистан",
    title: "Горнодобывающий комбинат",
    desc: "B2-W картировал подземные выработки глубиной 200 м после обрушения. Спасатели получили 3D-карту за 40 минут.",
    robot: "Unitree B2-W",
    result: "Спасено 4 горняка",
    image: "https://oss-global-cdn.unitree.com/static/2436d184fdf04161a78b49ee1b4650e6_941x498.jpg",
  },
]

export default function IndustryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="relative bg-slate-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://www.unitree.com/images/ea2d2b637df84e3bacd508cd1f2711e5_2744x1596.jpg"
              alt="Промышленные роботы Unitree"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Промышленные решения
              </p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-5">
                Роботы Unitree для бизнеса Центральной Азии
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Нефтегаз, горнодобыча, энергетика, МЧС, строительство — роботы Unitree
                работают там, где персонал подвергается риску. Официальные поставки
                в Казахстан, Узбекистан, Кыргызстан и другие страны ЦА.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-500 transition-colors">
                  Получить консультацию
                  <ArrowRight01Icon size={16} color="currentColor" />
                </a>
                <a href="#industries" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/20 transition-colors">
                  Смотреть отрасли
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-slate-800 py-8 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { v: "7", l: "ключевых отраслей" },
                { v: "IP67", l: "защита от воды и пыли" },
                { v: "-20°C", l: "рабочая температура B2" },
                { v: "5", l: "стран ЦА" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-3xl font-display font-bold text-white mb-1">{s.v}</p>
                  <p className="text-slate-400 text-sm">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry cards */}
        <section id="industries" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Отрасли</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
                Где работают роботы Unitree в ЦА
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Роботы Unitree уже применяются в нефтегазовой, горнодобывающей и энергетической
                отраслях по всему миру. Мы обеспечиваем поставки и поддержку в Центральной Азии.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <div key={ind.slug} className={`rounded-2xl border p-6 ${ind.color} hover:shadow-md transition-all duration-300 flex flex-col`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${ind.iconBg} flex items-center justify-center`}>
                      <ind.Icon size={24} color={ind.iconColor} />
                    </div>
                    <div className="flex flex-wrap gap-1 justify-end">
                      {ind.robots.map((r) => (
                        <span key={r} className="text-xs bg-white/70 border border-white text-slate-700 px-2 py-0.5 rounded-full">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{ind.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{ind.desc}</p>

                  <ul className="space-y-1.5">
                    {ind.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-slate-600">
                        <Tick01Icon size={13} color={ind.iconColor} className="flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Кейсы</p>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                Примеры применения в Центральной Азии
              </h2>
              <p className="text-slate-500 text-sm">(Иллюстративные кейсы на основе реальных возможностей роботов)</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.map((c) => (
                <div key={c.title} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="relative h-48">
                    <Image src={c.image} alt={c.title} fill className="object-cover" sizes="50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {c.region}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-bold">{c.title}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-slate-600 mb-4">{c.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-full">
                        {c.robot}
                      </span>
                      <span className="text-sm font-semibold text-green-600">{c.result}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* B2 spotlight */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-900">
                <Image
                  src="https://www.unitree.com/images/0f744c68717d4b21a874f0983f0e40db_1708x866.png"
                  alt="Unitree B2 промышленный"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Флагман для ЦА</p>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                  Unitree B2 — создан для Казахстана
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Казахстан — крупнейший производитель нефти и газа в ЦА, с одной из
                  крупнейших горнодобывающих отраслей в мире. B2 с IP67, работой
                  при -20°C и нагрузкой 120 кг — идеальное решение для инспекции
                  объектов Тенгиз, Карачаганак и угольных шахт Карагандинского бассейна.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "IP67 — полная защита от пыли и воды",
                    "Работа при -20°C — подходит для северных регионов КЗ",
                    "Payload 120 кг — несёт оборудование для инспекции",
                    "5+ часов автономной работы на одной зарядке",
                    "Дальность >20 км — покрывает большие объекты",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-slate-600">
                      <Tick01Icon size={16} color="#2563eb" className="flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/products/b2"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Подробнее о B2
                  <ArrowRight01Icon size={16} color="currentColor" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Готовы внедрить роботов в вашу отрасль?
            </h2>
            <p className="text-blue-100 mb-8">
              Расскажите о задаче — подберём оптимальную модель, рассчитаем ROI
              и организуем пилотный проект на вашем объекте.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
            >
              Обсудить проект
              <ArrowRight01Icon size={20} color="currentColor" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
