import { Archive01Icon, GraduationScrollIcon, CustomerServiceIcon, Location01Icon, Clock01Icon } from "hugeicons-react"

const stats = [
  { value: "5", label: "стран Центральной Азии", icon: <Location01Icon size={22} color="#60a5fa" /> },
  { value: "10+", label: "моделей Unitree", icon: <Archive01Icon size={22} color="#60a5fa" /> },
  { value: "3", label: "формата обучения", icon: <GraduationScrollIcon size={22} color="#60a5fa" /> },
  { value: "24/7", label: "техподдержка", icon: <CustomerServiceIcon size={22} color="#60a5fa" /> },
  { value: "1", label: "день мин. аренда", icon: <Clock01Icon size={22} color="#60a5fa" /> },
]

export default function StatsBar() {
  return (
    <section className="bg-slate-900 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-slate-700">
                {s.icon}
              </div>
              <p className="text-2xl sm:text-3xl font-display font-bold text-white">
                {s.value}
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
