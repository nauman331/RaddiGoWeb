import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { NavLink } from 'react-router-dom'

const Terms: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Terms of Service</h1>
                <p className="mt-4 text-slate-600">
                    Is website ko istemal karke aap in sharaait se ittefaq karte hain. Agar aap in se ittefaq nahi
                    karte, to barah-e-karam is site ka istemal na karein.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">1. Yeh site kya hai</h2>
                <p className="mt-3 text-slate-600">
                    RaddiGo ek maloomati website hai jo Lahore ke liye scrap ke rates aur recycling ki rehnumai shaya
                    karti hai. Yeh site pickup booking, collector service, ya payment ki service nahi deti. Is site par
                    maujood maloomat sirf rehnumai ke liye hai, na ke kisi khareedari ya farokht ka wada.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">2. Rates indicative hain</h2>
                <p className="mt-3 text-slate-600">
                    Is site par shaya kiye gaye rates indicative hain aur market, material ki halat, wazan aur miqdar ke
                    sath badal sakte hain. Koi bhi buyer is site ke rate par bechne ya khareedne ka paband nahi hai.
                    Bechne se pehle rate, wazan aur material ki type apne buyer se confirm karna aap ki zimmedari hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">3. Koi transaction humari zimmedari nahi</h2>
                <p className="mt-3 text-slate-600">
                    Aap aur kisi buyer ke darmiyan koi bhi muamla — rate, wazan, payment, ya material ki delivery — sirf
                    aap dono ke darmiyan hai. RaddiGo us muamle ka hissa nahi hai aur us se paida hone wale kisi nuqsan,
                    ikhtilaf ya payment ke masle ki zimmedar nahi hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">4. Maloomat ka istemal</h2>
                <p className="mt-3 text-slate-600">
                    Is site ki maloomat ko zaati, ghair-tijarati istemal ke liye parha aur share kiya ja sakta hai,
                    bashart-e-ke usay ghalat tareeqe se pesh na kiya jaye aur RaddiGo ko source ke tor par zahir kiya
                    jaye. Is site ke naam, logo ya maloomat ko kisi dhoke, ghalat dawe, ya kisi aur service ke tor par
                    pesh karne ki ijazat nahi hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">5. Durustgi ki koshish, guarantee nahi</h2>
                <p className="mt-3 text-slate-600">
                    Hum rates aur guides ko durust aur up-to-date rakhne ki koshish karte hain, lekin hum is baat ki
                    guarantee nahi dete ke har maloomat har waqt mukammal ya ghalti se pak hogi. Agar aap ko koi ghalti
                    nazar aaye, to humein email karke batayein taake hum usay theek kar sakein.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">6. Teesre fareeq ke links aur ishteharat</h2>
                <p className="mt-3 text-slate-600">
                    Is site par teesre fareeq ke links ya ishteharat (masalan Google ke ishteharat) maujood ho sakte
                    hain. Un sites ki apni privacy policies aur sharaait hoti hain, jin ki zimmedari RaddiGo ki nahi
                    hai. Is bare mein tafseel ke liye humari Privacy Policy aur Cookie Policy dekhein.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">7. Zimmedari ki had</h2>
                <p className="mt-3 text-slate-600">
                    Is site ki maloomat par amal karke kiye gaye kisi faisle, farokht, ya handling se paida hone wale
                    kisi nuqsan ki zimmedari RaddiGo ki nahi hogi, siwaye us surat ke jahan qanoon is had ko rokta ho.
                    Safety tips aam rehnumai hain, na ke kisi khaas kaam ke liye professional safety mashwara.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">8. Sharaait mein tabdeeli</h2>
                <p className="mt-3 text-slate-600">
                    Hum in sharaait ko waqtan fawqtan update kar sakte hain. Nayi sharaait is page par shaya hone ke baad
                    se laagu hongi. Site ka musalsal istemal nayi sharaait ki qubooliyat samjha jayega.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">9. Rabta</h2>
                <p className="mt-3 text-slate-600">
                    In sharaait ke bare mein koi sawal ho to humein email karein:{' '}
                    <a href="mailto:hello@raddigo.pk" className="font-semibold text-brand-dark hover:text-brand-green">
                        hello@raddigo.pk
                    </a>
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink to="/privacy" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Privacy Policy →
                    </NavLink>
                    <NavLink to="/cookie-policy" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Cookie Policy →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Terms
