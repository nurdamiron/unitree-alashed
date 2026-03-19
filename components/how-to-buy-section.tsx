import {
  Archive01Icon,
  MessageEdit01Icon,
  MoneyBag01Icon,
  DeliveryBox01Icon,
  ArrowRight01Icon,
} from "hugeicons-react"

const steps = [
  {
    n: "01",
    title: "Выберите модель",
    desc: "Изучите каталог. Если не уверены — опишите задачу и мы подберём оптимальный вариант под ваш бюджет и задачи.",
    Icon: Archive01Icon,
  },
  {
    n: "02",
    title: "Оставьте заявку",
    desc: "Заполните форму или напишите в WhatsApp. Менеджер ответит в течение 2 часов в рабочее время.",
    Icon: MessageEdit01Icon,
  },
  {
    n: "03",
    title: "Счёт и оплата",
    desc: "Выставим счёт для ИП или юрлица. Оплата в тенге. Работаем с НДС. Возможна рассрочка.",
    Icon: MoneyBag01Icon,
  },
  {
    n: "04",
    title: "Доставка и запуск",
    desc: "Среднее время поставки 3–6 недель. Доставим, настроим, обучим вашу команду работе с роботом.",
    Icon: DeliveryBox01Icon,
  },
]

export default function HowToBuySection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Процесс покупки
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Как купить робота Unitree
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Простой и понятный процесс от первого обращения до запуска в работу.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full h-px border-t border-dashed border-slate-700 z-0"
                  style={{ width: "calc(100% - 2rem)" }}
                />
              )}

              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-colors relative z-10 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center font-mono">
                    {s.n}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center">
                    <s.Icon size={18} color="#60a5fa" />
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-500 transition-colors text-lg"
          >
            Начать — оставить заявку
            <ArrowRight01Icon size={20} color="currentColor" />
          </a>
        </div>
      </div>
    </section>
  )
}
