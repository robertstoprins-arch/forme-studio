import type { Metadata } from 'next'
import { Suspense } from 'react'
import StartProjectContent from './StartProjectContent'

export const metadata: Metadata = {
  title: 'Start a Project',
  description: 'Start your project with Forme Studio. Upload drawings, request a template guide, or send us your idea — we review everything within 24 hours.',
}

export default function StartProjectPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8f5f0]" />}>
      <StartProjectContent />
    </Suspense>
  )
}
