import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const About: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">RaddiGo ki kahani</h1>
                <p className="mt-4 text-lg text-slate-600">
                    RaddiGo ki shuruaat ek simple masle se hui: Lahore mein raddi bechne wale ko aksar yeh nahi pata
                    hota ke uski cheez ki asli qeemat kya hai. Rate zabani bataya jata hai, wazan ka andaza nahi hota,
                    aur bechne wala bina maloomat ke faisla kar leta hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Hum kya karte hain</h2>
                <p className="mt-3 text-slate-600">
                    RaddiGo ek maloomati website hai. Hum Lahore ke liye scrap ke per-kg rates shaya karte hain — akhbar,
                    plastic, loha, tamba, electronics aur cardboard — aur sath mein sorting aur recycling ki rehnumai
                    dete hain. Humara maqsad yeh hai ke bechne wale ko rate, wazan aur material ki samajh ho, taake wo
                    behtar faisla kar sake.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Hum kya nahi karte</h2>
                <p className="mt-3 text-slate-600">
                    Yeh website pickup booking nahi leti, collector nahi bhejti, aur payment nahi karti. Agar aap ko kisi
                    page par booking ya pickup ka zikr mile, to wo purani maloomat hai — humein email karke batayein
                    taake hum usay theek kar sakein.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Humari rehnumai ke usool</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li>Rates saaf aur per-kg dikhaye jayein, chhupi hui shartein nahi.</li>
                    <li>Sorting ki rehnumai aam aadmi ki zuban mein ho, mushkil lafzon mein nahi.</li>
                    <li>Koi jhooti tadaad, jhoota dawa ya na-mukammal wada shaya nahi kiya jaye.</li>
                    <li>Rates indicative hain aur market ke sath badalte hain — yeh baat har page par saaf likhi jaye.</li>
                </ul>

                <p className="mt-10 text-slate-600">
                    Koi sawal, rate ki ghalti, ya mashwara ho to humein email karein:{' '}
                    <a href="mailto:hello@raddigo.pk" className="font-semibold text-brand-dark hover:text-brand-green">
                        hello@raddigo.pk
                    </a>
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">RaddiGo kis ke liye hai</h2>
                <p className="mt-3 text-slate-600">
                    RaddiGo un sab ke liye hai jo raddi bechte hain — ghar wale jo purane akhbar aur dabbe jama karte
                    hain, dukandar jin ke paas cardboard aur kagaz roz nikalta hai, aur offices jahan kagaz aur purane
                    electronics jama hote hain. Aksar bechne wale ko yeh nahi pata hota ke us ki cheez ki asli qeemat
                    kya hai, aur wo bina maloomat ke faisla kar leta hai. Is site ka maqsad yeh hai ke har bechne
                    wale ko rate, wazan aur material ki samajh ho — chaahe us ke paas aik kilo ho ya bara dher.
                    Maloomat saaf ho to faisla behtar hota hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Maloomat kaise tayaar ki jati hai</h2>
                <p className="mt-3 text-slate-600">
                    Is site par rates aur rehnumai aam samajh aur market ki bunyad par likhi jati hai. Rates per-kg
                    aur saaf dikhaye jate hain, aur har page par yeh likha hota hai ke rates indicative hain aur
                    market ke sath badalte hain. Sorting ki rehnumai aam aadmi ki zuban mein likhi jati hai, mushkil
                    lafzon mein nahi. Hum koi jhooti tadaad, jhoota dawa ya na-mukammal wada shaya nahi karte — jo
                    maloomat di jati hai, wo sirf rehnumai ke liye hai, aur bechne se pehle buyer se confirm karna
                    hamesha zaroori hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Recycling kyun zaroori hai</h2>
                <p className="mt-3 text-slate-600">
                    Raddi bechna sirf paison ka mamla nahi — is se recycling bhi hoti hai. Kagaz, cardboard, plastic
                    aur loha dobara istemal ho sakta hai, aur jab yeh cheezein dobara istemal hoti hain to kachra kam
                    hota hai aur naye material ki zaroorat bhi kam ho jati hai. Ghar mein sort ki hui raddi ko dobara
                    istemal ke qabil banana asaan hota hai, jab ke mila hua ya geela waste aksar zaya ho jata hai. Is
                    liye sort karna, sookha rakhna aur alag alag bechna sirf behtar qeemat ke liye nahi, balki saaf
                    mahol ke liye bhi faida mand hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Aam sawalat</h2>
                <p className="mt-3 text-slate-600">
                    <strong>Kya yeh site free hai?</strong> Haan, is site par rates aur guides parhna free hai — koi
                    booking ya payment nahi.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Rate roz badalta hai?</strong> Rate market ke sath badalta hai, is liye bechne se pehle
                    live rates page dobara dekh lein.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Kya yeh site pickup karti hai?</strong> Nahi, yeh website pickup booking nahi leti aur
                    collector nahi bhejti — yeh sirf maloomat deti hai.
                </p>
                <p className="mt-3 text-slate-600">
                    <strong>Koi sawal ya rate ki ghalti ho to kya karein?</strong> Humein email karein — hello@raddigo.pk
                    — taake hum usay theek kar sakein.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Rate ki ghalti ki report kaise karein</h2>
                <p className="mt-3 text-slate-600">
                    Agar aap ko kisi page par rate ki ghalti ya purani maloomat mile to humein email karke batayein —
                    hello@raddigo.pk. Email mein page ka naam, ghalat rate aur sahi rate likh dein, taake hum usay
                    jald theek kar sakein. Aap ki report se site sab ke liye behtar hoti hai, aur ghalat maloomat
                    waqt par theek ho jati hai.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        Live rates dekhein
                    </NavLink>
                    <NavLink to="/recycling-guide" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Recycling guide →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default About
