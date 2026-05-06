import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface GlobeProps {
  scrollProgress: number
}

function EarthSphere() {
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 2048
    canvas.height = 1024
    const ctx = canvas.getContext('2d')!

    ctx.fillStyle = '#050510'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const continents: { latRange: [number, number]; lngRange: [number, number]; density: number }[] = [
      { latRange: [48, 72], lngRange: [-12, 42], density: 0.8 },
      { latRange: [35, 48], lngRange: [-10, 35], density: 0.6 },
      { latRange: [50, 54], lngRange: [3, 7.5], density: 1.5 },
      { latRange: [25, 50], lngRange: [-125, -70], density: 0.6 },
      { latRange: [30, 48], lngRange: [-90, -70], density: 0.9 },
      { latRange: [35, 42], lngRange: [-5, 3], density: 0.9 },
      { latRange: [48, 56], lngRange: [-5, 2], density: 1.0 },
      { latRange: [27, 37], lngRange: [-18, -5], density: 0.3 },
      { latRange: [-35, 5], lngRange: [-75, -35], density: 0.4 },
      { latRange: [-35, 35], lngRange: [15, 50], density: 0.3 },
      { latRange: [5, 45], lngRange: [60, 145], density: 0.5 },
      { latRange: [30, 45], lngRange: [100, 140], density: 0.9 },
      { latRange: [20, 35], lngRange: [68, 90], density: 0.8 },
      { latRange: [-40, -20], lngRange: [140, 155], density: 0.4 },
      { latRange: [55, 62], lngRange: [35, 60], density: 0.4 },
    ]

    for (const cont of continents) {
      const count = Math.floor(1500 * cont.density)
      for (let i = 0; i < count; i++) {
        const lat = cont.latRange[0] + Math.random() * (cont.latRange[1] - cont.latRange[0])
        const lng = cont.lngRange[0] + Math.random() * (cont.lngRange[1] - cont.lngRange[0])

        const x = ((lng + 180) / 360) * canvas.width
        const y = ((90 - lat) / 180) * canvas.height

        const isNL = lat >= 50 && lat <= 54 && lng >= 3 && lng <= 7.5
        const brightness = 0.5 + Math.random() * 0.5
        const size = 0.5 + Math.random() * 1.5

        if (isNL) {
          ctx.fillStyle = `rgba(205, 255, 0, ${brightness})`
          ctx.shadowColor = '#CDFF00'
          ctx.shadowBlur = 4
        } else {
          const r = Math.floor(255 * brightness)
          const g = Math.floor(200 * brightness)
          const b = Math.floor(80 * brightness)
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${brightness * 0.8})`
          ctx.shadowColor = `rgba(255, 180, 50, 0.5)`
          ctx.shadowBlur = 2
        }

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    ctx.shadowBlur = 0
    ctx.shadowColor = 'transparent'

    const coastlines: { latRange: [number, number]; lngRange: [number, number] }[] = [
      { latRange: [35, 70], lngRange: [-12, 42] },
      { latRange: [25, 50], lngRange: [-125, -65] },
      { latRange: [-35, 5], lngRange: [-75, -35] },
      { latRange: [5, 45], lngRange: [60, 145] },
      { latRange: [-40, -20], lngRange: [112, 155] },
      { latRange: [-35, 35], lngRange: [10, 52] },
    ]

    for (const coast of coastlines) {
      const count = 300
      for (let i = 0; i < count; i++) {
        const lat = coast.latRange[0] + Math.random() * (coast.latRange[1] - coast.latRange[0])
        const lng = coast.lngRange[0] + Math.random() * (coast.lngRange[1] - coast.lngRange[0])
        const x = ((lng + 180) / 360) * canvas.width
        const y = ((90 - lat) / 180) * canvas.height

        ctx.fillStyle = `rgba(20, 40, 80, ${0.3 + Math.random() * 0.3})`
        ctx.beginPath()
        ctx.arc(x, y, 1 + Math.random() * 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const tex = new THREE.CanvasTexture(canvas)
    tex.needsUpdate = true
    return tex
  }, [])

  return (
    <mesh>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

function Atmosphere() {
  return (
    <>
      <mesh scale={1.015}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial color="#1a4aff" transparent opacity={0.06} side={THREE.BackSide} />
      </mesh>
      <mesh scale={1.04}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial color="#0044ff" transparent opacity={0.03} side={THREE.BackSide} />
      </mesh>
    </>
  )
}

export function Globe({ scrollProgress }: GlobeProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return

    const autoRotate = state.clock.elapsedTime * 0.03
    const scrollRotate = scrollProgress * Math.PI * 1.5

    groupRef.current.rotation.y = autoRotate + scrollRotate

    const targetScale = 1 - scrollProgress * 0.15
    groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.03))

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      scrollProgress * -0.8,
      0.03
    )
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      scrollProgress * 1.0,
      0.03
    )
  })

  return (
    <group ref={groupRef}>
      <EarthSphere />
      <Atmosphere />
    </group>
  )
}
