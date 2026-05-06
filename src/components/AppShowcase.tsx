import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function PhoneScreen1() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="h-6 bg-white" />
      <div className="px-5 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-5 h-5 rounded bg-[#CDFF00] flex items-center justify-center">
            <span className="text-[8px] font-bold text-[#1a2235]">n</span>
          </div>
          <span className="text-[10px] font-bold text-[#1a2235]">Nieuwe factuur</span>
        </div>
        <div className="flex gap-1 mt-2">
          <div className="h-1 flex-1 bg-[#CDFF00] rounded-full" />
          <div className="h-1 flex-1 bg-[#CDFF00] rounded-full" />
          <div className="h-1 flex-1 bg-gray-200 rounded-full" />
          <div className="h-1 flex-1 bg-gray-200 rounded-full" />
        </div>
      </div>
      <div className="flex-1 px-5 py-4 flex flex-col">
        <p className="text-[8px] text-gray-400 uppercase tracking-wider mb-1">Stap 1 van 4</p>
        <h3 className="text-[14px] font-black text-[#1a2235] leading-tight">Wat wil je<br/><span className="text-[#6b8f00]">versturen?</span></h3>
        <p className="text-[8px] text-gray-400 mt-1 mb-4">Kies het type document</p>
        
        <div className="flex flex-col gap-2 flex-1">
          <div className="p-3 rounded-xl border-2 border-[#1a2235] bg-[#f8fdf0] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#CDFF00] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a2235" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#1a2235]">Factuur</p>
              <p className="text-[7px] text-gray-400">Stuur een betaalverzoek</p>
            </div>
            <svg className="ml-auto" width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#1a2235" strokeWidth="2"/><path d="M8 12l3 3 5-5" stroke="#1a2235" strokeWidth="2"/></svg>
          </div>
          
          <div className="p-3 rounded-xl border border-gray-200 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8"/></svg>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-700">Offerte</p>
              <p className="text-[7px] text-gray-400">Stuur een prijsvoorstel</p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-3">
          <div className="w-full py-3 bg-[#1a2235] rounded-xl flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">Verder</span>
            <svg className="ml-1" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneScreen2() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="h-6 bg-white" />
      <div className="px-5 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a2235" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          <span className="text-[10px] font-bold text-[#1a2235]">Nieuwe factuur</span>
        </div>
        <div className="flex gap-1 mt-2">
          <div className="h-1 flex-1 bg-[#CDFF00] rounded-full" />
          <div className="h-1 flex-1 bg-[#CDFF00] rounded-full" />
          <div className="h-1 flex-1 bg-[#CDFF00] rounded-full" />
          <div className="h-1 flex-1 bg-gray-200 rounded-full" />
        </div>
      </div>
      <div className="flex-1 px-5 py-4 flex flex-col">
        <p className="text-[8px] text-gray-400 uppercase tracking-wider mb-1">Stap 3 van 4</p>
        <h3 className="text-[14px] font-black text-[#1a2235] leading-tight">Voor <span className="text-[#6b8f00]">wie?</span></h3>
        <p className="text-[8px] text-gray-400 mt-1 mb-3">Kies een klant of voeg een nieuwe toe.</p>

        <div className="relative mb-3">
          <div className="w-full px-3 py-2 bg-gray-50 rounded-lg border border-gray-200 flex items-center gap-2">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <span className="text-[8px] text-gray-400">Zoek klant of typ nieuwe naam</span>
          </div>
        </div>

        <p className="text-[7px] text-gray-400 uppercase tracking-wider mb-2">Recent</p>
        
        <div className="flex flex-col gap-2">
          <div className="p-3 rounded-xl border-2 border-[#1a2235] bg-[#f8fdf0] flex items-center">
            <div>
              <p className="text-[9px] font-bold text-[#1a2235]">Jansen Bouw B.V.</p>
              <p className="text-[7px] text-gray-400">KvK 34567890 · Amsterdam</p>
            </div>
            <svg className="ml-auto" width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#1a2235"/><path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2"/></svg>
          </div>
          <div className="p-3 rounded-xl border border-gray-200 flex items-center">
            <div>
              <p className="text-[9px] font-bold text-gray-700">Kapsalon Roos</p>
              <p className="text-[7px] text-gray-400">KvK 56781234 · Utrecht</p>
            </div>
          </div>
          <div className="p-3 rounded-xl border border-gray-200 flex items-center">
            <div>
              <p className="text-[9px] font-bold text-gray-700">De Boer & Zn.</p>
              <p className="text-[7px] text-gray-400">KvK 12345678 · Rotterdam</p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-3">
          <div className="w-full py-3 bg-[#1a2235] rounded-xl flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">Verder</span>
            <svg className="ml-1" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneScreen3() {
  return (
    <div className="w-full h-full bg-white flex flex-col">
      <div className="h-6 bg-white" />
      <div className="px-5 pt-4 pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a2235" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          <span className="text-[10px] font-bold text-[#1a2235]">Controleren</span>
        </div>
        <div className="flex gap-1 mt-2">
          <div className="h-1 flex-1 bg-[#CDFF00] rounded-full" />
          <div className="h-1 flex-1 bg-[#CDFF00] rounded-full" />
          <div className="h-1 flex-1 bg-[#CDFF00] rounded-full" />
          <div className="h-1 flex-1 bg-[#CDFF00] rounded-full" />
        </div>
      </div>
      <div className="flex-1 px-5 py-4 flex flex-col">
        <p className="text-[8px] text-gray-400 uppercase tracking-wider mb-1">Stap 4 van 4 · Laatste check</p>
        <h3 className="text-[14px] font-black text-[#1a2235] leading-tight">Even <span className="text-[#6b8f00]">controleren.</span></h3>
        <p className="text-[8px] text-gray-400 mt-1 mb-3">Klopt alles? Dan versturen we hem.</p>

        <div className="bg-gray-50 rounded-xl p-3 mb-3 flex flex-col gap-2">
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-[7px] text-gray-400">Type</span>
            <span className="text-[8px] font-bold text-[#1a2235]">Factuur</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-[7px] text-gray-400">Klant</span>
            <span className="text-[8px] font-bold text-[#1a2235]">Jansen Bouw B.V.</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-1">
            <span className="text-[7px] text-gray-400">Taal</span>
            <span className="text-[8px] font-bold text-[#1a2235]">Nederlands</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[7px] text-gray-400">Regels</span>
            <span className="text-[8px] font-bold text-[#1a2235]">3 items</span>
          </div>
        </div>

        <div className="bg-[#CDFF00] rounded-xl p-3 mb-3">
          <div className="flex justify-between items-center">
            <span className="text-[8px] font-bold text-[#1a2235]">Totaal incl. BTW</span>
            <span className="text-[14px] font-black text-[#1a2235]">€2.288,63</span>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <div className="w-full py-3 bg-[#CDFF00] rounded-xl flex items-center justify-center gap-2">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a2235" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            <span className="text-[10px] font-bold text-[#1a2235]">Verstuur factuur</span>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 py-2 border border-gray-200 rounded-lg flex items-center justify-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
              <span className="text-[7px] font-medium text-gray-600">WhatsApp</span>
            </div>
            <div className="flex-1 py-2 border border-gray-200 rounded-lg flex items-center justify-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
              <span className="text-[7px] font-medium text-gray-600">E-mail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneFrame({ children, label, className = '' }: { children: React.ReactNode; label: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="relative w-[190px] md:w-[240px]">
        <div className="rounded-[2.2rem] md:rounded-[2.8rem] bg-[#1c1c1e] p-[5px] shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
          <div className="relative rounded-[1.9rem] md:rounded-[2.5rem] overflow-hidden aspect-[393/852]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55px] md:w-[70px] h-[12px] md:h-[16px] bg-[#1c1c1e] rounded-b-lg z-20" />
            {children}
          </div>
        </div>
      </div>
      <span className="text-[11px] md:text-xs text-white/40 font-medium">{label}</span>
    </div>
  )
}

export function AppShowcase() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.showcase-phone',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold mb-4 text-white">
            Ontworpen voor <span className="text-primary">snelheid</span>
          </h2>
          <p className="text-white/40 text-lg max-w-lg mx-auto">
            Van type kiezen tot versturen in vier simpele stappen.
          </p>
        </div>

        <div className="flex justify-center items-start gap-4 md:gap-8 overflow-x-auto pb-4">
          <PhoneFrame label="1. Factuur of offerte" className="showcase-phone">
            <PhoneScreen1 />
          </PhoneFrame>
          <PhoneFrame label="2. Klant selecteren" className="showcase-phone">
            <PhoneScreen2 />
          </PhoneFrame>
          <PhoneFrame label="3. Controleer & verstuur" className="showcase-phone">
            <PhoneScreen3 />
          </PhoneFrame>
        </div>
      </div>
    </section>
  )
}
