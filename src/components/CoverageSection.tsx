import React from 'react'

const cities = [
    { name: 'Lahore', note: 'Main launch city', live: true },
    { name: 'Islamabad', note: 'Coming soon', live: false },
    { name: 'Rawalpindi', note: 'Coming soon', live: false },
    { name: 'Karachi', note: 'Coming soon', live: false },
]

const CoverageSection: React.FC = () => {
    return (
        <section className="bg-white px-6 py-20" aria-labelledby="coverage-heading">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">City coverage</p>
                    <h2 id="coverage-heading" className="mt-3 text-3xl font-heading font-bold text-brand-dark">
                        Expanding from Lahore to more cities across Pakistan
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        We are starting strong in Lahore and preparing to bring the same fast pickup experience to more urban
                        neighborhoods soon.
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
            </div>
        </section>
    )
}

export default CoverageSection