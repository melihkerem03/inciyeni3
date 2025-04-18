import './globals.css'
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Footer from '@/components/common/footer'
import Image from 'next/image'
import GlobalLoadingProvider from '@/components/common/GlobalLoadingProvider'

const inter = Inter({ subsets: ['latin'] })

// Playfair Display fontunu tanımla
const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'], // Türkçe karakterler için latin-ext ekleyin
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-butler', // Butler adını değişken olarak tutuyoruz
})

export const metadata: Metadata = {
  title: 'İnci Tur - Premium Seyahat Deneyimi',
  description: 'İnci Tur ile unutulmaz seyahat deneyimleri yaşayın. Özel turlar, lüks konaklama ve benzersiz rotalar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.className} ${playfair.variable} relative`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/svg+xml" href="/incidmclogo.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${inter.className} ${playfair.variable} relative overflow-x-hidden`}>
        {/* Ana arka plan pattern */}
        <div className="fixed inset-0 w-full min-h-screen z-0">
          <Image
            src="/images/pattern-bg.png"
            alt=""
            fill
            className="object-cover opacity-[0.03]"
            priority
          />
        </div>

        <GlobalLoadingProvider>
          {children}
          <Footer />
        </GlobalLoadingProvider>
      </body>
    </html>
  )
}
