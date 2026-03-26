'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function EmailOptIn() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section className="py-24 bg-[#F7F3E8]">
      <div className="max-w-2xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#BC9C22] font-medium mb-4">
            Free Resource
          </p>
          <h2
            className="text-4xl md:text-5xl mb-5 text-[#501508]"
            style={{ fontFamily: 'var(--font-cormorant)' }}
          >
            Are You Exit-Ready?
          </h2>
          <p className="text-slate-600 text-lg mb-10 leading-relaxed">
            Get the Exit Readiness Framework used by Singapore&apos;s most prepared founders —
            a practical guide to positioning your business for maximum value before you go to market.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#501508] text-white rounded-2xl px-8 py-10"
            >
              <div className="text-3xl mb-3">✓</div>
              <h3
                className="text-2xl mb-2"
                style={{ fontFamily: 'var(--font-cormorant)' }}
              >
                You&apos;re on the list{firstName ? `, ${firstName}` : ''}.
              </h3>
              <p className="text-white/80 text-sm">
                Check your inbox — the framework is on its way.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className="flex-1 px-5 py-4 rounded-xl border border-[#501508]/20 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#BC9C22] text-sm"
              />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-[2] px-5 py-4 rounded-xl border border-[#501508]/20 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#BC9C22] text-sm"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-4 rounded-xl bg-[#501508] text-white text-sm font-medium tracking-wide hover:bg-[#6b1e09] transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {status === 'loading' ? 'Sending…' : 'Send Me the Framework'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        {status === 'error' && (
          <p className="mt-3 text-sm text-red-600">{errorMsg}</p>
        )}

        <p className="mt-5 text-xs text-slate-400">
          No spam. Unsubscribe any time. We respect your privacy.
        </p>

      </div>
    </section>
  )
}
