// Single source of truth for the six published per-kg rates (Rs/kg).
// These numbers are the rates published on /live-rates and everywhere else
// on the site. Change them ONLY when a real rate re-check changes a rate,
// and log the change on /rate-history the same day.
export const RATES = [
    { key: 'newspaper', name: 'Newspaper', rate: 80 },
    { key: 'plastic', name: 'Plastic', rate: 40 },
    { key: 'iron', name: 'Iron', rate: 110 },
    { key: 'electronics', name: 'Electronics', rate: 200 },
    { key: 'copper', name: 'Copper', rate: 1800 },
    { key: 'cardboard', name: 'Cardboard', rate: 30 },
] as const

export type RateKey = (typeof RATES)[number]['key']
