const models = ["Go2 Air", "Go2 Pro", "Go2 X", "B2", "G1", "H2", "R1", "A2"]
const links = [
  { label: "Каталог", href: "#products" },
  { label: "Аренда", href: "#rental" },
  { label: "Применение", href: "#usecases" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center">
                <span className="text-white text-xs font-bold">U</span>
              </div>
              <span className="text-white font-semibold">Unitree<span className="text-blue-400">.</span>alashed</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-4">
              Официальный партнёр Unitree Robotics в Казахстане. Продажа и аренда роботов-квадруподов и гуманоидов.
            </p>
            <p className="text-xs">unitree.alashed.kz</p>
          </div>

          {/* Models */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Модели</p>
            <ul className="space-y-2 text-sm">
              {models.map((m) => (
                <li key={m}>
                  <a href="#products" className="hover:text-white transition-colors">{m}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Разделы</p>
            <ul className="space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2026 Alashed IT. Все права защищены.</p>
          <p>
            Unitree® является зарегистрированной торговой маркой Unitree Robotics Co., Ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}
