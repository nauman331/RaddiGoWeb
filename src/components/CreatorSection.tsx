import React from 'react'

const opportunities = [
  'Creators and local influencers can share RaddiGo with their communities',
  'Students and startup founders can join the early partner network',
  'Local businesses can become pickup partners and referral champions',
]

const CreatorSection: React.FC = () => {
  return (
    <section className="bg-slate-900 py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <div>
          <p className="text-brand-green font-semibold uppercase tracking-[0.2em] text-sm">For creators and partners</p>
          <h2 className="text-3xl font-heading font-bold mt-3">Built for creators, communities, and local champions</h2>
          <p className="text-slate-400 mt-4 text-lg">We want to work with people who care about sustainability, local impact, and building a better way to recycle in Pakistan.</p>
        </div>
        <div className="grid gap-4">
          {opportunities.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
              <p className="text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CreatorSection
