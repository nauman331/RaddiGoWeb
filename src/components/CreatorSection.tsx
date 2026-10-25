import React from 'react'
import { NavLink } from 'react-router-dom'

const opportunities = [
    'Readers can use the rates and sorting guides to understand what their scrap is worth before selling.',
    'Students and local groups can use the recycling guides to learn how paper, plastic, and metal are sorted and reused.',
    'Shops and offices can use the bulk-sorting guidance to keep recyclable material separate from general waste.',
]

const CreatorSection: React.FC = () => {
    return (
        <section className="bg-slate-900 px-6 py-20 text-white" aria-labelledby="creator-heading">
            <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">For readers and recyclers</p>
                    <h2 id="creator-heading" className="mt-3 text-3xl font-heading font-bold">
                        Built for people who want to recycle with their eyes open
                    </h2>
                    <p className="mt-4 text-lg text-slate-400">
                        This site does not run a pickup service. It exists so scrap sellers, students, and local businesses
                        can read clear rates, learn sorting, and make better decisions when they sell.
                    </p>
                    <NavLink
                        to="/contact"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
                    >
                        Contact us
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
