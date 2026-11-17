import React from 'react'

// F2 — "Rates last checked" stamp.
//
// The stamp renders NOTHING until a real rate re-check happens. That is
// deliberate: the six rates have never been re-checked since publication,
// so there is no honest date to show yet. When Nauman actually re-checks
// (or confirms) the six rates, set LAST_RATE_CHECK to that real date
// (e.g. '24 Nov 2026') and log the check on /rate-history the same day.
// NEVER backdate this, and never set it to a date on which no check
// happened — an empty stamp is honest; a fake date is not.
export const LAST_RATE_CHECK: string | null = null

const RateCheckedStamp: React.FC<{ className?: string }> = ({ className }) => {
    if (!LAST_RATE_CHECK) return null
    return (
        <p className={className ?? 'mt-4 text-sm text-slate-500'}>
            Rates last checked: {LAST_RATE_CHECK}.{' '}
            <a href="/rate-history" className="font-semibold underline hover:text-brand-green">
                See the full rate history →
            </a>
        </p>
    )
}

export default RateCheckedStamp
