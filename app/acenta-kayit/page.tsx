import AcentaKayitForm from './AcentaKayitForm'
import Image from 'next/image'
import Link from 'next/link'

export default function AcentaKayitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 relative overflow-hidden">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-teal-300/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/3 w-80 h-80 bg-gradient-to-tr from-teal-200/20 to-blue-300/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Link href="/" className="inline-block">
            <div className="relative w-40 h-40 mx-auto transform hover:scale-105 transition-transform duration-300">
              {/* Işıltı efekti */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              
              {/* Logo konteyner */}
              <div className="relative bg-white rounded-full shadow-2xl overflow-hidden border border-emerald-50 p-1 w-full h-full">
                {/* Dekoratif çember */}
                <div className="absolute inset-2 border-2 border-emerald-500/30 rounded-full"></div>
                
                {/* Logo */}
                <div className="w-full h-full flex items-center justify-center p-4">
                  <Image 
                    src="/incidmclogo.jpg" 
                    alt="İnci DMC Logo" 
                    width={120}
                    height={120}
                    className="object-contain drop-shadow-md rounded-full"
                  />
                </div>
              </div>
            </div>
          </Link>
          <h1 className="mt-8 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Acenta Kayıt Formu
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            İnci DMC'nin ayrıcalıklı acenta ağına katılın ve premium seyahat deneyimlerini müşterilerinize sunun.
          </p>
        </div>
        
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden backdrop-blur-sm bg-white/90 border border-gray-100">
          <div className="px-4 py-6 sm:p-8">
            <AcentaKayitForm />
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-600">
            Zaten bir hesabınız var mı?{' '}
            <Link href="/acenta-giris" className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors">
              Giriş yapın
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
} 