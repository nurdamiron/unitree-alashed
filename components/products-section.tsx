const products = [
  {
    id: "go2",
    name: "Unitree Go2",
    category: "Квадрупод / Потребительский",
    tagline: "Новое существо воплощённого ИИ",
    price: "от $1 600",
    priceNote: "Air без контроллера",
    specs: ["~5 м/с", "4D LiDAR L1", "15 кг", "1–4 часа"],
    features: ["AI-навигация", "Голосовое управление", "WiFi 6 + 4G", "Режим ярости"],
    badge: "Хит продаж",
    badgeColor: "bg-green-100 text-green-700",
    forRent: true,
    variants: ["Air $1 600", "Pro $2 800", "X $4 500", "EDU — по запросу"],
  },
  {
    id: "b2",
    name: "Unitree B2",
    category: "Квадрупод / Промышленный",
    tagline: "Выйди за пределы возможностей",
    price: "от $76 900",
    priceNote: "Связаться с менеджером",
    specs: [">6 м/с", "IP67", "60 кг", "4–6 часов"],
    features: ["Нагрузка 120 кг", "45°+ склоны", "-20°C до +55°C", "Дальность >20 км"],
    badge: "Промышленный",
    badgeColor: "bg-orange-100 text-orange-700",
    forRent: true,
    variants: ["B2 стандарт", "B2-W (с колёсами)"],
  },
  {
    id: "g1",
    name: "Unitree G1",
    category: "Гуманоид",
    tagline: "Гуманоидный ИИ-аватар",
    price: "от $13 500",
    priceNote: "Стандартная версия",
    specs: ["132 см", "~35 кг", "23–43 DOF", "~2 часа"],
    features: ["UnifoLM ИИ", "Имитационное обучение", "Дополнительная рука", "OTA обновления"],
    badge: "Гуманоид",
    badgeColor: "bg-purple-100 text-purple-700",
    forRent: true,
    variants: ["G1 стандарт $13 500", "G1 EDU — по запросу"],
  },
  {
    id: "h2",
    name: "Unitree H2",
    category: "Гуманоид / Премиум",
    tagline: "Пробуждение предназначения",
    price: "от $29 900",
    priceNote: "Предзаказ, поставка 2026",
    specs: ["182 см", "~70 кг", "31 DOF", "~3 часа"],
    features: ["2070 TOPS ИИ", "Нагрузка рук 15 кг", "Intel Core i7", "Элегантные движения"],
    badge: "Премиум",
    badgeColor: "bg-blue-100 text-blue-700",
    forRent: false,
    variants: ["H2 стандарт", "H2 EDU"],
  },
  {
    id: "r1",
    name: "Unitree R1",
    category: "Гуманоид / Лёгкий",
    tagline: "Ультралёгкий, полностью настраиваемый",
    price: "от $5 900",
    priceNote: "Base Kit",
    specs: ["123 см", "~25–29 кг", "20–40 DOF", "~1 час"],
    features: ["Самый доступный гуманоид", "Полная кастомизация", "Стерео камеры", "EDU вариант"],
    badge: "Доступный",
    badgeColor: "bg-emerald-100 text-emerald-700",
    forRent: true,
    variants: ["R1 AIR $5 900", "R1 Pro ~$16 000", "R1 EDU — по запросу"],
  },
  {
    id: "a2",
    name: "Unitree A2",
    category: "Квадрупод / Экстремальный",
    tagline: "Звёздный исследователь",
    price: "По запросу",
    priceNote: "Уточнить у менеджера",
    specs: ["Экстрем. условия", "IP68", "Тяж. нагрузка", "Долгий ресурс"],
    features: ["Опасные зоны", "Экстремальный температуры", "Промышленная инспекция", "Расширенная автономия"],
    badge: "Экстремальный",
    badgeColor: "bg-red-100 text-red-700",
    forRent: false,
    variants: ["Уточнить у менеджера"],
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Каталог роботов
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Все модели Unitree
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            От доступных роботов-собак для образования до промышленных квадруподов и гуманоидов.
            Продажа с официальной гарантией, аренда от 1 дня.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Robot image placeholder */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 h-48 flex items-center justify-center relative">
                <div className="text-center text-white">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold text-white/60">{p.name.split(" ")[1]}</span>
                  </div>
                  <p className="text-xs text-slate-400">{p.category}</p>
                </div>
                {/* Badge */}
                <div className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${p.badgeColor}`}>
                  {p.badge}
                </div>
                {/* Rent badge */}
                {p.forRent && (
                  <div className="absolute top-3 right-3 bg-white/10 border border-white/20 text-white text-xs px-2 py-1 rounded-full">
                    Аренда ✓
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-display font-bold text-slate-900 mb-1">{p.name}</h3>
                <p className="text-sm text-slate-500 italic mb-4">{p.tagline}</p>

                {/* Specs pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.specs.map((s) => (
                    <span key={s} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                  <div>
                    <p className="text-xl font-bold text-slate-900">{p.price}</p>
                    <p className="text-xs text-slate-400">{p.priceNote}</p>
                  </div>
                  <a
                    href="#contact"
                    className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Узнать цену
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
