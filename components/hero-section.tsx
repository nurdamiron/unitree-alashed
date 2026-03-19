import { ArrowRight01Icon, CheckmarkCircle01Icon, GraduationScrollIcon, SecurityCheckIcon } from "hugeicons-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60" />

      {/* Blue glow top-left */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
      {/* Cyan glow bottom-right */}
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5 text-sm text-blue-700 font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Официальный дистрибьютор Unitree Robotics в Центральной Азии
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-slate-900 leading-tight mb-6">
              Роботы{" "}
              <span className="gradient-text">Unitree</span>
              {" "}в Центральной Азии
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Продажа, аренда и обучение. Квадруподы Go2 и B2, гуманоиды G1, H2, R1.
              Поставки в Казахстан, Узбекистан, Кыргызстан и другие страны ЦА.
              Официальная гарантия, техподдержка 24/7.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Смотреть модели
                <ArrowRight01Icon size={18} color="currentColor" />
              </a>
              <a
                href="#training"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                <GraduationScrollIcon size={18} color="currentColor" />
                Курсы по робототехнике
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap gap-4 sm:gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckmarkCircle01Icon size={16} color="#22c55e" />
                Официальная гарантия
              </div>
              <div className="flex items-center gap-1.5">
                <CheckmarkCircle01Icon size={16} color="#22c55e" />
                Поставки по всей ЦА
              </div>
              <div className="flex items-center gap-1.5">
                <CheckmarkCircle01Icon size={16} color="#22c55e" />
                Обучение операторов
              </div>
            </div>
          </div>

          {/* Right: video only */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/6zPvT0ig1VM?autoplay=0&rel=0"
                title="Unitree Go2 video"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Floating cards — hidden on small screens to avoid overflow */}
            <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 p-3 text-sm z-10">
              <p className="font-semibold text-slate-900">5 стран</p>
              <p className="text-slate-500 text-xs">Центральной Азии</p>
            </div>
            <div className="hidden sm:block absolute -top-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 p-3 text-sm z-10">
              <div className="flex items-center gap-1.5 mb-0.5">
                <SecurityCheckIcon size={14} color="#2563eb" />
                <p className="font-semibold text-slate-900">Гарантия</p>
              </div>
              <p className="text-slate-500 text-xs">от производителя</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
