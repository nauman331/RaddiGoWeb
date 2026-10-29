import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const steps = [
    {
        title: '1. Check the rates',
        text: 'Start on the live rates page. Find the per-kg rate for each material you have — newspapers, plastic, iron, copper, electronics, or cardboard. Note the rates down; sellers who know the going rate negotiate from a much stronger position.',
    },
    {
        title: '2. Read the sorting guide',
        text: 'The recycling guide explains how to sort each material at home: keep paper dry, group plastic by type, and keep metal and electronics apart. Ten minutes of sorting is often worth more than the trip to the buyer.',
    },
    {
        title: '3. Compare offers, then sell',
        text: 'With the rate and a sorted pile, you can talk to a buyer with a clear idea of value. Confirm the rate and weight before agreeing, and compare more than one offer where you can.',
    },
]

const GetStarted: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Get started with RaddiGo</h1>
                <p className="mt-4 text-lg text-slate-600">
                    RaddiGo is an informational site: it publishes Lahore scrap rates and recycling guides. It does not
                    run a pickup service, a partner programme, or payments. Here is how to use the site, whether this
                    is your first time selling scrap or you just want a better rate than last time.
                </p>

                <div className="mt-10 space-y-6">
                    {steps.map((step) => (
                        <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-brand-dark">{step.title}</h2>
                            <p className="mt-2 text-slate-600">{step.text}</p>
                        </div>
                    ))}
                </div>

                <h2 className="mt-12 text-2xl font-bold text-brand-dark">Your first pile: a simple checklist</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li><strong>Gather:</strong> pull together newspapers, cardboard boxes, plastic bottles and containers, old iron items, and any dead electronics or wires.</li>
                    <li><strong>Sort into the six types:</strong> newspaper, cardboard, plastic, iron, electronics, copper. Keep each in its own bag or corner.</li>
                    <li><strong>Dry everything:</strong> paper and cardboard must be dry; give plastic containers a quick rinse and let them dry.</li>
                    <li><strong>Weigh roughly:</strong> a bathroom scale gives you your own number to compare against the buyer\u2019s scale.</li>
                    <li><strong>Do the maths:</strong> weight \u00d7 per-kg rate for each material, added together — that is your target figure.</li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">How to read a rate</h2>
                <p className="mt-3 text-slate-600">
                    Every rate on this site means rupees per kilogram of that material, separated and in ordinary
                    sellable condition — for example, Rs. 80/kg for newspaper means 10 kg of dry, bundled newspaper is
                    worth roughly Rs. 800 before the buyer\u2019s adjustments for condition. Mixed, wet, or dirty material
                    is valued lower, so the rate is a starting point for the conversation, not a guaranteed payout.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Where to go next on this site</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li><strong>Live rates</strong> — the per-kg rates, with an indicative-rates disclaimer.</li>
                    <li><strong>How it works</strong> — the full step-by-step of a sale, including what happens at the buyer\u2019s shop.</li>
                    <li><strong>Recycling guide</strong> — detailed sorting instructions for each material.</li>
                    <li><strong>Pricing explained</strong> — why offers differ and how rates move with the market.</li>
                    <li><strong>Safety</strong> — handling glass, sharp metal, batteries, and heavy iron safely.</li>
                </ul>

                <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                    <h2 className="text-xl font-bold text-brand-dark">What this site does not do</h2>
                    <p className="mt-2 text-slate-600">
                        This site does not take bookings, arrange pickups, hire collectors, or handle payments. If you
                        see a page or link that suggests otherwise, it is outdated — please tell us by email so we can
                        fix it.
                    </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
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

export default GetStarted
