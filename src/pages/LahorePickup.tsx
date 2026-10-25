import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const materials = [
    { name: 'Akhbar', rate: 'Rs. 80/kg', tip: 'Sookha aur bandha hua rakhein; geela kagaz ki qeemat kam hoti hai.' },
    { name: 'Plastic', rate: 'Rs. 40/kg', tip: 'Type ke hisab se alag karein aur saaf, sookha rakhein.' },
    { name: 'Loha', rate: 'Rs. 110/kg', tip: 'Dusre waste se alag rakhein; zang aur mili hui cheezein offer kam kar sakti hain.' },
    { name: 'Electronics', rate: 'Rs. 200/kg', tip: 'Battery aur tooti screen ko aam scrap se alag rakhein.' },
    { name: 'Tamba', rate: 'Rs. 1800/kg', tip: 'Sab se zyada qeemti aam material; rate aur wazan achhi tarah confirm karein.' },
    { name: 'Cardboard', rate: 'Rs. 30/kg', tip: 'Dabbe chapte karke aur sookha rakh kar dein.' },
]

const LahorePickup: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Lahore scrap rates aur materials</h1>
                <p className="mt-4 text-lg text-slate-600">
                    Lahore mein raddi bechne se pehle rate aur sorting jaan lena behtar hai. Is page par Lahore ke liye
                    shaya kiye gaye per-kg rates aur har material ki sorting ki bunyadi rehnumai hai. Yeh website pickup
                    booking nahi karti — yeh maloomat sirf aap ki rehnumai ke liye hai.
                </p>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    {materials.map((m) => (
                        <div key={m.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-brand-dark">{m.name}</h2>
                            <p className="mt-1 font-semibold text-brand-green">{m.rate}</p>
                            <p className="mt-2 text-slate-600">{m.tip}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                    <h2 className="text-xl font-bold text-brand-dark">Zaroori baat</h2>
                    <p className="mt-2 text-slate-700">
                        Yeh rates indicative hain aur market ke sath badalte hain. Kisi bhi buyer se bechne se pehle rate,
                        wazan aur material ki type confirm karein, aur kul raqam khud hisab karke dekhein.
                    </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        Tamam live rates dekhein
                    </NavLink>
                    <NavLink to="/recycling-guide" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Sorting guide →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LahorePickup
