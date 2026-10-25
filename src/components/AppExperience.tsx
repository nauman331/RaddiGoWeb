import React from 'react'
import { NavLink } from 'react-router-dom'

// A worked example using only the rates published on this site.
// It is an illustration of the arithmetic, not a price promise from any buyer.
const example = [
    { label: 'Newspaper', detail: '10 kg × Rs. 80/kg', value: 'Rs. 800' },
    { label: 'Plastic', detail: '5 kg × Rs. 40/kg', value: 'Rs. 200' },
    { label: 'Iron', detail: '4 kg × Rs. 110/kg', value: 'Rs. 440' },
]

const AppExperience: React.FC = () => {
    return (
        <section className="bg-brand-light px-6 py-20" aria-labelledby="app-experience-heading">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">How to read a rate</p>
                    <h2 id="app-experience-heading" className="mt-3 text-3xl font-heading font-bold text-brand-dark">
                        Work out what your scrap is worth, in three steps
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Multiply the weight of each material by its per-kg rate, add the materials together, and compare
                        that figure with the offers you receive. Sorted, dry, clean material is usually valued more
                        easily than mixed, wet material.
                    </p>
                    <ul className="mt-8 space-y-3 text-slate-700">
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green" aria-hidden="true" />
                            <span>Weigh each material separately where you can.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green" aria-hidden="true" />
                            <span>Apply the per-kg rate for that material.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green" aria-hidden="true" />
                            <span>Compare the total with at least one other offer before selling.</span>
                        </li>
                    </ul>
                    <div className="mt-8">
                        <NavLink
                            to="/how-scrap-rates-work"
                            className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                        >
                            How scrap rates work →
                        </NavLink>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-md">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl">
                        <div className="rounded-[1.5rem] bg-slate-900 p-5 text-white">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Example only</p>
                                    <h3 className="font-semibold">Working out a value</h3>
                                </div>
                                <span className="rounded-full bg-brand-green px-3 py-1 text-sm font-semibold">Rs. 1,440</span>
                            </div>
                            <dl className="mt-6 space-y-3">
                                {example.map((row) => (
                                    <div key={row.label} className="rounded-xl bg-slate-800 p-3">
                                        <dt className="text-sm text-slate-400">{row.label}</dt>
                                        <dd className="font-semibold">
                                            {row.detail} = {row.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                            <p className="mt-4 text-xs text-slate-400">
                                Example only, using the rates on this site. Actual offers vary by buyer, material quality,
                                quantity, and market conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppExperience
