const stats = [
  { value: "6", label: "моделей роботов", suffix: "" },
  { value: "1", label: "день мин. аренда", suffix: "" },
  { value: "24/7", label: "техподдержка", suffix: "" },
  { value: "2+", label: "года на рынке", suffix: "" },
]

export default function StatsBar() {
  return (
    <section className="bg-slate-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-display font-bold text-white mb-1">
                {s.value}
                <span className="text-blue-400">{s.suffix}</span>
              </p>
              <p className="text-slate-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
