import React from 'react'

const stats = [
    { value: '500+', label: 'early users joined' },
    { value: '10+', label: 'scrap categories' },
    { value: '24/7', label: 'support readiness' },
    { value: '100%', label: 'digital payments' },
]

const StatsSection: React.FC = () => {
    return (
        <section className="border-y border-slate-100 bg-white px-6 py-16" aria-labelledby="stats-heading">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Built for scale</p>
                    <h2 id="stats-heading" className="mt-3 text-3xl font-heading font-bold text-brand-dark">
                        A modern platform for everyday scrap collection
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        RaddiGo is designed to make local recycling more convenient, more transparent, and easier to use for
                        families, shops, and small businesses.
                    </p>
                </div>
                <dl className="grid gap-4 sm:grid-cols-2">
                    {stats.map((item) => (
                        <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <dt className="sr-only">{item.label}</dt>
                            <dd className="text-3xl font-bold text-brand-dark">{item.value}</dd>
                            <p className="mt-2 text-slate-600">{item.label}</p>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}

export default StatsSection