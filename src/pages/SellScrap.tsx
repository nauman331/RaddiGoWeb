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

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Ghar mein raddi jama karne ki aadat</h2>
                <p className="mt-3 text-slate-600">
                    Raddi bechna asaan ho jata hai agar ghar mein usay jama karne ki halki si aadat ban jaye. Har
                    material ke liye alag jagah ya bori rakhein — ek kagaz aur akhbar ke liye, ek plastic ke liye,
                    aur ek cardboard ke liye. Hafte mein ek dafa in ko sort kar lein aur geeli ya gandi cheezon ko
                    alag kar dein. Loha aur electronics ko aam waste se door rakhein. Jab dher theek miqdar mein ho
                    jaye to rate dekh kar bech dein. Is tarah ghar saaf rehta hai aur har material ki qeemat bhi
                    saaf samajh aati hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Wazan aur hisab kaise karein</h2>
                <p className="mt-3 text-slate-600">
                    Kul raqam ka hisab simple hai: har material ka wazan us ke per-kg rate se zarb dein, phir sab ko
                    jama karein. Masalan, 12 kg akhbar Rs. 80/kg ke hisab se Rs. 960 bante hain, aur 6 kg plastic
                    Rs. 40/kg ke hisab se Rs. 240 — dono mila kar Rs. 1,200. Yeh sirf misaal hai; asal offer material
                    ki condition aur miqdar par depend karti hai. Har material ka wazan alag alag karwayein, taake
                    hisab saaf ho. Rate aur wazan dono confirm karein, phir buyer ki offer se apna hisab mila kar
                    dekhein — agar farq zyada ho to wajah poochein.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Aam ghaltiyan</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li><strong>Geela kagaz ya cardboard dena:</strong> geeli cheezon ki qeemat kam hoti hai, is liye kagaz ko hamesha sookha rakhein.</li>
                    <li><strong>Sab kuch ek hi dher mein mila dena:</strong> mixed raddi ki qeemat alag alag material se kam hoti hai.</li>
                    <li><strong>Pehli offer par foran maan lena:</strong> do ya teen buyers se rate poochne mein koi harj nahi.</li>
                    <li><strong>Wazan check kiye baghair bech dena:</strong> rate aur wazan dono mila kar kul raqam banti hai, is liye dono confirm karna zaroori hai.</li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Aam sawalat</h2>
                <p className="mt-3 text-slate-600">
                    <strong>Kya chhoti miqdar bhi bechni chahiye?</strong> Haan, chhoti miqdar bhi qeemti hai, khaas
                    tor par tamba ya electronics — lekin pehle rate aur wazan confirm kar lein.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Battery kahan rakhein?</strong> Battery ko aam scrap se alag rakhein, kabhi kholne ya
                    todne ki koshish na karein, aur tooti battery ko khaali haath se na chhuein.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Rate kab check karein?</strong> Bechne se pehle live rates page par rate dekh lein,
                    kyunki rate market ke sath badalta hai — aur buyer se us din ka rate zaroor confirm karein.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Ghar mein safety ka khayal rakhein</h2>
                <p className="mt-3 text-slate-600">
                    Ghar mein raddi sort karte waqt safety ka khayal rakhein. Bache sirf saaf kagaz aur cardboard
                    sort karne mein madad karein — tez dhaar wala loha, toota sheesha, battery aur purane electronics
                    se unhein door rakhein. Dastane pehnein jab loha ya tooti cheezein uthayein, aur kaam ke baad
                    haath dho lein. Raddi ko sookhi aur hawa-daar jagah par rakhein, aur bhari cheezein neeche rakhein
                    taake girne ka khatra na ho. Battery ko kabhi kholne ya jalane ki koshish na karein.
                </p>

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
