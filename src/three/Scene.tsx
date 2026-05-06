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
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-3, -1, -3]} intensity={0.3} color="#4488ff" />
        <pointLight position={[2, 2, 3]} intensity={0.5} color="#CDFF00" />
        <Stars radius={100} depth={60} count={2000} factor={3} fade speed={0.5} />
        <Globe scrollProgress={scrollProgress} />
      </Suspense>
    </Canvas>
  )
}
