import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { NavLink } from 'react-router-dom'

const rates = [
    { material: 'Newspaper', rate: 'Rs. 80/kg', note: 'Keep dry and bundled; wet paper is usually valued lower.' },
    { material: 'Plastic', rate: 'Rs. 40/kg', note: 'Group by type where you can; clean, dry plastic is easier to value.' },
    { material: 'Iron', rate: 'Rs. 110/kg', note: 'Keep metal separate from other waste; rust and mixed items can lower the offer.' },
    { material: 'Electronics', rate: 'Rs. 200/kg', note: 'Keep batteries and broken screens apart from general scrap.' },
    { material: 'Copper', rate: 'Rs. 1800/kg', note: 'Usually the highest-value common scrap; confirm the rate and weight carefully.' },
    { material: 'Cardboard', rate: 'Rs. 30/kg', note: 'Flatten boxes and keep them dry; damp cardboard is harder to reuse.' },
]

const LiveRates: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Live scrap rates in Lahore</h1>
                <p className="mt-4 text-lg text-slate-600">
                    The per-kg rates shown on this site for common scrap materials. Use them as a guide before you talk
                    to a buyer — they are not a promise of what any particular buyer will pay.
                </p>

                <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                    <table className="w-full min-w-[520px] text-left">
                        <thead className="bg-slate-50">
                            <tr>
                                <th scope="col" className="px-5 py-3 text-sm font-semibold text-brand-dark">Material</th>
                                <th scope="col" className="px-5 py-3 text-sm font-semibold text-brand-dark">Rate</th>
                                <th scope="col" className="px-5 py-3 text-sm font-semibold text-brand-dark">What affects the offer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rates.map((r) => (
                                <tr key={r.material} className="border-t border-slate-100">
                                    <td className="px-5 py-4 font-semibold text-brand-dark">{r.material}</td>
                                    <td className="px-5 py-4 font-semibold text-brand-green">{r.rate}</td>
                                    <td className="px-5 py-4 text-slate-600">{r.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                    <h2 className="text-xl font-bold text-brand-dark">Important: rates are indicative</h2>
                    <p className="mt-2 text-slate-700">
                        Rates change with the market, and the amount a buyer offers also depends on the material's
                        condition, its weight, and the quantity being sold. A buyer may offer more or less than the rate
                        shown here. Always confirm the rate, the weight, and the material type with your buyer before
                        selling, and work out the total yourself.
                    </p>
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-bold text-brand-dark">How rates generally vary</h2>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                        <li><strong>Condition:</strong> dry, clean, sorted material is usually easier to value than wet or mixed material.</li>
                        <li><strong>Material:</strong> different materials have very different values — compare each one separately.</li>
                        <li><strong>Quantity:</strong> larger, well-sorted loads can be simpler for a buyer to handle than small mixed piles.</li>
                        <li><strong>Market:</strong> scrap prices move with demand for recycled material, so rates change over time.</li>
                    </ul>
                </div>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">How to read these rates</h2>
                <p className="mt-3 text-slate-600">
                    Each rate on this page is a per-kilogram guide for one material on its own. It is the value of that
                    material when it is clean, dry, and separated from other waste — not the value of a mixed pile.
                    That is why the rates look so different from each other: copper is in steady demand for electrical
                    work and is rarely found in large amounts at home, so it is worth far more per kilogram than
                    cardboard, which is bulky and light. Plastic sits in the middle, and iron and electronics fall
                    between the two. The notes in the table say what usually matters most for each material. Use the
                    rate as a starting point for your own calculation, then confirm the actual rate, weight, and
                    condition with your buyer before you agree to sell.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Two worked examples</h2>
                <p className="mt-3 text-slate-600">
                    Working out a total is simple once each material is weighed on its own. For example, 25 kg of
                    newspaper at Rs. 80/kg comes to Rs. 2,000, and 8 kg of plastic at Rs. 40/kg comes to Rs. 320 —
                    Rs. 2,320 for the two together. A smaller, higher-value load works the same way: 3 kg of copper
                    at Rs. 1800/kg comes to Rs. 5,400, and 12 kg of iron at Rs. 110/kg comes to Rs. 1,320. These are
                    examples only, worked out from the rates on this page. A buyer may adjust the offer for the
                    condition of the material or the size of the load, so always work out your own total first and
                    compare it with the offer you are given.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Common mistakes when checking rates</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li><strong>Comparing a mixed pile with a separated rate:</strong> mixed scrap is usually valued lower, so the rate on this page only applies when each material is weighed on its own.</li>
                    <li><strong>Forgetting condition:</strong> wet paper, damp cardboard, and dirty plastic are usually valued lower than dry, clean material.</li>
                    <li><strong>Agreeing to a rate without checking the weight:</strong> the rate and the weight together decide the total, so both need confirming.</li>
                    <li><strong>Taking the first offer:</strong> even a short comparison with another buyer can show whether an offer is fair, and it costs nothing but a little time.</li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Frequently asked questions</h2>
                <p className="mt-3 text-slate-600">
                    <strong>Do these rates change every day?</strong> Rates move with the market, so they can change
                    over time. Check this page again before you sell, and confirm the rate with your buyer on the day.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Why did a buyer offer less than the rate shown here?</strong> The rate is a guide for
                    clean, dry, separated material. If your material is wet, mixed, or in a small quantity, a buyer
                    may offer less. Ask which rate applies to your material in its actual condition.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Can I use the Lahore rates in another city?</strong> Only as a rough guide. Prices vary
                    by place as well as by material, so confirm the rate with a buyer in your own city before you sell.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/recycling-guide"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        How to sort for better value
                    </NavLink>
                    <NavLink to="/how-it-works" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        How selling works →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LiveRates
