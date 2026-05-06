import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 400)
          return 100
        }
        return p + Math.random() * 20
      })
    }, 80)

    return () => clearInterval(interval)
  }, [])

  if (!visible) return null

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0f1520] flex flex-col items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <img src="/images/app-icon.png" alt="numr" className="w-16 h-16 rounded-2xl mb-6" />
      <div className="w-32 h-0.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-150"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
    </div>
  )
}
