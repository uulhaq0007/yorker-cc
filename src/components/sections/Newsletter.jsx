import { useState } from 'react'
import { FiCheck, FiSend } from 'react-icons/fi'
import Reveal from '../ui/Reveal'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid email address.')
      return
    }
    if (!agreed) {
      setError('Please accept the privacy policy first.')
      return
    }
    // Front-end only — nothing leaves the browser.
    setError('')
    setDone(true)
    setEmail('')
    setAgreed(false)
  }

  return (
    <section className="relative overflow-hidden bg-paper py-20 lg:py-28">
      <span
        className="ghost-word absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] text-ink/[0.035]"
        aria-hidden="true"
      >
        newsletter
      </span>

      <div className="container relative">
        <div className="mx-auto max-w-[620px] text-center">
          <Reveal>
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-white">
              <FiSend className="text-xl" />
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-7 font-display text-[28px] font-semibold tracking-tightest sm:text-[38px]">
              Get the best club stories into your inbox!
            </h2>
          </Reveal>

          <Reveal delay={170}>
            <form onSubmit={submit} noValidate className="mt-8">
              <div className="flex flex-col gap-2 rounded-full bg-white p-2 shadow-[0_10px_35px_rgba(0,0,0,.07)] sm:flex-row sm:items-center">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  placeholder="Enter Your Email Address"
                  aria-invalid={Boolean(error)}
                  className="w-full rounded-full bg-transparent px-6 py-3 text-[16px] text-ink outline-none placeholder:text-body/70"
                />
                <button
                  type="submit"
                  className="flex shrink-0 items-center justify-center gap-2 rounded-full border-l border-line px-7 py-3 font-display text-[13px] font-semibold uppercase tracking-[1.3px] text-ink transition-colors duration-300 hover:text-accent sm:border-l"
                >
                  <FiSend /> Subscribe
                </button>
              </div>

              <label className="mt-5 flex items-center justify-center gap-2.5 text-[15px] text-body">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked)
                    setError('')
                  }}
                  className="h-4 w-4 accent-accent"
                />
                <span>
                  I agree to the{' '}
                  <span className="underline decoration-body/40 underline-offset-2">Privacy Policy</span>.
                </span>
              </label>

              {error && <p className="mt-3 text-[15px] text-accent">{error}</p>}
              {done && (
                <p className="mt-3 flex items-center justify-center gap-2 text-[15px] text-ink">
                  <FiCheck className="text-accent" /> Thanks — you are on the list. (Demo only, nothing was sent.)
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
