import { useEffect } from 'react'
import Lenis from 'lenis'
import { Scene } from './three/Scene'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AppShowcase } from './components/AppShowcase'
import { Features } from './components/Features'
import { Feed } from './components/Feed'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { DownloadCTA } from './components/DownloadCTA'
import { Footer } from './components/Footer'
import { LoadingScreen } from './components/LoadingScreen'
import { useScrollProgress } from './hooks/useScrollProgress'

function App() {
  const scrollProgress = useScrollProgress()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <LoadingScreen />
      <Scene scrollProgress={scrollProgress} />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AppShowcase />
        <Features />
        <Feed />
        <HowItWorks />
        <Pricing />
        <DownloadCTA />
        <Footer />
      </div>
    </>
  )
}

export default App
