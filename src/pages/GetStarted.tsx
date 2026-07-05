import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const GetStarted: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-brand-green font-semibold uppercase tracking-[0.2em]">Shuru Karain</p>
            <h1 className="text-4xl font-heading font-bold text-brand-dark mt-3">Driver ban kar apna business shuru karain.</h1>
            <p className="mt-4 text-lg text-slate-600">Agar aap scrap pickup ka kaam karna chahte hain to hum aap ko onboarding, route planning aur payments ke liye support dete hain.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <NavLink to="/" className="rounded-full bg-brand-green px-5 py-3 font-semibold text-white">Abhi apply karain</NavLink>
              <NavLink to="/safety" className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700">Safety dekhain</NavLink>
            </div>
          </div>

          <div className="rounded-3xl bg-brand-light p-8 shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-brand-dark">Partner ke faide</h2>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>• Daily pickup requests aur stable demand</li>
              <li>• Digital payments aur transparent settlement</li>
              <li>• Training aur support team</li>
              <li>• Lahore aur aas-paas ke ilaqon mein expansion</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default GetStarted
