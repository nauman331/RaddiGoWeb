import React from 'react'

const features = [
  'Book a pickup in under a minute',
  'Track your captain in real time',
  'See a clear rate before collection',
  'Get instant payment confirmation',
]

const AppExperience: React.FC = () => {
  return (
    <section className="bg-brand-light py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-brand-green font-semibold uppercase tracking-[0.2em] text-sm">App experience</p>
          <h2 className="text-3xl font-heading font-bold text-brand-dark mt-3">A simple mobile experience for faster pickups</h2>
          <p className="text-slate-600 mt-4 text-lg">Our app experience is designed to feel familiar and effortless, with quick booking, instant updates, and effortless payment history.</p>
          <ul className="mt-8 space-y-3 text-slate-700">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-green"></span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl">
            <div className="rounded-[1.5rem] bg-slate-900 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">RaddiGo</p>
                  <h3 className="font-semibold">Pickup request</h3>
                </div>
                <div className="rounded-full bg-brand-green px-3 py-1 text-sm font-semibold">Live</div>
              </div>
              <div className="mt-6 space-y-3">
                <div className="rounded-xl bg-slate-800 p-3">
                  <p className="text-sm text-slate-400">Pickup location</p>
                  <p className="font-semibold">Lahore, Gulberg</p>
                </div>
                <div className="rounded-xl bg-slate-800 p-3">
                  <p className="text-sm text-slate-400">Material</p>
                  <p className="font-semibold">Newspaper + plastic</p>
                </div>
                <div className="rounded-xl bg-slate-800 p-3">
                  <p className="text-sm text-slate-400">Estimated payout</p>
                  <p className="font-semibold">Rs. 1,450</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppExperience
