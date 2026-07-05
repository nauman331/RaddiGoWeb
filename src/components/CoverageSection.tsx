import React from 'react'

const cities = [
  { name: 'Lahore', note: 'Main launch city' },
  { name: 'Islamabad', note: 'Coming soon' },
  { name: 'Rawalpindi', note: 'Coming soon' },
  { name: 'Karachi', note: 'Coming soon' },
]

const CoverageSection: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-brand-green font-semibold uppercase tracking-[0.2em] text-sm">City coverage</p>
          <h2 className="text-3xl font-heading font-bold text-brand-dark mt-3">Expanding from Lahore to more cities across Pakistan</h2>
          <p className="text-slate-600 mt-4 text-lg">We are starting strong in Lahore and preparing to bring the same fast pickup experience to more urban neighborhoods soon.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <div key={city.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-brand-dark">{city.name}</h3>
              <p className="text-slate-600 mt-2">{city.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoverageSection
