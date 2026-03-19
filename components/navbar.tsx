"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu01Icon, Cancel01Icon, ArrowRight01Icon } from "hugeicons-react"

const navLinks = [
  { href: "/#products", label: "Роботы" },
  { href: "/industry", label: "Отрасли" },
  { href: "/training", label: "Обучение" },
  { href: "/#rental", label: "Аренда" },
  { href: "/about", label: "О нас" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false
    return pathname === href
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center">
              <span className="text-white text-xs font-bold">U</span>
            </div>
            <span className={`font-semibold text-lg transition-colors ${scrolled || !isHome ? "text-slate-900" : "text-slate-900"}`}>
              Unitree<span className="text-blue-600">.</span>alashed
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              l.href.startsWith("/#") ? (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(l.href)
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`}
                >
                  {l.label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#contact"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Оставить заявку
              <ArrowRight01Icon size={14} color="currentColor" />
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            {open ? (
              <Cancel01Icon size={22} color="currentColor" />
            ) : (
              <Menu01Icon size={22} color="currentColor" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-slate-100 mt-2 pt-4 bg-white/95 backdrop-blur-md">
            {navLinks.map((l) => (
              l.href.startsWith("/#") ? (
                <a
                  key={l.href}
                  href={l.href}
                  className="block py-2.5 text-slate-700 hover:text-blue-600 font-medium text-sm"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`block py-2.5 font-medium text-sm ${isActive(l.href) ? "text-blue-600" : "text-slate-700 hover:text-blue-600"}`}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              )
            ))}
            <a
              href="/#contact"
              className="mt-3 flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded-lg font-semibold text-sm"
              onClick={() => setOpen(false)}
            >
              Оставить заявку
              <ArrowRight01Icon size={16} color="currentColor" />
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
