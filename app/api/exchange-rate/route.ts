import { NextResponse } from "next/server"

export const revalidate = 3600

export async function GET() {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD", {
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error("Failed")
    const data = await res.json()
    const rate = data.rates?.KZT
    if (!rate) throw new Error("No KZT")
    return NextResponse.json({
      rate: Math.round(rate * 100) / 100,
      date: data.time_last_update_utc,
      source: "open.er-api.com",
    })
  } catch {
    return NextResponse.json({
      rate: 510,
      date: new Date().toISOString(),
      source: "fallback",
    })
  }
}
