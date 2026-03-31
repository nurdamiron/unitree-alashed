"use client"

import { useExchangeRate } from "@/components/exchange-rate-provider"
import { formatKZT, formatKZTFromTenge, formatUSD } from "@/lib/exchange-rate"
import { Invoice01Icon } from "hugeicons-react"
import type { ProductVariant } from "@/lib/products"

function NDSToggle({ active, onToggle }: { active: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
        active
          ? "bg-green-100 text-green-700 border-green-300 shadow-sm"
          : "bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300"
      }`}
    >
      <Invoice01Icon size={16} color="currentColor" />
      {active ? "С НДС 16% ✓" : "Порадовать бухгалтера"}
    </button>
  )
}

export function ProductPriceBox({ priceUSD, priceNote, priceKZT }: { priceUSD: number; priceNote: string; priceKZT?: number | null }) {
  const { rate, withNDS, toggleNDS } = useExchangeRate()

  const kztDisplay = priceKZT
    ? formatKZTFromTenge(priceKZT, withNDS)
    : formatKZT(priceUSD, rate, withNDS)

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-5">
      <div className="flex items-start justify-between mb-3">
        <div>
          {priceUSD > 0 ? (
            <>
              <p className="text-3xl font-display font-bold text-slate-900">от {formatUSD(priceUSD)}</p>
              <p className="text-lg text-blue-600 font-semibold mt-1">~ {kztDisplay}</p>
            </>
          ) : (
            <p className="text-3xl font-display font-bold text-slate-900">Цена по запросу</p>
          )}
        </div>
        {priceUSD > 0 && <NDSToggle active={withNDS} onToggle={toggleNDS} />}
      </div>
      <p className="text-xs text-slate-500">
        {priceUSD > 0 && `Курс: 1$ = ${rate.toFixed(2)} ₸ · ${withNDS ? "НДС 16% включён" : "Без НДС"} · `}{priceNote}
      </p>
    </div>
  )
}

export function VariantCards({ variants }: { variants: ProductVariant[] }) {
  const { rate, withNDS, toggleNDS } = useExchangeRate()

  function getKZT(v: ProductVariant) {
    if (!v.priceUSD) return null
    if (v.priceKZT) return formatKZTFromTenge(v.priceKZT, withNDS)
    return formatKZT(v.priceUSD, rate, withNDS)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-bold text-slate-900">Версии и цены</h2>
        <NDSToggle active={withNDS} onToggle={toggleNDS} />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {variants.map((v, i) => (
          <div key={v.name} className={`bg-white rounded-2xl border p-5 ${i === 0 ? "border-blue-300 shadow-sm" : "border-slate-200"}`}>
            {i === 0 && (
              <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded-full mb-3 inline-block">
                Начальная версия
              </span>
            )}
            <p className="font-display font-bold text-slate-900 text-lg mb-1">{v.name}</p>
            {v.priceUSD ? (
              <>
                <p className="text-xl font-bold text-blue-600 mb-0.5">{formatUSD(v.priceUSD)}</p>
                <p className="text-sm text-slate-500 mb-2">~ {getKZT(v)}</p>
              </>
            ) : (
              <p className="text-xl font-bold text-slate-600 mb-2">По запросу</p>
            )}
            <p className="text-sm text-slate-500">{v.note}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-400 mt-4">
        Курс: 1$ = {rate.toFixed(2)} ₸ · {withNDS ? "НДС 16% включён" : "Без НДС"} · Доставка и таможня — по запросу.
      </p>
    </div>
  )
}
