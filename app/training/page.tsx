import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight01Icon,
  GraduationScrollIcon,
  CodeIcon,
  CpuSettingsIcon,
  CheckmarkCircle01Icon,
  Calendar01Icon,
  Location01Icon,
  UserGroup02Icon,
  Building01Icon,
  Tick01Icon,
} from "hugeicons-react"

export const metadata: Metadata = {
  title: "Обучение робототехнике Unitree | Курсы в Казахстане и ЦА | Alashed",
  description:
    "Курсы по управлению, программированию и ИИ для роботов Unitree. Очно в Алматы, выездное обучение по Центральной Азии. 3 уровня: базовый, продвинутый, исследовательский.",
}

const courses = [
  {
    level: "Уровень 1",
    levelColor: "bg-green-100 text-green-700 border-green-200",
    Icon: GraduationScrollIcon,
    iconColor: "#16a34a",
    iconBg: "bg-green-100",
    border: "border-green-200",
    accentBg: "bg-green-50",
    title: "Управление и эксплуатация",
    subtitle: "Для операторов, техников и менеджеров",
    duration: "1–2 дня",
    format: "Очно / Выездной",
    price: "По запросу",
    description:
      "Практический курс для сотрудников, которые будут работать с роботом ежедневно. После курса оператор самостоятельно запускает, управляет и обслуживает робота.",
    modules: [
      "Введение в роботов Unitree: архитектура и безопасность",
      "Управление через мобильное приложение Unitree",
      "Основные команды и режимы работы",
      "Базовая настройка и калибровка",
      "Замена аккумулятора и уход за роботом",
      "Действия в нештатных ситуациях",
    ],
    robots: ["Go2 Pro/X", "B2", "G1", "R1"],
    for: ["Операторы и техники", "Инженеры предприятий", "Руководители проектов"],
    certificate: "Сертификат оператора Unitree",
  },
  {
    level: "Уровень 2",
    levelColor: "bg-blue-100 text-blue-700 border-blue-200",
    Icon: CodeIcon,
    iconColor: "#2563eb",
    iconBg: "bg-blue-100",
    border: "border-blue-200",
    accentBg: "bg-blue-50",
    title: "Программирование и интеграция",
    subtitle: "Для разработчиков и системных инженеров",
    duration: "3–5 дней",
    format: "Очно / Онлайн",
    price: "По запросу",
    description:
      "Технический курс для разработчиков. Освоите Python SDK, ROS 2 интеграцию, создание автономных миссий и подключение внешних сенсоров.",
    modules: [
      "Архитектура SDK Unitree: WebRTC, API, протоколы",
      "Python SDK: управление движением, сенсоры, данные",
      "ROS 2 интеграция и создание нод",
      "Автономная навигация и картирование (SLAM)",
      "Создание пользовательских миссий",
      "Интеграция внешних камер, LiDAR, IoT-сенсоров",
    ],
    robots: ["Go2 EDU", "B2", "G1 EDU", "R1 Pro"],
    for: ["Python/ROS разработчики", "Системные интеграторы", "Технические команды R&D"],
    certificate: "Сертификат разработчика Unitree SDK",
  },
  {
    level: "Уровень 3",
    levelColor: "bg-purple-100 text-purple-700 border-purple-200",
    Icon: CpuSettingsIcon,
    iconColor: "#9333ea",
    iconBg: "bg-purple-100",
    border: "border-purple-200",
    accentBg: "bg-purple-50",
    title: "ИИ и воплощённый интеллект",
    subtitle: "Для исследователей и AI-инженеров",
    duration: "1–2 недели",
    format: "Очно / Смешанный",
    price: "По запросу",
    description:
      "Исследовательский курс для работы с передовыми AI-алгоритмами. Имитационное обучение, RL, sim-to-real трансфер с NVIDIA Isaac Sim.",
    modules: [
      "Воплощённый ИИ: парадигмы и архитектуры",
      "Unitree UnifoLM: структура и применение",
      "Имитационное обучение (IL): телеоперация и демонстрации",
      "Обучение с подкреплением (RL) на реальном роботе",
      "NVIDIA Isaac Sim: симуляция и sim-to-real",
      "Развёртывание моделей на Jetson Orin",
    ],
    robots: ["G1 EDU", "R1 EDU", "H2 EDU"],
    for: ["AI/ML исследователи", "Аспиранты и PhD", "Инженеры по Deep Learning"],
    certificate: "Сертификат AI Robotics Engineer",
  },
]

