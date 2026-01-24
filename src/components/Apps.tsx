import React from 'react'
import gpBadge from '../assets/google-play-badge.svg'
import appBadge from '../assets/app-store-badge.svg'
const Apps: React.FC = () => {
    return (
        <section className="py-12 bg-slate-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-heading font-bold mb-3">Get the App</h2>
                <p className="text-slate-600 mb-6">Our apps will be available on Google Play (Android) and the App Store (iOS). This website is for waitlist sign-ups and app details — join the waitlist to get notified when the apps launch.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                        <img src={gpBadge} alt="Get it on Google Play" className="h-12 object-contain" />
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                        <img src={appBadge} alt="Download on the App Store" className="h-12 object-contain" />
                    </a>
                    <a href="#waitlist" className="inline-flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded-full text-sm font-semibold">Join Waitlist</a>
                </div>
            </div>
        </section>
    )
}

export default Apps