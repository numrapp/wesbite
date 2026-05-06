import { useEffect, useRef } from 'react'

interface SceneProps {
  scrollProgress: number
}

export function Scene({ scrollProgress }: SceneProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  const rotationRef = useRef(0)
  const frameRef = useRef(0)

  useEffect(() => {
    let lastTime = performance.now()

    function animate(time: number) {
      const delta = (time - lastTime) / 1000
      lastTime = time
      rotationRef.current += delta * 3
      if (imgRef.current) {
        const scrollRotate = scrollProgress * 60
        const totalRotation = rotationRef.current + scrollRotate
        const translateY = scrollProgress * -100
        const scale = 1.3 + scrollProgress * 0.1
        const opacity = 1 - scrollProgress * 0.4

        imgRef.current.style.transform = `translate(-50%, -50%) translateY(${translateY}px) scale(${scale}) rotate(${totalRotation}deg)`
        imgRef.current.style.opacity = `${Math.max(opacity, 0.2)}`
      }
      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameRef.current)
  }, [scrollProgress])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#020a18]">
      <img
        ref={imgRef}
        src="/images/earth-night.jpg"
        alt=""
        className="absolute top-1/2 left-1/2 w-[250vmax] h-[250vmax] max-w-none object-cover will-change-transform"
        style={{ imageRendering: 'auto' }}
      />
    </div>
  )
}
