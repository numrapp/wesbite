import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PRICING } from '../utils/constants'

gsap.registerPlugin(ScrollTrigger)

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('monthly')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-content',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="relative px-6 py-32">
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4 text-white">
            <span className="text-primary">numr</span> Pro
          </h2>
          <p className="text-white/40 text-lg">Start met een gratis proefperiode. Upgrade wanneer je klaar bent.</p>
        </div>

        <div className="pricing-content glass-card p-8 md:p-10">
          <div className="flex flex-col gap-4 mb-8">
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`relative flex items-center justify-between p-5 rounded-2xl border transition-all duration-200 ${selectedPlan === 'yearly' ? 'border-primary/50 bg-primary/5' : 'border-white/10 hover:border-white/20'}`}
            >
              {selectedPlan === 'yearly' && (
                <span className="absolute -top-2 left-4 px-2 py-0.5 bg-primary text-navy-deep text-[10px] font-bold rounded-full uppercase">Populair</span>
              )}
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'yearly' ? 'border-primary' : 'border-white/30'}`}>
                  {selectedPlan === 'yearly' && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">{PRICING.yearly.label}</span>
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-[10px] font-bold rounded-full">{PRICING.yearly.discount}</span>
                  </div>
                  <span className="text-xs text-white/40">{PRICING.yearly.sublabel} · ~{PRICING.yearly.monthly} per maand</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-white">{PRICING.yearly.price}</span>
                <span className="text-white/40 text-sm">{PRICING.yearly.period}</span>
              </div>
            </button>

            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`flex items-center justify-between p-5 rounded-2xl border transition-all duration-200 ${selectedPlan === 'monthly' ? 'border-primary/50 bg-primary/5' : 'border-white/10 hover:border-white/20'}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedPlan === 'monthly' ? 'border-primary' : 'border-white/30'}`}>
                  {selectedPlan === 'monthly' && <div className="w-2.5 h-2.5 rounded-full bg-primary" />}
                </div>
                <div className="text-left">
                  <span className="font-semibold text-white">{PRICING.monthly.label}</span>
                  <br />
                  <span className="text-xs text-white/40">{PRICING.monthly.sublabel}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-white">{PRICING.monthly.price}</span>
                <span className="text-white/40 text-sm">{PRICING.monthly.period}</span>
              </div>
            </button>
          </div>

          <div className="border-t border-white/5 pt-6 mb-8">
            <ul className="grid gap-3">
              {PRICING.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 9l3.5 3.5L14 6" stroke="#CDFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <a href="#download" className="block w-full py-4 bg-primary text-navy-deep font-bold text-center rounded-2xl hover:shadow-[0_0_30px_rgba(205,255,0,0.3)] transition-all duration-200">
            Start gratis proefperiode
          </a>
        </div>
      </div>
    </section>
  )
}
