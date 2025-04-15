'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-[#1A2A1A] flex flex-col items-center justify-center z-50">
      <div className="w-64 h-64 relative mb-12 animate-pulse">
        <Image
          src="/images/your-new-logo.png"
          alt="İnci DMC Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      <div className="w-80 h-3 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5 shadow-lg">
        <div 
          className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all duration-300 ease-out"
          style={{ width: `${loadingProgress}%` }}
        >
          <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-r from-transparent to-white/30 blur-sm"></div>
        </div>
      </div>
      
      <div className="mt-6 flex items-center gap-2">
        <span className="text-emerald-400 font-semibold text-lg">{loadingProgress}%</span>
        <span className="text-white/70 text-sm">Yükleniyor...</span>
      </div>
    </div>
  )
} 