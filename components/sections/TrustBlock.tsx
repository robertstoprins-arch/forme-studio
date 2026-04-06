'use client'

import { motion } from 'framer-motion'

const trustPoints = [
  {
    title: 'Designed to fit',
    body: 'Not adjusted on site — every tolerance resolved before fabrication begins.',
  },
  {
    title: 'Clear approvals',
    body: 'You approve drawings before we cut. Every time, no exceptions.',
  },
  {
    title: 'Joinery-first thinking',
    body: 'Installation and integration considered from the first conversation.',
  },
  {
    title: 'Fast technical support',
    body: 'Real answers from someone who understands your project.',
  },
]

export default function TrustBlock() {
  return (
    <section className="bg-[#1a1a1a] py-24 border-t border-[#ffffff08]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-4">Why Forme</p>
          <h2 className="text-[#f8f5f0] text-3xl md:text-4xl font-[200] tracking-[-0.01em] max-w-xl">
            Built for real projects, not just visuals
          </h2>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#ffffff08]">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#1a1a1a] p-10"
            >
              <div className="flex items-start gap-4">
                <span className="text-[#b5922a] text-base mt-0.5 flex-shrink-0">✔</span>
                <div>
                  <h3 className="text-[#f8f5f0] text-lg font-[300] mb-2">{point.title}</h3>
                  <p className="text-[#7a7570] text-sm font-[300] leading-relaxed">{point.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
