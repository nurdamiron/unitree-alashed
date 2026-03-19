import {
  GraduationScrollIcon,
  CodeIcon,
  CpuSettingsIcon,
  UserGroup02Icon,
  Building01Icon,
  CheckmarkCircle01Icon,
  ArrowRight01Icon,
  Calendar01Icon,
  Location01Icon,
} from "hugeicons-react"

const courses = [
  {
    level: "Базовый",
    levelColor: "bg-green-100 text-green-700",
    title: "Управление роботом",
    desc: "Оператор с нуля. Управление через приложение, основные команды, безопасность, простые сценарии использования.",
    duration: "1–2 дня",
    format: "Очно / Выездной",
    Icon: GraduationScrollIcon,
    iconColor: "#16a34a",
    iconBg: "bg-green-100",
    border: "border-green-200",
    for: ["Операторы и техники", "Компании без опыта", "Учебные заведения"],
    robots: ["Go2 Pro/X", "B2", "G1", "R1"],
  },
  {
    level: "Продвинутый",
    levelColor: "bg-blue-100 text-blue-700",
    title: "Программирование и ROS 2",
    desc: "Python SDK, ROS 2 интеграция, картирование и навигация, создание собственных миссий, подключение сенсоров.",
    duration: "3–5 дней",
    format: "Очно / Онлайн",
    Icon: CodeIcon,
    iconColor: "#2563eb",
    iconBg: "bg-blue-100",
    border: "border-blue-200",
    for: ["Разработчики и инженеры", "Исследовательские группы", "Стартапы и R&D"],
    robots: ["Go2 EDU", "B2", "G1 EDU"],
  },
  {
    level: "Исследовательский",
    levelColor: "bg-purple-100 text-purple-700",
    title: "ИИ и воплощённый интеллект",
    desc: "Имитационное обучение, Reinforcement Learning, sim-to-real трансфер, работа с NVIDIA Isaac Sim и Unitree UnifoLM.",
    duration: "1–2 недели",
    format: "Очно / Смешанный",
    Icon: CpuSettingsIcon,
    iconColor: "#9333ea",
    iconBg: "bg-purple-100",
    border: "border-purple-200",
    for: ["Университеты и лаборатории", "AI-исследователи", "Аспиранты и магистры"],
    robots: ["G1 EDU", "R1 EDU", "H2 EDU"],
  },
]

const formats = [
  {
    Icon: Building01Icon,
    title: "Очно в Алматы",
    desc: "Занятия на нашей площадке с реальными роботами. Полное погружение, практика с первого дня.",
  },
  {
    Icon: Location01Icon,
    title: "Выездное обучение",
    desc: "Приезжаем к вам в офис, университет или производство. Доступно по всей Центральной Азии.",
  },
  {
    Icon: Calendar01Icon,
    title: "Корпоративные программы",
    desc: "Разрабатываем кастомные учебные планы под задачи вашей компании или вуза. Сертификация.",
  },
]

const clients = [
  "Университеты и колледжи",
  "Технопарки и акселераторы",
  "Промышленные предприятия",
  "Государственные органы",
  "Нефтегазовые компании",
  "IT-компании и стартапы",
]

export default function TrainingSection() {
  return (
    <section id="training" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Образование и обучение
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Обучаем работе с роботами Unitree
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            От базового управления до разработки ИИ-алгоритмов. Программы для операторов,
            инженеров, исследователей и учебных заведений по всей Центральной Азии.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {courses.map((c) => (
            <div
              key={c.title}
              className={`rounded-2xl border ${c.border} bg-white hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden`}
            >
              {/* Top */}
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center`}>
                    <c.Icon size={24} color={c.iconColor} />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${c.levelColor}`}>
                    {c.level}
                  </span>
                </div>

                <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5">{c.desc}</p>

                {/* Duration + format */}
                <div className="flex gap-3 mb-5">
                  <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-medium">
                    {c.duration}
                  </span>
                  <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-medium">
                    {c.format}
                  </span>
                </div>

                {/* For whom */}
                <div className="space-y-1.5 mb-5">
                  {c.for.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckmarkCircle01Icon size={14} color={c.iconColor} className="flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: robots + CTA */}
              <div className="px-6 pb-6 border-t border-slate-100 pt-4">
                <p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wide">
                  Роботы для курса
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {c.robots.map((r) => (
                    <span key={r} className="text-xs bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-full">
                      {r}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Записаться на курс
                  <ArrowRight01Icon size={14} color="currentColor" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Formats + clients */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Formats */}
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-6">Форматы обучения</h3>
            <div className="space-y-4">
              {formats.map((f) => (
                <div key={f.title} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <f.Icon size={20} color="#2563eb" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-1">{f.title}</p>
                    <p className="text-sm text-slate-500">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who we train + CTA */}
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-6">Кого мы обучаем</h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {clients.map((c) => (
                <div key={c} className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700">
                  <UserGroup02Icon size={16} color="#2563eb" className="flex-shrink-0" />
                  {c}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-6 text-white">
              <p className="text-lg font-display font-bold mb-2">Нужна корпоративная программа?</p>
              <p className="text-slate-400 text-sm mb-5">
                Разработаем учебный план под задачи вашей компании или вуза.
                Выездное обучение по всей Центральной Азии.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-500 transition-colors text-sm"
              >
                Обсудить программу
                <ArrowRight01Icon size={16} color="currentColor" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
