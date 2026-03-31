import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProduct, getRelatedProducts, products } from "@/lib/products"
import { formatUSD } from "@/lib/exchange-rate"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductGallery from "@/components/product-gallery"
import { ProductPriceBox, VariantCards } from "@/components/product-pricing"
import { ArrowRight01Icon, Tick01Icon, ArrowLeft01Icon } from "hugeicons-react"
import Image from "next/image"
import Link from "next/link"

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

const BASE = "https://unitree.alashed.kz"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProduct(params.id)
  if (!product) return {}
  return {
    title: `${product.name}${product.priceUSD > 0 ? ` — от ${formatUSD(product.priceUSD)}` : ""} | Unitree Alashed`,
    description: product.description,
    alternates: { canonical: `${BASE}/products/${params.id}` },
    openGraph: {
      title: `${product.name}${product.priceUSD > 0 ? ` — от ${formatUSD(product.priceUSD)}` : ""} | Unitree Alashed`,
      description: product.description,
      url: `${BASE}/products/${params.id}`,
      images: product.images[0] ? [{ url: product.images[0].src, alt: product.images[0].alt }] : undefined,
    },
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)
  if (!product) notFound()

  const related = getRelatedProducts(params.id)

  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((img) => img.src),
    brand: { "@type": "Brand", name: "Unitree", url: "https://www.unitree.com" },
    offers: product.priceUSD > 0
      ? {
          "@type": "Offer",
          priceCurrency: "USD",
          price: String(product.priceUSD),
          priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
          availability: "https://schema.org/InStock",
          url: `${BASE}/products/${params.id}`,
          seller: { "@type": "Organization", name: "Unitree Alashed", url: BASE },
        }
      : {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          url: `${BASE}/products/${params.id}`,
          seller: { "@type": "Organization", name: "Unitree Alashed", url: BASE },
        },
    additionalProperty: product.specs.map((s) => ({ "@type": "PropertyValue", name: s.label, value: s.value })),
  }

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: BASE },
      { "@type": "ListItem", position: 2, name: "Каталог роботов", item: `${BASE}/#products` },
      { "@type": "ListItem", position: 3, name: product.name, item: `${BASE}/products/${params.id}` },
    ],
  }

  const jsonLdProductFAQ = product.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: product.faqs.map((faq) => ({
          "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {jsonLdProductFAQ && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProductFAQ) }} />}
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden bg-slate-900">
          {/* Background image */}
          <Image
            src={product.images[0].src}
            alt={product.name}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />

          {/* Content */}
          <div className="relative z-10 w-full">
            {/* Breadcrumb */}
            <div className="absolute top-0 left-0 right-0 pt-20 sm:pt-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-sm text-white/50">
                <Link href="/" className="hover:text-white/80 transition-colors">Главная</Link>
                <span>/</span>
                <Link href="/#products" className="hover:text-white/80 transition-colors">Каталог</Link>
                <span>/</span>
                <span className="text-white/80">{product.name}</span>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${product.badgeColor}`}>{product.badge}</span>
                  {product.forRent && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white">
                      Доступен для аренды
                    </span>
                  )}
                </div>

                <p className="text-sm text-white/40 uppercase tracking-widest mb-2">{product.category}</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-3">{product.name}</h1>
                <p className="text-lg sm:text-xl text-white/60 italic mb-6">{product.tagline}</p>

                {/* Quick specs row */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {product.specs.slice(0, 4).map((s) => (
                    <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5">
                      <p className="text-[10px] text-white/40 uppercase tracking-wider">{s.label}</p>
                      <p className="text-sm font-bold text-white">{s.value}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-3">
                  <a href="/#contact" className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-500 transition-colors">
                    Оставить заявку <ArrowRight01Icon size={16} color="currentColor" />
                  </a>
                  {product.priceUSD > 0 && (
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3.5">
                      <span className="text-2xl font-display font-bold text-white">от {formatUSD(product.priceUSD)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery + Description ────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-10 items-start">
              {/* Gallery — 3/5 */}
              <div className="lg:col-span-3">
                <ProductGallery images={product.images} videoId={product.videoId} videoTitle={product.videoTitle} />
              </div>

              {/* Info — 2/5 */}
              <div className="lg:col-span-2">
                <p className="text-slate-600 leading-relaxed mb-8">{product.description}</p>

                {/* All specs */}
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {product.specs.map((s) => (
                    <div key={s.label} className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-center">
                      <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">{s.label}</p>
                      <p className="text-sm font-bold text-slate-900">{s.value}</p>
                    </div>
                  ))}
                </div>

                {/* Price box */}
                <ProductPriceBox
                  priceUSD={product.priceUSD}
                  priceNote={product.priceNote}
                  priceKZT={product.variants[0]?.priceKZT}
                />

                {/* CTAs */}
                <div className="flex gap-3">
                  <a href="/#contact" className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 transition-colors">
                    Заявка <ArrowRight01Icon size={16} color="currentColor" />
                  </a>
                  {product.forRent && (
                    <a href="/#rental" className="flex-1 flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold py-3.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors">
                      Арендовать
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Variants ─────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <VariantCards variants={product.variants} />
          </div>
        </section>

        {/* ── Features + Specs ─────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Возможности</h2>
                <ul className="space-y-4">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                        <Tick01Icon size={14} color="#2563eb" />
                      </span>
                      <span className="text-slate-600 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Use cases */}
                <h3 className="text-lg font-display font-bold text-slate-900 mt-10 mb-4">Области применения</h3>
                <div className="flex flex-wrap gap-2">
                  {product.useCases.map((u) => (
                    <span key={u} className="text-sm bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-full">{u}</span>
                  ))}
                </div>
              </div>

              {/* Full specs table */}
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Характеристики</h2>
                <div className="border border-slate-200 rounded-2xl overflow-hidden">
                  {[...product.specs, ...product.specsExtended].map((s, i) => (
                    <div key={s.label} className={`flex items-center justify-between px-5 py-3.5 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                      <span className="text-sm text-slate-500">{s.label}</span>
                      <span className="text-sm font-semibold text-slate-900">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────── */}
        {product.faqs.length > 0 && (
          <section className="py-12 sm:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-8 text-center">Частые вопросы</h2>
              <div className="space-y-4">
                {product.faqs.map((faq) => (
                  <div key={faq.q} className="bg-white rounded-2xl border border-slate-200 p-6">
                    <p className="font-semibold text-slate-900 mb-2">{faq.q}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Related ──────────────────────────────────────── */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-display font-bold text-slate-900">Другие модели</h2>
              <Link href="/#products" className="text-sm text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
                Весь каталог <ArrowRight01Icon size={14} color="currentColor" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link key={r.id} href={`/products/${r.id}`} className="group rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="relative h-48 bg-slate-100 overflow-hidden">
                    <Image src={r.images[0].src} alt={r.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
                  </div>
                  <div className="p-5">
                    <p className="font-display font-bold text-slate-900 mb-1">{r.name}</p>
                    <p className="text-sm text-slate-500 mb-3">{r.tagline}</p>
                    <p className="text-sm font-semibold text-blue-600">
                      {r.priceUSD > 0 ? `от ${formatUSD(r.priceUSD)}` : "Цена по запросу"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-16 sm:py-20 bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Заинтересовал {product.name}?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Рассчитаем стоимость, ответим на вопросы и организуем демонстрацию.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-500 transition-colors text-lg">
                Оставить заявку <ArrowRight01Icon size={18} color="currentColor" />
              </a>
              <Link href="/#products" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                <ArrowLeft01Icon size={16} color="currentColor" /> Каталог
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
