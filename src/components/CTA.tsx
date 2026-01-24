import React from 'react'
import { NavLink } from 'react-router-dom'
const CTA: React.FC = () => {
    return (
        <section className="py-12 bg-linear-to-r from-green-50 to-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to clear out your space?</h3>
                <p className="text-slate-700 mb-6">Schedule an on-demand pickup and get rewarded — fast and easy.</p>
                <NavLink to="/get-started" className="inline-block px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700">Get Started</NavLink>
            </div>
        </section>
    )
}

export default CTA
