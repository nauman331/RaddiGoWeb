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

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">A first-time seller's checklist</h2>
                <p className="mt-3 text-slate-600">
                    If you have never sold scrap before, a short checklist helps. First, gather everything in one
                    place and see what you have — paper, cardboard, plastic, metal, electronics. Second, sort it:
                    keep paper dry, group plastic by type, and keep metal and electronics apart. Third, weigh each
                    material on its own, or ask for separate weights. Fourth, check the rate for each material on the
                    live rates page and work out your total. Fifth, compare more than one offer, confirm the rate and
                    the weight, and only then agree. Nothing here needs booking or payment — this site only gives you
                    the information to sell with confidence.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Which page to use for what</h2>
                <p className="mt-3 text-slate-600">
                    This site has a page for each question you might have. The live rates page shows the per-kg rate
                    for each material. The recycling guide explains how to sort each material at home. The pricing
                    page explains how totals are worked out and why offers vary. The safety page covers gloves,
                    lifting, batteries, and storage. The coverage page explains which cities the rates are written
                    for. And the contact page is where you can report a mistake or ask a question. You do not need to
                    read everything at once — start with the rates, then open the guide that matches what you are
                    holding.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Keeping simple records</h2>
                <p className="mt-3 text-slate-600">
                    A small notebook makes selling simpler over time. Each time you sell, write down the date, the
                    material, the weight, the per-kg rate, and the total. After a few sales you will see patterns:
                    which material you collect most, what it usually earns, and whether an offer is better or worse
                    than usual. Records also help when you compare buyers — instead of relying on memory, you can
                    point to what you were paid last time. There is no app or account needed for this; a notebook or a
                    notes page on your phone is enough.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Frequently asked questions</h2>
                <p className="mt-3 text-slate-600">
                    <strong>Do I need to book anything to use this site?</strong> No. This site does not take
                    bookings, arrange pickups, or handle payments — it only publishes rates and guides.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>How much is my scrap worth?</strong> It depends on the material, the weight, and the
                    condition. Check the live rates page, weigh each material separately, and multiply weight by rate
                    to get a rough total.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>What if a buyer offers less than the rate here?</strong> Ask which rate applies to your
                    material in its actual condition. Wet, mixed, or small quantities are usually valued lower.
                    Compare another offer before you decide.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>What should I do with batteries?</strong> Keep them apart from general scrap, never open
                    or burn them, and handle broken screens with care.
                </p>

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
