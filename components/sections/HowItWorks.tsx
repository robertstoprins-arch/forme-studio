'use client'

import { motion } from 'framer-motion'

const steps = [
  { n: '01', title: 'Send us your idea', body: 'Drawing, sketch, or site photo' },
  { n: '02', title: 'We design & align', body: 'We resolve tolerances, materials, and buildability' },
  { n: '03', title: 'You approve', body: 'Clear drawings before fabrication' },
  { n: '04', title: 'We coordinate delivery', body: 'Finished, checked, and ready for installation' },
]

export default function HowItWorks() {
  return (
    <section className="bg-[#f8f5f0] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-4">Process</p>
          <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-[200] tracking-[-0.01em]">
            A controlled process from idea to delivery
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pt-8 pb-8 md:pr-8 border-t border-[#e8e3dc] md:border-t-0 md:border-l first:border-l-0 md:pl-8 first:pl-0"
            >
              {/* Step number in brass */}
              <span className="text-[#b5922a] text-[10px] tracking-[0.16em] uppercase font-[400] block mb-4">
                {step.n}
              </span>
              <h3 className="text-[#1a1a1a] text-lg font-[300] tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-[#7a7570] text-sm font-[300] leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
