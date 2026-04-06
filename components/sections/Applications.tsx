'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const applications = [
  { name: 'Grills & Vents', slug: 'grills', bg: '#2a2a2a' },
  { name: 'Joinery Inlays', slug: 'inlays', bg: '#1a1a1a' },
  { name: 'Screens & Dividers', slug: 'screens', bg: '#232323' },
  { name: 'Wall Panels', slug: 'panels', bg: '#1e1e1e' },
  { name: 'Bespoke Elements', slug: 'bespoke', bg: '#282828' },
]

export default function Applications() {
  return (
    <section className="bg-[#f8f5f0] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-4">What we make</p>
            <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-[200] tracking-[-0.01em]">
              Applications
            </h2>
          </div>
          <Link
            href="/library"
            className="hidden md:inline-flex text-xs font-[300] tracking-[0.1em] uppercase text-[#7a7570] border-b border-[#7a7570] pb-1 hover:text-[#b5922a] hover:border-[#b5922a] transition-colors"
          >
            Browse all
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#e8e3dc]">
          {applications.map((app, i) => (
            <motion.div
              key={app.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={`/library?category=${app.slug}`}
                className="group block relative overflow-hidden"
              >
                {/* Placeholder — replace with real photography */}
                <div
                  className="aspect-[3/4] flex items-end p-5"
                  style={{ background: app.bg }}
                >
                  {/* Grid texture overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #f8f5f0 0.5px, transparent 0.5px), linear-gradient(to bottom, #f8f5f0 0.5px, transparent 0.5px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <span className="relative text-[#f8f5f0] text-sm font-[300] tracking-wide group-hover:text-[#b5922a] transition-colors">
                    {app.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
