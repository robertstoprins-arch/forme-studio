'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const materials = [
  { name: 'Brass', note: 'Brushed · Polished · Patinated', color: '#b5922a' },
  { name: 'Steel', note: 'Mild · Stainless · Powder coated', color: '#6b6b6b' },
  { name: 'Aluminium', note: 'Brushed · Anodised · Natural', color: '#9a9a9a' },
  { name: 'Bronze', note: 'Bronze-style finishes', color: '#7a5c3a' },
  { name: 'Stone', note: 'Marble · Limestone · Integrated', color: '#a09890' },
]

export default function MaterialsStrip() {
  return (
    <section className="bg-[#1a1a1a] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-4">Materials</p>
            <h2 className="text-[#f8f5f0] text-3xl md:text-4xl font-[200] tracking-[-0.01em]">
              Materials & Finishes
            </h2>
          </div>
          <Link
            href="/materials"
            className="hidden md:inline-flex text-xs font-[300] tracking-[0.1em] uppercase text-[#7a7570] border-b border-[#7a7570] pb-1 hover:text-[#b5922a] hover:border-[#b5922a] transition-colors"
          >
            View all
          </Link>
        </div>

        {/* Material swatches */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#2a2a2a]">
          {materials.map((mat, i) => (
            <motion.div
              key={mat.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#1a1a1a] p-8 flex flex-col gap-4 group hover:bg-[#222] transition-colors"
            >
              {/* Colour swatch */}
              <div
                className="w-8 h-8 rounded-full opacity-80"
                style={{ background: mat.color }}
              />
              <div>
                <p className="text-[#f8f5f0] text-base font-[300] tracking-wide mb-1">{mat.name}</p>
                <p className="text-[#7a7570] text-xs font-[300] leading-relaxed">{mat.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Positioning line */}
        <p className="text-[#7a7570] text-sm font-[300] tracking-wide mt-8">
          Designed to integrate with joinery, stone, and interior finishes.
        </p>

      </div>
    </section>
  )
}
