import type { Metadata } from 'next'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Forme Studio. WhatsApp, email, or send us an enquiry — we respond within 24 hours.',
}

export default function ContactPage() {
  return <ContactContent />
}
