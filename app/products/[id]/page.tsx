import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getProduct, getRelatedProducts, products } from "@/lib/products"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductGallery from "@/components/product-gallery"
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
    title: `${product.name} — ${product.price} | Unitree Alashed Центральная Азия`,
    description: product.description,
    alternates: { canonical: `${BASE}/products/${params.id}` },
    openGraph: {
      title: `${product.name} — ${product.price} | Unitree Alashed`,
      description: product.description,
      url: `${BASE}/products/${params.id}`,
      images: product.images[0]
        ? [{ url: product.images[0].src, alt: product.images[0].alt }]
        : undefined,
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
    brand: {
      "@type": "Brand",
      name: "Unitree",
      url: "https://www.unitree.com",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.price.replace(/[^0-9]/g, "") || "0",
      priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      availability: "https://schema.org/InStock",
      url: `${BASE}/products/${params.id}`,
      seller: {
        "@type": "Organization",
        name: "Unitree Alashed",
        url: BASE,
      },
    },
    additionalProperty: product.specs.map((s) => ({
      "@type": "PropertyValue",
      name: s.label,
      value: s.value,
    })),
  }

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: BASE,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Каталог роботов",
        item: `${BASE}/#products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${BASE}/products/${params.id}`,
      },
    ],
  }

  const jsonLdProductFAQ =
    product.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: product.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      {jsonLdProductFAQ && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProductFAQ) }}
        />
      )}
      <Navbar />
      <main className="pt-16">

        {/* Breadcrumb */}
        <div className="bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-blue-600 transition-colors">Каталог</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{product.name}</span>
          </div>
        </div>

        {/* Hero: gallery + info */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">

              {/* Gallery */}
              <ProductGallery images={product.images} videoId={product.videoId} videoTitle={product.videoTitle} />

              {/* Info */}
              <div className="sticky top-20">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                  {product.forRent && (
                    <span className="text-xs text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
                      Доступен для аренды
                    </span>
                  )}
                </div>

                <p className="text-sm text-slate-400 uppercase tracking-wider mb-1">{product.category}</p>
                <h1 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 mb-2">{product.name}</h1>
                <p className="text-slate-500 italic text-lg mb-5">{product.tagline}</p>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">{product.description}</p>

                {/* Quick specs */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {product.specs.map((s) => (
                    <div key={s.label} className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-center">
                      <p className="text-xs text-slate-400 mb-0.5">{s.label}</p>
                      <p className="text-sm font-bold text-slate-900">{s.value}</p>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-5">
                  <div className="flex items-end gap-3 mb-1">
                    <p className="text-3xl font-display font-bold text-slate-900">{product.price}</p>
                    <p className="text-sm text-slate-500 mb-1">{product.priceNote}</p>
                  </div>
                  <p className="text-xs text-slate-500">Цена без учёта доставки и таможни. Финальная стоимость под ключ — по запросу.</p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/#contact"
                    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    Оставить заявку
                    <ArrowRight01Icon size={16} color="currentColor" />
                  </a>
                  {product.forRent && (
                    <a
                      href="/#rental"
                      className="flex-1 flex items-center justify-center gap-2 bg-white text-slate-900 font-semibold py-3.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-colors"
                    >
                      Арендовать
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Variants */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Версии и цены</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {product.variants.map((v, i) => (
                <div key={v.name} className={`bg-white rounded-2xl border p-5 ${i === 0 ? "border-blue-300 shadow-sm" : "border-slate-200"}`}>
                  {i === 0 && (
                    <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded-full mb-3 inline-block">
                      Начальная версия
                    </span>
                  )}
                  <p className="font-display font-bold text-slate-900 text-lg mb-1">{v.name}</p>
                  <p className="text-2xl font-bold text-blue-600 mb-2">{v.price}</p>
                  <p className="text-sm text-slate-500">{v.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full specs */}
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Extended specs */}
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Технические характеристики</h2>
                <div className="space-y-0 border border-slate-200 rounded-2xl overflow-hidden">
                  {[...product.specs, ...product.specsExtended].map((s, i) => (
                    <div key={s.label} className={`flex items-center justify-between px-5 py-3.5 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                      <span className="text-sm text-slate-500">{s.label}</span>
                      <span className="text-sm font-semibold text-slate-900">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features + use cases */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Ключевые возможности</h2>
                  <ul className="space-y-3">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-slate-600">
                        <Tick01Icon size={18} color="#2563eb" className="flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">Области применения</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.useCases.map((u) => (
                      <span key={u} className="text-sm bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-full">
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {product.faqs.length > 0 && (
          <section className="py-12 bg-slate-50 border-t border-slate-200">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-6 text-center">Вопросы о {product.name}</h2>
              <div className="space-y-4">
                {product.faqs.map((faq) => (
                  <div key={faq.q} className="bg-white rounded-xl border border-slate-200 p-5">
                    <p className="font-semibold text-slate-900 mb-2">{faq.q}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related products */}
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold text-slate-900">Другие модели</h2>
              <Link href="/#products" className="text-sm text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
                Весь каталог
                <ArrowRight01Icon size={14} color="currentColor" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link key={r.id} href={`/products/${r.id}`} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="relative h-40 bg-slate-900 overflow-hidden">
                    <Image src={r.images[0].src} alt={r.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <p className="text-white font-bold text-sm">{r.name}</p>
                      <p className="text-white/60 text-xs">{r.price}</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <p className="text-sm text-slate-500">{r.tagline}</p>
                    <ArrowRight01Icon size={16} color="#94a3b8" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">Готовы к следующему шагу?</p>
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Оставьте заявку на {product.name}
            </h2>
            <p className="text-slate-400 mb-8">
              Рассчитаем стоимость под ключ для вашей страны, ответим на все технические вопросы и организуем демонстрацию.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-500 transition-colors"
              >
                Оставить заявку
                <ArrowRight01Icon size={16} color="currentColor" />
              </a>
              <Link
                href="/#products"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                <ArrowLeft01Icon size={16} color="currentColor" />
                Весь каталог
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
