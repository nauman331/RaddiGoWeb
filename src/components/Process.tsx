import React from 'react'
import phonemap from "../assets/phonemap.jpeg"
import digitalscale from "../assets/digitalscale.jpeg"
import instantcash from "../assets/instantcash.jpeg"

const Process: React.FC = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold text-brand-dark">Purana Tareeka vs. <span className="text-brand-green">RaddiGo Way</span></h2>
                    <p className="text-slate-600 mt-2">Stop waiting for the 'Pheri-wala' to shout on Sunday morning.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:border-brand-green transition group">
                        <div className="h-40 bg-slate-100 rounded-lg mb-4 overflow-hidden">
                            <img alt="3D phone map" src={phonemap} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">Snap & Schedule</h3>
                        <p className="text-slate-600">Take a photo of your scrap and pick a time. No more waiting all day.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:border-brand-green transition group">
                        <div className="h-40 bg-slate-100 rounded-lg mb-4 overflow-hidden">
                            <img alt="digital scale" src={digitalscale} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">Digital Weighing</h3>
                        <p className="text-slate-600">Our captains use digital scales. Exact weight, exact calculation. <span className="italic text-red-500">No Dandi!</span></p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:border-brand-green transition group">
                        <div className="h-40 bg-slate-100 rounded-lg mb-4 overflow-hidden">
                            <img alt="payment" src={instantcash} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">Instant Cash</h3>
                        <p className="text-slate-600">Get paid immediately via Cash, JazzCash, or EasyPaisa before the driver leaves.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process