import {
  Mic01Icon,
  Comment01Icon,
  ViewIcon,
  AiBrain01Icon,
  CpuSettingsIcon,
  Settings01Icon,
  GraduationScrollIcon,
  CodeIcon,
  CustomerServiceIcon,
  DeliveryBox01Icon,
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
  Clock01Icon,
} from "hugeicons-react"
import Link from "next/link"

const aiModules = [
  {
    Icon: Mic01Icon,
    title: "Голосовой оператор",
    desc: "Управление голосом на русском и казахском языках. STT (Whisper) + LLM + синтез речи. Задержка 1–3 сек. Робот понимает естественную речь и выполняет команды.",
    timeline: "2–3 недели",
    tech: ["Whisper", "LLM", "TTS"],
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    Icon: Comment01Icon,
    title: "Чат-интерфейс",
    desc: "Web/мобильная панель управления: отправка задач текстом, статус робота, live-видео с камер, журнал действий, экстренная остановка одной кнопкой.",
    timeline: "1–2 недели",
    tech: ["React", "WebSocket", "WebRTC"],
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    Icon: ViewIcon,
    title: "Компьютерное зрение",
    desc: "Распознавание объектов, лиц, жестов. YOLO v8 / GPT-4o Vision. Навигация «следуй за мной», подсчёт людей, детекция аномалий на объекте.",
    timeline: "4–6 недель",
    tech: ["YOLO v8", "GPT-4o Vision", "OpenCV"],
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-200",
  },
  {
    Icon: AiBrain01Icon,
    title: "Автономный агент",
    desc: "LLM-агент с памятью: карта помещения, история задач, каталог объектов. Многошаговые задачи без постоянного оператора. Планирование маршрутов.",
    timeline: "6–10 недель",
    tech: ["LLM Agent", "RAG", "SLAM"],
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    Icon: CpuSettingsIcon,
    title: "Дообучение (fine-tuning)",
    desc: "Imitation Learning и Reinforcement Learning под задачи заказчика. Сбор датасета, обучение на GPU-сервере, итерации до результата.",
    timeline: "2–4 месяца",
    tech: ["IL", "RL", "Isaac Sim"],
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
]

const trainingLevels = [
  { level: "Базовый", title: "Управление", duration: "1–2 дня", Icon: GraduationScrollIcon, color: "#16a34a" },
  { level: "Продвинутый", title: "ROS 2 + Python", duration: "3–5 дней", Icon: CodeIcon, color: "#2563eb" },
  { level: "Исследовательский", title: "ИИ и Embodied AI", duration: "1–2 недели", Icon: CpuSettingsIcon, color: "#9333ea" },
]

const otherServices = [
  {
    Icon: Settings01Icon,
    title: "Интеграция и настройка",
    desc: "Первичная настройка, калибровка и конфигурация на площадке заказчика. Подключение к сети, настройка сенсоров, тестовые прогоны.",
  },
  {
    Icon: CustomerServiceIcon,
    title: "Техподдержка 24/7",
    desc: "Приоритетная поддержка по email и телефону. Удалённая диагностика, обновления прошивок, консультации инженеров.",
  },
  {
    Icon: DeliveryBox01Icon,
    title: "Поставка под ключ",
    desc: "Полный цикл: заказ с завода Unitree, международная логистика, таможенное оформление, доставка до площадки. НДС 16% включён.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Наши услуги
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Не просто продаём — внедряем ИИ-решения
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Разрабатываем кастомные ИИ-модули, обучаем команду, интегрируем робота в ваши бизнес-процессы.
            Полный цикл от первой консультации до запуска в эксплуатацию. Срок: 3–5 месяцев.
          </p>
        </div>

        {/* AI Modules */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-display font-bold text-slate-900">
              ИИ-модули — кастомная разработка
            </h3>
            <span className="hidden sm:block text-xs text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
              Совместимы со всеми EDU-версиями роботов
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiModules.map((m) => (
              <div
                key={m.title}
                className={`bg-white rounded-2xl border ${m.border} p-6 hover:shadow-lg transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${m.bg} flex items-center justify-center`}>
                    <m.Icon size={24} color="currentColor" className={m.color} />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Clock01Icon size={12} color="currentColor" />
                    {m.timeline}
                  </div>
                </div>
                <h4 className="font-display font-bold text-slate-900 text-lg mb-2">{m.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{m.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {m.tech.map((t) => (
                    <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Full package */}
            <div className="rounded-2xl border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-white p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Settings01Icon size={24} color="white" />
                </div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2.5 py-1 rounded-full">
                  Всё включено
                </span>
              </div>
              <h4 className="font-display font-bold text-slate-900 text-lg mb-2">Полный пакет — все 5 модулей</h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Голосовой оператор + чат-интерфейс + компьютерное зрение + автономный агент + дообучение.
                Максимальная автономность робота. Одна команда, один договор.
              </p>
              <div className="flex items-center gap-1 text-xs text-blue-600 font-medium">
                <Clock01Icon size={12} color="currentColor" />
                14–16 недель
              </div>
            </div>
          </div>
        </div>

        {/* Training overview */}
        <div className="mb-14">
          <h3 className="text-xl font-display font-bold text-slate-900 mb-6">
            Обучение — 3 уровня
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {trainingLevels.map((t) => (
              <div key={t.level} className="bg-slate-50 rounded-xl border border-slate-200 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
                    <t.Icon size={20} color={t.color} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{t.title}</p>
                    <p className="text-xs text-slate-500">{t.level} · {t.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other services */}
        <div className="mb-10">
          <h3 className="text-xl font-display font-bold text-slate-900 mb-6">
            Сервис и поддержка
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <div key={s.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-5">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <s.Icon size={20} color="#2563eb" />
                </div>
                <p className="font-semibold text-slate-900 mb-2">{s.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 sm:p-10 text-center">
          <h3 className="text-2xl font-display font-bold text-white mb-3">
            Нужен комплексный проект?
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Подберём робота, ИИ-модули, формат обучения и план внедрения под ваши задачи.
            Первая консультация — бесплатно.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors text-sm"
            >
              Обсудить проект
              <ArrowRight01Icon size={16} color="currentColor" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 hover:bg-white/20 transition-colors text-sm"
            >
              Все услуги подробнее
              <ArrowRight01Icon size={16} color="currentColor" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
