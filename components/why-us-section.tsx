const advantages = [
  {
    icon: "🏆",
    title: "Официальный партнёр",
    desc: "Прямые поставки от Unitree Robotics. Официальная гарантия производителя на все модели.",
  },
  {
    icon: "🇰🇿",
    title: "Доставка по Казахстану",
    desc: "Доставляем в Алматы, Астану и другие города. Таможенное оформление и растаможка под ключ.",
  },
  {
    icon: "🔧",
    title: "Техподдержка 24/7",
    desc: "Наши инженеры помогут с настройкой, обновлением ПО и устранением неполадок в любое время.",
  },
  {
    icon: "📚",
    title: "Обучение и интеграция",
    desc: "Проводим обучение операторов, помогаем интегрировать роботов в существующие процессы.",
  },
  {
    icon: "💼",
    title: "Гибкие условия",
    desc: "Продажа, аренда, лизинг. Работаем с юрлицами, НДС, рассрочка для корпоративных клиентов.",
  },
  {
    icon: "🔄",
    title: "Обновления и сервис",
    desc: "OTA обновления прошивок, плановое ТО, ремонт и замена запчастей. Гарантийное обслуживание.",
  },
]

export default function WhyUsSection() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Почему Alashed
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
              Надёжный партнёр для бизнеса и науки
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Alashed — IT-компания с опытом в автоматизации и цифровых решениях для бизнеса в Казахстане.
              Мы не просто продаём роботов — мы помогаем внедрить их в ваши процессы.
            </p>

            {/* Key numbers */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { n: "6+", l: "моделей в каталоге" },
                { n: "KZ", l: "Официальный партнёр" },
                { n: "24/7", l: "Техподдержка" },
              ].map((item) => (
                <div key={item.l} className="text-center bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <p className="text-2xl font-bold font-display text-blue-600">{item.n}</p>
                  <p className="text-xs text-slate-500 mt-1">{item.l}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-900 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-slate-800 transition-colors"
            >
              Связаться с нами
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: advantages grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{a.icon}</div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">{a.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
