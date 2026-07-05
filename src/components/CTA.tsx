import React from 'react'
import { NavLink } from 'react-router-dom'
const CTA: React.FC = () => {
    return (
        <section className="py-16 bg-linear-to-r from-green-50 to-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-brand-dark">Ready to turn old scrap into cash in Lahore?</h3>
                <p className="text-slate-700 mb-8 text-lg">Join the waitlist now and be first to access RaddiGo when we launch. Whether it is household clutter or business scrap, we make pickup simple and dependable.</p>
                <NavLink to="/get-started" className="inline-block px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700">Join waitlist</NavLink>
            </div>
        </section>
    )
}

export default CTA
