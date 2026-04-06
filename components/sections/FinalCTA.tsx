'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Upload, MessageCircle } from 'lucide-react'

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '44XXXXXXXXXX'
const WA_GENERAL = `https://wa.me/${WHATSAPP}?text=Hi%2C+I+have+a+project+and+need+advice+on+metalwork+%2F+finishes.+Can+you+help%3F`

export default function FinalCTA() {
  return (
    <section className="bg-[#1a1a1a] py-32 border-t border-[#b5922a]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-6">Get in touch</p>
          <h2 className="text-[#f8f5f0] text-4xl md:text-5xl font-[200] tracking-[-0.02em] mb-6">
            Have a project in mind?
          </h2>
          <div className="w-10 h-px bg-[#b5922a] mx-auto mb-10" />

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/start-project"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f8f5f0] text-[#1a1a1a] text-xs font-[400] tracking-[0.1em] uppercase hover:bg-[#b5922a] hover:text-[#f8f5f0] transition-colors"
            >
              <ArrowRight size={14} />
              Start a Project
            </Link>
            <Link
              href="/start-project?route=drawings"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#f8f5f0]/20 text-[#f8f5f0] text-xs font-[300] tracking-[0.1em] uppercase hover:border-[#b5922a] hover:text-[#b5922a] transition-colors"
            >
              <Upload size={14} />
              Upload Drawing
            </Link>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#f8f5f0]/20 text-[#f8f5f0] text-xs font-[300] tracking-[0.1em] uppercase hover:border-[#b5922a] hover:text-[#b5922a] transition-colors"
            >
              <MessageCircle size={14} />
              WhatsApp an Engineer
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
