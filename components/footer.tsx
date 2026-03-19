import Link from "next/link"
import Image from "next/image"
import { ArrowRight01Icon, Mail01Icon, Call02Icon, Location01Icon } from "hugeicons-react"

const productLinks = [
  { label: "Unitree Go2", href: "/products/go2" },
  { label: "Unitree B2", href: "/products/b2" },
  { label: "Unitree G1", href: "/products/g1" },
  { label: "Unitree H2", href: "/products/h2" },
  { label: "Unitree R1", href: "/products/r1" },
]

const companyLinks = [
  { label: "О нас", href: "/about" },
  { label: "Промышленные решения", href: "/industry" },
  { label: "Обучение", href: "/training" },
  { label: "Аренда роботов", href: "/#rental" },
  { label: "Применение", href: "/#usecases" },
  { label: "FAQ", href: "/#faq" },
  { label: "Контакты", href: "/#contact" },
]

const countries = ["Казахстан", "Узбекистан", "Кыргызстан", "Таджикистан", "Туркменистан"]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/alashed-logo-white.svg"
                alt="Alashed"
                width={28}
                height={28}
              />
              <span className="text-white font-semibold text-sm">
                alashed<span className="text-blue-400 mx-0.5">×</span><span className="text-slate-400 font-normal">unitree</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5">
              Официальный дистрибьютор Unitree Robotics в Центральной Азии. Продажа, аренда
              и обучение в 5 странах региона.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {countries.map((c) => (
                <span key={c} className="text-xs bg-slate-800 text-slate-400 border border-slate-700 px-2 py-0.5 rounded-full">
                  {c}
                </span>
              ))}
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Связаться с нами
              <ArrowRight01Icon size={14} color="currentColor" />
            </a>
          </div>

          {/* Products */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Роботы</p>
            <ul className="space-y-2.5 text-sm">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Компания</p>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  {l.href.startsWith("/#") ? (
                    <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
                  ) : (
                    <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <p className="text-white font-semibold text-sm mb-4">Контакты</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Call02Icon size={16} color="#60a5fa" className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">WhatsApp / Telegram</p>
                  <p>+7 (700) XXX-XX-XX</p>
                  <p className="text-xs mt-0.5">Пн–Вс, 9:00–21:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail01Icon size={16} color="#60a5fa" className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:unitree@alashed.kz" className="hover:text-white transition-colors">
                    unitree@alashed.kz
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Location01Icon size={16} color="#60a5fa" className="flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Алматы, Казахстан</p>
                  <p className="text-xs mt-0.5">Поставки по всей Центральной Азии</p>
                </div>
              </li>
            </ul>
            <div className="mt-5 pt-5 border-t border-slate-800">
              <p className="text-xs text-slate-500 mb-2">Часть экосистемы</p>
              <a
                href="https://it.alashed.kz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
              >
                it.alashed.kz
                <ArrowRight01Icon size={12} color="currentColor" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Alashed IT. Все права защищены. unitree.alashed.kz</p>
          <p>Unitree® — торговая марка YuShu Technology Co., Ltd (Ханчжоу, Китай)</p>
        </div>
      </div>
    </footer>
  )
}
