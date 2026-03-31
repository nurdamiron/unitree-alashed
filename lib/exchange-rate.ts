const FALLBACK_RATE = 510

export type ExchangeRateData = {
  rate: number
  date: string
  source: string
}

export async function getExchangeRate(): Promise<ExchangeRateData> {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD", {
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error("Failed to fetch rate")
    const data = await res.json()
    const rate = data.rates?.KZT
    if (!rate) throw new Error("KZT rate not found")
    return {
      rate: Math.round(rate * 100) / 100,
      date: data.time_last_update_utc || new Date().toISOString(),
      source: "open.er-api.com",
    }
  } catch {
    return {
      rate: FALLBACK_RATE,
      date: new Date().toISOString(),
      source: "fallback",
    }
  }
}

export function formatPrice(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export function formatKZT(amountUSD: number, rate: number, nds = false): string {
  let kzt = Math.round(amountUSD * rate)
  if (nds) kzt = Math.round(kzt * 1.16)
  return formatPrice(kzt) + " ₸"
}

export function formatKZTFromTenge(amountKZT: number, nds = false): string {
  const kzt = nds ? Math.round(amountKZT * 1.16) : amountKZT
  return formatPrice(kzt) + " ₸"
}

export function formatUSD(amount: number): string {
  return "$" + formatPrice(amount)
}
