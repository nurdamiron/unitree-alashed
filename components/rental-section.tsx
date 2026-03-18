const rentalModels = [
  { name: "Go2 Pro", icon: "🐕", desc: "Идеально для мероприятий, выставок и демонстраций" },
  { name: "B2", icon: "🏭", desc: "Промышленная инспекция, охрана, съёмки" },
  { name: "G1", icon: "🤖", desc: "Презентации, исследования, образование" },
  { name: "R1", icon: "🦾", desc: "Демо, конференции, научные мероприятия" },
]

const steps = [
  { n: "1", title: "Оставьте заявку", desc: "Укажите модель, даты и цель использования" },
  { n: "2", title: "Согласуем условия", desc: "Менеджер свяжется в течение 2 часов, обсудим залог и доставку" },
  { n: "3", title: "Обучение и доставка", desc: "Привезём робота, проведём инструктаж по управлению" },
  { n: "4", title: "Используйте", desc: "Работайте с роботом. Техподдержка онлайн 24/7" },
]

export default function RentalSection() {
  return (
    <section id="rental" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Аренда роботов
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
              Арендуйте от 1 дня
            </h2>
            <p className="text-slate-600 mb-8">
              Не готовы к покупке? Арендуйте робота для выставки, исследований,
              съёмки или образовательного мероприятия. Доставка по Алматы включена.
            </p>

            {/* Terms */}
            <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-100">
              <h3 className="font-semibold text-slate-900 mb-4">Условия аренды</h3>
              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  ["📅", "Минимальный срок: 1 день"],
                  ["🚚", "Доставка по Алматы: включена"],
                  ["🎓", "Обучение управлению: включено"],
                  ["🛡️", "Техподдержка 24/7: включена"],
                  ["💰", "Залог: обсуждается индивидуально"],
                  ["📦", "Доставка в регионы: по договорённости"],
                ].map(([icon, text]) => (
                  <li key={text as string} className="flex items-center gap-3">
                    <span>{icon}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Available for rent */}
            <h3 className="font-semibold text-slate-900 mb-3">Доступны для аренды</h3>
            <div className="grid grid-cols-2 gap-3">
              {rentalModels.map((m) => (
                <div key={m.name} className="bg-slate-50 rounded-xl p-3 border border-slate-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{m.icon}</span>
                    <span className="font-semibold text-slate-900 text-sm">{m.name}</span>
                  </div>
                  <p className="text-xs text-slate-500">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: process */}
          <div>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-6">Как арендовать</h3>
            <div className="space-y-4">
              {steps.map((s, i) => (
                <div key={s.n} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                      {s.n}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 h-8 bg-blue-200 mx-auto mt-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="font-semibold text-slate-900 mb-1">{s.title}</p>
                    <p className="text-sm text-slate-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-slate-900 rounded-2xl p-6 text-white">
              <p className="text-lg font-semibold mb-2">Узнать стоимость аренды</p>
              <p className="text-slate-400 text-sm mb-4">
                Цены зависят от модели, срока и дополнительных услуг. Свяжитесь с нами.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-500 transition-colors text-sm"
              >
                Оставить заявку на аренду
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
