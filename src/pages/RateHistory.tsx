import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { RATES } from '../data/rates'

// F2 — public rate-history log.
//
// Every rate check is recorded here with its REAL date: the date the six
// rates were actually re-checked or confirmed, and whether any rate
// changed. Checks where nothing changed are logged too ("checked, no
// change"), because the check itself is the evidence of maintenance.
// No entries exist yet — the six rates below are the rates as published,
// and the first real check has not happened. NEVER backdate an entry and
// NEVER invent a past check or a past rate value: the log starts from the
// first real check.
const RateHistory: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Rate history</h1>
                <p className="mt-4 text-lg text-slate-600">
                    A public log of every rate check on this site. Each entry records the date the six rates were
                    actually re-checked or confirmed, and whether any rate changed. A check where nothing changed is
                    still logged, because the check itself is what keeps the rates honest.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Rates as published</h2>
                <p className="mt-3 text-slate-600">
                    These are the six rates currently published on this site, and the starting point of this log:
                </p>
                <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                    <table className="w-full min-w-[420px] text-left">
                        <thead className="bg-slate-50">
                            <tr>
                                <th scope="col" className="px-5 py-3 text-sm font-semibold text-brand-dark">Material</th>
                                <th scope="col" className="px-5 py-3 text-sm font-semibold text-brand-dark">Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            {RATES.map((r) => (
                                <tr key={r.key} className="border-t border-slate-100">
                                    <td className="px-5 py-4 font-semibold text-brand-dark">{r.name}</td>
                                    <td className="px-5 py-4 font-semibold text-brand-green">Rs. {r.rate}/kg</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Check log</h2>
                <p className="mt-3 text-slate-600">
                    No rate checks have been recorded yet. The first real check — the date the six rates are next
                    confirmed against the market — will be logged here with its real date, and any change will be
                    shown next to the old rate. Until then, the rates above are the rates as published, and they are
                    indicative: always confirm the rate and the weight with your buyer before you sell.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">How a check works</h2>
                <p className="mt-3 text-slate-600">
                    On a check, each of the six rates is confirmed one by one. If a rate has moved, the new rate is
                    published on the live rates page, the old rate is kept in this log next to the new one, and the
                    change is noted on the updates page. If nothing has moved, the log records "checked, no change"
                    with the date. The date on an entry is always the date the check actually happened.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        View live rates
                    </NavLink>
                    <NavLink to="/calculator" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Scrap value calculator →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default RateHistory
