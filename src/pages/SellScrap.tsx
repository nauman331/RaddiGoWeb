import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const SellScrap: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand-green">Sell scrap online</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-brand-dark">Apna scrap online bechein aur apna time bachaein</h1>
          <p className="mt-4 text-lg text-slate-600">RaddiGo ke saath aap scrap ko ghar baithe sell kar sakte hain. Bas booking karain, pickup ka intezam karain aur apna payment lein.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-brand-dark p-8 text-white">
            <h2 className="text-2xl font-bold">Aap kya bech sakte hain?</h2>
            <p className="mt-3 text-slate-300">Paper, plastic, iron, copper aur electronics waste ko aap apni location ke liye pickup ke through sell kar sakte hain.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-brand-dark">Kyun choose karain RaddiGo?</h2>
            <p className="mt-3 text-slate-600">Hum apni service ko simple, transparent aur trustworthy banane par kaam kar rahe hain taake aap ko har baar clear rate aur smooth process mile.</p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-brand-light p-8 text-center">
          <h2 className="text-2xl font-bold text-brand-dark">Aaj hi apni booking shuru karain</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <NavLink to="/" className="rounded-full bg-brand-green px-5 py-3 font-semibold text-white">Join waitlist</NavLink>
            <NavLink to="/live-rates" className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700">View rates</NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default SellScrap
