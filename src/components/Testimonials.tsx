import React from 'react'
import p1 from '../assets/van.jpeg'
import p2 from '../assets/rikshaw.jpeg'

const items = [
    { name: 'Ayesha K.', text: 'The pickup was smooth and the process felt much easier than calling random collectors.', img: p1 },
    { name: 'Bilal R.', text: 'I liked that the rate and weight were clear before the pickup was completed.', img: p2 },
]

const Testimonials: React.FC = () => {
    return (
        <section className="bg-slate-50 py-14" aria-labelledby="testimonials-heading">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Product',
                        name: 'RaddiGo scrap pickup service',
                        review: items.map((t) => ({
                            '@type': 'Review',
                            author: { '@type': 'Person', name: t.name },
                            reviewBody: t.text,
                        })),
                    }),
                }}
            />
            <div className="mx-auto max-w-5xl px-4">
                <div className="mb-10 text-center">
                    <h2 id="testimonials-heading" className="text-3xl font-heading font-bold text-brand-dark">
                        Trusted by early users who want a better scrap experience
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                        We are building around real customer expectations: convenience, transparency, and speed.
                    </p>
                </div>
                <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {items.map((t) => (
                        <li key={t.name} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                            <img
                                src={t.img}
                                alt={t.name}
                                loading="lazy"
                                decoding="async"
                                className="h-16 w-16 rounded-full object-cover"
                            />
                            <div>
                                <p className="font-semibold text-brand-dark">{t.name}</p>
                                <p className="mt-1 text-sm text-slate-600">{t.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Testimonials