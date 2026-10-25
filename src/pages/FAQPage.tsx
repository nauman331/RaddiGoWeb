import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { NavLink } from 'react-router-dom'

const faqs = [
    {
        question: 'RaddiGo kya hai?',
        answer: 'RaddiGo ek maloomati website hai jo Lahore ke liye scrap ke per-kg rates aur recycling ki rehnumai shaya karti hai. Yeh website pickup booking nahi leti aur payment nahi karti.',
    },
    {
        question: 'Is site par kon se materials ke rates hain?',
        answer: 'Akhbar Rs. 80/kg, Plastic Rs. 40/kg, Loha Rs. 110/kg, Electronics Rs. 200/kg, Tamba Rs. 1800/kg, aur Cardboard Rs. 30/kg. Tamam rates live rates page par maujood hain.',
    },
    {
        question: 'Kya yeh rates pakki qeemat hain?',
        answer: 'Nahi. Yeh rates indicative hain aur market, material ki halat, aur miqdar ke sath badalte hain. Bechne se pehle buyer se rate, wazan aur material ki type zaroor confirm karein.',
    },
    {
        question: 'Raddi bechne se pehle kya karna chahiye?',
        answer: 'Pehle rate dekhein, phir material ko sort karein — kagaz sookha, plastic alag, loha alag, electronics alag — aur phir ek se zyada buyers se rate compare karke faisla karein.',
    },
    {
        question: 'Kagaz aur cardboard ko kaise sort karein?',
        answer: 'Kagaz aur cardboard ko sookha aur saaf rakhein, dabbe chapte karke dein, aur geele ya khane se gande kagaz ko alag rakhein. Geela kagaz ki qeemat kam hoti hai.',
    },
    {
        question: 'Plastic ko kaise sort karein?',
        answer: 'Plastic ke containers ko dho kar saaf karein, type ke hisab se alag karein jahan mumkin ho, aur caps hata dein. Saaf aur sookhi plastic ki qeemat behtar hoti hai.',
    },
    {
        question: 'Loha aur tamba mein kya farq hai rate ke lihaz se?',
        answer: 'Tamba lohe se bohat zyada qeemti hai — is site par tamba Rs. 1800/kg aur loha Rs. 110/kg shaya hai. Is liye in dono ko kabhi mila kar na dein; alag alag wazan karwayein.',
    },
    {
        question: 'Electronics aur battery ka kya karna chahiye?',
        answer: 'Electronics aur battery ko aam scrap se bilkul alag rakhein. Battery ko na todein, na dabayein, na jalayein, aur device khud kholne ki koshish na karein.',
    },
    {
        question: 'Kya RaddiGo Lahore ke ilawa bhi rates deta hai?',
        answer: 'Is site ke rates Lahore par markooz hain. Islamabad, Rawalpindi aur Karachi ke liye abhi alag city rates shaya nahi hue — coverage page par yeh saaf likha hai.',
    },
    {
        question: 'Do buyers ek hi scrap ke liye mukhtalif rate kyun dete hain?',
        answer: 'Kyunki rate material, uski halat, wazan, miqdar aur us din ki market par munhasir hota hai. Saaf, sookha aur sorted material aam tor par behtar offer lata hai.',
    },
    {
        question: 'Payment kaise hoti hai?',
        answer: 'Payment aap aur buyer ke darmiyan tay hoti hai — yeh website payment nahi karti aur na hi uski zimmedar hai. Bechne se pehle payment ki shartein (kab aur kis tareeqe se) pehle se tay kar lein.',
    },
    {
        question: 'Koi ghalti ya sawal ho to kahan rabta karein?',
        answer: 'Humein email karein: hello@raddigo.pk. Rate ki ghalti, purani booking wali maloomat, ya guide ke mashware ke liye humein likhna behtar hai.',
    },
]

const FAQPage: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            mainEntity: faqs.map((f) => ({
                                '@type': 'Question',
                                name: f.question,
                                acceptedAnswer: { '@type': 'Answer', text: f.answer },
                            })),
                        }),
                    }}
                />
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Aksar pooche jane wale sawalat</h1>
                <p className="mt-4 text-lg text-slate-600">
                    Rates, materials, sorting, Lahore coverage aur payment ke bare mein aam sawalat ke jawab. Yeh website
                    ek maloomati site hai — booking ya pickup ki service nahi deti.
                </p>

                <div className="mt-10 space-y-6">
                    {faqs.map((faq) => (
                        <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-brand-dark">{faq.question}</h2>
                            <p className="mt-2 text-slate-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink
                        to="/live-rates"
                        className="inline-block rounded-full bg-brand-green px-6 py-3 font-semibold text-white shadow transition hover:brightness-95"
                    >
                        Live rates dekhein
                    </NavLink>
                    <NavLink to="/contact" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Contact karein →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default FAQPage
