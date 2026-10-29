import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const Pricing: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Scrap pricing, explained</h1>
                <p className="mt-4 text-lg text-slate-600">
                    This page explains how the per-kg rates on this site work, why offers differ, and how to turn a
                    rate into a total you can check. RaddiGo does not sell a pickup service and does not set the price
                    any buyer pays you — the rates here are a public guide so you can judge an offer before you accept it.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">The rates on this site</h2>
                <p className="mt-3 text-slate-600">
                    Newspaper Rs. 80/kg, Plastic Rs. 40/kg, Iron Rs. 110/kg, Electronics Rs. 200/kg, Copper Rs. 1800/kg,
                    Cardboard Rs. 30/kg. Each rate is shown per kilogram, for that material on its own — mixed scrap is
                    usually valued differently, and often lower, than separated material.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">How to work out a total</h2>
                <p className="mt-3 text-slate-600">
                    Multiply the weight of each material by its per-kg rate, and add the materials together. For
                    example, 10 kg of newspaper at Rs. 80/kg is Rs. 800, and 5 kg of plastic at Rs. 40/kg is Rs. 200 —
                    Rs. 1,000 for the two together, before any adjustment the buyer makes for condition or quantity.
                    This is an example only; actual offers vary. Doing this sum yourself before you visit the buyer is
                    the single most useful habit in scrap selling: it turns the negotiation from a guess into a check.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">What moves a price up or down</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li><strong>Condition:</strong> dry, clean, sorted material is usually easier to value than wet or mixed material.</li>
                    <li><strong>Material:</strong> copper and electronics are worth far more per kg than cardboard or plastic.</li>
                    <li><strong>Quantity:</strong> larger, well-sorted loads can be simpler for a buyer to handle.</li>
                    <li><strong>Market:</strong> scrap prices move with demand for recycled material, so rates change over time.</li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Why two buyers quote different rates</h2>
                <p className="mt-3 text-slate-600">
                    It is normal for two buyers to offer different rates for the same pile, and it is not necessarily a
                    sign that one of them is cheating you. Buyers have different onward customers, different transport
                    costs, and different ways of grading material — one buyer\u2019s \u201cplastic\u201d rate may assume
                    bottles only, while another\u2019s covers mixed household plastic. That is why comparing two or three
                    offers matters more than finding a single \u201ccorrect\u201d price: the spread between honest offers
                    tells you what your specific load is actually worth today.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Do rates change often?</h2>
                <p className="mt-3 text-slate-600">
                    Yes — scrap is a commodity, and its price follows demand from recyclers and manufacturers. When
                    demand for recycled metal, paper, or plastic is strong, rates rise; when it cools, they fall. The
                    rates on this site are updated to stay indicative of the market, but they are a guide, not a promise:
                    always confirm the live rate with your buyer on the day you sell, especially for heavier or
                    higher-value loads like copper and electronics.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">How to read the rates table</h2>
                <p className="mt-3 text-slate-600">
                    Every rate on the live rates page means the same thing: rupees per kilogram of that material,
                    separated and in ordinary sellable condition. It does not include the buyer\u2019s adjustments for
                    wet, dirty, or mixed material, and it does not include any transport or handling the buyer might
                    factor in. Read it as a starting point for the conversation — \u201cthe site suggests around Rs. X/kg
                    for this\u201d — and let the weighing and the buyer\u2019s grading set the final number.
                </p>

                <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                    <h2 className="text-xl font-bold text-brand-dark">Not a guaranteed price</h2>
                    <p className="mt-2 text-slate-700">
                        The rates on this site are indicative. A buyer may offer more or less depending on the material,
                        its condition, the quantity, and the market on the day. Always confirm the rate, the weight, and
                        the material type with your buyer before selling.
                    </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        View live rates
                    </NavLink>
                    <NavLink to="/recycling-guide" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Sorting guide →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Pricing
