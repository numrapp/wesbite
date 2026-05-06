import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Feed() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feed-content',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative px-6 py-32">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="feed-content grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold mb-6 text-white">
              Laat je werk <span className="text-primary">zien</span>
            </h2>
            <p className="text-white/50 text-lg mb-6 leading-relaxed">
              Deel foto's en video's van je werk in de numr feed. Laat zien wat je doet en word ontdekt door anderen in Nederland.
            </p>
            <ul className="flex flex-col gap-4 mb-8">
              {[
                'Deel video\'s en foto\'s van je projecten',
                'Word gevonden door potentiele klanten',
                'Volg andere ondernemers in jouw regio',
                'Inspireer en word geinspireerd',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/60">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 9l3.5 3.5L14 6" stroke="#CDFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative w-[240px] md:w-[280px]">
              <div className="relative aspect-[393/852] rounded-[2.8rem] bg-[#1c1c1e] border-[5px] border-[#2c2c2e] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.7)]">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[75px] h-[18px] bg-[#1c1c1e] rounded-b-xl z-20" />
                <img
                  src="/images/screen-feed.png"
                  alt="numr Feed"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
