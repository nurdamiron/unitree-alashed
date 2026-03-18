"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const navLinks = [
  { href: "#products", label: "Модели" },
  { href: "#rental", label: "Аренда" },
  { href: "#usecases", label: "Применение" },
  { href: "#why", label: "О нас" },
  { href: "#faq", label: "FAQ" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-display font-700">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center">
              <span className="text-white text-xs font-bold">U</span>
            </div>
            <span className="text-slate-900 font-semibold text-lg">
              Unitree<span className="text-blue-600">.</span>alashed
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#rental"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              Арендовать
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Купить
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setOpen(!open)}
            aria-label="Меню"
          >
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current mb-1" />
            <div className="w-5 h-0.5 bg-current" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 border-t border-slate-100 mt-2 pt-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-2 text-slate-700 hover:text-blue-600 font-medium"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 block text-center bg-blue-600 text-white py-2.5 rounded-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              Оставить заявку
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
