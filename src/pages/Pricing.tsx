import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand-green">Pricing</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-brand-dark">Transparent scrap pickup pricing for homes, shops, and businesses</h1>
          <p className="mt-4 text-lg text-slate-600">RaddiGo makes it easy to understand what you can expect before pickup. Rates depend on material type, quantity, and local market conditions, but the process remains simple and clear.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-brand-light p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-dark">Home pickups</h2>
            <p className="mt-3 text-slate-600">Great for household scrap, old books, newspapers, cardboard, and small metal items.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-brand-light p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-dark">Shop pickups</h2>
            <p className="mt-3 text-slate-600">Ideal for retail stores and small businesses that want regular collection support.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-brand-light p-8 shadow-sm">
            <h2 className="text-xl font-bold text-brand-dark">Bulk business pickups</h2>
            <p className="mt-3 text-slate-600">For warehouses and office spaces that need planned disposal and pickup solutions.</p>
          </div>
        </div>

        <div className="mt-14 rounded-3xl bg-brand-dark p-8 text-white">
          <h2 className="text-2xl font-bold">Why customers choose RaddiGo</h2>
          <p className="mt-3 max-w-3xl text-slate-300">You get visibility on the process, a fair quote, and a dependable pickup experience instead of vague verbal pricing from local collectors.</p>
          <div className="mt-6">
            <NavLink to="/live-rates" className="inline-block rounded-full bg-brand-green px-5 py-3 font-semibold text-white">See live rates</NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Pricing
