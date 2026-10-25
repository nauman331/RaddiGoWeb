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
                    <h2 className="text-xl font-bold text-brand-dark">Before you write</h2>
                    <p className="mt-2 text-slate-600">
                        Many questions are already answered on these pages:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                        <li><NavLink to="/faq" className="font-semibold text-brand-dark hover:text-brand-green">Frequently asked questions</NavLink> — rates, materials, sorting, and Lahore coverage.</li>
                        <li><NavLink to="/live-rates" className="font-semibold text-brand-dark hover:text-brand-green">Live rates</NavLink> — the per-kg rates shown on this site, with an indicative-rates disclaimer.</li>
                        <li><NavLink to="/recycling-guide" className="font-semibold text-brand-dark hover:text-brand-green">Recycling guide</NavLink> — how to sort paper, plastic, metal, and electronics at home.</li>
                    </ul>
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
