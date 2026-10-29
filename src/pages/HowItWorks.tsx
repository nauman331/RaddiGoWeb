import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const steps = [
    {
        title: '1. Check the rate first',
        text: 'Look up the per-kg rate for your material on the live rates page, so you know roughly what it is worth before you talk to any buyer. Write the rate down or keep the page open on your phone — sellers who know the going rate negotiate from a much stronger position than sellers who walk in blind.',
    },
    {
        title: '2. Sort and weigh honestly',
        text: 'Keep paper dry, separate plastic by type, and keep metal apart from other waste. Scrap is usually weighed at the buyer\u2019s shop, and clean, separated material is easier to value fairly. If you have a bathroom scale at home, weigh your pile roughly first so you have your own number to compare against the buyer\u2019s scale.',
    },
    {
        title: '3. Compare offers, then sell',
        text: 'Rates change with the market, quality, and quantity. Talk to more than one buyer where you can, confirm the rate and the weight for each material separately, and only then agree to sell. A buyer who will not tell you the per-kg rate before weighing is a buyer worth walking away from.',
    },
    {
        title: '4. Watch the weighing',
        text: 'Scrap is almost always sold by weight, so the weighing is the moment that decides your payment. Make sure the scale reads zero before your material goes on, that each material is weighed separately, and that you see the reading yourself. If anything is weighed together as \u201cmixed\u201d, expect a lower rate — that is normal, but it should be stated, not assumed.',
    },
    {
        title: '5. Confirm payment before handing over',
        text: 'Agree on how and when you will be paid before the material changes hands — cash on the spot is the norm for small household loads. Count the payment against your own calculation (weight \u00d7 rate per material) before you leave. Payment terms are strictly between you and your buyer.',
    },
]

const HowItWorks: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">How selling scrap works</h1>
                <p className="mt-4 text-lg text-slate-600">
                    This page explains the general process of selling scrap in Lahore, step by step — from checking
                    the rate to getting paid. RaddiGo does not offer pickup booking or payments; this site publishes
                    rates and guides so you can sell with a clear picture of what your scrap is worth.
                </p>

                <div className="mt-10 space-y-6">
                    {steps.map((step) => (
                        <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-brand-dark">{step.title}</h2>
                            <p className="mt-2 text-slate-600">{step.text}</p>
                        </div>
                    ))}
                </div>

                <h2 className="mt-12 text-2xl font-bold text-brand-dark">What happens at the buyer\u2019s shop</h2>
                <p className="mt-3 text-slate-600">
                    A typical sale is quick and informal. The buyer looks over your material, sorts anything you have
                    not separated, and weighs each material on a scale. The per-kg rate is applied to each weight, and
                    the totals are added up. The whole thing usually takes a few minutes for a household load. Knowing
                    the steps in advance helps you notice if something is skipped — for example, if your copper is
                    weighed together with your iron instead of separately.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Common mistakes first-time sellers make</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li><strong>Mixing everything in one bag.</strong> Mixed scrap is valued at the lowest rate in the mix. Ten minutes of sorting at home can be worth more than the trip itself.</li>
                    <li><strong>Selling wet paper or cardboard.</strong> Wet paper weighs more but is worth less per kg — and many buyers discount it heavily or refuse it. Keep paper dry.</li>
                    <li><strong>Not knowing the weight.</strong> If you have never weighed your pile, you cannot tell whether the buyer\u2019s scale agrees with reality. A rough home weighing costs nothing.</li>
                    <li><strong>Accepting the first offer.</strong> Rates differ between buyers. One extra phone call or visit can change the total noticeably, especially for heavier loads.</li>
                    <li><strong>Forgetting the small valuables.</strong> Copper wire, brass fittings, and old electronics are easy to overlook in a pile of ordinary scrap — pull them out and price them separately.</li>
                </ul>

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
