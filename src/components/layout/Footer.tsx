import React from 'react'
import { NavLink } from 'react-router-dom'
import gpBadge from '../../assets/google-play-badge.svg'
import appBadge from '../../assets/app-store-badge.svg'

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 text-slate-700">
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-brand-green">RG</div>
                            <div>
                                <h3 className="font-heading font-bold text-lg">RaddiGo</h3>
                                <p className="text-sm text-slate-500">Apni raddi asaan tareeqay se bechain, pickup book karain, aur cash hasil karain.</p>
                            </div>
                        </div>
                        <div className="mt-4 text-sm text-slate-500">Contact: hello@raddigo.pk</div>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <h4 className="font-semibold mb-2">Company</h4>
                            <ul className="text-sm text-slate-500 space-y-2">
                                <li><NavLink to="/" className="hover:text-brand-green">Home</NavLink></li>
                                <li><NavLink to="/how-it-works" className="hover:text-brand-green">How it works</NavLink></li>
                                <li><NavLink to="/lahore-pickup" className="hover:text-brand-green">Lahore pickup</NavLink></li>
                                <li><NavLink to="/business-pickup" className="hover:text-brand-green">Business pickup</NavLink></li>
                                <li><NavLink to="/faq" className="hover:text-brand-green">FAQ</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Legal</h4>
                            <ul className="text-sm text-slate-500 space-y-2">
                                <li><NavLink to="/terms" className="hover:text-brand-green">Terms</NavLink></li>
                                <li><NavLink to="/privacy" className="hover:text-brand-green">Privacy</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">App Milay Gi</h4>
                        <p className="text-sm text-slate-500 mb-3">Android aur iOS dono par jald hi launch ho rahi hai — waitlist join karain.</p>
                        <div className="flex items-center gap-3">
                            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                                <img src={gpBadge} alt="Get it on Google Play" className="h-10 object-contain" />
                            </a>
                            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                                <img src={appBadge} alt="Download on the App Store" className="h-10 object-contain" />
                            </a>
                        </div>

                        <form action="#waitlist" className="mt-4 flex gap-2">
                            <input aria-label="Email" type="email" placeholder="aapka@email.com" className="flex-1 px-3 py-2 border rounded-md text-sm" />
                            <button className="bg-brand-dark text-white px-4 py-2 rounded-md text-sm">Join</button>
                        </form>
                    </div>
                </div>

                <div className="text-center text-slate-500 text-sm border-t border-slate-100 pt-6">
                    <p>&copy; 2026 RaddiGo Team (GCS Lahore). Pakistan mein banaya gaya.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer