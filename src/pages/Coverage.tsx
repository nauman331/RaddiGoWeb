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

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">How to use Lahore rates outside Lahore</h2>
                <p className="mt-3 text-slate-600">
                    If you live outside Lahore, the rates on this site are still useful — but only as a rough guide.
                    Scrap prices vary from city to city because transport costs, local demand for recycled material,
                    and the number of buyers all differ. A rate that holds in Lahore may be higher or lower somewhere
                    else. The safest approach is to use the Lahore rate to get a general idea of what your material is
                    worth, then ask two or three buyers in your own city what they pay, and compare. The sorting and
                    preparation advice on this site — keep paper dry, separate materials, weigh each one on its own —
                    works the same everywhere.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">What coverage means on this site</h2>
                <p className="mt-3 text-slate-600">
                    RaddiGo does not run a pickup service anywhere, so coverage here does not mean a service area. It
                    means which cities the rates and guides on this site are written for. Lahore is the focus because
                    that is where the published rates come from. Other cities are listed honestly, with no separate
                    rates published for them yet, so that nobody is misled into thinking a Lahore rate is a local
                    price. If a city is not listed at all, the same rule applies: use the Lahore rates only as a rough
                    guide.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Why rates differ from city to city</h2>
                <p className="mt-3 text-slate-600">
                    Three things usually move a local price. The first is transport: scrap has to be moved to where it
                    is reused, and longer distances cost more. The second is local demand: a city with more recycling
                    activity may pay more for the same material. The third is quantity: where a material is collected
                    in larger amounts, handling it is simpler and the price can reflect that. None of these are fixed,
                    which is why the same kilogram of newspaper or iron can fetch a different amount in different
                    cities — and why confirming the rate with a local buyer always matters more than any published
                    guide.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">If your city is not listed</h2>
                <p className="mt-3 text-slate-600">
                    Start with the Lahore rate for your material, then treat it as a starting point, not a promise. Ask
                    more than one local buyer for their per-kg rate, and ask for the rate for each material
                    separately. Weigh each material on its own, keep paper and cardboard dry, and work out your total
                    yourself before you agree to anything. If the local offer is very different from the Lahore guide,
                    ask why — the condition of the material, the quantity, or the local market may explain it.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Frequently asked questions</h2>
                <p className="mt-3 text-slate-600">
                    <strong>Why are there only Lahore rates?</strong> The rates published here are the ones this site
                    can stand behind. Publishing a rate for a city without checking it would mislead sellers, so other
                    cities are listed without a rate until one can be given honestly.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Will other cities be added?</strong> Possibly, if reliable local rates can be published —
                    but there is no date promised.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Can I use these rates in Karachi or Islamabad?</strong> Only as a rough guide. Always
                    confirm the rate with a buyer in your own city, and compare more than one offer before you sell.
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
