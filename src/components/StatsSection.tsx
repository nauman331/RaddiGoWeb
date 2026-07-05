import React from 'react'

const stats = [
  { value: '500+', label: 'early users joined' },
  { value: '10+', label: 'scrap categories' },
  { value: '24/7', label: 'support readiness' },
  { value: '100%', label: 'digital payments' },
]

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 border-y border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
        <div>
          <p className="text-brand-green font-semibold uppercase tracking-[0.2em] text-sm">Built for scale</p>
          <h2 className="text-3xl font-heading font-bold text-brand-dark mt-3">A modern platform for everyday scrap collection</h2>
          <p className="text-slate-600 mt-4 text-lg">RaddiGo is designed to make local recycling more convenient, more transparent, and easier to use for families, shops, and small businesses.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-3xl font-bold text-brand-dark">{item.value}</p>
              <p className="text-slate-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
