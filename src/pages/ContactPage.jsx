import { useState } from 'react'
import { FiCheckCircle, FiClock, FiMail, FiMapPin, FiMinus, FiPhone, FiPlus } from 'react-icons/fi'
import PageBanner from '../components/layout/PageBanner'
import Newsletter from '../components/sections/Newsletter'
import Reveal from '../components/ui/Reveal'
import SectionHeading from '../components/ui/SectionHeading'
import { club, faqs } from '../data/club'

const details = [
  { icon: FiMapPin, title: 'The Ground', lines: [club.ground] },
  { icon: FiPhone, title: 'Clubhouse', lines: [club.phone] },
  { icon: FiMail, title: 'Email', lines: [club.email, 'academy@yorkercc.co'] },
  { icon: FiClock, title: 'Nets', lines: ['Tue & Thu, 18:30 – 21:00', 'Jan – Mar, indoor'] },
]

const empty = { name: '', email: '', enquiry: 'Playing membership', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)

  const update = (field) => (e) => {
    setForm((p) => ({ ...p, [field]: e.target.value }))
    setErrors((p) => ({ ...p, [field]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'A little more detail helps us point you to the right person.'
    setErrors(next)
    if (Object.keys(next).length) return

    // Front-end only build — the submission is confirmed locally.
    setSent(true)
    setForm(empty)
  }

  const inputClass = (field) =>
    `w-full border bg-paper px-5 py-3.5 text-[16px] outline-none transition focus:bg-white ${
      errors[field] ? 'border-accent' : 'border-transparent focus:border-ink/25'
    }`

  return (
    <>
      <PageBanner title="Contact us" crumbs={[{ label: 'Contact' }]} ghost="Hello" />

      <section className="section bg-white">
        <div className="container">
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {details.map((d, i) => (
              <Reveal key={d.title} delay={i * 100}>
                <div className="group h-full bg-white p-8 text-center transition-colors duration-300 hover:bg-night">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-xl text-white">
                    <d.icon />
                  </span>
                  <h3 className="mt-5 font-display text-[18px] font-semibold tracking-tightest transition-colors duration-300 group-hover:text-white">
                    {d.title}
                  </h3>
                  {d.lines.map((l) => (
                    <p key={l} className="mt-1 text-[15px] transition-colors duration-300 group-hover:text-white/60">
                      {l}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[70px] lg:pb-[110px]">
        <div className="container">
          <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                eyebrow="Get in touch"
                title="Come down to the Oval"
                text="Whether you want a game, a coaching place for a junior or a boundary board for your business — send a note and a real person will reply."
              />

              <div className="mt-10 space-y-3">
                {faqs.map((f, i) => {
                  const open = openFaq === i
                  return (
                    <Reveal key={f.q} delay={i * 70}>
                      <div className="border border-line bg-white">
                        <h3>
                          <button
                            type="button"
                            onClick={() => setOpenFaq(open ? -1 : i)}
                            aria-expanded={open}
                            className="flex w-full items-center justify-between gap-5 px-6 py-4 text-left font-display text-[16px] font-semibold tracking-tightest text-ink transition-colors duration-300 hover:text-accent"
                          >
                            {f.q}
                            <span
                              className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                                open ? 'bg-accent text-white' : 'bg-band text-ink'
                              }`}
                            >
                              {open ? <FiMinus /> : <FiPlus />}
                            </span>
                          </button>
                        </h3>
                        <div className="grid transition-all duration-300" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
                          <div className="overflow-hidden">
                            <p className="px-6 pb-5 text-[15px]">{f.a}</p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            </div>

            <Reveal delay={130}>
              <form onSubmit={onSubmit} noValidate className="bg-paper p-8 sm:p-10">
                {sent && (
                  <div className="mb-7 flex items-center gap-3 bg-white px-5 py-4 text-[15px] text-ink">
                    <FiCheckCircle className="shrink-0 text-xl text-accent" />
                    Thanks — we have your message. This demo has no backend, so nothing was actually sent.
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-display text-[13px] font-semibold uppercase tracking-[1.2px] text-ink">
                      Your name
                    </label>
                    <input id="name" type="text" value={form.name} onChange={update('name')} aria-invalid={Boolean(errors.name)} className={inputClass('name')} />
                    {errors.name && <p className="mt-1.5 text-[13px] text-accent">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-display text-[13px] font-semibold uppercase tracking-[1.2px] text-ink">
                      Email
                    </label>
                    <input id="email" type="email" value={form.email} onChange={update('email')} aria-invalid={Boolean(errors.email)} className={inputClass('email')} />
                    {errors.email && <p className="mt-1.5 text-[13px] text-accent">{errors.email}</p>}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="enquiry" className="mb-2 block font-display text-[13px] font-semibold uppercase tracking-[1.2px] text-ink">
                    Enquiry type
                  </label>
                  <select id="enquiry" value={form.enquiry} onChange={update('enquiry')} className={inputClass('enquiry')}>
                    <option>Playing membership</option>
                    <option>Junior academy</option>
                    <option>Sponsorship</option>
                    <option>Ground hire</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block font-display text-[13px] font-semibold uppercase tracking-[1.2px] text-ink">
                    Message
                  </label>
                  <textarea id="message" rows={6} value={form.message} onChange={update('message')} aria-invalid={Boolean(errors.message)} className={`${inputClass('message')} resize-none`} />
                  {errors.message && <p className="mt-1.5 text-[13px] text-accent">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-accent mt-7">
                  Send Message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ground locator — drawn locally so the build stays free of map embeds */}
      <section aria-label="Ground location" className="relative h-[400px] overflow-hidden bg-night">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
          }}
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent text-white">
            <span className="absolute inset-0 animate-pulseRing rounded-full bg-accent/60" />
            <FiMapPin className="relative text-2xl" />
          </span>
          <p className="mt-5 font-display text-[21px] font-semibold tracking-tightest text-white">Ashfield Oval</p>
          <p className="text-white/55">{club.ground}</p>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
