import React from 'react'

const features = [
    'Book a pickup in under a minute',
    'Track your captain in real time',
    'See a clear rate before collection',
    'Get instant payment confirmation',
]

const AppExperience: React.FC = () => {
    return (
        <section className="bg-brand-light px-6 py-20" aria-labelledby="app-experience-heading">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">App experience</p>
                    <h2 id="app-experience-heading" className="mt-3 text-3xl font-heading font-bold text-brand-dark">
                        A simple mobile experience for faster pickups
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Our app experience is designed to feel familiar and effortless, with quick booking, instant updates, and
                        effortless payment history.
                    </p>
                    <ul className="mt-8 space-y-3 text-slate-700">
                        {features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-green" aria-hidden="true" />
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
                                <span className="rounded-full bg-brand-green px-3 py-1 text-sm font-semibold">Live</span>
                            </div>
                            <dl className="mt-6 space-y-3">
                                <div className="rounded-xl bg-slate-800 p-3">
                                    <dt className="text-sm text-slate-400">Pickup location</dt>
                                    <dd className="font-semibold">Lahore, Gulberg</dd>
                                </div>
                                <div className="rounded-xl bg-slate-800 p-3">
                                    <dt className="text-sm text-slate-400">Material</dt>
                                    <dd className="font-semibold">Newspaper + plastic</dd>
                                </div>
                                <div className="rounded-xl bg-slate-800 p-3">
                                    <dt className="text-sm text-slate-400">Estimated payout</dt>
                                    <dd className="font-semibold">Rs. 1,450</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppExperience