"use client"

import { useState } from "react"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", type: "buy", model: "", message: "" })
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: connect to API route or Telegram bot
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: form */}
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Связаться
            </p>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-2">
              Оставьте заявку
            </h2>
            <p className="text-slate-600 mb-8">
              Менеджер свяжется в течение 2 часов и ответит на все вопросы.
            </p>

            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-3">✅</div>
                <p className="font-semibold text-green-800 text-lg mb-1">Заявка отправлена!</p>
                <p className="text-green-600 text-sm">Мы свяжемся с вами в течение 2 часов.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Ваше имя *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-400 text-slate-900 bg-white placeholder-slate-400 text-sm"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Телефон / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-400 text-slate-900 bg-white placeholder-slate-400 text-sm"
                      placeholder="+7 700 000 00 00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Тип запроса</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-400 text-slate-900 bg-white text-sm"
                  >
                    <option value="buy">Купить робота</option>
                    <option value="rent">Арендовать</option>
                    <option value="consult">Консультация</option>
                    <option value="partner">Партнёрство</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Интересующая модель</label>
                  <select
                    value={form.model}
                    onChange={(e) => setForm({ ...form, model: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-400 text-slate-900 bg-white text-sm"
                  >
                    <option value="">Не определился / нужна консультация</option>
                    <option value="go2-air">Go2 Air ($1 600)</option>
                    <option value="go2-pro">Go2 Pro ($2 800)</option>
                    <option value="go2-x">Go2 X ($4 500)</option>
                    <option value="go2-edu">Go2 EDU (по запросу)</option>
                    <option value="b2">B2 (промышленный)</option>
                    <option value="g1">G1 (гуманоид, $13 500)</option>
                    <option value="h2">H2 (гуманоид премиум)</option>
                    <option value="r1">R1 (гуманоид, от $5 900)</option>
                    <option value="a2">A2 (экстремальный)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Сообщение</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-400 text-slate-900 bg-white placeholder-slate-400 text-sm resize-none"
                    placeholder="Опишите вашу задачу или вопрос..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 transition-colors text-sm"
                >
                  Отправить заявку
                </button>

                <p className="text-xs text-slate-400 text-center">
                  Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>

          {/* Right: contacts */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold text-slate-900">Контакты</h3>

            <div className="space-y-4">
              {[
                { icon: "📱", title: "WhatsApp / Telegram", value: "+7 (700) XXX-XX-XX", sub: "Пн–Вс, 9:00–21:00" },
                { icon: "📧", title: "Email", value: "unitree@alashed.kz", sub: "Ответим в течение 24 часов" },
                { icon: "📍", title: "Адрес", value: "Алматы, Казахстан", sub: "Доставка по всему Казахстану" },
              ].map((c) => (
                <div key={c.title} className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{c.title}</p>
                    <p className="text-blue-600 font-medium">{c.value}</p>
                    <p className="text-xs text-slate-500">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Partner badge */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
              <p className="text-sm text-slate-400 mb-2">Часть экосистемы</p>
              <p className="text-xl font-display font-bold mb-1">Alashed IT</p>
              <p className="text-slate-400 text-sm">
                IT-аутсорсинг, автоматизация бизнеса и роботизация производственных процессов в Казахстане.
              </p>
              <a
                href="https://it.alashed.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-400 text-sm mt-3 hover:text-blue-300"
              >
                it.alashed.kz →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
