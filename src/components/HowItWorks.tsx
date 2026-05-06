import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { num: '01', title: 'Maak je factuur of offerte', desc: 'Maak eenvoudig je factuur of offerte aan. Professioneel en snel.', icon: '📝' },
  { num: '02', title: 'Kies de taal', desc: 'Selecteer de taal van je klant uit 160+ opties. Van Arabisch tot Zweeds.', icon: '🌍' },
  { num: '03', title: 'Kies je klant', desc: 'Selecteer een bestaande klant of voeg een nieuwe toe met KvK-nummer.', icon: '👤' },
  { num: '04', title: 'Verstuur', desc: 'Verstuur direct via WhatsApp of e-mail. Je klant ontvangt het meteen.', icon: '🚀' },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.step-card',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="how-it-works" className="relative px-6 py-32">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4 text-white">
            Vier stappen. <span className="text-primary">Klaar.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <div key={i} className="step-card glass-card p-8 flex items-start gap-6">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-primary/60 uppercase tracking-widest">Stap {step.num}</span>
                </div>
                <h3 className="text-xl font-semibold text-white font-[family-name:var(--font-display)] mb-1">{step.title}</h3>
                <p className="text-white/40 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
