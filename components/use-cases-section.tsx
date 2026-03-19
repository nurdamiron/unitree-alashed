import {
  GraduationScrollIcon,
  Factory01Icon,
  StarIcon,
  SecurityPasswordIcon,
  Settings01Icon,
  SecurityCheckIcon,
} from "hugeicons-react"

const cases = [
  {
    Icon: GraduationScrollIcon,
    title: "Образование и исследования",
    desc: "Университеты, технопарки и лаборатории используют Go2 EDU и G1 EDU для курсов по робототехнике, AI и кинематике. Открытое API, поддержка ROS 2.",
    models: ["Go2 EDU", "G1 EDU", "R1"],
    color: "border-blue-200 bg-blue-50",
    iconColor: "#2563eb",
    iconBg: "bg-blue-100",
  },
  {
    Icon: Factory01Icon,
    title: "Промышленная инспекция",
    desc: "Обследование нефтяных объектов, энергетической инфраструктуры, шахт и опасных зон. B2 работает при -20°C, IP67, нагрузка до 120 кг.",
    models: ["B2", "B2-W"],
    color: "border-orange-200 bg-orange-50",
    iconColor: "#ea580c",
    iconBg: "bg-orange-100",
  },
  {
    Icon: StarIcon,
    title: "Мероприятия и развлечения",
    desc: "Выставки, конференции, корпоративы, спортивные события. Go2 выступал на Азиатских играх 2023 в роли медаленосца.",
    models: ["Go2 Pro", "Go2 X", "G1"],
    color: "border-purple-200 bg-purple-50",
    iconColor: "#9333ea",
    iconBg: "bg-purple-100",
  },
  {
    Icon: SecurityCheckIcon,
    title: "Спасательные операции",
    desc: "Обследование зданий после ЧС, разведка в опасных зонах, поисково-спасательные операции. B2 преодолевает завалы и работает в экстремальных условиях.",
    models: ["B2", "B2-W"],
    color: "border-red-200 bg-red-50",
    iconColor: "#dc2626",
    iconBg: "bg-red-100",
  },
  {
    Icon: Settings01Icon,
    title: "Научные исследования ИИ",
    desc: "Разработка алгоритмов управления, машинное обучение, воплощённый ИИ. G1 и R1 поддерживают имитационное и подкрепляющее обучение из коробки.",
    models: ["G1 EDU", "R1 EDU", "H2 EDU"],
    color: "border-teal-200 bg-teal-50",
    iconColor: "#0d9488",
    iconBg: "bg-teal-100",
  },
  {
    Icon: SecurityPasswordIcon,
    title: "Охрана и патрулирование",
    desc: "Автономный обход периметра, 3D-картирование, детекция аномалий. B2 и Go2 работают полностью автономно с возможностью дистанционного мониторинга.",
    models: ["B2", "Go2 X"],
    color: "border-slate-200 bg-slate-50",
    iconColor: "#475569",
    iconBg: "bg-slate-100",
  },
]

export default function UseCasesSection() {
  return (
    <section id="usecases" className="py-12 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Применение
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Где используются роботы Unitree
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            От университетских лабораторий до нефтяных месторождений — роботы Unitree
            работают в самых разных отраслях.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className={`rounded-2xl border p-5 sm:p-6 ${c.color} hover:shadow-md transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center mb-4`}>
                <c.Icon size={24} color={c.iconColor} />
              </div>
              <h3 className="font-display font-bold text-slate-900 mb-2">{c.title}</h3>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">{c.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.models.map((m) => (
                  <span key={m} className="text-xs bg-white/70 text-slate-700 border border-white px-2.5 py-1 rounded-full font-medium">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
