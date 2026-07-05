import React from 'react'
import map from "../assets/map.jpeg"

const Engineering: React.FC = () => {
    return (
        <section className="bg-slate-900 py-20 px-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#00A859 1px, transparent 1px)", backgroundSize: "30px 30px" }}></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                    <div className="text-brand-green font-bold tracking-wide uppercase mb-2">Final Year Project</div>
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">Tez, scalable aur Pakistan ke liye banaya gaya</h2>
                    <p className="text-slate-400 mb-6 text-lg">
                        RaddiGo sirf website nahi, balkay aik smart microservices system hai jo real-time pickup aur tracking ko asaan banata hai.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-slate-800 rounded border border-slate-700 text-sm">Bun Runtime</span>
                        <span className="px-3 py-1 bg-slate-800 rounded border border-slate-700 text-sm">Redis Pub/Sub</span>
                        <span className="px-3 py-1 bg-slate-800 rounded border border-slate-700 text-sm">WebSockets</span>
                        <span className="px-3 py-1 bg-slate-800 rounded border border-slate-700 text-sm">Docker</span>
                    </div>
                </div>
                <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 shadow-2xl">
                    <img alt='tech' src={map}
                        className="rounded w-full object-cover opacity-80" />
                </div>
            </div>
        </section>
    )
}

export default Engineering