import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Forme Studio — Bespoke Metalwork & Integrated Finishes',
    template: '%s | Forme Studio',
  },
  description:
    'Bespoke metalwork and integrated finishes — designed properly, made to fit first time. We help joinery firms, designers and contractors turn ideas into fabrication-ready designs.',
  keywords: [
    'bespoke metalwork',
    'architectural fabrication',
    'joinery inlays',
    'metal grills',
    'stone integration',
    'fabrication coordination',
    'decorative metalwork',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Forme Studio',
    title: 'Forme Studio — Bespoke Metalwork & Integrated Finishes',
    description:
      'Made to your exact specification. Drawings, templates or site survey accepted.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  )
}
