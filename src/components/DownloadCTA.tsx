import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { APP_CONFIG } from '../utils/constants'

gsap.registerPlugin(ScrollTrigger)

export function DownloadCTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="download" className="relative px-6 py-32">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="cta-content glass-card p-10 md:p-16 text-center">
          <img src="/images/app-icon.png" alt="numr" className="w-20 h-20 rounded-2xl mx-auto mb-8 shadow-[0_0_40px_rgba(205,255,0,0.2)] animate-float" />

          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-4 text-white">
            Begin vandaag met <span className="text-primary">numr</span>
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-md mx-auto">
            Gratis te downloaden. Start direct met factureren in 160+ talen.
          </p>

          <a href={APP_CONFIG.appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-200 hover:scale-[1.02]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] opacity-60 leading-tight">Download in de</div>
              <div className="text-base font-semibold leading-tight">App Store</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
