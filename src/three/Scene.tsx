interface SceneProps {
  scrollProgress: number
}

export function Scene({ scrollProgress }: SceneProps) {
  const translateY = scrollProgress * -200
  const scale = 1 + scrollProgress * 0.1
  const opacity = 1 - scrollProgress * 0.6

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      <img
        src="/images/earth-night.jpg"
        alt=""
        className="absolute w-full h-full object-cover transition-none"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          opacity: Math.max(opacity, 0.15),
        }}
      />
    </div>
  )
}
