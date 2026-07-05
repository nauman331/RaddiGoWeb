import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const points = [
  'Har captain ka verified profile aur contact detail hota hai.',
  'Pickup ke waqt aap ko live tracking aur confirmation milta hai.',
  'Payment se pehle digital receipt aur proof diya jata hai.',
  'Aap kisi bhi time support team se contact kar sakte hain.'
]

const Safety: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-brand-green font-semibold uppercase tracking-[0.2em]">Safety</p>
          <h1 className="text-4xl font-heading font-bold text-brand-dark mt-3">Aap ka ghar, aap ki raddi, aur aap ki peace of mind — sab safe.</h1>
          <p className="mt-4 text-lg text-slate-600">RaddiGo ka focus sirf pickup nahi, balkay trust, transparency aur safe transactions par bhi hai.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-brand-dark">Verified aur reliable</h2>
              <p className="mt-3 text-slate-600">{point}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Safety
