import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactSection from "@/components/contact-section"
import {
  Mic01Icon,
  Comment01Icon,
  ViewIcon,
  AiBrain01Icon,
  CpuSettingsIcon,
  GraduationScrollIcon,
  CodeIcon,
  Settings01Icon,
  CustomerServiceIcon,
  DeliveryBox01Icon,
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
} from "hugeicons-react"

const BASE = "https://unitree.alashed.kz"

export const metadata: Metadata = {
  title: "Услуги — ИИ-разработка, обучение, интеграция",
  description:
    "Разрабатываем ИИ-модули для роботов Unitree: голосовое управление, компьютерное зрение, автономные агенты. Обучение, интеграция, техподдержка в Центральной Азии.",
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    title: "Услуги Alashed — ИИ-разработка, обучение, интеграция роботов Unitree",
    description: "Полный цикл внедрения: от поставки робота до запуска ИИ-модулей и обучения команды.",
    url: `${BASE}/services`,
  },
}

const aiModules = [
  {
    Icon: Mic01Icon,
    title: "Голосовой оператор",
    desc: "Управление голосом на русском и казахском языках. STT (Whisper) + LLM + синтез речи. Задержка 1–3 сек.",
    timeline: "2–3 недели",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    Icon: Comment01Icon,
    title: "Чат-интерфейс",
    desc: "Web/мобильная панель: задачи текстом, статус, live-видео, журнал, экстренная остановка.",
    timeline: "1–2 недели",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    Icon: ViewIcon,
    title: "Компьютерное зрение",
    desc: "Распознавание объектов, лиц, жестов (YOLO v8 / GPT-4o Vision). Навигация, «следуй за мной».",
    timeline: "4–6 недель",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    Icon: AiBrain01Icon,
    title: "Автономный агент",
    desc: "LLM-агент с памятью (карта, история, объекты). Многошаговые задачи без оператора.",
    timeline: "6–10 недель",
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    Icon: CpuSettingsIcon,
    title: "Дообучение (fine-tuning)",
    desc: "Imitation / RL learning под задачи заказчика. Датасет, GPU-сервер, итерации.",
    timeline: "2–4 месяца",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
]

const trainingLevels = [
  {
    level: "Базовый",
    levelColor: "bg-green-100 text-green-700",
    title: "Управление роботом",
    desc: "Оператор с нуля. Управление через приложение, основные команды, безопасность, простые сценарии использования.",
    duration: "1–2 дня",
    Icon: GraduationScrollIcon,
    iconColor: "#16a34a",
    iconBg: "bg-green-100",
    for: ["Операторы и техники", "Компании без опыта", "Учебные заведения"],
  },
  {
    level: "Продвинутый",
    levelColor: "bg-blue-100 text-blue-700",
    title: "Программирование и ROS 2",
    desc: "Python SDK, ROS 2 интеграция, картирование и навигация, создание собственных миссий, подключение сенсоров.",
    duration: "3–5 дней",
    Icon: CodeIcon,
    iconColor: "#2563eb",
    iconBg: "bg-blue-100",
    for: ["Разработчики и инженеры", "Исследовательские группы", "Стартапы и R&D"],
  },
  {
    level: "Исследовательский",
    levelColor: "bg-purple-100 text-purple-700",
    title: "ИИ и воплощённый интеллект",
    desc: "Имитационное обучение, Reinforcement Learning, sim-to-real трансфер, работа с NVIDIA Isaac Sim и UnifoLM.",
    duration: "1–2 недели",
    Icon: CpuSettingsIcon,
    iconColor: "#9333ea",
    iconBg: "bg-purple-100",
    for: ["Университеты и лаборатории", "AI-исследователи", "Аспиранты и магистры"],
  },
]

const fullCycleSteps = [
  { n: "1", title: "Консультация", desc: "Разбираем вашу задачу, подбираем робота и ИИ-модули" },
  { n: "2", title: "Поставка", desc: "Логистика, таможня, доставка до вашей площадки. 3–5 месяцев" },
  { n: "3", title: "ИИ-разработка", desc: "Параллельно с поставкой создаём нужные программные модули" },
  { n: "4", title: "Интеграция", desc: "Установка, калибровка, настройка на вашей площадке. 1–2 недели" },
  { n: "5", title: "Обучение", desc: "Обучаем вашу команду работе с роботом и ИИ. 2–10 дней" },
  { n: "6", title: "Поддержка", desc: "Техподдержка, обновления, доработки по отдельному договору" },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
              Наши услуги
            </p>
            <h1 className="text-3xl sm:text-5xl font-display font-bold mb-6">
              Не просто продаём роботов —<br />
              <span className="text-blue-400">внедряем ИИ-решения</span>
            </h1>
            <p className="text-slate-300 max-w-2xl text-lg leading-relaxed">
              Разрабатываем кастомные ИИ-модули, обучаем команду, интегрируем робота в ваши бизнес-процессы.
              Полный цикл от первой консультации до запуска в эксплуатацию.
            </p>
          </div>
        </section>

        {/* AI Modules */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-3">
                ИИ-модули
              </h2>
              <p className="text-slate-600 max-w-2xl">
                Набор кастомных программных модулей, которые наша команда разрабатывает и интегрирует
                в робота. Клиент выбирает нужные модули — мы устанавливаем и настраиваем.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
              {aiModules.map((m) => (
                <div
                  key={m.title}
                  className={`rounded-2xl border ${m.border} bg-white p-6 hover:shadow-lg transition-all`}
                >
                  <div className={`w-12 h-12 rounded-xl ${m.bg} flex items-center justify-center mb-4`}>
                    <m.Icon size={24} color="currentColor" className={m.color} />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{m.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{m.desc}</p>
                  <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-medium">
                    {m.timeline}
                  </span>
                </div>
              ))}

              {/* Full package card */}
              <div className="rounded-2xl border-2 border-blue-500 bg-blue-50 p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                  <Settings01Icon size={24} color="white" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg mb-2">Полный пакет</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Все 5 модулей + интеграция + обучение. Готовое решение для максимальной автономности робота.
                </p>
                <span className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-full font-medium">
                  14–16 недель
                </span>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 text-sm text-slate-600">
              <p>Стоимость модулей — за разработку, интеграцию и первичную настройку.
              Облачные LLM API (OpenAI, Claude) оплачиваются отдельно по факту использования.
              Для офлайн-режима потребуется GPU Edge-сервер.</p>
            </div>
          </div>
        </section>

        {/* Training */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-3">
                Обучение
              </h2>
              <p className="text-slate-600 max-w-2xl">
                От базового управления до разработки ИИ-алгоритмов. Программы для операторов,
                инженеров и исследователей по всей Центральной Азии.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {trainingLevels.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center`}>
                      <c.Icon size={24} color={c.iconColor} />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.levelColor}`}>
                      {c.level}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{c.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{c.desc}</p>
                  <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-medium">
                    {c.duration}
                  </span>
                  <div className="mt-4 space-y-2">
                    {c.for.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckmarkCircle01Icon size={14} color={c.iconColor} className="flex-shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full cycle */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-3">
                  Полный цикл внедрения
                </h2>
                <p className="text-slate-600 mb-8">
                  От первой консультации до запуска — 3–5 месяцев. Мы берём на себя
                  все этапы: подбор, поставку, разработку, интеграцию, обучение.
                </p>

                <div className="space-y-4">
                  {fullCycleSteps.map((s, i) => (
                    <div key={s.n} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                          {s.n}
                        </div>
                        {i < fullCycleSteps.length - 1 && (
                          <div className="w-0.5 h-6 bg-blue-200 mx-auto mt-1" />
                        )}
                      </div>
                      <div className="pb-2">
                        <p className="font-semibold text-slate-900 mb-1">{s.title}</p>
                        <p className="text-sm text-slate-500">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5">
                {/* What's included */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Что включено в поставку</h3>
                  <ul className="space-y-2">
                    {[
                      "Роботизированная платформа (выбранная модель)",
                      "Международная доставка и растаможивание",
                      "Первичная настройка и калибровка",
                      "ИИ-модули согласно выбранному пакету",
                      "Техническая документация на русском языке",
                      "Обучение персонала",
                      "Техподдержка 1 год",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckmarkCircle01Icon size={16} color="#16a34a" className="flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Payment terms */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-4">Условия оплаты</h3>
                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center flex-shrink-0">1</span>
                      <p><strong>Оборудование:</strong> 100% при подписании договора</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center flex-shrink-0">2</span>
                      <p><strong>Услуги (аванс):</strong> 50% после поступления робота</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center flex-shrink-0">3</span>
                      <p><strong>Услуги (финал):</strong> 50% после завершения обучения</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">
                    Цены в тенге с НДС 16%. Курс ₸/$ фиксируется на дату выставления счёта.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Готовы обсудить проект?
            </p>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Расскажите о вашей задаче
            </h2>
            <p className="text-slate-400 mb-8">
              Подберём робота, ИИ-модули и формат обучения под ваши процессы.
              Первая консультация — бесплатно.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-500 transition-colors"
            >
              Оставить заявку
              <ArrowRight01Icon size={16} color="currentColor" />
            </a>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
