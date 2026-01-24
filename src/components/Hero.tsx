import React from 'react'
import Heroimg from "../assets/hero.jpeg"

const Hero: React.FC = () => {
    return (
        <React.Fragment>
            <header className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-brand-light">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <div className="inline-block bg-green-100 text-brand-green px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                            🚀 Launching Soon in Lahore
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-brand-dark">
                            Ghar ka Kabar? <br />
                            <span className="text-brand-green">Ab Cash mein Tabdeel!</span>
                        </h1>
                        <p className="text-lg text-slate-600 max-w-lg">
                            The smartest way to sell your Raddi in Pakistan. Book a pickup, get weighed digitally, and get paid instantly via JazzCash or EasyPaisa.
                        </p>

                        <form className="flex flex-col sm:flex-row gap-3 max-w-md">
                            <input type="email" placeholder="Enter your email or WhatsApp" className="flex-1 px-4 bg-white py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none" />
                            <button type="button" className="bg-brand-accent text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-200">
                                Join Waitlist
                            </button>
                        </form>
                        <p className="text-sm text-slate-500">🔒 500+ households already joined the list.</p>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-brand-green/20 rounded-full blur-3xl opacity-30"></div>
                        <img src={Heroimg}
                            alt="RaddiGo App Preview"
                            className="relative rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition duration-500" />
                    </div>
                </div>
            </header>

            <div className="bg-brand-dark py-3 overflow-hidden whitespace-nowrap">
                <div className="inline-block animate-marquee text-white text-sm font-mono tracking-wider">
                    🚨 TODAY'S RATES: Newspaper <span className="text-green-400">Rs. 80/kg</span> • Plastic <span className="text-green-400">Rs. 40/kg</span> • Iron <span className="text-green-400">Rs. 110/kg</span> • Electronics <span className="text-green-400">Rs. 200/kg</span> • Copper <span className="text-green-400">Rs. 1800/kg</span> •
                    Newspaper <span className="text-green-400">Rs. 80/kg</span> • Plastic <span className="text-green-400">Rs. 40/kg</span> • Iron <span className="text-green-400">Rs. 110/kg</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Hero