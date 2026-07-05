import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-heading font-bold text-brand-dark">Terms of Service</h1>
        <p className="mt-4 text-slate-600">RaddiGo ka use karte waqt aap in sharaait ko maan lete hain. Hum har service ko transparent aur fair rakhnay ki koshish karte hain.</p>
        <div className="mt-8 space-y-4 text-slate-600">
          <p>1. Aap ki information ko sirf service delivery aur support ke liye use kiya jaye ga.</p>
          <p>2. Pickup booking aur payments ke liye aap ki verified details zaroori ho sakti hain.</p>
          <p>3. Har transaction ke baad aap ko receipt aur confirmation available hoga.</p>
          <p>4. Agar koi misuse ya fraud activity hoti hai to account suspend kiya ja sakta hai.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Terms
