"use client"

import { useState } from "react"
import { Call02Icon, Mail01Icon, Location01Icon, CheckmarkCircle01Icon, ArrowRight01Icon, WhatsappIcon, TelegramIcon } from "hugeicons-react"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", type: "buy", model: "", message: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error("Ошибка отправки")
      setSent(true)
    } catch {
      setError("Не удалось отправить заявку. Попробуйте ещё раз или напишите нам напрямую.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
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
                <div className="flex justify-center mb-4">
                  <CheckmarkCircle01Icon size={48} color="#16a34a" />
                </div>
                <p className="font-semibold text-green-800 text-lg mb-1">Заявка отправлена!</p>
                <p className="text-green-600 text-sm">Мы свяжемся с вами в течение 2 часов в рабочее время.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
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
                    <option value="training">Записаться на обучение</option>
                    <option value="consult">Консультация</option>
                    <option value="partner">Партнёрство / дистрибьюция</option>
                    <option value="edu">Корпоративная программа для вуза/компании</option>
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
                    <option value="b2">B2 (промышленный, от $76 900)</option>
                    <option value="g1">G1 (гуманоид, от $13 500)</option>
                    <option value="h2">H2 (гуманоид премиум, от $29 900)</option>
                    <option value="r1-air">R1 AIR ($5 900)</option>
                    <option value="r1-pro">R1 Pro (~$16 000)</option>
                    <option value="r1-edu">R1 EDU (по запросу)</option>
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

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Отправка..." : "Отправить заявку"}
                  {!loading && <ArrowRight01Icon size={16} color="currentColor" />}
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
              {/* WhatsApp */}
              <a
                href="https://wa.me/77009001917"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-green-300 hover:bg-green-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                  <WhatsappIcon size={20} color="#16a34a" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">WhatsApp</p>
                  <p className="text-green-600 font-medium">+7 700 900 1917</p>
                  <p className="text-xs text-slate-500">Пн–Вс, 9:00–21:00</p>
                </div>
              </a>
              {/* Telegram */}
              <a
                href="https://t.me/alashed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <TelegramIcon size={20} color="#2563eb" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Telegram</p>
                  <p className="text-blue-600 font-medium">@alashed</p>
                  <p className="text-xs text-slate-500">Быстрый ответ</p>
                </div>
              </a>
              {/* Email */}
              <a
                href="mailto:unitree@alashed.kz"
                className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                  <Mail01Icon size={20} color="#2563eb" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Email</p>
                  <p className="text-blue-600 font-medium">unitree@alashed.kz</p>
                  <p className="text-xs text-slate-500">Ответим в течение 24 часов</p>
                </div>
              </a>
              {/* Location */}
              <div className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Location01Icon size={20} color="#2563eb" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Алматы, Казахстан</p>
                  <p className="text-xs text-slate-500 mt-0.5">Поставки по всей Центральной Азии</p>
                </div>
              </div>
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
                className="inline-flex items-center gap-1.5 text-blue-400 text-sm mt-3 hover:text-blue-300 transition-colors"
              >
                it.alashed.kz
                <ArrowRight01Icon size={14} color="currentColor" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
