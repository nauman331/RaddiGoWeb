import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { NavLink } from 'react-router-dom'

const CookiePolicy: React.FC = () => {
    return (
        <div className="bg-white font-sans text-slate-800 antialiased">
            <Navbar />
            <main className="mx-auto max-w-4xl px-6 py-16">
                <h1 className="text-3xl font-heading font-bold text-brand-dark">Cookie Policy</h1>
                <p className="mt-4 text-slate-600">
                    This policy explains what cookies are, which cookies this site uses, and how you can control them.
                    It should be read together with our Privacy Policy.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">What cookies are</h2>
                <p className="mt-3 text-slate-600">
                    Cookies are small text files that a website stores on your device when you visit it. They help the
                    site remember basic information, such as your preferences, and help site owners understand how
                    visitors use the site. Cookies do not, by themselves, identify you by name.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Cookies this site uses</h2>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-slate-600">
                    <li>
                        <strong>Strictly necessary cookies:</strong> these keep the site working — for example,
                        remembering basic settings as you move between pages. Without them, parts of the site may not
                        work properly.
                    </li>
                    <li>
                        <strong>Analytics cookies:</strong> this site uses Google Analytics, which sets cookies to
                        measure how visitors use the site — which pages are viewed, for how long, and from which device
                        or region. This helps us improve the rates and guides. The data is used in aggregate, not to
                        identify individual visitors.
                    </li>
                    <li>
                        <strong>Advertising cookies:</strong> if advertising is shown on this site, Google and its
                        partners may set cookies — including the DoubleClick cookie — to show ads based on your visits
                        to this site and other sites on the internet. These cookies help show ads that are more
                        relevant, and help advertisers measure how their ads perform.
                    </li>
                </ul>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Third-party cookies</h2>
                <p className="mt-3 text-slate-600">
                    Some cookies on this site are set by third parties, such as Google for analytics and advertising.
                    Those third parties have their own cookie and privacy policies, which you can find on their
                    websites. This site does not control third-party cookies directly.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">How to control cookies</h2>
                <p className="mt-3 text-slate-600">
                    You can control cookies through your browser settings: you can block cookies, delete cookies that
                    are already stored, or ask your browser to warn you before a cookie is set. Blocking some cookies
                    may affect how the site works, but the rates and guides remain readable.
                </p>
                <p className="mt-3 text-slate-600">
                    To opt out of personalised advertising based on the DoubleClick cookie, visit Google Ads Settings.
                    To opt out of personalised advertising from many third-party vendors at once, visit
                    www.aboutads.info. You can also use your browser's settings to block third-party cookies entirely.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Changes to this policy</h2>
                <p className="mt-3 text-slate-600">
                    We may update this policy from time to time. The updated version will be published on this page.
                </p>

                <h2 className="mt-10 text-2xl font-bold text-brand-dark">Contact</h2>
                <p className="mt-3 text-slate-600">
                    Questions about cookies on this site? Email us at{' '}
                    <a href="mailto:hello@raddigo.pk" className="font-semibold text-brand-dark hover:text-brand-green">
                        hello@raddigo.pk
                    </a>
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                    <NavLink to="/privacy" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Privacy Policy →
                    </NavLink>
                    <NavLink to="/terms" className="inline-block px-6 py-3 font-semibold text-brand-dark hover:text-brand-green">
                        Terms of Service →
                    </NavLink>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default CookiePolicy
