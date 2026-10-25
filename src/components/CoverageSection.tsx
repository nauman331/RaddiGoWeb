import React from 'react'
import { NavLink } from 'react-router-dom'

const cities = [
    { name: 'Lahore', note: 'Rates covered on this site', live: true },
    { name: 'Islamabad', note: 'No city rates published yet', live: false },
    { name: 'Rawalpindi', note: 'No city rates published yet', live: false },
    { name: 'Karachi', note: 'No city rates published yet', live: false },
]

const CoverageSection: React.FC = () => {
    return (
        <section className="bg-white px-6 py-20" aria-labelledby="coverage-heading">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">City coverage</p>
                    <h2 id="coverage-heading" className="mt-3 text-3xl font-heading font-bold text-brand-dark">
                        Lahore rates first — other cities, honestly labelled
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        This site currently publishes rates with a Lahore focus. Other cities are listed here so readers
                        are not misled: no separate city rates for them are published yet, and this site does not offer
                        pickup in any city.
                    </p>
                </div>

                <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {cities.map((city) => (
                        <li
                            key={city.name}
                            className={`rounded-2xl border p-6 shadow-sm ${
                                city.live ? 'border-brand-green/30 bg-brand-light' : 'border-slate-200 bg-slate-50'
                            }`}
                        >
                            <h3 className="text-xl font-bold text-brand-dark">{city.name}</h3>
                            <p className={`mt-2 text-sm font-semibold ${city.live ? 'text-brand-green' : 'text-slate-500'}`}>
                                {city.note}
                            </p>
                        </li>
                    ))}
                </ul>

                <div className="mt-10 text-center">
                    <NavLink
                        to="/coverage"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        About coverage →
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default CoverageSection
