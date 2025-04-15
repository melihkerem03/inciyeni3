'use client'
import { createContext, useContext, useState, useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import LoadingScreen from './LoadingScreen'

// Context oluştur
const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: (loading: boolean) => {}
})

// Context hook
export const useLoading = () => useContext(LoadingContext)

// Minimum yükleme süresi (ms) - kullanıcı deneyimi için
const MIN_LOADING_TIME = 1000

export default function GlobalLoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [pageReady, setPageReady] = useState(false)
  const loadStartTime = useRef(Date.now())
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Sayfa yüklendiğinde
  useEffect(() => {
    const handleLoad = () => {
      const loadTime = Date.now() - loadStartTime.current
      const remainingTime = Math.max(0, MIN_LOADING_TIME - loadTime)
      
      // Minimum yükleme süresini sağlamak için
      setTimeout(() => {
        setPageReady(true)
      }, remainingTime)
    }

    // Sayfa zaten yüklendiyse
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      // Sayfa yüklenme olayını dinle
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  // Sayfa hazır olduğunda loading'i kapat
  useEffect(() => {
    if (pageReady) {
      setIsLoading(false)
    }
  }, [pageReady])

  // Sayfa değişikliklerini izle
  useEffect(() => {
    // İlk yükleme değilse (pathname değiştiğinde)
    if (!isLoading && pathname) {
      // Yeni sayfa geçişi başladı
      setIsLoading(true)
      setPageReady(false)
      loadStartTime.current = Date.now()
      
      // Sayfa içeriğinin yüklenmesini bekle
      const checkPageLoaded = () => {
        if (document.readyState === 'complete') {
          const loadTime = Date.now() - loadStartTime.current
          const remainingTime = Math.max(0, MIN_LOADING_TIME - loadTime)
          
          setTimeout(() => {
            setPageReady(true)
          }, remainingTime)
        } else {
          setTimeout(checkPageLoaded, 100)
        }
      }
      
      checkPageLoaded()
    }
  }, [pathname, searchParams])

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        {children}
      </div>
      {isLoading && <LoadingScreen />}
    </LoadingContext.Provider>
  )
} 