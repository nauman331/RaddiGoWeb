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

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Lahore mein raddi kahan se nikalti hai</h2>
                <p className="mt-3 text-slate-600">
                    Har ghar mein raddi roz nikalti hai — purane akhbar aur kitabein, dabbe, plastic ki botlein aur
                    dabbe, purane charger aur chhote electronics, aur kabhi kabhi toote hue lohe ke samaan. Dukano aur
                    offices mein cardboard aur kagaz zyada miqdar mein nikalta hai, aur ghar ki safai ya chhoti
                    marammat ke waqt loha aur taar bhi nikal aate hain. Har cheez ki apni qeemat hoti hai, is liye
                    pehle yeh dekhna behtar hai ke aap ke paas kaun sa material kitna hai. Jo cheez alag aur saaf ho,
                    us ki qeemat samajhna asaan hota hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Bechne se pehle tayyari</h2>
                <p className="mt-3 text-slate-600">
                    Bechne se pehle thodi si tayyari faida deti hai. Kagaz aur akhbar ko sookha rakhein aur bandh kar
                    dein, kyunki geela kagaz ki qeemat kam hoti hai. Cardboard ke dabbo ko chapta karke ek jagah
                    rakhein. Plastic ko type ke hisab se alag karein aur saaf rakhein. Loha aur electronics ko aam
                    waste se bilkul alag rakhein, aur battery ya tooti screen ko alag rakhna na bhoolein. Har material
                    ka wazan alag alag karwayein, taake har cheez ka rate saaf ho aur kul raqam ka hisab theek nikle.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Rate compare karne ka tareeqa</h2>
                <p className="mt-3 text-slate-600">
                    Ek hi buyer ki pehli offer par faisla karna zaroori nahi. Do ya teen buyers se rate poochein aur
                    har material ka alag rate likh lein. Wazan aur rate dono confirm karein, phir kul raqam khud
                    hisab karein — wazan ko per-kg rate se zarb dein aur materials ko jama karein. Agar koi buyer
                    mixed raddi ka ek hi rate de, to samajh lein ke alag alag material ki qeemat is se zyada ho sakti
                    hai. Rate, wazan aur material ki type teeno saaf hon to faisla karna asaan ho jata hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Aam sawalat</h2>
                <p className="mt-3 text-slate-600">
                    <strong>Rate kab badalta hai?</strong> Rate market ke sath badalta hai, is liye bechne se pehle is
                    page par dobara dekh lein aur buyer se us din ka rate confirm karein.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Geela kagaz ki qeemat kyun kam hoti hai?</strong> Geela kagaz dobara istemal karna mushkil
                    hota hai, is liye buyer usay kam qeemat par leta hai. Kagaz ko hamesha sookha rakhein.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Tamba itna mehnga kyun hai?</strong> Tamba bijli ke kaam mein zyada istemal hota hai aur
                    ghar mein kam miqdar mein milta hai, is liye us ki per-kg qeemat sab se zyada hai. Us ka rate aur
                    wazan dono achhi tarah confirm karein.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Wazan karwate waqt kya dekhein</h2>
                <p className="mt-3 text-slate-600">
                    Wazan karwate waqt kuch baatein dekhna zaroori hain. Har material ka wazan alag alag karwayein —
                    kagaz, plastic, loha aur electronics ka wazan aik sath nahi hona chahiye. Tarazu par wazan dekhte
                    waqt khud maujood rahein aur wazan likh lein. Agar wazan mein shak ho to dobara tolwayein — dobara
                    tolwane mein koi harj nahi. Geela material ka wazan zyada hota hai, lekin us ki qeemat kam hoti
                    hai, is liye kagaz aur cardboard ko hamesha sookha rakhein. Wazan aur rate dono saaf hon to kul
                    raqam ka hisab theek nikalta hai.
                </p>

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
