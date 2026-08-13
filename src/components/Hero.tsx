import { useEffect, useRef } from 'react'
import { APP_CONFIG } from '../utils/constants'
import { AppleIcon, GooglePlayIcon } from './StoreIcons'
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
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8 opacity-0">
          <span className="shrink-0 w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="whitespace-nowrap text-[clamp(10px,3.1vw,14px)] text-primary/80 font-medium">Nu beschikbaar in de App Store en Google Play</span>
        </div>

        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6 opacity-0">
          <span className="text-white">Offertes & facturen versturen</span>
          <br />
          <span className="text-white">in </span>
          <span className="text-primary glow-text">40+ talen.</span>
        </h1>

        <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0">
          De snelste manier om professionele offertes en facturen te maken en te versturen — via e-mail of WhatsApp. In elke taal die je klant spreekt.
        </p>

        <div className="flex flex-col items-center gap-4 opacity-0">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-[300px] sm:max-w-none mx-auto">
            <a href={APP_CONFIG.appStoreUrl} target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto sm:min-w-[190px] inline-flex items-center justify-center gap-3 px-7 py-4 bg-primary text-navy-deep font-bold rounded-2xl hover:shadow-[0_0_40px_rgba(205,255,0,0.3)] transition-all duration-300 hover:scale-[1.02]">
              <AppleIcon size={20} />
              App Store
            </a>
            <a href={APP_CONFIG.playStoreUrl} target="_blank" rel="noopener noreferrer" className="group w-full sm:w-auto sm:min-w-[190px] inline-flex items-center justify-center gap-3 px-7 py-4 bg-primary text-navy-deep font-bold rounded-2xl hover:shadow-[0_0_40px_rgba(205,255,0,0.3)] transition-all duration-300 hover:scale-[1.02]">
              <GooglePlayIcon size={20} />
              Google Play
            </a>
          </div>
          <a href="#features" className="px-7 py-2 text-white/60 hover:text-white font-medium transition-colors">
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
