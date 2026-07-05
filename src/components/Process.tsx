import React from 'react'
import phonemap from "../assets/phonemap.jpeg"
import digitalscale from "../assets/digitalscale.jpeg"
import instantcash from "../assets/instantcash.jpeg"

const Process: React.FC = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold text-brand-dark">Purana tareeqa vs. <span className="text-brand-green">RaddiGo ka tareeqa</span></h2>
                    <p className="text-slate-600 mt-2">Ab Sunday subah ke liye pheri wala intezar nahi karna parta.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:border-brand-green transition group">
                        <div className="h-40 bg-slate-100 rounded-lg mb-4 overflow-hidden">
                            <img alt="3D phone map" src={phonemap} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">Photo bhejain, time choose karain</h3>
                        <p className="text-slate-600">Apni raddi ka photo bhejain aur pickup ka waqt choose karain. Ab poora din intezar nahi karna.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:border-brand-green transition group">
                        <div className="h-40 bg-slate-100 rounded-lg mb-4 overflow-hidden">
                            <img alt="digital scale" src={digitalscale} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">Digital weighing</h3>
                        <p className="text-slate-600">Hamare captain digital scale se wazan karte hain. Sahi weight, sahi rate. <span className="italic text-red-500">No dandi!</span></p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:border-brand-green transition group">
                        <div className="h-40 bg-slate-100 rounded-lg mb-4 overflow-hidden">
                            <img alt="payment" src={instantcash} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-2">Faura cash</h3>
                        <p className="text-slate-600">Driver ke jaane se pehle hi cash, JazzCash ya EasyPaisa par payment.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process