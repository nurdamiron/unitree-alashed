"use client"

import { useState } from "react"

const faqs = [
  {
    q: "Сколько стоит Unitree Go2?",
    a: "Unitree Go2 доступен в четырёх версиях: Air от $1 600, Pro от $2 800, X от $4 500, EDU — по запросу. Цены указаны без учёта доставки и таможенных расходов. Свяжитесь с нами для точного расчёта стоимости под ключ в Казахстане.",
  },
  {
    q: "Как арендовать робота Unitree?",
    a: "Аренда доступна от 1 дня. Оставьте заявку, укажите нужную модель и даты. Менеджер согласует залог и условия, доставим по Алматы. В аренду доступны: Go2 Pro, B2, G1, R1.",
  },
  {
    q: "Есть ли гарантия на роботов Unitree?",
    a: "Да, все роботы поставляются с официальной гарантией производителя: Go2 и B2 — 12 месяцев, G1 стандарт — 8 месяцев, G1 EDU — 18 месяцев, R1 AIR — 6 месяцев, R1 Pro — 8 месяцев, R1 EDU — 12 месяцев.",
  },
  {
    q: "Сколько времени занимает доставка?",
    a: "Среднее время поставки — 3–6 недель с учётом производства, таможенного оформления и доставки в Казахстан. Для некоторых моделей, доступных со склада, срок короче. Доставка в Алматы и Астану.",
  },
  {
    q: "Нужны ли специальные навыки для управления роботом?",
    a: "Нет, базовое управление через приложение не требует технических знаний. При покупке или аренде мы проводим обучение оператора. Для программирования и разработки собственного ПО нужны навыки Python/ROS.",
  },
  {
    q: "Можно ли купить в рассрочку или лизинг?",
    a: "Да, для юридических лиц доступны лизинг и рассрочка. Работаем с документами для бухгалтерии: счёт-фактура, накладная, НДС. Свяжитесь с нами для обсуждения условий.",
  },
  {
    q: "Чем Unitree Go2 отличается от Unitree B2?",
    a: "Go2 — потребительский/образовательный квадрупод (~15 кг, от $1 600), идеален для обучения, исследований и демонстраций. B2 — промышленный тяжелоатлет (~60 кг, от $76 900), способный нести 120 кг, работать при -20°C, преодолевать 45° склоны. Разные задачи, разный бюджет.",
  },
  {
    q: "Что такое Unitree G1 и для кого он подходит?",
    a: "G1 — самый доступный полноразмерный гуманоид на рынке ($13 500). Подходит для университетов, исследовательских лабораторий, технопарков и компаний, работающих над воплощённым ИИ. Поддерживает имитационное обучение, ROS 2, Python API.",
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Часто задаваемые вопросы
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-blue-200 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 transition-transform ${open === i ? "rotate-180" : ""}`}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
