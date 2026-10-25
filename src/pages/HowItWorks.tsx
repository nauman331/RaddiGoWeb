import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const steps = [
    {
        title: '1. Check the rate first',
        text: 'Look up the per-kg rate for your material on the live rates page, so you know roughly what it is worth before you talk to any buyer.',
    },
    {
        title: '2. Sort and weigh honestly',
        text: 'Keep paper dry, separate plastic by type, and keep metal apart from other waste. Scrap is usually weighed, and clean, separated material is easier to value fairly.',
    },
    {
        title: '3. Compare offers, then sell',
        text: 'Rates change with the market, quality, and quantity. Compare more than one offer, confirm the rate and the weight, and only then agree to sell.',
    },
]

const HowItWorks: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">How selling scrap works</h1>
                <p className="mt-4 text-lg text-slate-600">
                    This page explains the general process of selling scrap in Lahore. RaddiGo does not offer pickup
                    booking or payments — this site publishes rates and guides so you can sell with a clear picture of
                    what your scrap is worth.
                </p>

                <div className="mt-10 space-y-6">
                    {steps.map((step) => (
                        <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-brand-dark">{step.title}</h2>
                            <p className="mt-2 text-slate-600">{step.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                    <h2 className="text-xl font-bold text-brand-dark">Before you accept an offer</h2>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                        <li>Ask which rate applies to each material separately — mixed scrap is often valued lower.</li>
                        <li>Check the weight and the rate together, and work out the total yourself before agreeing.</li>
                        <li>Keep batteries and electronics separate from general scrap, and handle broken glass and sharp metal with care.</li>
                        <li>Payment terms are between you and your buyer; confirm them before handing over the material.</li>
                    </ul>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        See current scrap rates
                    </NavLink>
                    <NavLink to="/recycling-guide" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        How to sort scrap →
                    </NavLink>
                </div>

                <p className="mt-8 text-sm text-slate-500">
                    Rates shown on this site are indicative and change with the market. Always confirm the rate with your
                    buyer before selling.
                </p>
            </main>
            <Footer />
        </div>
    )
}

export default HowItWorks
