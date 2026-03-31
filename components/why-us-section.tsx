import {
  StarIcon,
  DeliveryBox01Icon,
  CustomerServiceIcon,
  GraduationScrollIcon,
  MoneyBag01Icon,
  Settings01Icon,
  CpuSettingsIcon,
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
  Location01Icon,
} from "hugeicons-react"

const advantages = [
  {
    Icon: StarIcon,
    title: "Официальный партнёр Unitree",
    desc: "Прямые поставки от Unitree Robotics. Официальная гарантия производителя до 24 месяцев. Доступ к последним моделям и обновлениям прошивок.",
    details: ["Прямой контракт с Unitree", "Гарантия 12–24 мес.", "Оригинальные запчасти"],
  },
  {
    Icon: CpuSettingsIcon,
    title: "Собственная ИИ-разработка",
    desc: "Не просто продаём — разрабатываем кастомные ИИ-модули: голосовое управление, компьютерное зрение, автономные агенты. Штатная команда инженеров.",
    details: ["5 ИИ-модулей", "Штат разработчиков", "Поддержка ROS 2 / Python"],
  },
  {
    Icon: DeliveryBox01Icon,
    title: "Поставки в 5 стран ЦА",
    desc: "Казахстан, Узбекистан, Кыргызстан, Таджикистан, Туркменистан. Полное таможенное оформление, логистика, документы для бухгалтерии. НДС 16% включён.",
    details: ["Таможня под ключ", "НДС 16% включён", "Доставка до площадки"],
  },
  {
    Icon: CustomerServiceIcon,
    title: "Техподдержка и сервис",
    desc: "Команда инженеров на связи для удалённой диагностики, обновлений ПО, консультаций. Гарантийный и послегарантийный ремонт. Запчасти на складе.",
    details: ["Удалённая диагностика", "OTA обновления", "Склад запчастей"],
  },
  {
    Icon: GraduationScrollIcon,
    title: "Обучение и сертификация",
    desc: "3 уровня обучения: от оператора до AI-разработчика. Очно в Алматы, выездной формат по ЦА, корпоративные программы для вузов и компаний.",
    details: ["3 уровня курсов", "Очно / выездной / онлайн", "Корпоративные программы"],
  },
  {
    Icon: MoneyBag01Icon,
    title: "Гибкие условия оплаты",
    desc: "Продажа, аренда от 1 дня, лизинг для юрлиц. Рассрочка для корпоративных клиентов. Все документы: счёт-фактура, накладная, акт выполненных работ.",
    details: ["Продажа / аренда / лизинг", "Рассрочка для юрлиц", "Полный пакет документов"],
  },
]

const clientTypes = [
  "Университеты и лаборатории",
  "Нефтегазовые компании",
  "Промышленные предприятия",
  "Государственные органы",
  "IT-компании и стартапы",
  "Технопарки и акселераторы",
]

export default function WhyUsSection() {
  return (
    <section id="why" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Почему Alashed
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Единственный официальный дистрибьютор Unitree в ЦА
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Alashed — IT-компания с опытом в автоматизации и цифровых решениях.
            Мы не просто продаём роботов — разрабатываем ИИ, обучаем команды, интегрируем в процессы и сопровождаем на всём жизненном цикле.
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {advantages.map((a) => (
            <div
              key={a.title}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <a.Icon size={22} color="#2563eb" />
              </div>
              <h3 className="font-display font-bold text-slate-900 mb-2">{a.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{a.desc}</p>
              <ul className="space-y-1.5">
                {a.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-xs text-slate-500">
                    <CheckmarkCircle01Icon size={13} color="#2563eb" className="flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: stats + clients */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Key numbers */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-display font-bold mb-6">Alashed в цифрах</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { n: "5", l: "стран Центральной Азии" },
                { n: "10+", l: "моделей Unitree" },
                { n: "5", l: "ИИ-модулей собственной разработки" },
                { n: "24/7", l: "техподдержка" },
                { n: "3–5", l: "месяцев от договора до запуска" },
                { n: "12–24", l: "месяца гарантия" },
              ].map((item) => (
                <div key={item.l} className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <p className="text-2xl font-bold font-display text-blue-400">{item.n}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.l}</p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-500 transition-colors text-sm"
            >
              Связаться с нами
              <ArrowRight01Icon size={14} color="currentColor" />
            </a>
          </div>

          {/* Client types */}
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-6">Наши клиенты</h3>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {clientTypes.map((c) => (
                <div key={c} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <Location01Icon size={18} color="#2563eb" className="flex-shrink-0" />
                  <span className="text-sm text-slate-700 font-medium">{c}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong>Для юридических лиц:</strong> работаем по договору, выставляем счёт-фактуру с НДС,
                предоставляем полный пакет документов для бухгалтерии. Доступны лизинг и рассрочка.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
