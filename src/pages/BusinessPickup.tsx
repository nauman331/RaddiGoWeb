import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const BusinessPickup: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand-green">Business scrap pickup</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-brand-dark">Shops, warehouses aur offices ke liye reliable scrap collection service</h1>
          <p className="mt-4 text-lg text-slate-600">Agar aap business mein scrap, cardboard, metal ya electronic waste manage karte hain, toh RaddiGo aap ko scheduled pickup aur transparent payout ka solution de sakta hai.</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-brand-dark">Business ke liye kya fayda hai?</h2>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>• Regular scrap pickup schedule</li>
              <li>• Cleaner workspace aur less clutter</li>
              <li>• Better value for recyclable material</li>
              <li>• Simple record for waste disposal</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-brand-light p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-dark">Hum kis tarah kaam karte hain</h2>
            <p className="mt-3 text-slate-600">Aap booking karte hain, hum pickup slot confirm karte hain, aur material ka weight aur rate clear karke collection karte hain.</p>
            <div className="mt-6">
              <NavLink to="/get-started" className="inline-block rounded-full bg-brand-green px-5 py-3 font-semibold text-white">Become a partner</NavLink>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default BusinessPickup
