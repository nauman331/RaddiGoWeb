import React from 'react'
import { NavLink } from 'react-router-dom'

const opportunities = [
    'Creators and local influencers can share RaddiGo with their communities',
    'Students and startup founders can join the early partner network',
    'Local businesses can become pickup partners and referral champions',
]

const CreatorSection: React.FC = () => {
    return (
        <section className="bg-slate-900 px-6 py-20 text-white" aria-labelledby="creator-heading">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">For creators and partners</p>
                    <h2 id="creator-heading" className="mt-3 text-3xl font-heading font-bold">
                        Built for creators, communities, and local champions
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        We want to work with people who care about sustainability, local impact, and building a better way to
                        recycle in Pakistan.
                    </p>
                    <NavLink
                        to="/contact"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
                    >
                        Partner with us
                    </NavLink>
                </div>
                <ul className="grid gap-4">
                    {opportunities.map((item) => (
                        <li key={item} className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
                            <p className="text-slate-200">{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default CreatorSection