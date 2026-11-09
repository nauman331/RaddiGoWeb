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
                    aur kabhi kabhi loha ya electronics. Is page par bulk material ko sort karne aur rates samajhne ki
                    rehnumai hai. Yeh website pickup ya scheduled service nahi deti; yeh maloomat sirf rehnumai ke liye hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Bulk sorting ka tareeqa</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li>Cardboard ko chapta karke aur sookha rakh kar alag dher lagayein.</li>
                    <li>Kagaz ko geele ya gande waste se door rakhein.</li>
                    <li>Plastic ko type ke hisab se alag karein jahan mumkin ho.</li>
                    <li>Loha aur electronics ko aam waste se bilkul alag rakhein.</li>
                    <li>Har material ka wazan alag alag karwayein, taake rate saaf ho.</li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Rates jo is site par shaya hain</h2>
                <p className="mt-3 text-slate-600">
                    Akhbar Rs. 80/kg, Plastic Rs. 40/kg, Loha Rs. 110/kg, Electronics Rs. 200/kg, Tamba Rs. 1800/kg,
                    Cardboard Rs. 30/kg. Yeh rates indicative hain — buyer se bechne se pehle rate aur wazan confirm
                    karein, aur kul raqam khud hisab karein.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Bari miqdar bechne se pehle</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li>Ek se zyada buyers se rate poochein aur compare karein.</li>
                    <li>Payment ki shartein pehle se tay karein — kab, kis tareeqe se, aur kis hisab se.</li>
                    <li>Bhari loha uthate waqt safety ka khayal rakhein: dastane pehnein aur madad lein.</li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Dukan ya office mein raddi ka hisab rakhein</h2>
                <p className="mt-3 text-slate-600">
                    Jahan raddi roz ya hafte mein nikalti ho, wahan halka sa hisab rakhna faida mand hai. Ek notebook
                    mein tareekh, material ka naam, wazan, rate aur kul raqam likhte jayein. Har material ka wazan
                    alag alag karwayein — kagaz, cardboard, plastic, loha aur electronics ka hisab alag ho to rate
                    saaf rehta hai. Mahine ke akhir mein yeh hisab dekh kar pata chalta hai ke kaun sa material zyada
                    nikla aur kis ki qeemat kya mili. Yeh hisab buyers se baat karte waqt bhi kaam aata hai, kyunki
                    aap ko apne material ki miqdar aur qeemat pehle se maloom hoti hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Bulk bechne mein aam ghaltiyan</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li><strong>Materials ko mila dena:</strong> mixed material ki qeemat alag alag material ki qeemat se kam hoti hai, is liye har cheez alag rakhein.</li>
                    <li><strong>Geela ya ganda cardboard dena:</strong> geela cardboard dobara istemal ke qabil nahi rehta, is liye usay sookha rakhein.</li>
                    <li><strong>Payment ki shartein pehle tay na karna:</strong> kab, kis tareeqe se aur kis hisab se payment hogi, yeh bechne se pehle saaf hona chahiye.</li>
                    <li><strong>Pehli offer par foran maan lena:</strong> do ya teen buyers se rate poochne mein thoda waqt lagta hai, lekin aksar behtar offer mil jati hai.</li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Storage aur safai</h2>
                <p className="mt-3 text-slate-600">
                    Raddi ko store karne ki jagah sookhi aur hawa-daar honi chahiye. Cardboard aur kagaz ko geele
                    farsh ya khuli chhat se door rakhein. Electronics aur battery ko aam waste se alag rakhein aur
                    tooti cheezon ko alag jagah rakhein. Bhari loha neeche rakhein taake girne ka khatra na ho, aur
                    chalne ki jagah saaf rakhein taake koi phisle nahi. Agar jagah chhoti ho to material ko waqt par
                    sort karke alag karte jayein, taake dher itna bara na ho ke sambhalna mushkil ho jaye.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Aam sawalat</h2>
                <p className="mt-3 text-slate-600">
                    <strong>Kya bulk mein rate behtar milta hai?</strong> Bari aur achhi tarah sort ki hui miqdar
                    buyer ke liye asaan hoti hai, lekin rate hamesha material, condition aur market par depend karta
                    hai — bulk hona hi kaafi nahi.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Payment kab tay karein?</strong> Payment ki shartein material dene se pehle tay kar lein —
                    kab, kis tareeqe se aur kis hisab se.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Electronics kaise handle karein?</strong> Battery aur tooti screen ko alag rakhein, khud
                    kholne ki koshish na karein, aur bhari cheezein uthate waqt dastane pehnein aur madad lein.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Kaam ki jagah par safety</h2>
                <p className="mt-3 text-slate-600">
                    Dukan ya office mein raddi sambhalte waqt safety ka khayal rakhein. Bhari loha uthate waqt dastane
                    pehnein aur madad lein — akelay bhari cheez uthana khatarnak ho sakta hai. Tooti screen ya tez
                    dhaar wali cheezon ko khaali haath se na chhuein. Battery ko aam waste se alag rakhein aur kabhi
                    kholne ki koshish na karein. Raddi ki jagah saaf aur hawa-daar rakhein, aur chalne ki jagah par
                    koi cheez na padi ho. Agar koi cheez khatarnak lage to usay alag rakh dein aur pehle maloomat
                    lein.
                </p>

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
