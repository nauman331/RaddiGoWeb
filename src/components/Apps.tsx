import React from 'react'
import { NavLink } from 'react-router-dom'

const rates = [
    { item: 'Newspaper', rate: 'Rs. 80/kg' },
    { item: 'Plastic', rate: 'Rs. 40/kg' },
    { item: 'Iron', rate: 'Rs. 110/kg' },
    { item: 'Electronics', rate: 'Rs. 200/kg' },
    { item: 'Copper', rate: 'Rs. 1800/kg' },
    { item: 'Cardboard', rate: 'Rs. 30/kg' },
]

const points = [
    {
        title: 'See rates before you sell',
        description: 'Per-kg rates for every material listed here, so you are not guessing when a buyer makes an offer.',
    },
    {
        title: 'Sort for better value',
        description: 'Dry paper, plastic grouped by type, and metal kept apart are easier to weigh and easier to value.',
    },
    {
        title: 'Know what affects price',
        description: 'Material, quality, quantity, and market demand all move the rate. The live rates page explains each factor.',
    },
    {
        title: 'Compare materials at a glance',
        description: 'Copper and electronics sit far above paper and cardboard per kg — the table below shows the full picture.',
    },
]

const Apps: React.FC = () => {
    return (
        <section className="bg-[linear-gradient(135deg,#f8fcfa_0%,#eef7f1_100%)] py-20" aria-labelledby="apps-heading">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Rates at a glance</p>
                        <h2 id="apps-heading" className="mt-3 text-3xl font-heading font-bold text-brand-dark lg:text-4xl">
                            Know what your scrap is worth before you sell it
                        </h2>
                        <p className="mt-4 max-w-xl text-lg text-slate-600">
                            No guessing, no vague verbal quotes. Use the rates on this site as a starting point, sort your
                            scrap, and compare offers before you agree to a sale.
                        </p>

                        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                            {points.map((point) => (
                                <li key={point.title} className="flex gap-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                                        <span aria-hidden="true">✓</span>
                                    </span>
                                    <div>
                                        <h3 className="font-semibold text-brand-dark">{point.title}</h3>
                                        <p className="mt-0.5 text-sm text-slate-600">{point.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <NavLink
                                to="/live-rates"
                                className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                            >
                                View live rates
                            </NavLink>
                            <NavLink
                                to="/recycling-guide"
                                className="inline-block rounded-full border border-slate-300 px-6 py-3 font-semibold text-brand-dark transition hover:text-brand-green"
                            >
                                How to sort scrap →
                            </NavLink>
                        </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-slate-200 bg-brand-dark p-8 text-white shadow-2xl lg:sticky lg:top-24">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Rates on this site</p>
                        <h3 className="mt-3 text-2xl font-heading font-bold">Per-kg rates, all in one place</h3>
                        <dl className="mt-6 space-y-3">
                            {rates.map((r) => (
                                <div
                                    key={r.item}
                                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                                >
                                    <dt className="font-semibold">{r.item}</dt>
                                    <dd className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                                        {r.rate}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <p className="mt-6 text-sm text-slate-300">
                            These rates are indicative and change with the market. Confirm the rate, the weight, and the
                            material type with your buyer before selling.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apps
