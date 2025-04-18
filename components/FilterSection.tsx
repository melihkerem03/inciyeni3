'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import BudgetFilter from '@/components/filters/BudgetFilter'
import DateFilter from '@/components/filters/DateFilter'

interface FilterSectionProps {
  totalTours: number
}

export default function FilterSection({ totalTours }: FilterSectionProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  return (
    <section className="relative z-30">
      <div className="max-w-7xl mx-auto px-4 static">
        <div className="bg-white rounded-2xl md:rounded-full shadow-lg p-2 md:p-3 overflow-visible transform -translate-y-6 md:-translate-y-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 relative">
            <div className="flex items-center gap-2 w-full md:w-auto flex-wrap justify-center">
              {/* Bütçe Filter - client component */}
              <BudgetFilter />

              {/* Seyahat tarihi Filter - client component */}
              <DateFilter />
              
              {/* Temizle butonu - yalnızca filtre varsa göster */}
              {(searchParams.toString().length > 0) && (
                <button
                  onClick={() => {
                    router.push('/tours');
                  }}
                  className="flex items-center px-4 py-3 rounded-full bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Filtreleri Temizle
                </button>
              )}
            </div>
            
            {/* Toplam sonuç sayısı */}
            {totalTours > 0 && (
              <div className="text-sm text-gray-500 mt-2 md:mt-0">
                <span className="font-medium text-gray-700">{totalTours}</span> tur bulundu
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
} 