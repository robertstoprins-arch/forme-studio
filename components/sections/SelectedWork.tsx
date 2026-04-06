'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// Placeholder projects — replace with real data/images
const projects = [
  {
    slug: 'brass-joinery-inlay',
    title: 'Brass joinery inlay',
    result: 'Custom brass inlay aligned to joinery rebate — delivered ready to install',
    category: 'Joinery Inlays',
    bg: '#2a2418',
  },
  {
    slug: 'steel-decorative-grill',
    title: 'Decorative steel grill',
    result: 'Mild steel vent grill fabricated to ±0.5mm — fitted directly into plasterwork opening',
    category: 'Grills & Vents',
    bg: '#1e1e1e',
  },
  {
    slug: 'bronze-screen-divider',
    title: 'Bronze-style screen',
    result: 'Room divider with bronze patina finish — coordinated with stone floor detail',
    category: 'Screens & Dividers',
    bg: '#251e14',
  },
]

export default function SelectedWork() {
  return (
    <section className="bg-[#f8f5f0] py-24 border-t border-[#e8e3dc]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-4">Portfolio</p>
            <h2 className="text-[#1a1a1a] text-3xl md:text-4xl font-[200] tracking-[-0.01em]">
              Selected work
            </h2>
          </div>
          <Link
            href="/work"
            className="hidden md:inline-flex text-xs font-[300] tracking-[0.1em] uppercase text-[#7a7570] border-b border-[#7a7570] pb-1 hover:text-[#b5922a] hover:border-[#b5922a] transition-colors"
          >
            See all work
          </Link>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e8e3dc]">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/work/${project.slug}`} className="group block">
                {/* Image placeholder */}
                <div
                  className="aspect-[4/3] relative overflow-hidden"
                  style={{ background: project.bg }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: 'linear-gradient(to right, #f8f5f0 0.5px, transparent 0.5px), linear-gradient(to bottom, #f8f5f0 0.5px, transparent 0.5px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  {/* Category badge */}
                  <span className="absolute top-5 left-5 text-[10px] tracking-[0.14em] uppercase text-[#7a7570] font-[300]">
                    {project.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="bg-[#f8f5f0] p-6">
                  <h3 className="text-[#1a1a1a] text-base font-[300] mb-2 group-hover:text-[#b5922a] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#7a7570] text-sm font-[300] leading-relaxed">
                    {project.result}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile see all */}
        <div className="mt-8 md:hidden">
          <Link
            href="/work"
            className="text-xs font-[300] tracking-[0.1em] uppercase text-[#7a7570] border-b border-[#7a7570] pb-1"
          >
            See all work
          </Link>
        </div>

      </div>
    </section>
  )
}
