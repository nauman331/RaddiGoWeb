import React from 'react'
import { NavLink } from 'react-router-dom'

// Mirrors the nav's link groups 1:1 so every route linked in the header
// is also linked in the footer — redundant internal linking is good for
// crawl coverage and gives users a second way to find a page.
const footerColumns = [
    {
        heading: 'Services',
        links: [
            { label: 'How it works', to: '/how-it-works' },
            { label: 'Live rates', to: '/live-rates' },
            { label: 'Lahore rates', to: '/lahore-pickup' },
            { label: 'Business rates', to: '/business-pickup' },
            { label: 'Sell scrap', to: '/sell-scrap' },
            { label: 'Pricing', to: '/pricing' },
        ],
    },
    {
        heading: 'Learn',
        links: [
            { label: 'Safety', to: '/safety' },
            { label: 'FAQ', to: '/faq' },
            { label: 'About', to: '/about' },
            { label: 'Coverage', to: '/coverage' },
            { label: 'Recycling guide', to: '/recycling-guide' },
            { label: 'How scrap rates work', to: '/how-scrap-rates-work' },
            { label: 'Sort scrap at home', to: '/sort-scrap-at-home' },
            { label: 'Materials explained', to: '/materials-recycling-explained' },
        ],
    },
    {
        heading: 'Company',
        links: [
            { label: 'Contact', to: '/contact' },
            { label: 'Get started', to: '/get-started' },
            { label: 'Terms', to: '/terms' },
            { label: 'Privacy', to: '/privacy' },
            { label: 'Cookie Policy', to: '/cookie-policy' },
        ],
    },
]

const socialLinks = [
    {
        label: 'Facebook',
        href: 'https://facebook.com/raddigo',
        icon: (
            <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.5c0-.87.24-1.46 1.5-1.46H16.5V4.34C16.19 4.3 15.13 4.2 13.9 4.2c-2.5 0-4.2 1.53-4.2 4.34V10.5H7v3h2.7V21h3.8z" />
        ),
    },
    {
        label: 'Instagram',
        href: 'https://instagram.com/raddigo',
        icon: (
            <>
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="3.7" />
                <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
            </>
        ),
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/company/raddigo',
        icon: (
            <>
                <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
                <path d="M7.7 10v6.3M7.7 7.7v.01M11 16.3V12.6c0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1v3.7" strokeLinecap="round" />
            </>
        ),
    },
]

const Footer: React.FC = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-slate-100 bg-white pb-8" role="contentinfo">
            {/* Helps search engines understand this is an org/brand entity */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Organization',
                        name: 'RaddiGo',
                        url: 'https://www.raddigo.tech',
                        email: 'hello@raddigo.pk',
                        sameAs: socialLinks.map((s) => s.href),
                    }),
                }}
            />

            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-12 text-slate-700 sm:grid-cols-3 lg:grid-cols-5">
                    {/* Brand + contact — spans full width on mobile, 2 cols on desktop */}
                    <div className="col-span-2 sm:col-span-3 lg:col-span-2">
                        <NavLink to="/" className="flex items-center gap-3">
                            <div>
                                <h3 className="font-heading text-lg font-bold text-brand-dark">RaddiGo</h3>
                                <p className="max-w-xs text-sm text-slate-500">
                                    Lahore scrap rates, sorting guides, aur recycling maloomat — asaan aur saaf tareeqay se.
                                </p>
                            </div>
                        </NavLink>

                        <a href="mailto:hello@raddigo.pk" className="mt-4 inline-block text-sm text-slate-500 hover:text-brand-green">
                            hello@raddigo.pk
                        </a>

                        <div className="mt-5 flex items-center gap-2">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-brand-green hover:text-brand-green"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-4 w-4">
                                        {s.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {footerColumns.map((col) => (
                        <nav key={col.heading} aria-label={col.heading}>
                            <h4 className="mb-3 text-sm font-semibold text-brand-dark">{col.heading}</h4>
                            <ul className="space-y-2.5">
                                {col.links.map((link) => (
                                    <li key={link.to}>
                                        <NavLink to={link.to} className="text-sm text-slate-500 transition hover:text-brand-green">
                                            {link.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}

                    {/* Rates + guides — this site does not offer booking or an app */}
                    <div className="col-span-2 sm:col-span-3 lg:col-span-5 lg:border-t lg:border-slate-100 lg:pt-8">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                            <div>
                                <h4 className="mb-2 text-sm font-semibold text-brand-dark">Start with the rates</h4>
                                <p className="mb-3 max-w-sm text-sm text-slate-500">
                                    Check the per-kg rate, sort your scrap, and compare offers before you sell.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <NavLink
                                        to="/live-rates"
                                        className="inline-block rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white"
                                    >
                                        View live rates
                                    </NavLink>
                                    <NavLink
                                        to="/recycling-guide"
                                        className="inline-block rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-brand-dark"
                                    >
                                        Recycling guide
                                    </NavLink>
                                </div>
                            </div>
                            <div className="max-w-sm text-sm text-slate-500">
                                <p>
                                    Questions about a rate or a guide? Email{' '}
                                    <a href="mailto:hello@raddigo.pk" className="font-semibold text-brand-dark hover:text-brand-green">
                                        hello@raddigo.pk
                                    </a>
                                    . This site does not take bookings or payments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row sm:justify-between">
                    <p>&copy; {year} RaddiGo Team (GCS Lahore). Pakistan mein banaya gaya.</p>
                    <div className="flex items-center gap-4">
                        <NavLink to="/terms" className="hover:text-brand-green">Terms</NavLink>
                        <NavLink to="/privacy" className="hover:text-brand-green">Privacy</NavLink>
                        <NavLink to="/contact" className="hover:text-brand-green">Contact</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer