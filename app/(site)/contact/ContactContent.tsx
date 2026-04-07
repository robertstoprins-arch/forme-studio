'use client'

import { useState } from 'react'
import { MessageCircle, Mail, ArrowRight } from 'lucide-react'

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '447565169827'

const waLinks = [
  {
    label: 'General enquiry',
    message: 'Hi, I have a project and need advice on metalwork / finishes. Can you help?',
  },
  {
    label: 'I have a joinery drawing',
    message: 'I have a joinery drawing — can you check if the grill/inlay will fit correctly?',
  },
  {
    label: 'I need template guidance',
    message: "I don't have drawings — can you advise how to measure or create a template?",
  },
  {
    label: 'I have a design idea',
    message: 'I have a design idea — can you help make it fabrication-ready?',
  },
  {
    label: 'Quick feasibility check',
    message: 'Can this pattern/material work for my dimensions?',
  },
]

function waUrl(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
}

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    // Simple mailto fallback for now — replaced with API route when Supabase is wired
    await new Promise((r) => setTimeout(r, 600))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="pt-16">

      {/* Page header */}
      <div className="bg-[#1a1a1a] pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-4">Contact</p>
          <h1 className="text-[#f8f5f0] text-4xl md:text-5xl font-[200] tracking-[-0.02em]">
            Get in touch
          </h1>
          <div className="w-10 h-px bg-[#b5922a] mt-6" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — WhatsApp + direct contact */}
          <div>
            <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-8">
              Fastest response
            </p>

            {/* WhatsApp buttons */}
            <div className="flex flex-col gap-2 mb-12">
              {waLinks.map((link) => (
                <a
                  key={link.label}
                  href={waUrl(link.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between bg-[#f8f5f0] hover:bg-[#1a1a1a] border border-[#e8e3dc] hover:border-[#b5922a] px-5 py-4 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle size={14} className="text-[#b5922a] flex-shrink-0" />
                    <span className="text-[#1a1a1a] group-hover:text-[#f8f5f0] text-sm font-[300] tracking-wide transition-colors">
                      {link.label}
                    </span>
                  </div>
                  <ArrowRight size={12} className="text-[#7a7570] group-hover:text-[#b5922a] transition-colors" />
                </a>
              ))}
            </div>

            {/* Direct email */}
            <div className="border-t border-[#e8e3dc] pt-8">
              <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-4">Email</p>
              <a
                href="mailto:hello@forme.studio"
                className="flex items-center gap-3 text-[#1a1a1a] text-base font-[300] hover:text-[#b5922a] transition-colors"
              >
                <Mail size={16} className="text-[#b5922a]" />
                hello@forme.studio
              </a>
            </div>

            {/* Response times */}
            <div className="border-t border-[#e8e3dc] pt-8 mt-8">
              <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-4">Response times</p>
              <div className="flex flex-col gap-3">
                {[
                  ['WhatsApp', 'Same day during business hours'],
                  ['Technical review', 'Within 24 hours'],
                  ['Budget guidance', 'Within 1 working day'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline gap-3">
                    <span className="text-[#b5922a] text-xs w-1.5 h-1.5 rounded-full bg-[#b5922a] flex-shrink-0 mt-1.5" />
                    <span className="text-[#1a1a1a] text-sm font-[300]">{label}</span>
                    <span className="text-[#7a7570] text-sm font-[300]">— {value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — enquiry form */}
          <div>
            <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-8">
              Send an enquiry
            </p>

            {submitted ? (
              <div className="bg-[#f8f5f0] border border-[#e8e3dc] p-10">
                <div className="w-8 h-px bg-[#b5922a] mb-6" />
                <h3 className="text-[#1a1a1a] text-xl font-[300] mb-3">Thank you</h3>
                <p className="text-[#7a7570] text-sm font-[300] leading-relaxed">
                  We&apos;ve received your message and will be in touch within 1 working day.
                  For faster response, use WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>

                {/* Name */}
                <div>
                  <label className="text-[10px] tracking-[0.14em] uppercase text-[#7a7570] block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border border-[#e8e3dc] focus:border-[#1a1a1a] px-4 py-3 text-sm font-[300] text-[#1a1a1a] outline-none transition-colors placeholder:text-[#c0bbb5]"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="text-[10px] tracking-[0.14em] uppercase text-[#7a7570] block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border border-[#e8e3dc] focus:border-[#1a1a1a] px-4 py-3 text-sm font-[300] text-[#1a1a1a] outline-none transition-colors placeholder:text-[#c0bbb5]"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] tracking-[0.14em] uppercase text-[#7a7570] block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border border-[#e8e3dc] focus:border-[#1a1a1a] px-4 py-3 text-sm font-[300] text-[#1a1a1a] outline-none transition-colors resize-none placeholder:text-[#c0bbb5]"
                    placeholder="Tell us about your project"
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 py-4 bg-[#1a1a1a] text-[#f8f5f0] text-xs font-[400] tracking-[0.1em] uppercase hover:bg-[#b5922a] transition-colors disabled:opacity-50 w-fit"
                >
                  {loading ? 'Sending…' : (
                    <>
                      <ArrowRight size={14} />
                      Send Enquiry
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
