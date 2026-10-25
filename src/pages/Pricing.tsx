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
                    This page explains how the per-kg rates on this site work. RaddiGo does not sell a pickup service
                    and does not set the price any buyer pays you — the rates here are a public guide so you can judge
                    an offer before you accept it.
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
                    This is an example only; actual offers vary.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">What moves a price up or down</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li><strong>Condition:</strong> dry, clean, sorted material is usually easier to value than wet or mixed material.</li>
                    <li><strong>Material:</strong> copper and electronics are worth far more per kg than cardboard or plastic.</li>
                    <li><strong>Quantity:</strong> larger, well-sorted loads can be simpler for a buyer to handle.</li>
                    <li><strong>Market:</strong> scrap prices move with demand for recycled material, so rates change over time.</li>
                </ul>

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
