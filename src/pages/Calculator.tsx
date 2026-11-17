import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import CalculatorWidget from '../components/CalculatorWidget'
import LastUpdated from '../components/LastUpdated'

const Calculator: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Scrap value calculator</h1>
                <p className="mt-4 text-lg text-slate-600">
                    Work out what your scrap is worth before you talk to a buyer. Enter the weight of each material
                    in kilograms, and the calculator works out the estimated value of each material — and the total —
                    from the per-kg rates published on this site.
                </p>

                <div className="mt-10">
                    <CalculatorWidget />
                </div>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">The rates used here</h2>
                <p className="mt-3 text-slate-600">
                    Newspaper Rs. 80/kg, Plastic Rs. 40/kg, Iron Rs. 110/kg, Electronics Rs. 200/kg, Copper
                    Rs. 1800/kg, Cardboard Rs. 30/kg. These are the same rates shown on the live rates page. If a rate
                    on this site changes, the calculator changes with it — and the change is logged on the{' '}
                    <NavLink to="/rate-history" className="font-semibold text-brand-dark hover:text-brand-green">
                        rate history page
                    </NavLink>
                    .
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">How to use the total</h2>
                <p className="mt-3 text-slate-600">
                    Weigh each material on its own first — mixed scrap is usually valued lower than separated
                    material, so the calculator only gives a fair figure when each material is entered separately.
                    Then compare the calculated total with the offer you are given. If the offer is close to your
                    calculation, it is probably fair. If it is far off, ask the buyer why — and compare with another
                    buyer before you decide. The calculator is a starting point for that conversation, not a price
                    any buyer has agreed to pay.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">What the calculator cannot do</h2>
                <p className="mt-3 text-slate-600">
                    The calculator does not know the condition of your material. Wet paper, damp cardboard, rusted
                    iron, and mixed copper are usually valued lower than clean, dry, separated material, and the
                    calculator cannot adjust for that — it works out the total at the published guide rates. It also
                    cannot know the market on the day you sell. That is why the total is an estimate, and why the
                    rate and the weight should always be confirmed with your buyer before you agree to sell.
                </p>

                <LastUpdated />

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        View live rates
                    </NavLink>
                    <NavLink to="/sell-scrap" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        How to sell scrap →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Calculator
