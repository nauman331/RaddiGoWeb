import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const LahorePickup: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand-green">Lahore mein scrap pickup</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-brand-dark">Lahore mein ghar, office aur shop ka scrap pickup ab bohat asaan hai</h1>
          <p className="mt-4 text-lg text-slate-600">Agar aap Lahore mein scrap sell karna chahte hain, toh RaddiGo aap ke liye aasan booking, transparent price aur fast pickup ka solution la raha hai.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-brand-light p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-dark">Fast pickup</h2>
            <p className="mt-3 text-slate-600">Booking ke baad hum apki location ke hisaab se pickup schedule karte hain.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-brand-light p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-dark">Fair pricing</h2>
            <p className="mt-3 text-slate-600">Material ki quality aur weight ke mutabiq clear pricing di jati hai.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-brand-light p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-dark">Instant payout</h2>
            <p className="mt-3 text-slate-600">Pickup ke baad cash ya digital payment ke zariye payment ka option available hai.</p>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-brand-dark p-8 text-white">
          <h2 className="text-2xl font-bold">Lahore ke liye best scrap pickup service kyun?</h2>
          <p className="mt-3 max-w-3xl text-slate-300">Humare paas local understanding, transparent process aur digital booking experience hota hai jis se aap ko har bar clear experience milta hai.</p>
          <div className="mt-6">
            <NavLink to="/live-rates" className="inline-block rounded-full bg-brand-green px-5 py-3 font-semibold text-white">Check live scrap rates</NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default LahorePickup
