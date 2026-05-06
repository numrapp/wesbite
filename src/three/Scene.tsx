import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Globe } from './Globe'
import { Stars } from '@react-three/drei'

interface SceneProps {
  scrollProgress: number
}

export function Scene({ scrollProgress }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Stars radius={100} depth={60} count={1500} factor={3} fade speed={0.3} />
        <Globe scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  )
}
