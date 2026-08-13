import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { APP_CONFIG } from '../utils/constants'
import { AppleIcon, GooglePlayIcon } from './StoreIcons'

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
            Gratis te downloaden. Start direct met factureren in 40+ talen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={APP_CONFIG.appStoreUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-200 hover:scale-[1.02]">
              <AppleIcon size={24} />
              <div className="text-left">
                <div className="text-[10px] opacity-60 leading-tight">Download in de</div>
                <div className="text-base font-semibold leading-tight">App Store</div>
              </div>
            </a>

            <a href={APP_CONFIG.playStoreUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-200 hover:scale-[1.02]">
              <GooglePlayIcon size={24} />
              <div className="text-left">
                <div className="text-[10px] opacity-60 leading-tight">Ontdek het op</div>
                <div className="text-base font-semibold leading-tight">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
