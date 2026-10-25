import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const materials = [
    { name: 'Kagaz aur akhbar', rate: 'Rs. 80/kg', tip: 'Sookha rakhein, bandh kar dein, aur geele kagaz ko alag rakhein.' },
    { name: 'Cardboard', rate: 'Rs. 30/kg', tip: 'Dabbe chapte karke dein; geela cardboard ki qeemat kam hoti hai.' },
    { name: 'Plastic', rate: 'Rs. 40/kg', tip: 'Type ke hisab se alag karein aur saaf rakhein.' },
    { name: 'Loha', rate: 'Rs. 110/kg', tip: 'Dusre waste se alag rakhein aur wazan alag karwayein.' },
    { name: 'Tamba', rate: 'Rs. 1800/kg', tip: 'Rate aur wazan dono achhi tarah confirm karein.' },
    { name: 'Electronics', rate: 'Rs. 200/kg', tip: 'Battery aur tooti cheezein alag rakhein; khud kholne ki koshish na karein.' },
]

const SellScrap: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Ghar se raddi bechne ki rehnumai</h1>
                <p className="mt-4 text-lg text-slate-600">
                    Ghar ki raddi — purane akhbar, dabbe, plastic, loha aur purane electronics — bechne se pehle rate
                    aur sorting jaan lena faida mand hai. Is page par materials, rates aur sorting ki bunyadi rehnumai
                    hai. Yeh website booking ya pickup nahi karti; yeh maloomat sirf aap ki madad ke liye hai.
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

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Bechne se pehle 3 kaam</h2>
                <ol className="mt-3 list-decimal space-y-2 pl-6 text-slate-600">
                    <li>Rate dekhein — live rates page par har material ka per-kg rate maujood hai.</li>
                    <li>Sort karein — kagaz sookha, plastic alag, loha alag, electronics alag.</li>
                    <li>Compare karein — ek se zyada buyers se rate poochein, wazan confirm karein, phir faisla karein.</li>
                </ol>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        Live rates dekhein
                    </NavLink>
                    <NavLink to="/how-it-works" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Bechne ka tareeqa →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default SellScrap
