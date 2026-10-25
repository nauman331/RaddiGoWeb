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
