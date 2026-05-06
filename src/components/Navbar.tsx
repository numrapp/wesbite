import { useState, useEffect } from 'react'
import { APP_CONFIG } from '../utils/constants'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Features', href: '#features' },
    { label: 'Hoe het werkt', href: '#how-it-works' },
    { label: 'Prijzen', href: '#pricing' },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-navy-deep/90 backdrop-blur-xl border-b border-white/5' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/images/app-icon.png" alt="numr" className="w-9 h-9 rounded-lg" />
          <span className="text-xl font-bold font-[family-name:var(--font-display)] text-white">{APP_CONFIG.name}</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/60 hover:text-primary transition-colors duration-200">
              {link.label}
            </a>
          ))}
          <a href={APP_CONFIG.appStoreUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-primary text-navy-deep text-sm font-bold rounded-full hover:shadow-[0_0_25px_rgba(205,255,0,0.4)] transition-all duration-200">
            Download
          </a>
        </div>

        <button className="md:hidden text-white/80" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy-deep/95 backdrop-blur-xl border-t border-white/5 px-6 py-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-3 text-white/60 hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <a href={APP_CONFIG.appStoreUrl} target="_blank" rel="noopener noreferrer" className="block mt-4 text-center px-5 py-3 bg-primary text-navy-deep font-bold rounded-full">
            Download
          </a>
        </div>
      )}
    </nav>
  )
}
