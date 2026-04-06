'use client'

import { motion } from 'framer-motion'

const clients = ['Joinery Firms', 'Interior Designers', 'Architects', 'Contractors']

export default function WhoWeWorkWith() {
  return (
    <section className="bg-[#1a1a1a] border-t border-[#ffffff08] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0">

          {/* Label */}
          <div className="md:w-32 flex-shrink-0">
            <p className="text-[#7a7570] text-[10px] tracking-[0.16em] uppercase">For</p>
          </div>

          {/* Client types */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-0 flex-1">
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center"
              >
                <span className="text-[#f8f5f0] text-lg md:text-xl font-[200] tracking-wide whitespace-nowrap px-4 first:pl-0">
                  {client}
                </span>
                {i < clients.length - 1 && (
                  <span className="w-px h-5 bg-[#b5922a] mx-2 hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Supporting line */}
          <div className="md:ml-auto md:text-right">
            <p className="text-[#7a7570] text-sm font-[300] tracking-wide max-w-xs md:max-w-[220px]">
              From one-off bespoke pieces to full project coordination.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
