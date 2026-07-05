import React, { useState } from 'react'

const faqs = [
    {
        question: 'What kinds of scrap can I book for pickup?',
        answer:
            'You can book pickups for paper, books, plastic, iron, copper, electronics, and other recyclable materials depending on your area.',
    },
    {
        question: 'How do I get paid?',
        answer: 'Once the pickup is complete and verified, payment is made instantly through cash, JazzCash, or EasyPaisa.',
    },
    {
        question: 'Is the service available outside Lahore?',
        answer: 'We are launching in Lahore first and expanding to more cities gradually as we grow the network.',
    },
]

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="bg-slate-50 px-6 py-20" aria-labelledby="faq-heading">
            {/* FAQPage schema makes these eligible for expandable rich results in Google Search */}
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
                        Everything you need to know before joining
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
            </div>
        </section>
    )
}

export default FAQSection