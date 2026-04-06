'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FileText, Ruler, MessageCircle } from 'lucide-react'

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '44XXXXXXXXXX'
const WA_IDEA = `https://wa.me/${WHATSAPP}?text=I+have+a+design+idea+%E2%80%94+can+you+help+make+it+fabrication-ready%3F`

const routes = [
  {
    icon: FileText,
    title: 'I have drawings',
    body: 'Upload DWG, DXF or PDF — fast technical review',
    cta: 'Upload Drawing',
    href: '/start-project?route=drawings',
    external: false,
  },
  {
    icon: Ruler,
    title: 'I need help measuring',
    body: 'We provide template guidance or survey — reduce risk on site',
    cta: 'Get Template Guide',
    href: '/start-project?route=template',
    external: false,
  },
  {
    icon: MessageCircle,
    title: 'I have an idea',
    body: 'Send a sketch or photo — we\'ll guide you',
    cta: 'Talk on WhatsApp',
    href: WA_IDEA,
    external: true,
  },
]

export default function ChooseYourRoute() {
  return (
    <section className="bg-[#e8e3dc] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-4">Get started</p>
          <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-[200] tracking-[-0.01em]">
            Start your project the right way
          </h2>
        </div>

        {/* Route cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c8c3bc]">
          {routes.map((route, i) => {
            const Icon = route.icon
            return (
              <motion.div
                key={route.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#f8f5f0] p-10 flex flex-col"
              >
                {/* Brass top rule */}
                <div className="w-8 h-px bg-[#b5922a] mb-8" />

                <Icon size={20} className="text-[#7a7570] mb-5" strokeWidth={1.5} />

                <h3 className="text-[#1a1a1a] text-xl font-[300] tracking-tight mb-3">
                  {route.title}
                </h3>
                <p className="text-[#7a7570] text-sm font-[300] leading-relaxed mb-8 flex-1">
                  {route.body}
                </p>

                {route.external ? (
                  <a
                    href={route.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-[400] tracking-[0.1em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 hover:text-[#b5922a] hover:border-[#b5922a] transition-colors w-fit"
                  >
                    {route.cta}
                  </a>
                ) : (
                  <Link
                    href={route.href}
                    className="inline-flex items-center gap-2 text-xs font-[400] tracking-[0.1em] uppercase text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 hover:text-[#b5922a] hover:border-[#b5922a] transition-colors w-fit"
                  >
                    {route.cta}
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
