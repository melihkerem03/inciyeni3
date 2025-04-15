import AcentaGirisForm from './AcentaGirisForm'
import Image from 'next/image'

export default function AcentaGirisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-teal-300/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 right-1/3 w-80 h-80 bg-gradient-to-tr from-teal-200/20 to-blue-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="flex justify-center">
          <div className="relative w-40 h-40 transform hover:scale-105 transition-transform duration-300">
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
        </div>
        <h2 className="mt-8 text-center text-3xl font-extrabold text-gray-900 tracking-tight">
          Acenta Portalı
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          <span className="font-medium text-emerald-600 hover:text-emerald-500">
            Premium seyahat deneyimleri için özel erişim
          </span>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-xl sm:px-10 border border-gray-100 backdrop-blur-sm bg-white/80">
          <AcentaGirisForm />
        </div>
      </div>
      
      <div className="mt-12 text-center text-xs text-gray-500 z-10">
        <p>© {new Date().getFullYear()} İnci DMC. Tüm hakları saklıdır.</p>
      </div>
    </div>
  )
} 