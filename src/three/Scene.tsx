interface SceneProps {
  scrollProgress: number
}

export function Scene({ scrollProgress }: SceneProps) {
  const opacity = 1 - scrollProgress * 0.3
  const translateY = scrollProgress * -80
  const scale = 1 + scrollProgress * 0.05

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      <img
        src="/images/earth-rotate.gif"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto max-w-none object-cover"
        style={{
          transform: `translate(-50%, -50%) translateY(${translateY}px) scale(${scale})`,
          opacity: Math.max(opacity, 0.2),
          imageRendering: 'auto',
        }}
      />
    </div>
  )
}
