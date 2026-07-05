import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const steps = [
  {
    title: '1. Photo bhejain',
    text: 'Apni raddi ka photo bhej kar simple tareeqay se pickup request karain.'
  },
  {
    title: '2. Time choose karain',
    text: 'Aap ka waqt aur ilaqa select karain, aur driver ko apni availability ka pata chal jaye ga.'
  },
  {
    title: '3. Wazan aur payment',
    text: 'Captain digital scale se wazan kare ga aur fauran cash ya wallet mein payment mil jaye ga.'
  }
]

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-brand-green font-semibold uppercase tracking-[0.2em]">Kaise Kaam Karta Hai</p>
          <h1 className="text-4xl font-heading font-bold text-brand-dark mt-3">Sirf 3 asaan qadam, aur apni raddi ka kaam khatam.</h1>
          <p className="mt-4 text-lg text-slate-600">RaddiGo ke zariye aap ghar baithe apni scrap ko bech sakte hain — bina hassle, bina jhagde.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="bg-brand-light rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-brand-dark">{step.title}</h2>
              <p className="mt-3 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-slate-900 p-10 text-white">
          <h2 className="text-2xl font-bold">Aap kya bech sakte hain?</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">Newspaper, cardboard, plastic, iron, copper, electronics aur bohat si aur categories. Har item ka rate transparent aur real-time diya jata hai.</p>
          <div className="mt-6">
            <NavLink to="/live-rates" className="inline-block rounded-full bg-brand-green px-5 py-3 font-semibold text-white">Aaj ki rates dekhain</NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HowItWorks
