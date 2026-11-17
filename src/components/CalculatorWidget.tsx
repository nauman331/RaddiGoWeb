import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RATES } from '../data/rates'

// Interactive scrap-value calculator (F1). Pure arithmetic on the six
// published per-kg rates — no new rates, no dealer quotes, no promise
// that any buyer will pay the calculated total. The totals are indicative
// only; the visitor must confirm the rate and weight with their buyer.
function formatRs(value: number): string {
    return `Rs. ${Math.round(value).toLocaleString('en-US')}`
}

const CalculatorWidget: React.FC = () => {
    const [weights, setWeights] = useState<Record<string, string>>({})

    const setWeight = (key: string, value: string) => {
        // Allow only digits and one decimal point; empty means 0 kg.
        if (value !== '' && !/^\d*\.?\d*$/.test(value)) return
        setWeights((prev) => ({ ...prev, [key]: value }))
    }

    const rows = RATES.map((r) => {
        const kg = parseFloat(weights[r.key] ?? '') || 0
        return { ...r, kg, total: kg * r.rate }
    })
    const combinedTotal = rows.reduce((sum, r) => sum + r.total, 0)
    const totalKg = rows.reduce((sum, r) => sum + r.kg, 0)

    return (
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid gap-4 p-6 sm:grid-cols-2">
                {rows.map((r) => (
                    <div key={r.key} className="rounded-xl bg-slate-50 p-4">
                        <label htmlFor={`calc-${r.key}`} className="block text-sm font-semibold text-brand-dark">
                            {r.name} — Rs. {r.rate}/kg
                        </label>
                        <div className="mt-2 flex items-center gap-2">
                            <input
                                id={`calc-${r.key}`}
                                type="text"
                                inputMode="decimal"
                                autoComplete="off"
                                placeholder="0"
                                value={weights[r.key] ?? ''}
                                onChange={(e) => setWeight(r.key, e.target.value)}
                                className="w-28 rounded-lg border border-slate-300 bg-white px-3 py-2 text-base text-slate-800 outline-none focus:border-brand-green"
                            />
                            <span className="text-sm text-slate-500">kg</span>
                            <span className="ml-auto font-semibold text-brand-green">
                                {r.kg > 0 ? formatRs(r.total) : '—'}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-1 border-t border-slate-100 bg-slate-50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-semibold text-brand-dark">
                        Estimated total: <span className="text-lg text-brand-green">{formatRs(combinedTotal)}</span>
                    </p>
                    <p className="text-sm text-slate-500">
                        {totalKg > 0
                            ? `${totalKg.toLocaleString('en-US')} kg in total, worked out from the rates on this site.`
                            : 'Enter the weight of each material above to see its value.'}
                    </p>
                </div>
                <NavLink
                    to="/live-rates"
                    className="mt-2 inline-block shrink-0 font-semibold text-brand-dark hover:text-brand-green sm:mt-0"
                >
                    See the rates →
                </NavLink>
            </div>

            <p className="border-t border-slate-100 px-6 py-4 text-sm text-slate-500">
                Indicative only. These totals are worked out from the per-kg rates published on this site — they are
                not a promise of what any buyer will pay. A buyer may offer more or less depending on the material's
                condition, the quantity, and the market on the day. Always confirm the rate and the weight with your
                buyer before you sell.
            </p>
        </div>
    )
}

export default CalculatorWidget
