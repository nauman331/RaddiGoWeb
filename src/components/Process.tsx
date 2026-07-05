import React from 'react'
import phonemap from '../assets/phonemap.jpeg'
import digitalscale from '../assets/digitalscale.jpeg'
import instantcash from '../assets/instantcash.jpeg'

const steps = [
    {
        title: 'Book in minutes',
        description:
            'Choose your area, pick a time, and send your pickup request. It is built for busy customers who want convenience without compromise.',
        img: phonemap,
        alt: 'Booking a scrap pickup on a phone map in Lahore',
    },
    {
        title: 'Weigh with accuracy',
        description:
            'Our captains use digital scales and transparent checks so you know exactly how your material is valued at pickup time.',
        img: digitalscale,
        alt: 'Digital weighing scale used for scrap collection',
    },
    {
        title: 'Get paid instantly',
        description:
            'Once the pickup is complete, you receive payment right away through cash, JazzCash, or EasyPaisa for a smooth finish.',
        img: instantcash,
        alt: 'Instant cash payout after a scrap pickup',
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
                        From homes and offices to shops and warehouses, RaddiGo is designed to make scrap collection feel as
                        simple as booking a ride.
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
            </div>
        </section>
    )
}

export default Process