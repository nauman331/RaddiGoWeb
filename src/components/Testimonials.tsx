import React from 'react'
import p1 from '../assets/van.jpeg'
import p2 from '../assets/rikshaw.jpeg'

const Testimonials: React.FC = () => {
    const items = [
        { name: 'Ayesha K.', text: 'Super reliable pickup service — scheduled in minutes.', img: p1 },
        { name: 'Bilal R.', text: 'Easy app, friendly captains and fast collection.', img: p2 },
    ]

    return (
        <section className="bg-slate-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-2xl font-semibold text-center mb-8">What our customers say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((t, i) => (
                        <div key={i} className="flex gap-4 items-center bg-white p-4 rounded-lg shadow-sm">
                            <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
                            <div>
                                <p className="font-medium">{t.name}</p>
                                <p className="text-sm text-slate-600">{t.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
