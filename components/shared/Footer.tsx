import Link from 'next/link'

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '44XXXXXXXXXX'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#f8f5f0] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-2xl font-[200] tracking-[-0.02em] mb-3">forme</div>
            <div className="h-px bg-[#b5922a] mb-4" />
            <p className="text-[#7a7570] text-xs font-[300] tracking-wide leading-relaxed">
              Made to your exact specification.
            </p>
          </div>

          {/* Work */}
          <div>
            <p className="text-[#7a7570] text-[10px] tracking-[0.16em] uppercase mb-4">Work</p>
            <div className="flex flex-col gap-3">
              {['Work', 'Library', 'Materials'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-[#f8f5f0] text-sm font-[300] hover:text-[#b5922a] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Studio */}
          <div>
            <p className="text-[#7a7570] text-[10px] tracking-[0.16em] uppercase mb-4">Studio</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Studio', href: '/studio' },
                { label: 'Start a Project', href: '/start-project' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#f8f5f0] text-sm font-[300] hover:text-[#b5922a] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#7a7570] text-[10px] tracking-[0.16em] uppercase mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/${WHATSAPP}?text=Hi%2C+I+have+a+project+and+need+advice+on+metalwork+%2F+finishes.+Can+you+help%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f8f5f0] text-sm font-[300] hover:text-[#b5922a] transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:hello@forme.studio"
                className="text-[#f8f5f0] text-sm font-[300] hover:text-[#b5922a] transition-colors"
              >
                hello@forme.studio
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#ffffff10] flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[#7a7570] text-xs font-[300] tracking-wide">
            © {new Date().getFullYear()} Forme Studio Ltd
          </p>
          <div className="flex gap-6">
            {['Terms & Conditions', 'Privacy Policy'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="text-[#7a7570] text-xs font-[300] hover:text-[#f8f5f0] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
