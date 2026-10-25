import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { NavLink } from 'react-router-dom'

const Privacy: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Privacy Policy</h1>
                <p className="mt-4 text-slate-600">
                    Yeh policy batati hai ke RaddiGo website par aap ka data kaise jama hota hai, kis maqsad ke liye
                    istemal hota hai, aur aap ke paas kya ikhtiyarat hain. Is site par koi account, booking ya pickup
                    service nahi hai, is liye hum aap ka pickup history ya account data jama nahi karte.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">1. Hum kya data jama karte hain</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li>
                        <strong>Analytics data:</strong> Is site par Google Analytics istemal hota hai, jo aam tor par
                        ye maloomat jama karta hai: konsa page dekha gaya, kitni der ke liye, kis device ya browser se,
                        aur kis sheher ya mulk se visit aayi. Yeh data shakhs ki shanakht ke liye nahi, balki site ko
                        behtar banane ke liye istemal hota hai.
                    </li>
                    <li>
                        <strong>Email agar aap humein likhein:</strong> Agar aap humein email karte hain, to aap ka email
                        address aur message humare paas hoga, sirf aap ke sawal ka jawab dene ke liye. Hum aap ka email
                        kisi ko bechte ya kisi marketing list mein shaamil nahi karte.
                    </li>
                    <li>
                        <strong>Cookies:</strong> Is site par cookies istemal hoti hain — apni cookies, analytics
                        cookies, aur ishteharat se mutaliq cookies. Tafseel ke liye humari Cookie Policy dekhein.
                    </li>
                </ul>
                <p className="mt-3 text-slate-600">
                    Hum aap ka naam, phone number, pata, payment maloomat, ya pickup history nahi mangte aur nahi jama
                    karte, kyunki is site par aisi koi service maujood nahi hai.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">2. Google aur ishteharat se mutaliq disclosure</h2>
                <p className="mt-3 text-slate-600">
                    Is site par Google ke ishteharat dikhaye ja sakte hain. Google, ek third-party vendor ke tor par,
                    ishteharat dikhane ke liye cookies istemal karta hai, jin mein DoubleClick cookie shaamil hai.
                    DoubleClick cookie Google aur uske partners ko is site aur internet par doosri sites par aap ke
                    pehle visits ki bunyad par ishteharat dikhane mein madad karti hai.
                </p>
                <p className="mt-3 text-slate-600">
                    Aap DoubleClick cookie ke zariye personalised ishteharat ko Google Ads Settings mein ja kar band kar
                    sakte hain. Aap teesre fareeq ke vendors ki cookies ke zariye personalised ishteharat ko
                    www.aboutads.info ke zariye bhi band kar sakte hain. Google ki apni ishteharat aur privacy policies
                    Google ki website par maujood hain.
                </p>
                <p className="mt-3 text-slate-600">
                    Is site par Google AdSense ka publisher ID abhi shaamil nahi kiya gaya hai; jab AdSense account ban
                    jayega, to ads.txt file mein woh ID shaya ki jayegi.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">3. Teesre fareeq</h2>
                <p className="mt-3 text-slate-600">
                    Analytics aur ishteharat ke ilawa, hum aap ka data kisi teesre fareeq ko nahi bechte, nahi kiraye par
                    dete, aur na hi marketing ke liye share karte hain. Teesre fareeq ki services (masalan Google
                    Analytics aur Google ke ishteharat) ki apni privacy policies hoti hain, jo unki websites par maujood hain.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">4. Data kitni der rakha jata hai</h2>
                <p className="mt-3 text-slate-600">
                    Analytics data sirf utni der rakha jata hai jitni der site ke istemal ko samajhne ke liye zaroori
                    ho, aur uske baad aggregate ya delete kar diya jata hai. Email ke zariye aane wale messages sirf
                    jawab dene aur record ke liye munasib muddat tak rakhe jate hain, phir delete kar diye jate hain.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">5. Aap ke ikhtiyarat</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li>Aap apne browser ki settings se cookies ko band ya delete kar sakte hain, lekin kuch hisson ka kaam mutasir ho sakta hai.</li>
                    <li>Aap Google Ads Settings se personalised ishteharat band kar sakte hain.</li>
                    <li>Agar aap ne humein email ki hai aur chahte hain ke hum woh message delete kar dein, to humein email karke batayein.</li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">6. Bachon ki privacy</h2>
                <p className="mt-3 text-slate-600">
                    Yeh site bachon ke liye nahi banayi gayi hai aur hum jaan boojh kar 13 saal se kam umar ke bachon ka
                    data jama nahi karte.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">7. Policy mein tabdeeli</h2>
                <p className="mt-3 text-slate-600">
                    Hum is policy ko waqtan fawqtan update kar sakte hain. Nayi policy is page par shaya hone ke baad se
                    laagu hogi.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">8. Rabta</h2>
                <p className="mt-3 text-slate-600">
                    Privacy ke bare mein koi sawal ho to humein email karein:{' '}
                    <a href="mailto:hello@raddigo.pk" className="font-semibold text-brand-dark hover:text-brand-green">
                        hello@raddigo.pk
                    </a>
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink to="/cookie-policy" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Cookie Policy →
                    </NavLink>
                    <NavLink to="/terms" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Terms of Service →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Privacy
