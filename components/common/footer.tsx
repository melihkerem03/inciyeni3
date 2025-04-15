"use client";

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1A2A1A] text-white relative z-10">
      
      

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Logo ve Şirket Bilgileri */}
          <div className="md:col-span-4 space-y-8">
            <Link href="/" className="block">
              <Image
                src="/images/logo.png"
                alt="İnci DMC"
                width={180}
                height={60}
                className="brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 leading-relaxed max-w-md text-lg">
              20 yılı aşkın deneyimimizle, dünya çapında premium seyahat deneyimleri sunuyoruz. 
              Her yolculuk, bizim için yeni bir hikaye, her misafir yeni bir dostluk demektir.
            </p>
            <div className="flex gap-4">
              {/* Sosyal medya ikonları için gradient border ekledik */}
              <Link href="#" className="group relative p-0.5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600">
                <div className="w-11 h-11 rounded-full bg-[#1A2A1A] flex items-center justify-center transition-colors group-hover:bg-transparent">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </div>
              </Link>
              {/* Diğer sosyal medya ikonları da aynı şekilde */}
            </div>
          </div>

          {/* Hızlı Linkler - Daha belirgin tıklanabilir alanlar */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-lg mb-6">Keşfet</h3>
            <ul className="space-y-4 text-white/80">
              <li>
                <Link 
                  href="/tours" 
                  className="hover:text-emerald-400 transition-colors block py-1 cursor-pointer z-20 relative"
                >
                  Tüm Turlar
                </Link>
              </li>
              <li>
                <Link 
                  href="/opportunity" 
                  className="hover:text-emerald-400 transition-colors block py-1 cursor-pointer z-20 relative"
                >
                  Fırsatlar
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="hover:text-emerald-400 transition-colors block py-1 cursor-pointer z-20 relative"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="hover:text-emerald-400 transition-colors block py-1 cursor-pointer z-20 relative"
                >
                  Hakkımızda
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-6">İletişim</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Barbaros Bulvarı No:87 Beşiktaş, İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Link 
                  href="mailto:info@incidmc.com" 
                  className="hover:text-emerald-400 transition-colors cursor-pointer z-20 relative"
                >
                  info@incidmc.com
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <Link 
                  href="tel:+902123456789"
                  className="hover:text-emerald-400 transition-colors cursor-pointer z-20 relative"
                >
                  +90 (212) 345 67 89
                </Link>
              </li>
            </ul>
          </div>

          {/* Çalışma Saatleri */}
          <div className="md:col-span-3">
            <h3 className="font-semibold text-lg mb-6">Çalışma Saatleri</h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="block font-medium">Pazartesi - Cuma</span>
                  <span className="block text-white/60">09:00 - 18:00</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="block font-medium">Cumartesi</span>
                  <span className="block text-white/60">10:00 - 15:00</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <span className="block font-medium">Pazar</span>
                  <span className="block text-white/60">Kapalı</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} İnci DMC. Tüm hakları saklıdır.
          </p>
          
          <div className="flex gap-6 text-white/60 text-sm">
            <Link 
              href="/privacy-policy" 
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer z-20 relative"
            >
              Gizlilik Politikası
            </Link>
            <Link 
              href="/terms-of-service" 
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer z-20 relative"
            >
              Kullanım Koşulları
            </Link>
            <Link 
              href="/cookies" 
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer z-20 relative"
            >
              Çerezler
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
