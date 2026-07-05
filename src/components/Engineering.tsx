import React from 'react'
import map from '../assets/map.jpeg'

const Engineering: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-slate-900 px-6 py-20 text-white" aria-labelledby="engineering-heading">
            <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(#00A859 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                aria-hidden="true"
            />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                    <p className="mb-2 font-bold uppercase tracking-[0.2em] text-brand-green">Why RaddiGo feels different</p>
                    <h2 id="engineering-heading" className="mb-6 text-3xl font-heading font-bold lg:text-4xl">
                        Built for real users who want speed, trust, and fair value
                    </h2>
                    <p className="mb-6 text-lg text-slate-400">
                        We are creating a modern scrap pickup platform that feels as dependable as your everyday delivery app.
                        Customers can book, track, and get paid without the confusion of old-school collection methods.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
                            <h3 className="font-semibold text-white">Transparent pricing</h3>
                            <p className="mt-1 text-sm text-slate-400">Fair rates with clear weight and payment details.</p>
                        </div>
                        <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5">
                            <h3 className="font-semibold text-white">Reliable operations</h3>
                            <p className="mt-1 text-sm text-slate-400">Scheduled pickups and verified support for smooth service.</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-[1.75rem] border border-slate-700 bg-slate-800 p-4 shadow-2xl">
                    <img
                        alt="RaddiGo scrap pickup service map"
                        src={map}
                        loading="lazy"
                        decoding="async"
                        className="w-full rounded-[1.25rem] object-cover opacity-80"
                    />
                </div>
            </div>
        </section>
    )
}

export default Engineering