import React from 'react'
import phonemap from "../assets/phonemap.jpeg"
import digitalscale from "../assets/digitalscale.jpeg"
import instantcash from "../assets/instantcash.jpeg"

const Process: React.FC = () => {
    return (
        <section className="bg-white px-6 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-green">How it works</p>
                    <h2 className="mt-3 text-3xl font-heading font-bold text-brand-dark">A cleaner way to sell scrap in Lahore</h2>
                    <p className="mt-3 text-lg text-slate-600">From homes and offices to shops and warehouses, RaddiGo is designed to make scrap collection feel as simple as booking a ride.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="group rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-[0_10px_40px_rgba(11,61,46,0.08)] transition hover:-translate-y-1 hover:border-brand-green">
                        <div className="mb-4 h-40 overflow-hidden rounded-xl bg-slate-100">
                            <img alt="Book scrap pickup in Lahore" src={phonemap} className="h-full w-full object-cover opacity-80 transition group-hover:scale-105" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-brand-dark">Book in minutes</h3>
                        <p className="text-slate-600">Choose your area, pick a time, and send your pickup request. It is built for busy customers who want convenience without compromise.</p>
                    </div>

                    <div className="group rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-[0_10px_40px_rgba(11,61,46,0.08)] transition hover:-translate-y-1 hover:border-brand-green">
                        <div className="mb-4 h-40 overflow-hidden rounded-xl bg-slate-100">
                            <img alt="Digital weighing for scrap collection" src={digitalscale} className="h-full w-full object-cover opacity-80 transition group-hover:scale-105" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-brand-dark">Weigh with accuracy</h3>
                        <p className="text-slate-600">Our captains use digital scales and transparent checks so you know exactly how your material is valued at pickup time.</p>
                    </div>

                    <div className="group rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-[0_10px_40px_rgba(11,61,46,0.08)] transition hover:-translate-y-1 hover:border-brand-green">
                        <div className="mb-4 h-40 overflow-hidden rounded-xl bg-slate-100">
                            <img alt="Instant cash payout for scrap" src={instantcash} className="h-full w-full object-cover opacity-80 transition group-hover:scale-105" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-brand-dark">Get paid instantly</h3>
                        <p className="text-slate-600">Once the pickup is complete, you receive payment right away through cash, JazzCash, or EasyPaisa for a smooth finish.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process