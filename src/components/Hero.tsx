import { useEffect, useRef } from 'react'
import { APP_CONFIG } from '../utils/constants'
import gsap from 'gsap'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = containerRef.current?.children
    if (!els) return
    gsap.fromTo(els, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.3 })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      <div ref={containerRef} className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 opacity-0">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary/80 font-medium">Nu beschikbaar in de App Store</span>
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6 opacity-0">
          <span className="text-white">Offertes & facturen versturen</span>
          <br />
          <span className="text-white">in </span>
          <span className="text-primary glow-text">160+ talen.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0">
          De snelste manier om professionele offertes en facturen te maken en te versturen — via e-mail of WhatsApp. In elke taal die je klant spreekt.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0">
          <a href={APP_CONFIG.appStoreUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-navy-deep font-bold rounded-2xl hover:shadow-[0_0_40px_rgba(205,255,0,0.3)] transition-all duration-300 hover:scale-[1.02]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download gratis
          </a>
          <a href="#features" className="px-7 py-4 text-white/60 hover:text-white font-medium transition-colors">
            Bekijk features &darr;
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
