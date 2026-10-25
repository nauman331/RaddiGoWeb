import React from 'react'
import { NavLink } from 'react-router-dom'

const CTA: React.FC = () => {
    return (
        <section className="bg-linear-to-r from-green-50 to-white py-16" aria-labelledby="cta-heading">
            <div className="mx-auto max-w-4xl px-4 text-center">
                <h2 id="cta-heading" className="mb-4 text-3xl font-semibold text-brand-dark">
                    Check the rate before you sell your scrap in Lahore
                </h2>
                <p className="mb-8 text-lg text-slate-700">
                    Whether it is household clutter or business scrap, start with the rate, sort your material, and compare
                    offers — that is how you get a fair deal.
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-green-600 px-6 py-3 text-white shadow transition hover:bg-green-700"
                    >
                        View live rates
                    </NavLink>
                    <NavLink to="/how-it-works" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        See how selling works →
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default CTA
