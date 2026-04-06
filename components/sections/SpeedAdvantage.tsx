'use client'

import { motion } from 'framer-motion'

const promises = [
  { n: '24h', label: 'Technical response', body: 'Within 24 hours of enquiry' },
  { n: '1d', label: 'Budget guidance', body: 'Within 1 working day' },
  { n: '→', label: 'Clear next steps', body: 'No delays, no chasing' },
]

export default function SpeedAdvantage() {
  return (
    <section className="bg-[#f8f5f0] py-24 border-t border-[#e8e3dc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-4">Response</p>
          <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-[200] tracking-[-0.01em]">
            Fast where it matters
          </h2>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e8e3dc]">
          {promises.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#f8f5f0] p-10"
            >
              <span className="text-[#b5922a] text-4xl font-[200] tracking-tight block mb-4">
                {p.n}
              </span>
              <h3 className="text-[#1a1a1a] text-lg font-[300] mb-2">{p.label}</h3>
              <p className="text-[#7a7570] text-sm font-[300] leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
