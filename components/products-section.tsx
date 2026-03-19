"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight01Icon,
  PlayCircleIcon,
  Cancel01Icon,
  Tick01Icon,
  Calendar01Icon,
  ArrowLeft01Icon,
} from "hugeicons-react"

const products = [
  {
    id: "go2",
    name: "Unitree Go2",
    category: "Квадрупод / Образование",
    tagline: "Новое существо воплощённого ИИ",
    price: "от $1 600",
    priceNote: "Air — начальная версия",
    badge: "Хит продаж",
    badgeColor: "bg-green-100 text-green-700 border-green-200",
    forRent: true,
    videoId: "6zPvT0ig1VM",
    videoTitle: "Unitree Go2 — официальный запуск",
    images: [
      { src: "https://www.unitree.com/images/b5fffd3e4fc04e6f9fcafedb9516b341_3840x2146.jpg", alt: "Go2 в действии" },
      { src: "https://www.unitree.com/images/f722fd416eae4543b09ef1566baad910_3840x2742.jpg", alt: "Go2 детальное фото" },
      { src: "https://www.unitree.com/images/1c36f0b03cfd445fbcad12b4b1eb3a29_3840x3266.jpg", alt: "Go2 компоненты" },
      { src: "https://oss-global-cdn.unitree.com/static/f3afd2338d574621b84d4b5f23aa345b_1620x816.png", alt: "Go2 на Азиатских играх 2023" },
    ],
    specs: [
      { label: "Скорость", value: "~5 м/с" },
      { label: "Сенсор", value: "4D LiDAR L1" },
      { label: "Вес", value: "15 кг" },
      { label: "Батарея", value: "1–4 ч" },
      { label: "Payload", value: "7 кг" },
      { label: "Связь", value: "WiFi 6 + 4G" },
    ],
    features: [
      "AI-навигация и голосовое управление",
      "4 варианта: Air / Pro / X / EDU",
      "Открытое API, поддержка ROS 2",
      "Выступал на Азиатских играх 2023",
    ],
    variants: ["Air — $1 600", "Pro — $2 800", "X — $4 500", "EDU — по запросу"],
  },
  {
    id: "b2",
    name: "Unitree B2",
    category: "Квадрупод / Промышленный",
    tagline: "Выйди за пределы возможностей",
    price: "от $76 900",
    priceNote: "Связаться с менеджером",
    badge: "Промышленный",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    forRent: true,
    videoId: "-0n_MFLKD3M",
    videoTitle: "Unitree B2 — официальный запуск",
    images: [
      { src: "https://www.unitree.com/images/0f744c68717d4b21a874f0983f0e40db_1708x866.png", alt: "B2 промышленный квадрупод" },
      { src: "https://www.unitree.com/images/dd1fc7c2cc4d45518a38a04b84a46e8d_1529x883.png", alt: "B2 характеристики" },
      { src: "https://oss-global-cdn.unitree.com/static/b19dd04b323f492285c4d56fbfe7c4a7_941x498.jpg", alt: "B2 инспекция ЛЭП" },
      { src: "https://oss-global-cdn.unitree.com/static/2436d184fdf04161a78b49ee1b4650e6_941x498.jpg", alt: "B2 спасательная операция" },
    ],
    specs: [
      { label: "Скорость", value: ">6 м/с" },
      { label: "Защита", value: "IP67" },
      { label: "Вес", value: "60 кг" },
      { label: "Батарея", value: "4–6 ч" },
      { label: "Payload", value: "120 кг" },
      { label: "Темп.", value: "-20°C / +55°C" },
    ],
    features: [
      "Статическая нагрузка до 120 кг",
      "Склоны 45°+, дальность >20 км",
      "Инспекция нефтегаза, шахт, энергетики",
      "Варианты B2 и B2-W (колёсно-шагающий)",
    ],
    variants: ["B2 — стандарт", "B2-W — колёсно-шагающий"],
  },
  {
    id: "g1",
    name: "Unitree G1",
    category: "Гуманоид",
    tagline: "Гуманоидный ИИ-аватар",
    price: "от $13 500",
    priceNote: "Стандартная версия",
    badge: "Гуманоид",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    forRent: true,
    videoId: "eUdBIFkMh-M",
    videoTitle: "Unitree G1 Kungfu Kid — демо навыков",
    images: [
      { src: "https://www.unitree.com/images/52688de58de044358e4792a5b7c1593d_2740x1720.jpg", alt: "G1 гибкость" },
      { src: "https://www.unitree.com/images/a7458205b63e4ff5a501c1ae84d0988b_2740x1720.jpg", alt: "G1 движение" },
      { src: "https://www.unitree.com/images/a0e8042bd2df4c47af28ff371bb6b4fa_2740x1720.jpg", alt: "G1 возможности" },
      { src: "https://www.unitree.com/images/5d03fc0c0d894b47ba7a08ec9c76a773_2740x1720.jpg", alt: "G1 задачи" },
    ],
    specs: [
      { label: "Рост", value: "132 см" },
      { label: "Вес", value: "~35 кг" },
      { label: "DOF", value: "23–43" },
      { label: "Батарея", value: "~2 ч" },
      { label: "Payload", value: "2–3 кг" },
      { label: "AI", value: "UnifoLM" },
    ],
    features: [
      "Первый флип и кувырок в мире среди гуманоидов",
      "Имитационное обучение и RL из коробки",
      "ROS 2, Python API, NVIDIA Jetson Orin (EDU)",
      "G1 стандарт / G1 EDU (расширенный)",
    ],
    variants: ["G1 стандарт — $13 500", "G1 EDU — по запросу"],
  },
  {
    id: "h2",
    name: "Unitree H2",
    category: "Гуманоид / Премиум",
    tagline: "Пробуждение предназначения",
    price: "от $29 900",
    priceNote: "Предзаказ, поставка 2026",
    badge: "Премиум",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    forRent: false,
    videoId: "24h4FTH7plY",
    videoTitle: "Unitree H2 — Destiny Awakening",
    images: [
      { src: "https://www.unitree.com/images/cab91f8a6c024197a4641d342ec44895_3840x2160.jpg", alt: "H2 hero 4K" },
      { src: "https://www.unitree.com/images/32686742408341c5af3b5dc2f4c85b0e_3840x2160.jpg", alt: "H2 showcase" },
      { src: "https://www.unitree.com/images/6d2e9f7a1e034ed5b0da345888bbc5fc_3840x2160.jpg", alt: "H2 product" },
      { src: "https://www.unitree.com/images/a89249d4e2284243b8379205259bcd0c_1920x1877.png", alt: "H2 спецификации" },
    ],
    specs: [
      { label: "Рост", value: "182 см" },
      { label: "Вес", value: "~70 кг" },
      { label: "DOF", value: "31" },
      { label: "Батарея", value: "~3 ч" },
      { label: "Payload", value: "15 кг" },
      { label: "AI", value: "2070 TOPS" },
    ],
    features: [
      "Мощнейшие 2070 TOPS ИИ-вычисления",
      "Нагрузка рук 15 кг (пиковая)",
      "Intel Core i7 + полноразмерная GPU",
      "Самый продвинутый гуманоид Unitree",
    ],
    variants: ["H2 — предзаказ от $29 900"],
  },
  {
    id: "r1",
    name: "Unitree R1",
    category: "Гуманоид / Лёгкий",
    tagline: "Ультралёгкий, полностью настраиваемый",
    price: "от $5 900",
    priceNote: "R1 AIR",
    badge: "Доступный",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    forRent: true,
    videoId: "ve9USu7zpLU",
    videoTitle: "Unitree R1 — Intelligent Companion",
    images: [
      { src: "https://www.unitree.com/images/eec8d82f279b440ea170982ffa80b3fa_3840x2160.jpg", alt: "R1 hero" },
      { src: "https://www.unitree.com/images/2f7d65a5229f40a5b9ba3ce7328f3c8d_3840x2160.jpg", alt: "R1 showcase" },
      { src: "https://www.unitree.com/images/5ff59387aa7647a1ae159ca9ad5b7774_3840x2160.jpg", alt: "R1 demo" },
      { src: "https://www.unitree.com/images/920433c1a6c743cf8265fb2ec2eb41a0_1920x1301.png", alt: "R1 возможности" },
    ],
    specs: [
      { label: "Рост", value: "123 см" },
      { label: "Вес", value: "25–29 кг" },
      { label: "DOF", value: "20–40" },
      { label: "Батарея", value: "~1 ч" },
      { label: "Цена", value: "от $5 900" },
      { label: "Вариант", value: "AIR / Pro / EDU" },
    ],
    features: [
      "Самый доступный полноразмерный гуманоид",
      "Полная кастомизация платформы",
      "R1 AIR / Pro / EDU — 3 версии",
      "Открытый SDK, поддержка ROS 2",
    ],
    variants: ["R1 AIR — $5 900", "R1 Pro — ~$16 000", "R1 EDU — по запросу"],
  },
]

