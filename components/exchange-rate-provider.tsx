"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type ExchangeRateState = {
  rate: number
  date: string
  loading: boolean
  withNDS: boolean
  toggleNDS: () => void
}

const ExchangeRateContext = createContext<ExchangeRateState>({
  rate: 510,
  date: "",
  loading: true,
  withNDS: false,
  toggleNDS: () => {},
})

export function useExchangeRate() {
  return useContext(ExchangeRateContext)
}

export function ExchangeRateProvider({
  children,
  initialRate,
}: {
  children: ReactNode
  initialRate?: { rate: number; date: string }
}) {
  const [data, setData] = useState({
    rate: initialRate?.rate || 510,
    date: initialRate?.date || "",
    loading: !initialRate,
  })
  const [withNDS, setWithNDS] = useState(false)

  useEffect(() => {
    if (initialRate) return
    fetch("/api/exchange-rate")
      .then((r) => r.json())
      .then((d) => setData({ rate: d.rate, date: d.date, loading: false }))
      .catch(() => setData((prev) => ({ ...prev, loading: false })))
  }, [initialRate])

  return (
    <ExchangeRateContext.Provider
      value={{
        ...data,
        withNDS,
        toggleNDS: () => setWithNDS((v) => !v),
      }}
    >
      {children}
    </ExchangeRateContext.Provider>
  )
}
