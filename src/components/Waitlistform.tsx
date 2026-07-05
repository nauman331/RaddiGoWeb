import React, { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface WaitlistFormProps {
    id?: string
    variant?: 'light' | 'dark'
    ctaLabel?: string
    placeholder?: string
    source: string // where this form lives, e.g. "hero" | "apps" | "cta" — useful once wired to real analytics
    className?: string
}

// Swap the mock delay below for your real endpoint, e.g.:
// await fetch('/api/waitlist', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ email, source }),
// })
async function submitToWaitlist(email: string, source: string) {
    await new Promise((resolve) => setTimeout(resolve, 700))
    void email
    void source
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({
    id,
    variant = 'light',
    ctaLabel = 'Join early access',
    placeholder = 'Enter your email or WhatsApp',
    source,
    className = '',
}) => {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<Status>('idle')

    const isDark = variant === 'dark'

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!/^\S+@\S+\.\S+$/.test(email) && !/^\+?\d[\d\s-]{7,}$/.test(email)) {
            setStatus('error')
            return
        }
        setStatus('loading')
        try {
            await submitToWaitlist(email, source)
            setStatus('success')
            setEmail('')
        } catch {
            setStatus('error')
        }
    }

    const inputId = `${source}-waitlist-email`
    const messageId = `${source}-waitlist-message`

    return (
        <form id={id} onSubmit={handleSubmit} noValidate className={`w-full max-w-xl ${className}`}>
            <label htmlFor={inputId} className="sr-only">
                Email or WhatsApp number
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
                <input
                    id={inputId}
                    name="contact"
                    type="text"
                    inputMode="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        if (status !== 'idle') setStatus('idle')
                    }}
                    placeholder={placeholder}
                    aria-invalid={status === 'error'}
                    aria-describedby={messageId}
                    className={`flex-1 rounded-lg border px-4 py-3 outline-none transition focus:ring-2 focus:ring-brand-green ${
                        status === 'error'
                            ? 'border-red-400'
                            : isDark
                            ? 'border-white/20 bg-white/10 text-white placeholder:text-slate-300 focus:border-brand-green'
                            : 'border-slate-300 bg-white focus:border-brand-green'
                    }`}
                />
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="shrink-0 rounded-lg bg-brand-accent px-6 py-3 font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {status === 'loading' ? 'Joining…' : ctaLabel}
                </button>
            </div>
            <p
                id={messageId}
                aria-live="polite"
                className={`mt-2 min-h-[1.25rem] text-sm ${isDark ? 'text-slate-300' : 'text-slate-500'}`}
            >
                {status === 'success' && <span className="text-brand-green">You're on the list — shukriya!</span>}
                {status === 'error' && <span className="text-red-400">Enter a valid email or WhatsApp number.</span>}
            </p>
        </form>
    )
}

export default WaitlistForm