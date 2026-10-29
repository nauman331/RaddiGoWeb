import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const BusinessPickup: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Dukano aur offices ke liye bulk sorting aur rates</h1>
                <p className="mt-4 text-lg text-slate-600">
                    Dukano, godamo aur offices mein raddi aksar zyada miqdar mein nikalti hai — dabbe, kagaz, plastic
                    aur kabhi kabhi loha ya electronics. Is page par bulk material ko sort karne, rates samajhne aur
                    behtar deal lene ki rehnumai hai. Yeh website pickup ya scheduled service nahi deti; yeh maloomat
                    sirf rehnumai ke liye hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Kin businesses se kya raddi nikalti hai</h2>
                <p className="mt-3 text-slate-600">
                    Har business ka waste mukhtalif hota hai, aur yeh jan\u2019na ke aap ke paas kya nikalta hai sorting
                    ka pehla qadam hai. Offices se aam tor par kagaz, akhbar aur cardboard ke dabbe nikalte hain;
                    retail dukano se cardboard aur plastic packaging; workshops aur godamo se loha, lakri ke tukre aur
                    kabhi purane auzaar; aur har jagah se waqtan fawaqtan purane electronics — printer, keyboard, taarein.
                    Apne business ke 2-3 aam materials pehchan lein; unhi par tawajjo dena sab se zyada faida dega.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Bulk sorting ka tareeqa</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li>Cardboard ko chapta karke aur sookha rakh kar alag dher lagayein.</li>
                    <li>Kagaz ko geele ya gande waste se door rakhein.</li>
                    <li>Plastic ko type ke hisab se alag karein jahan mumkin ho.</li>
                    <li>Loha aur electronics ko aam waste se bilkul alag rakhein.</li>
                    <li>Har material ka wazan alag alag karwayein, taake rate saaf ho.</li>
                    <li>Rozana ya haftawar thori thori sorting karna aasan hai — mahine baad ek bara dher suljhana mushkil.</li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Rates jo is site par shaya hain</h2>
                <p className="mt-3 text-slate-600">
                    Akhbar Rs. 80/kg, Plastic Rs. 40/kg, Loha Rs. 110/kg, Electronics Rs. 200/kg, Tamba Rs. 1800/kg,
                    Cardboard Rs. 30/kg. Yeh rates indicative hain — buyer se bechne se pehle rate aur wazan confirm
                    karein, aur kul raqam khud hisab karein.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Simple hisab-kitab rakhein</h2>
                <p className="mt-3 text-slate-600">
                    Bulk bechne walon ke liye ek chhoti si copy ya phone ka note kaafi hai. Har dafa jab raddi bechein,
                    tareekh, material, wazan, per-kg rate aur kul raqam likh lein. Chand hafton mein aap ke paas apna
                    record hoga: aap ko pata chalega ke aap ke business se mahine mein kitni raddi nikalti hai, kaun sa
                    buyer behtar rate deta hai, aur rates kab oopar neeche hote hain. Yeh record agle buyer se baat
                    karte waqt aap ki sab se mazboot dalil hota hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Bulk deal par behtar rate kaise lein</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li>Ek se zyada buyers se rate poochein aur compare karein — bulk mein chhota farq bhi bari raqam banta hai.</li>
                    <li>Sort kiya hua maal buyer ke liye aasan hota hai; saaf suthra bulk aksar behtar rate dilata hai.</li>
                    <li>Payment ki shartein pehle se tay karein — kab, kis tareeqe se, aur kis hisab se.</li>
                    <li>Bhari loha uthate waqt safety ka khayal rakhein: dastane pehnein aur madad lein.</li>
                    <li>Agar koi buyer baghair wazan bataye ya baghair rate bataye deal karna chahe, to doosra option dekhein.</li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Bari miqdar bechne se pehle</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li>Ek se zyada buyers se rate poochein aur compare karein.</li>
                    <li>Payment ki shartein pehle se tay karein — kab, kis tareeqe se, aur kis hisab se.</li>
                    <li>Bhari loha uthate waqt safety ka khayal rakhein: dastane pehnein aur madad lein.</li>
                </ul>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        Live rates dekhein
                    </NavLink>
                    <NavLink to="/safety" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Safety tips →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default BusinessPickup
