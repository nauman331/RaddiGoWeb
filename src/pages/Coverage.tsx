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

                <h2 className="mt-12 text-2xl font-bold text-brand-dark">What to do if your city is not listed</h2>
                <p className="mt-4 text-slate-600">
                    Start with the Lahore rates as a rough guide only, then check the same material with a buyer in
                    your own city before you sell. Rates vary by place as well as by material, quality, quantity, and
                    market — so a Lahore figure is a starting point for comparison, not a promise for another city.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-600">
                    <li>
                        Read <NavLink to="/how-scrap-rates-work" className="font-semibold text-brand-dark hover:text-brand-green">how scrap rates work</NavLink> to
                        see which factors move a rate up or down.
                    </li>
                    <li>
                        Sort and weigh your material first — the <NavLink to="/recycling-guide" className="font-semibold text-brand-dark hover:text-brand-green">recycling guide</NavLink> shows
                        how sorting helps you compare offers fairly.
                    </li>
                    <li>
                        Confirm the rate, the weight, and the material type with your local buyer, and work out the
                        total yourself before agreeing to a sale.
                    </li>
                </ul>

                <h2 className="mt-12 text-2xl font-bold text-brand-dark">What the guides cover everywhere</h2>
                <p className="mt-4 text-slate-600">
                    The sorting, safety, and rate-reading guides on this site are general advice that applies wherever
                    you are. Only the per-kg rates themselves are Lahore-focused — so use the guides freely, but treat
                    every rate as local to Lahore until a buyer in your city confirms otherwise.
                </p>

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
