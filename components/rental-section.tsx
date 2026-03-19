"use client"

import {
  Calendar01Icon,
  DeliveryBox01Icon,
  GraduationScrollIcon,
  CustomerServiceIcon,
  MoneyBag01Icon,
  ArrowRight01Icon,
  Tick01Icon,
} from "hugeicons-react"

const rentalModels = [
  {
    name: "Go2 Pro",
    desc: "Мероприятия, выставки, демонстрации, образование",
  },
  {
    name: "B2",
    desc: "Промышленная инспекция, охрана объектов, съёмки",
  },
  {
    name: "G1",
    desc: "Презентации, исследования, конференции",
  },
  {
    name: "R1",
    desc: "Демо-показы, научные и образовательные мероприятия",
  },
]

const rentalTerms = [
  { icon: <Calendar01Icon size={16} color="#2563eb" />, text: "Минимальный срок: 1 день" },
  { icon: <DeliveryBox01Icon size={16} color="#2563eb" />, text: "Доставка по Алматы: включена" },
  { icon: <GraduationScrollIcon size={16} color="#2563eb" />, text: "Обучение управлению: включено" },
  { icon: <CustomerServiceIcon size={16} color="#2563eb" />, text: "Техподдержка 24/7: включена" },
  { icon: <MoneyBag01Icon size={16} color="#2563eb" />, text: "Залог: обсуждается индивидуально" },
  { icon: <DeliveryBox01Icon size={16} color="#2563eb" />, text: "Доставка в регионы: по договорённости" },
]

const steps = [
  { n: "1", title: "Оставьте заявку", desc: "Укажите модель, даты использования и цель аренды" },
  { n: "2", title: "Согласуем условия", desc: "Менеджер свяжется в течение 2 часов, обсудим залог и доставку" },
  { n: "3", title: "Обучение и доставка", desc: "Привезём робота и проведём инструктаж по управлению" },
  { n: "4", title: "Используйте", desc: "Работайте с роботом. Техподдержка онлайн 24/7 в процессе аренды" },
]

export default function RentalSection() {
  return (
    <section id="rental" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Аренда роботов
            </p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
              Арендуйте от 1 дня
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Не готовы к покупке? Арендуйте робота для выставки, исследований,
              съёмок или образовательного мероприятия. Доставка по Алматы включена в стоимость.
            </p>

            {/* Terms */}
            <div className="bg-blue-50 rounded-2xl p-5 sm:p-6 mb-8 border border-blue-100">
              <h3 className="font-semibold text-slate-900 mb-4">Условия аренды</h3>
              <ul className="space-y-3">
                {rentalTerms.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
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
                    <Tick01Icon size={14} color="#2563eb" />
                    <span className="font-semibold text-slate-900 text-sm">{m.name}</span>
                  </div>
                  <p className="text-xs text-slate-500 pl-5">{m.desc}</p>
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

            <div className="mt-8 bg-slate-900 rounded-2xl p-5 sm:p-6 text-white">
              <p className="text-lg font-semibold mb-2">Узнать стоимость аренды</p>
              <p className="text-slate-400 text-sm mb-4">
                Цены зависят от модели, срока и дополнительных услуг. Свяжитесь с нами для расчёта.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-500 transition-colors text-sm"
              >
                Оставить заявку на аренду
                <ArrowRight01Icon size={16} color="currentColor" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
