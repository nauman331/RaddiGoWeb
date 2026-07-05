import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const points = [
  'Every captain is verified before joining the service, and customers can trust the identity and contact details provided.',
  'Each pickup is confirmed in advance so there is no confusion about timing, location, or material type.',
  'Digital weighing and a receipt-based payment process make transactions clear and accountable.',
  'Our support team is available for questions, issues, or special pickup requirements at any stage.'
]

const Safety: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-brand-green font-semibold uppercase tracking-[0.2em]">Safety and trust</p>
          <h1 className="text-4xl font-heading font-bold text-brand-dark mt-3">A safe, reliable scrap pickup experience for homes and businesses</h1>
          <p className="mt-4 text-lg text-slate-600">RaddiGo is designed to bring trust back into scrap collection. From verification to payment, every part of the process is built to feel safer, clearer, and easier than traditional collection methods.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {points.map((point) => (
            <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-xl font-bold text-brand-dark">Verified and reliable</h2>
              <p className="mt-3 text-slate-600">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-brand-dark p-8 text-white">
          <h2 className="text-2xl font-bold">What makes RaddiGo different</h2>
          <p className="mt-3 text-slate-300 max-w-3xl">We focus on transparency, verified pickups, and accountable payments. This gives customers confidence that their scrap is being handled professionally and that the value they receive is fair.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Safety
