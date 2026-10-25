import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const cities = [
    { name: 'Lahore', detail: 'Rates covered on this site. The per-kg rates and guides here focus on Lahore scrap sellers.' },
    { name: 'Islamabad', detail: 'No separate city rates published yet. The Lahore rates are shown as a general guide only.' },
    { name: 'Rawalpindi', detail: 'No separate city rates published yet. The Lahore rates are shown as a general guide only.' },
    { name: 'Karachi', detail: 'No separate city rates published yet. The Lahore rates are shown as a general guide only.' },
]

const Coverage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Coverage: which cities this site covers</h1>
                <p className="mt-4 text-lg text-slate-600">
                    RaddiGo is an informational site, not a pickup service, so “coverage” here means which cities the
                    rates and guides on this site are written for — not where a service operates. Lahore is the focus;
                    other cities are listed honestly, with no separate rates published for them yet.
                </p>

                <div className="mt-10 space-y-6">
                    {cities.map((city) => (
                        <div key={city.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-brand-dark">{city.name}</h2>
                            <p className="mt-2 text-slate-600">{city.detail}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-slate-600">
                    If you live outside Lahore, use the Lahore rates only as a rough guide and confirm the rate with a
                    buyer in your own city — prices vary by place as well as by material and market.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        View live rates
                    </NavLink>
                    <NavLink to="/contact" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Contact us →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Coverage
