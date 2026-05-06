import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader } from 'three'

interface GlobeProps {
  scrollProgress: number
}

function EarthSphere() {
  const texture = useLoader(TextureLoader, '/images/earth2.jpg')

  return (
    <mesh>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial map={texture} roughness={0.5} metalness={0.05} />
    </mesh>
  )
}

function Atmosphere() {
  return (
    <>
      <mesh scale={1.02}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial color="#4a9fff" transparent opacity={0.08} side={THREE.BackSide} />
      </mesh>
      <mesh scale={1.05}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial color="#1a6aff" transparent opacity={0.04} side={THREE.BackSide} />
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