function VideoModal({ videoId, title, onClose }: { videoId: string; title: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
          <span className="text-white text-sm font-medium truncate pr-4">{title}</span>
          <button onClick={onClose} className="flex-shrink-0 text-white/70 hover:text-white transition-colors">
            <Cancel01Icon size={20} color="currentColor" />
          </button>
        </div>
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const [videoModal, setVideoModal] = useState<{ videoId: string; title: string } | null>(null)

  const product = products[activeProduct]

  function handleProductSwitch(index: number) {
    setActiveProduct(index)
    setActiveImage(0)
  }

  const prevImage = () => setActiveImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  const nextImage = () => setActiveImage((prev) => (prev + 1) % product.images.length)

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Каталог роботов
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Все модели Unitree
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Официальные поставки в Центральную Азию. Продажа с гарантией и аренда от 1 дня.
          </p>
        </div>

        {/* Product tab selector */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleProductSwitch(i)}
              className={`flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                i === activeProduct
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
              }`}
            >
              <span>{p.name}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full border ${
                i === activeProduct
                  ? "bg-white/15 text-white border-white/25"
                  : p.badgeColor
              }`}>
                {p.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Main showcase card */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm mb-6">
          <div className="grid lg:grid-cols-2">

            {/* Left: image gallery */}
            <div className="relative bg-slate-900 flex flex-col">
              {/* Main image */}
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[440px] overflow-hidden">
                <Image
                  key={`${product.id}-img-${activeImage}`}
                  src={product.images[activeImage].src}
                  alt={product.images[activeImage].alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={activeProduct === 0 && activeImage === 0}
                />
                {/* Overlay badges */}
                <div className="absolute top-4 left-4 flex gap-2 z-10">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                  {product.forRent && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-slate-900/70 border border-white/20 text-white">
                      <Calendar01Icon size={11} color="currentColor" />
                      Аренда
                    </span>
                  )}
                </div>
                {/* Image counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                  {activeImage + 1} / {product.images.length}
                </div>
                {/* Arrow controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
                >
                  <ArrowLeft01Icon size={16} color="currentColor" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors z-10"
                >
                  <ArrowRight01Icon size={16} color="currentColor" />
                </button>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-2 p-3 bg-slate-950 border-t border-slate-800">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative flex-shrink-0 w-16 h-11 rounded-lg overflow-hidden border-2 transition-all ${
                      i === activeImage
                        ? "border-blue-400 opacity-100 scale-105"
                        : "border-transparent opacity-50 hover:opacity-80"
                    }`}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="64px" />
                  </button>
                ))}
                {/* YouTube thumbnail */}
                <button
                  onClick={() => setVideoModal({ videoId: product.videoId, title: product.videoTitle })}
                  className="relative flex-shrink-0 w-16 h-11 rounded-lg overflow-hidden border-2 border-transparent opacity-60 hover:opacity-100 hover:border-red-500 transition-all group"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${product.videoId}/mqdefault.jpg`}
                    alt="YouTube видео"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                    <PlayCircleIcon size={20} color="white" />
                  </div>
                </button>
              </div>
            </div>

            {/* Right: product info */}
            <div className="flex flex-col p-6 lg:p-8">
              <p className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1">{product.category}</p>
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 mb-1">{product.name}</h3>
              <p className="text-slate-500 italic mb-6">{product.tagline}</p>

              {/* Specs grid 3x2 */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {product.specs.map((s) => (
                  <div key={s.label} className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-center">
                    <p className="text-xs text-slate-400 mb-0.5">{s.label}</p>
                    <p className="text-sm font-bold text-slate-900 leading-tight">{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <Tick01Icon size={15} color="#3b82f6" className="flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Variants */}
              <div className="mb-6">
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-2 font-medium">Варианты</p>
                <div className="flex flex-wrap gap-1.5">
                  {product.variants.map((v) => (
                    <span key={v} className="text-xs bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-full font-medium">
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price + CTA */}
              <div className="mt-auto border-t border-slate-100 pt-5">
                <div className="flex items-end justify-between mb-4">
                  <div>
                    <p className="text-2xl font-display font-bold text-slate-900">{product.price}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{product.priceNote}</p>
                  </div>
                  <button
                    onClick={() => setVideoModal({ videoId: product.videoId, title: product.videoTitle })}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 px-3 py-2 rounded-xl transition-colors"
                  >
                    <PlayCircleIcon size={16} color="currentColor" />
                    Видео
                  </button>
                </div>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Оставить заявку
                  <ArrowRight01Icon size={16} color="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick-select mini cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleProductSwitch(i)}
              className={`relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-pointer border-2 transition-all duration-200 ${
                i === activeProduct ? "border-blue-500 shadow-lg scale-[1.02]" : "border-transparent hover:border-slate-300"
              }`}
            >
              <Image
                src={p.images[0].src}
                alt={p.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2.5">
                <p className="text-white text-xs font-bold leading-tight">{p.name}</p>
                <p className="text-white/60 text-xs">{p.price}</p>
              </div>
              {i === activeProduct && (
                <div className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {videoModal && (
        <VideoModal
          videoId={videoModal.videoId}
          title={videoModal.title}
          onClose={() => setVideoModal(null)}
        />
      )}
    </section>
  )
}
