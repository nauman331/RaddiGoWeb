import React from 'react'
import { NavLink } from 'react-router-dom'

const CTA: React.FC = () => {
    return (
        <section className="bg-linear-to-r from-green-50 to-white py-16" aria-labelledby="cta-heading">
            <div className="mx-auto max-w-4xl px-4 text-center">
                <h2 id="cta-heading" className="mb-4 text-3xl font-semibold text-brand-dark">
                    Ready to turn old scrap into cash in Lahore?
                </h2>
                <p className="mb-8 text-lg text-slate-700">
                    Join the waitlist now and be first to access RaddiGo when we launch. Whether it is household clutter or
                    business scrap, we make pickup simple and dependable.
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <NavLink
                        to="/get-started"
                        className="inline-block rounded-full bg-green-600 px-6 py-3 text-white shadow transition hover:bg-green-700"
                    >
                        Join waitlist
                    </NavLink>
                    <NavLink to="/how-it-works" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        See how it works →
                    </NavLink>
                </div>
                <p className="mt-4 text-sm text-slate-500">Over 500 homes and businesses have already joined.</p>
            </div>
        </section>
    )
}

export default CTA