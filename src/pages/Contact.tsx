import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { NavLink } from 'react-router-dom'

const Contact: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Contact us</h1>
                <p className="mt-4 text-lg text-slate-600">
                    Questions about a rate, a guide, or something on this site? Email us — we read every message.
                    This is the only contact channel for the site; there is no phone line and no office visits.
                </p>

                <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <h2 className="text-xl font-bold text-brand-dark">Email us</h2>
                    <p className="mt-2 text-slate-600">
                        <a href="mailto:hello@raddigo.pk" className="font-semibold text-brand-dark hover:text-brand-green">
                            hello@raddigo.pk
                        </a>
                    </p>
                    <p className="mt-3 text-slate-600">
                        Tell us what you noticed — for example, a rate that looks wrong, a page that mentions booking or
                        pickup (which this site does not offer), or a guide topic you would like covered.
                    </p>
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-bold text-brand-dark">What to include in your email</h2>
                    <p className="mt-2 text-slate-600">
                        A short, specific email gets the fastest useful reply. If you can, include:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                        <li><strong>The page you are asking about</strong> — a link or the page name (for example, the live rates page or the sorting guide).</li>
                        <li><strong>What you saw</strong> — the exact rate, sentence, or number that looks wrong, and what you expected instead.</li>
                        <li><strong>Your material, if relevant</strong> — for rate questions, which material and roughly how much of it you have.</li>
                        <li><strong>A guide request</strong> — if you want a topic covered (for example, e-waste handling or composting), say so plainly; reader requests shape what gets written next.</li>
                    </ul>
                    <p className="mt-3 text-slate-600">
                        There is no need to include personal documents or photos of your CNIC — an email describing the
                        issue is enough.
                    </p>
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-bold text-brand-dark">Before you write</h2>
                    <p className="mt-2 text-slate-600">
                        Many questions are already answered on these pages:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                        <li><NavLink to="/faq" className="font-semibold text-brand-dark hover:text-brand-green">Frequently asked questions</NavLink> — rates, materials, sorting, and Lahore coverage.</li>
                        <li><NavLink to="/live-rates" className="font-semibold text-brand-dark hover:text-brand-green">Live rates</NavLink> — the per-kg rates shown on this site, with an indicative-rates disclaimer.</li>
                        <li><NavLink to="/recycling-guide" className="font-semibold text-brand-dark hover:text-brand-green">Recycling guide</NavLink> — how to sort paper, plastic, metal, and electronics at home.</li>
                        <li><NavLink to="/pricing" className="font-semibold text-brand-dark hover:text-brand-green">Pricing explained</NavLink> — why offers differ between buyers and how rates move with the market.</li>
                    </ul>
                </div>

                <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                    <h2 className="text-xl font-bold text-brand-dark">What we cannot help with</h2>
                    <p className="mt-2 text-slate-600">
                        Please note: this site does not take bookings, arrange pickups, or handle payments, so we cannot
                        help with a pickup request, a price negotiation with a specific buyer, or a complaint about a
                        deal. If you are selling scrap, the rates and guides on this site are there to help you judge an
                        offer from a buyer of your own choice.
                    </p>
                </div>

                <p className="mt-10 text-slate-600">
                    Please note: this site does not take bookings, arrange pickups, or handle payments, so we cannot
                    help with a pickup request. If you are selling scrap, the rates and guides on this site are there to
                    help you judge an offer from a buyer of your own choice.
                </p>
            </main>
            <Footer />
        </div>
    )
}

export default Contact
