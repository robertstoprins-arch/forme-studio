'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, Upload, ArrowRight } from 'lucide-react'

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '44XXXXXXXXXX'
const WA_GENERAL = `https://wa.me/${WHATSAPP}?text=Hi%2C+I+have+a+project+and+need+advice+on+metalwork+%2F+finishes.+Can+you+help%3F`

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#1a1a1a] flex items-end pb-24 pt-32 overflow-hidden">

      {/* Background texture grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(to right, #f8f5f0 0.5px, transparent 0.5px), linear-gradient(to bottom, #f8f5f0 0.5px, transparent 0.5px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Brass accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#b5922a]" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Label */}
          <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-8">
            Forme Studio · Fabrication Coordination
          </p>

          {/* Headline */}
          <h1 className="text-[#f8f5f0] text-4xl md:text-6xl lg:text-7xl font-[200] tracking-[-0.02em] leading-[1.05] max-w-4xl mb-8">
            Bespoke metalwork and integrated finishes — designed properly, made to fit first time.
          </h1>

          {/* Brass rule */}
          <div className="w-16 h-px bg-[#b5922a] mb-8" />

          {/* Subheading */}
          <p className="text-[#7a7570] text-base md:text-lg font-[300] leading-relaxed max-w-2xl mb-12">
            We help joinery firms, designers and contractors turn ideas into fabrication-ready designs — with correct tolerances, clean detailing, and reliable delivery.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/start-project"
              className="inline-flex items-center gap-2 px-6 py-4 bg-[#f8f5f0] text-[#1a1a1a] text-xs font-[400] tracking-[0.1em] uppercase hover:bg-[#b5922a] hover:text-[#f8f5f0] transition-colors"
            >
              <ArrowRight size={14} />
              Start a Project
            </Link>
            <Link
              href="/start-project?route=drawings"
              className="inline-flex items-center gap-2 px-6 py-4 border border-[#f8f5f0]/20 text-[#f8f5f0] text-xs font-[300] tracking-[0.1em] uppercase hover:border-[#b5922a] hover:text-[#b5922a] transition-colors"
            >
              <Upload size={14} />
              Upload Drawing / Template
            </Link>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 border border-[#f8f5f0]/20 text-[#f8f5f0] text-xs font-[300] tracking-[0.1em] uppercase hover:border-[#b5922a] hover:text-[#b5922a] transition-colors"
            >
              <MessageCircle size={14} />
              WhatsApp an Engineer
            </a>
          </div>

          {/* Micro trust line */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {[
              'Drawings, templates or site survey accepted',
              'Approval before fabrication',
              'Fast technical response',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2 text-[#7a7570] text-xs font-[300] tracking-wide">
                <span className="text-[#b5922a]">✔</span>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
