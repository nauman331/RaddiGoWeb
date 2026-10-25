import React from 'react'
import { NavLink } from 'react-router-dom'
import raddi from '../assets/raddi.jpeg'
import digitalscale from '../assets/digitalscale.jpeg'
import trashcash from '../assets/trashcash.jpeg'

// General advice for selling scrap anywhere — not a RaddiGo booking flow.
// RaddiGo does not offer pickup booking on this site.
const steps = [
    {
        title: 'Check the rate first',
        description:
            'Look up the per-kg rate for your material on the live rates page, so you know roughly what your scrap is worth before you talk to any buyer.',
        img: raddi,
        alt: 'Mixed scrap materials sorted for recycling',
    },
    {
        title: 'Sort and weigh honestly',
        description:
            'Keep paper dry, separate plastic by type where you can, and keep metal apart from other waste. Scrap is usually weighed, so clean, sorted material is easier to value fairly.',
        img: digitalscale,
        alt: 'Digital weighing scale used for scrap',
    },
    {
        title: 'Compare offers, then sell',
        description:
            'Rates change with the market and with quality and quantity. Compare more than one offer, confirm the rate and the weight, and only then agree to sell.',
        img: trashcash,
        alt: 'Cash value of sorted scrap materials',
    },
]

const Process: React.FC = () => {
    return (
        <section className="bg-white px-6 py-20" aria-labelledby="process-heading">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">How it works</p>
                    <h2 id="process-heading" className="mt-3 text-3xl font-heading font-bold text-brand-dark">
                        A cleaner way to sell scrap in Lahore
                    </h2>
                    <p className="mt-3 text-lg text-slate-600">
                        From homes and offices to shops and warehouses, selling scrap goes better when you know the rate,
                        sort your material, and compare offers first.
                    </p>
                </div>

                <ol className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <li
                            key={step.title}
                            className="group rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-[0_10px_40px_rgba(11,61,46,0.08)] transition hover:-translate-y-1 hover:border-brand-green"
                        >
                            <div className="mb-4 h-40 overflow-hidden rounded-xl bg-slate-100">
                                <img
                                    alt={step.alt}
                                    src={step.img}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover opacity-80 transition group-hover:scale-105"
                                />
                            </div>
                            <p className="mb-1 text-sm font-semibold text-brand-green">Step {i + 1}</p>
                            <h3 className="mb-2 text-xl font-bold text-brand-dark">{step.title}</h3>
                            <p className="text-slate-600">{step.description}</p>
                        </li>
                    ))}
                </ol>

                <div className="mt-10 text-center">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        See the rates
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default Process
