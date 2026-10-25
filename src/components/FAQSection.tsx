import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const faqs = [
    {
        question: 'What kinds of scrap does this site cover?',
        answer:
            'Newspapers, books, cardboard, plastic, iron, copper, and electronics. The live rates page lists the per-kg rate shown for each material on this site.',
    },
    {
        question: 'Are the rates on this site guaranteed prices?',
        answer:
            'No. The rates are indicative and change with the market, material quality, and quantity. Always confirm the rate, the weight, and the material type with your buyer before selling.',
    },
    {
        question: 'How should I sort scrap before selling it?',
        answer:
            'Keep paper and cardboard dry and clean, group plastic by type where you can, keep metal separate from other waste, and keep batteries and electronics apart from general scrap. The recycling guide explains each step.',
    },
    {
        question: 'Does RaddiGo offer pickup booking on this site?',
        answer:
            'No. This site is informational: it publishes rates and recycling guides for Lahore scrap sellers. It does not take bookings, arrange pickups, or handle payments.',
    },
    {
        question: 'Is this site only about Lahore?',
        answer:
            'The rates on this site focus on Lahore. Other cities are listed on the coverage page, but no separate city rates for them are published yet.',
    },
    {
        question: 'Why do two buyers offer different rates for the same scrap?',
        answer:
            'Because the rate depends on the material, its condition, its weight, and market demand on the day. Clean, dry, sorted material is usually easier to value than mixed or wet material.',
    },
]

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="bg-slate-50 px-6 py-20" aria-labelledby="faq-heading">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'FAQPage',
                        mainEntity: faqs.map((f) => ({
                            '@type': 'Question',
                            name: f.question,
                            acceptedAnswer: { '@type': 'Answer', text: f.answer },
                        })),
                    }),
                }}
            />
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">FAQ</p>
                    <h2 id="faq-heading" className="mt-3 text-3xl font-heading font-bold text-brand-dark">
                        Everything you need to know about scrap rates
                    </h2>
                </div>

                <div className="mt-10 space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i
                        const panelId = `faq-panel-${i}`
                        const buttonId = `faq-button-${i}`
                        return (
                            <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <h3>
                                    <button
                                        id={buttonId}
                                        onClick={() => setOpenIndex(isOpen ? null : i)}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        className="flex w-full items-center justify-between px-6 py-5 text-left"
                                    >
                                        <span className="text-lg font-semibold text-brand-dark">{faq.question}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 shrink-0 text-brand-green transition-transform duration-200 ${
                                                isOpen ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </h3>
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    className={`grid overflow-hidden px-6 transition-all duration-300 ${
                                        isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <p className="min-h-0 text-slate-600">{faq.answer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="mt-10 text-center">
                    <NavLink
                        to="/faq"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        More questions →
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default FAQSection
