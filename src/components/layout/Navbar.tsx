import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo2 from '../../assets/logo2.jpeg'
import gpBadge from '../../assets/google-play-badge.svg'
import appBadge from '../../assets/app-store-badge.svg'

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="relative flex items-center justify-between px-6 py-4 mx-auto bg-white z-20">
            <NavLink to="/" className="flex items-center gap-2">
                <img src={logo2} alt="RaddiGo Logo" className="w-12 h-12 rounded-full object-cover" />
                <span className="text-2xl font-heading font-bold text-brand-dark tracking-tight">RaddiGo</span>
            </NavLink>
            <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-600">
                <NavLink to="/how-it-works" className="hover:text-brand-green">Kaise Kaam Karta Hai</NavLink>
                <NavLink to="/live-rates" className="hover:text-brand-green">Aaj Ki Rates</NavLink>
                <NavLink to="/safety" className="hover:text-brand-green">Safety</NavLink>
            </div>
            <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2">
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="px-1 py-0">
                        <img src={gpBadge} alt="Get it on Google Play" className="h-7 object-contain" />
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="px-1 py-0">
                        <img src={appBadge} alt="Download on the App Store" className="h-7 object-contain" />
                    </a>
                </div>
                <NavLink to="/get-started" className="hidden md:inline-block bg-brand-dark text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition">
                    Driver Banain
                </NavLink>

                <button
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:bg-slate-100"
                >
                    {open ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {open && (
                <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-md border-t border-slate-100 z-50 w-full">
                    <div className="px-4 py-4 flex flex-col gap-3">
                        <NavLink to="/how-it-works" onClick={() => setOpen(false)} className="py-2">Kaise Kaam Karta Hai</NavLink>
                        <NavLink to="/live-rates" onClick={() => setOpen(false)} className="py-2">Aaj Ki Rates</NavLink>
                        <NavLink to="/safety" onClick={() => setOpen(false)} className="py-2">Safety</NavLink>
                        <NavLink to="/get-started" onClick={() => setOpen(false)} className="bg-brand-dark text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition mt-2 text-center">Driver Banain</NavLink>
                        <div className="flex gap-3 items-center pt-2">
                            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                <img src={gpBadge} alt="Get it on Google Play" className="h-9 object-contain" />
                            </a>
                            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                <img src={appBadge} alt="Download on the App Store" className="h-9 object-contain" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar