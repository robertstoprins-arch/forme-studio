import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Materials & Finishes',
  description: 'Brass, bronze, aluminium, mild steel, stainless steel, and stone. Each material has its own tolerances, grain, and finish behaviour. We\'ll guide you through the choice.',
}

const materials = [
  {
    id: 'brass',
    name: 'Brass',
    tag: 'Warm · Refined · Ageable',
    color: '#b5922a',
    description:
      'Brass is the material most associated with precision architectural detail. It cuts cleanly, holds tight tolerances, and develops a living patina over time. Available in brushed, polished, and chemically patinated finishes.',
    finishes: ['Brushed satin', 'Mirror polished', 'Lightly antiqued', 'Chemical patina', 'Lacquered'],
    useCase: 'Joinery inlays, decorative grills, statement panels, vent covers',
    fabricationNote: 'Excellent machinability. Holds fine pattern detail to ±0.3mm. Grain direction affects brushed finish — specified at approval stage.',
    careNote: 'Unlacquered brass will patinate naturally. Lacquered brass retains its finish with minimal maintenance.',
  },
  {
    id: 'bronze',
    name: 'Bronze-style Finishes',
    tag: 'Deep · Aged · Architectural',
    color: '#7a5c3a',
    description:
      'Bronze-style finishes are applied to brass or steel substrates to achieve the depth and warmth of aged bronze without the cost of solid bronze casting. The result is indistinguishable in most architectural applications.',
    finishes: ['Dark bronze', 'Oil-rubbed bronze', 'Antique bronze', 'Bronze patina', 'Burnished bronze'],
    useCase: 'High-end residential metalwork, hotel interiors, statement screens, door furniture integration',
    fabricationNote: 'Finish applied post-fabrication. Final colour can vary slightly — samples provided at approval stage.',
    careNote: 'Avoid abrasive cleaners. Soft cloth with mild soap. Do not use acidic or alkaline cleaning products.',
  },
  {
    id: 'aluminium',
    name: 'Aluminium',
    tag: 'Lightweight · Versatile · Durable',
    color: '#9a9a9a',
    description:
      'Aluminium offers excellent strength-to-weight ratio and natural corrosion resistance. Ideal for larger panels, external applications, and projects where weight is a consideration. Anodising provides a hardwearing, colour-stable finish.',
    finishes: ['Mill finish', 'Brushed natural', 'Anodised silver', 'Anodised bronze', 'Powder coated (RAL)'],
    useCase: 'Large wall panels, external grills, commercial screens, lightweight structural elements',
    fabricationNote: 'Cuts and machines cleanly. Anodising must be specified before fabrication as it affects dimensional tolerances.',
    careNote: 'Low maintenance. Anodised surfaces are hard-wearing. Powder coat requires standard exterior maintenance schedule.',
  },
  {
    id: 'mild-steel',
    name: 'Mild Steel',
    tag: 'Strong · Industrial · Versatile',
    color: '#4a4a4a',
    description:
      'Mild steel is the workhorse of architectural metalwork — strong, machinable, and highly versatile. Raw steel develops a natural rust patina if left untreated, or can be finished in a wide range of protective and decorative coatings.',
    finishes: ['Raw / mill scale', 'Brushed', 'Blackened / oxidised', 'Powder coated (RAL)', 'Primed for painting', 'Wax sealed'],
    useCase: 'Structural screens, industrial-aesthetic panels, grills, frames, feature elements',
    fabricationNote: 'Highly weldable. Can be formed, bent, and cut to complex profiles. Raw steel requires protective finish for interior use.',
    careNote: 'Waxed or sealed steel requires periodic re-application. Powder coated steel is low maintenance.',
  },
  {
    id: 'stainless-steel',
    name: 'Stainless Steel',
    tag: 'Precise · Hygienic · Enduring',
    color: '#c0c0c0',
    description:
      'Stainless steel combines exceptional corrosion resistance with a controlled, precise aesthetic. The brushed finish is directional and highly consistent — ideal for applications requiring tight dimensional and visual control.',
    finishes: ['No. 4 brushed (satin)', 'No. 8 mirror polished', 'Bead blasted', 'PVD coated (brass / bronze tones)', 'Etched'],
    useCase: 'Commercial grills, hygienic environments, external applications, high-traffic surfaces',
    fabricationNote: 'Grade 304 standard. Grade 316 for coastal or external applications. Grain direction locked at approval.',
    careNote: 'Resistant to most cleaning products. Mirror polish shows fingerprints — specify satin for high-traffic use.',
  },
  {
    id: 'stone',
    name: 'Stone Integration',
    tag: 'Natural · Tactile · Permanent',
    color: '#a09890',
    description:
      'Stone is incorporated as an integrated material — set into metal frames, used alongside metalwork panels, or as a primary surface with metal detailing. We coordinate stone specification with your supplier or source to your brief.',
    finishes: ['Honed', 'Polished', 'Brushed / leathered', 'Sandblasted', 'Natural split face'],
    useCase: 'Stone and metal panel systems, inlaid stone features, integrated hearth and floor details, mixed-material screens',
    fabricationNote: 'Stone is coordinated with metalwork — tolerances agreed between trades. We design the metal to receive the stone accurately.',
    careNote: 'Stone-specific care depends on material. We provide guidance per project at handover.',
  },
]

export default function MaterialsPage() {
  return (
    <div className="pt-16">

      {/* Page header */}
      <div className="bg-[#1a1a1a] pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-4">Materials</p>
          <h1 className="text-[#f8f5f0] text-4xl md:text-5xl font-[200] tracking-[-0.02em] mb-6">
            Materials & Finishes
          </h1>
          <div className="w-10 h-px bg-[#b5922a] mb-6" />
          <p className="text-[#7a7570] text-base font-[300] max-w-2xl leading-relaxed">
            Brass, bronze, aluminium, mild steel, stainless steel, natural stone. Each material has its own tolerances, grain, and finish behaviour. We&apos;ll guide you through the choice.
          </p>
        </div>
      </div>

      {/* Material jump links */}
      <div className="bg-[#f8f5f0] border-b border-[#e8e3dc] px-6 py-4 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto">
          {materials.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              className="text-[10px] tracking-[0.12em] uppercase text-[#7a7570] hover:text-[#1a1a1a] transition-colors whitespace-nowrap font-[400]"
            >
              {m.name}
            </a>
          ))}
        </div>
      </div>

      {/* Material sections */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-0">
          {materials.map((mat, i) => (
            <div
              key={mat.id}
              id={mat.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-[#e8e3dc] ${i === materials.length - 1 ? 'border-b' : ''}`}
            >
              {/* Swatch panel */}
              <div
                className="min-h-[280px] lg:min-h-[360px] flex flex-col justify-end p-10 relative overflow-hidden"
                style={{ background: mat.color }}
              >
                {/* Subtle grid */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #f8f5f0 0.5px, transparent 0.5px), linear-gradient(to bottom, #f8f5f0 0.5px, transparent 0.5px)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <div className="relative">
                  <p className="text-[#f8f5f0]/50 text-[10px] tracking-[0.16em] uppercase mb-2">{mat.tag}</p>
                  <h2 className="text-[#f8f5f0] text-3xl font-[200] tracking-tight">{mat.name}</h2>
                </div>
              </div>

              {/* Detail panel */}
              <div className="bg-[#f8f5f0] p-10 flex flex-col gap-7">

                <p className="text-[#1a1a1a] text-sm font-[300] leading-relaxed">
                  {mat.description}
                </p>

                {/* Finishes */}
                <div>
                  <p className="text-[#7a7570] text-[10px] tracking-[0.16em] uppercase mb-3">Finishes available</p>
                  <div className="flex flex-wrap gap-2">
                    {mat.finishes.map((f) => (
                      <span
                        key={f}
                        className="text-xs font-[300] px-3 py-1.5 bg-[#e8e3dc] text-[#1a1a1a] tracking-wide"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Use case */}
                <div>
                  <p className="text-[#7a7570] text-[10px] tracking-[0.16em] uppercase mb-2">Typical applications</p>
                  <p className="text-[#1a1a1a] text-sm font-[300] leading-relaxed">{mat.useCase}</p>
                </div>

                {/* Fabrication note */}
                <div className="border-l-2 border-[#b5922a] pl-4">
                  <p className="text-[#7a7570] text-[10px] tracking-[0.16em] uppercase mb-1">Fabrication note</p>
                  <p className="text-[#7a7570] text-sm font-[300] leading-relaxed">{mat.fabricationNote}</p>
                </div>

                {/* Care */}
                <div>
                  <p className="text-[#7a7570] text-[10px] tracking-[0.16em] uppercase mb-2">Care</p>
                  <p className="text-[#7a7570] text-sm font-[300] leading-relaxed">{mat.careNote}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#e8e3dc] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-[#7a7570] text-[10px] tracking-[0.18em] uppercase mb-3">Not sure which material?</p>
            <h3 className="text-[#1a1a1a] text-2xl font-[200] tracking-tight">We&apos;ll guide you through the choice.</h3>
          </div>
          <Link
            href="/start-project"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-[#f8f5f0] text-xs font-[400] tracking-[0.1em] uppercase hover:bg-[#b5922a] transition-colors whitespace-nowrap"
          >
            Start a Project
          </Link>
        </div>
      </div>

    </div>
  )
}