const formats = [
  {
    Icon: Building01Icon,
    title: "Очно в Алматы",
    desc: "Тренинг-центр Alashed в Алматы. Реальные роботы, практика с первого занятия. Группы до 8 человек.",
    color: "border-blue-200 bg-blue-50",
    iconColor: "#2563eb",
  },
  {
    Icon: Location01Icon,
    title: "Выездное обучение",
    desc: "Приезжаем к вам в офис, на предприятие или в университет. Казахстан, Узбекистан, Кыргызстан и другие страны ЦА.",
    color: "border-orange-200 bg-orange-50",
    iconColor: "#f97316",
  },
  {
    Icon: UserGroup02Icon,
    title: "Корпоративные программы",
    desc: "Индивидуальный учебный план для вашей компании или вуза. Сертификация, отчётность, интеграция в HR-программы.",
    color: "border-purple-200 bg-purple-50",
    iconColor: "#9333ea",
  },
]

const universities = [
  "Казахский национальный университет (КазНУ)",
  "Назарбаев Университет",
  "КБТУ — Казахстанско-Британский технический университет",
  "Ташкентский университет информационных технологий",
  "КРОК Инжиниринг (партнёр по обучению)",
]

export default function TrainingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="relative bg-slate-900 py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://www.unitree.com/images/a7458205b63e4ff5a501c1ae84d0988b_2740x1720.jpg"
              alt="Обучение робототехнике Unitree"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Образование и обучение
              </p>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-5">
                Обучаем работе с роботами Unitree
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                3 уровня обучения — от управления роботом до разработки ИИ-алгоритмов.
                Очно в Алматы и выездные программы по всей Центральной Азии.
                Сертификация от Alashed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-500 transition-colors">
                  Записаться на курс
                  <ArrowRight01Icon size={16} color="currentColor" />
                </a>
                <a href="#courses" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/20 transition-colors">
                  Смотреть программы
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-blue-600 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { v: "3", l: "уровня обучения" },
                { v: "5", l: "стран ЦА" },
                { v: "1–14", l: "дней курс" },
                { v: "24/7", l: "поддержка после курса" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-3xl font-display font-bold text-white mb-1">{s.v}</p>
                  <p className="text-blue-100 text-sm">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses */}
        <section id="courses" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Программы</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
                Выберите свой уровень
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Каждая программа разработана под конкретную роль — от оператора до AI-исследователя.
                Все курсы проводятся с реальными роботами.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {courses.map((c) => (
                <div key={c.title} className={`rounded-2xl border ${c.border} flex flex-col overflow-hidden`}>
                  {/* Header */}
                  <div className={`p-6 ${c.accentBg} border-b ${c.border}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center`}>
                        <c.Icon size={24} color={c.iconColor} />
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${c.levelColor}`}>
                        {c.level}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-xl mb-1">{c.title}</h3>
                    <p className="text-sm text-slate-500 mb-3">{c.subtitle}</p>
                    <div className="flex gap-3">
                      <span className="text-xs bg-white/80 text-slate-600 px-2.5 py-1 rounded-full border border-white">
                        {c.duration}
                      </span>
                      <span className="text-xs bg-white/80 text-slate-600 px-2.5 py-1 rounded-full border border-white">
                        {c.format}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1 bg-white">
                    <p className="text-sm text-slate-600 mb-5 leading-relaxed">{c.description}</p>

                    <h4 className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-3">Программа курса</h4>
                    <ul className="space-y-2 mb-5">
                      {c.modules.map((m) => (
                        <li key={m} className="flex items-start gap-2 text-sm text-slate-600">
                          <Tick01Icon size={14} color={c.iconColor} className="flex-shrink-0 mt-0.5" />
                          {m}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-2">Роботы</h4>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {c.robots.map((r) => (
                        <span key={r} className="text-xs bg-slate-100 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-full">
                          {r}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-2">Для кого</h4>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {c.for.map((f) => (
                        <span key={f} className="text-xs bg-slate-50 border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full">
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center gap-2 mb-4 p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <CheckmarkCircle01Icon size={16} color="#16a34a" />
                        <span className="text-xs text-slate-600">{c.certificate}</span>
                      </div>
                      <a
                        href="/#contact"
                        className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                      >
                        Записаться
                        <ArrowRight01Icon size={14} color="currentColor" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Форматы</p>
                <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                  Обучаем там, где удобно вам
                </h2>
                <div className="space-y-4">
                  {formats.map((f) => (
                    <div key={f.title} className={`rounded-2xl border ${f.color} p-5`}>
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center flex-shrink-0">
                          <f.Icon size={20} color={f.iconColor} />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 mb-1">{f.title}</p>
                          <p className="text-sm text-slate-600">{f.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900">
                <Image
                  src="https://www.unitree.com/images/a0e8042bd2df4c47af28ff371bb6b4fa_2740x1720.jpg"
                  alt="Обучение работе с роботом Unitree G1"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* For universities */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Партнёры</p>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">
                Для университетов и корпораций
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Разрабатываем кастомные программы для учебных заведений и предприятий.
                Интегрируем в существующие курсы робототехники и AI.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                <GraduationScrollIcon size={24} color="#2563eb" className="mb-4" />
                <h3 className="font-display font-bold text-slate-900 text-lg mb-3">Для университетов и колледжей</h3>
                <ul className="space-y-2.5 mb-5">
                  {[
                    "Готовые учебные планы для курсов робототехники",
                    "Материалы для преподавателей на русском языке",
                    "Лабораторные работы и практические задания",
                    "Поддержка в подаче заявок на образовательные гранты",
                    "Соревнования по робототехнике с призами",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <Tick01Icon size={14} color="#2563eb" className="flex-shrink-0 mt-0.5" />
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-400 mb-3 font-medium uppercase tracking-wide">Потенциальные партнёры в ЦА</p>
                <div className="space-y-1.5">
                  {universities.map((u) => (
                    <p key={u} className="text-xs text-slate-500">{u}</p>
                  ))}
                </div>
              </div>
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 text-white">
                <Calendar01Icon size={24} color="#60a5fa" className="mb-4" />
                <h3 className="font-display font-bold text-white text-lg mb-3">Для корпораций и предприятий</h3>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Индивидуальный план под задачи компании",
                    "Обучение на вашем объекте или производстве",
                    "Сертификация сотрудников с документальным подтверждением",
                    "Сопровождение при внедрении роботов",
                    "Поддержка после обучения: горячая линия для операторов",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <Tick01Icon size={14} color="#60a5fa" className="flex-shrink-0 mt-0.5" />
                      {i}
                    </li>
                  ))}
                </ul>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-3 rounded-xl hover:bg-blue-500 transition-colors text-sm"
                >
                  Обсудить корпоративную программу
                  <ArrowRight01Icon size={14} color="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Запишитесь на ближайший курс
            </h2>
            <p className="text-blue-100 mb-8">
              Оставьте заявку — расскажем о расписании, стоимости и подберём уровень обучения.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg"
            >
              Записаться на обучение
              <ArrowRight01Icon size={20} color="currentColor" />
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
