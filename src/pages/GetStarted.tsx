import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const steps = [
    {
        title: '1. Check the rates',
        text: 'Start on the live rates page. Find the per-kg rate for each material you have — newspapers, plastic, iron, copper, electronics, or cardboard.',
    },
    {
        title: '2. Read the sorting guide',
        text: 'The recycling guide explains how to sort each material at home: keep paper dry, group plastic by type, and keep metal and electronics apart.',
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
                    run a pickup service, a partner programme, or payments. Here is how to use the site.
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
