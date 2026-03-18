import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Blue glow top-left */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
      {/* Cyan glow bottom-right */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 text-sm text-blue-700 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Официальный партнёр Unitree Robotics в Казахстане
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
              Роботы{" "}
              <span className="gradient-text">Unitree</span>
              {" "}в Казахстане
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Продажа и аренда роботов-собак и гуманоидов. Квадруподы Go2 и B2,
              гуманоиды G1 и H2. Доставка по Казахстану, официальная гарантия, техподдержка 24/7.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Смотреть модели
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#rental"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Арендовать от 1 дня
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Официальная гарантия
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Доставка по Казахстану
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Техподдержка 24/7
              </div>
            </div>
          </div>

          {/* Right: robot showcase card */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden aspect-square max-w-md mx-auto shadow-2xl">
              {/* Placeholder for Go2 hero image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <div className="w-24 h-24 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-white mb-1">Unitree Go2</p>
                <p className="text-sm text-slate-400 text-center">Робот-квадрупод нового поколения с 4D LiDAR и воплощённым ИИ</p>
                <div className="mt-4 flex gap-3 text-xs text-slate-400">
                  <span className="bg-white/10 px-2 py-1 rounded">~5 м/с</span>
                  <span className="bg-white/10 px-2 py-1 rounded">4D LiDAR</span>
                  <span className="bg-white/10 px-2 py-1 rounded">от $1 600</span>
                </div>
              </div>

              {/* Decorative corner label */}
              <div className="absolute top-4 right-4 bg-blue-500/20 border border-blue-500/30 rounded-lg px-2 py-1 text-xs text-blue-300 font-medium">
                NEW
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 p-3 text-sm">
              <p className="font-semibold text-slate-900">6 моделей</p>
              <p className="text-slate-500 text-xs">в наличии</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 p-3 text-sm">
              <p className="font-semibold text-slate-900">Аренда</p>
              <p className="text-slate-500 text-xs">от 1 дня</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
