import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const steps = [
  {
    title: '1. Book your pickup',
    text: 'Tell us what kind of scrap you have, the quantity, and your area in Lahore. Our booking flow is simple enough for households, shops, and offices to use in under a minute.'
  },
  {
    title: '2. Get a verified pickup',
    text: 'A trained captain arrives on time, checks the material, and confirms the weight and price before collection. This makes the process transparent and stress-free.'
  },
  {
    title: '3. Receive cash instantly',
    text: 'Once the scrap is weighed and verified, you get paid immediately through cash, JazzCash, or EasyPaisa. There is no waiting around or confusing paperwork.'
  }
]

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-brand-green font-semibold uppercase tracking-[0.2em]">How RaddiGo works</p>
          <h1 className="text-4xl font-heading font-bold text-brand-dark mt-3">The easiest way to sell scrap online in Lahore</h1>
          <p className="mt-4 text-lg text-slate-600">RaddiGo is built for people who want a clean, digital, and reliable scrap collection experience. Instead of calling around or waiting for a random collector, you can schedule a pickup, get a fair price, and receive cash on the spot.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="bg-brand-light rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-brand-dark">{step.title}</h2>
              <p className="mt-3 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl bg-slate-900 p-10 text-white">
            <h2 className="text-2xl font-bold">What can you sell with RaddiGo?</h2>
            <p className="mt-3 text-slate-300">We collect newspapers, old books, cardboard, plastic, iron, copper, and other recyclable materials. This makes RaddiGo suitable for home cleanup, office clearance, and commercial scrap disposal.</p>
            <div className="mt-6">
              <NavLink to="/live-rates" className="inline-block rounded-full bg-brand-green px-5 py-3 font-semibold text-white">See current scrap rates</NavLink>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <h2 className="text-2xl font-bold text-brand-dark">Why this matters</h2>
            <p className="mt-3 text-slate-600">A proper scrap pickup service helps you save time, earn money from unused material, and support recycling in Pakistan. RaddiGo brings that experience online so it feels simple from start to finish.</p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>• Transparent pricing for every scrape item</li>
              <li>• Better value than informal collectors</li>
              <li>• A cleaner and safer pickup process</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HowItWorks
