import React from 'react'

// Only facts that are true about this site itself: the rates it lists,
// the materials it covers, and the guides it publishes. No user counts,
// no support claims, no payment claims.
const stats = [
    { value: '6', label: 'materials with listed per-kg rates' },
    { value: 'Lahore', label: 'city focus of the rates on this site' },
    { value: 'Rs./kg', label: 'how every rate on this site is shown' },
    { value: 'Free', label: 'rates and guides on this site — no sign-up needed' },
]

const StatsSection: React.FC = () => {
    return (
        <section className="border-y border-slate-100 bg-white px-6 py-16" aria-labelledby="stats-heading">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">What this site is</p>
                    <h2 id="stats-heading" className="mt-3 text-3xl font-heading font-bold text-brand-dark">
                        A practical guide to scrap rates in Lahore
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        RaddiGo publishes scrap rates and sorting guides so families, shops, and small businesses can
                        understand what their scrap is worth before they sell it to any buyer.
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
