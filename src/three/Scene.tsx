interface SceneProps {
  scrollProgress: number
}

export function Scene({ scrollProgress }: SceneProps) {
  const opacity = 1 - scrollProgress * 0.2

  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        background: '#0066FF',
        opacity: Math.max(opacity, 0.3),
      }}
    />
  )
}
