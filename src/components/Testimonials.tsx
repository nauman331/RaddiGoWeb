import React from 'react'
import p1 from '../assets/van.jpeg'
import p2 from '../assets/rikshaw.jpeg'

const Testimonials: React.FC = () => {
    const items = [
        { name: 'Ayesha K.', text: 'The pickup was smooth and the process felt much easier than calling random collectors.', img: p1 },
        { name: 'Bilal R.', text: 'I liked that the rate and weight were clear before the pickup was completed.', img: p2 },
    ]

    return (
        <section className="bg-slate-50 py-14">
            <div className="max-w-5xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-heading font-bold text-brand-dark">Trusted by early users who want a better scrap experience</h2>
                    <p className="text-slate-600 mt-3 max-w-2xl mx-auto">We are building around real customer expectations: convenience, transparency, and speed.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((t, i) => (
                        <div key={i} className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                            <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
                            <div>
                                <p className="font-semibold text-brand-dark">{t.name}</p>
                                <p className="text-sm text-slate-600 mt-1">{t.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
