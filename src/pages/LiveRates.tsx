import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const rates = [
  { item: 'NewsPaper', rate: 'Rs. 80/kg' },
  { item: 'Plastic', rate: 'Rs. 40/kg' },
  { item: 'Iron', rate: 'Rs. 110/kg' },
  { item: 'Electronics', rate: 'Rs. 200/kg' },
  { item: 'Copper', rate: 'Rs. 1800/kg' },
  { item: 'Cardboard', rate: 'Rs. 30/kg' }
]

const LiveRates: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-brand-green font-semibold uppercase tracking-[0.2em]">Aaj Ki Rates</p>
          <h1 className="text-4xl font-heading font-bold text-brand-dark mt-3">Transparent rates, bina kisi hidden charges ke.</h1>
          <p className="mt-4 text-lg text-slate-600">Har ilaqay aur har material ke liye rate update hota rehta hai. Aap apni raddi ka real value janta hai.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rates.map((item) => (
            <div key={item.item} className="rounded-2xl border border-slate-200 bg-brand-light p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">Live</p>
              <h2 className="mt-2 text-2xl font-bold text-brand-dark">{item.item}</h2>
              <p className="mt-4 text-xl font-semibold text-slate-700">{item.rate}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-brand-dark p-8 text-white">
          <h2 className="text-2xl font-bold">Rate ka matlab?</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">Hum aap ko sirf market ke current rate nahi dete, balkay aap ki raddi ka sahi value bhi samjha kar transparent pricing provide karte hain.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LiveRates
