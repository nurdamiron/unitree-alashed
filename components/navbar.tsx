"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu01Icon, Cancel01Icon, ArrowRight01Icon } from "hugeicons-react"

const navLinks = [
  { href: "/#products", label: "Роботы" },
  { href: "/services", label: "Услуги" },
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
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/alashed-logo.svg"
              alt="Alashed"
              width={28}
              height={28}
            />
            <span className="font-semibold text-base text-slate-900 leading-none">
              alashed
              <span className="text-blue-600 mx-0.5">×</span>
              <span className="text-slate-500 font-normal">unitree</span>
            </span>
          </Link>

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
