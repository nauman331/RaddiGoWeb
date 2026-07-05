import React from 'react'
import Heroimg from "../assets/hero.jpeg"

const Hero: React.FC = () => {
    return (
        <React.Fragment>
            <header className="relative overflow-hidden bg-[linear-gradient(135deg,#f3f8f5_0%,#ffffff_100%)] pt-12 pb-20 lg:pt-20 lg:pb-28">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,168,89,0.12),transparent_40%)]"></div>
                <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-green shadow-sm">
                            <span>●</span> Launching soon in Lahore
                        </div>
                        <h1 className="text-4xl font-heading font-bold leading-tight text-brand-dark lg:text-6xl">
                            Book scrap pickup in minutes <br />
                            <span className="text-brand-green">and get paid instantly.</span>
                        </h1>
                        <p className="max-w-2xl text-lg text-slate-600">
                            RaddiGo brings the convenience of modern on-demand services to scrap collection in Pakistan. Book pickup, get transparent pricing, and receive instant payment for newspapers, plastic, metal, and electronics.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm"><span className="text-brand-green">✓</span> Doorstep pickup</span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm"><span className="text-brand-green">✓</span> Verified captains</span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm"><span className="text-brand-green">✓</span> Instant cash</span>
                        </div>

                        <form id="waitlist" className="flex max-w-xl flex-col gap-3 sm:flex-row">
                            <input type="email" placeholder="Enter your email or WhatsApp" className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green" />
                            <button type="button" className="rounded-lg bg-brand-accent px-6 py-3 font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600">
                                Join early access
                            </button>
                        </form>
                        <p className="text-sm text-slate-500">Over 500 homes and businesses have already joined the waitlist.</p>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-full bg-brand-green/20 blur-3xl opacity-30"></div>
                        <div className="absolute inset-0 rounded-[2rem] border border-brand-green/20"></div>
                        <img src={Heroimg}
                            alt="RaddiGo scrap pickup service in Lahore"
                            className="relative rounded-[2rem] border-4 border-white shadow-2xl" />
                    </div>
                </div>
            </header>

            <div className="overflow-hidden whitespace-nowrap bg-brand-dark py-3">
                <div className="inline-block animate-marquee text-sm font-mono tracking-wider text-white">
                    🚨 Latest scrap rates: Newspaper <span className="text-green-400">Rs. 80/kg</span> • Plastic <span className="text-green-400">Rs. 40/kg</span> • Iron <span className="text-green-400">Rs. 110/kg</span> • Electronics <span className="text-green-400">Rs. 200/kg</span> • Copper <span className="text-green-400">Rs. 1800/kg</span> •
                    Newspaper <span className="text-green-400">Rs. 80/kg</span> • Plastic <span className="text-green-400">Rs. 40/kg</span> • Iron <span className="text-green-400">Rs. 110/kg</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero