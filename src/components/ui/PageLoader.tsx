import { useEffect, useState } from 'react'
import { PixelLoader } from './PixelLoader'

const FADE_MS = 500

interface PageLoaderProps {
  visible: boolean
}

/** Overlay de tela cheia com o PixelLoader; some com fade quando visible=false. */
export function PageLoader({ visible }: PageLoaderProps) {
  const [mounted, setMounted] = useState(visible)

  useEffect(() => {
    if (visible) {
      setMounted(true)
      return
    }

    const timeout = window.setTimeout(() => setMounted(false), FADE_MS)
    return () => clearTimeout(timeout)
  }, [visible])

  if (!mounted) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-500 ease-out ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <PixelLoader />
    </div>
  )
}
