'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CalendarIcon, XMarkIcon, CheckIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

// Ay isimleri
const monthNames = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
]

// Yıllar
const years = Array.from({ length: 3 }, (_, i) => new Date().getFullYear() + i)

export default function DateFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Modal açık mı durumu
  const [isOpen, setIsOpen] = useState(false)
  
  // Seçili tarih aralığı
  const [startMonth, setStartMonth] = useState('')
  const [startYear, setStartYear] = useState('')
  const [endMonth, setEndMonth] = useState('')
  const [endYear, setEndYear] = useState('')
  
  // Şu anki ay ve yıl
  const currentDate = new Date()
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0')
  const currentYear = currentDate.getFullYear().toString()
  
  // Client-side değerleri yükle
  useEffect(() => {
    // URL'den başlangıç ve bitiş tarihlerini al
    const startDate = searchParams.get('startDate') || ''
    const endDate = searchParams.get('endDate') || ''
    
    if (startDate) {
      const [year, month] = startDate.split('-')
      setStartYear(year)
      setStartMonth(month)
    } else {
      setStartYear(currentYear)
      setStartMonth(currentMonth)
    }
    
    if (endDate) {
      const [year, month] = endDate.split('-')
      setEndYear(year)
      setEndMonth(month)
    } else {
      setEndYear('')
      setEndMonth('')
    }
  }, [searchParams, currentMonth, currentYear])
  
  // Modal açıldığında body'nin scrollunu devre dışı bırak
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  
  // Filtreyi uygula
  const applyFilter = () => {
    const params = new URLSearchParams(searchParams.toString())
    
    // Başlangıç tarihi ekle
    if (startMonth && startYear) {
      params.set('startDate', `${startYear}-${startMonth}`)
    } else {
      params.delete('startDate')
    }
    
    // Bitiş tarihi ekle
    if (endMonth && endYear) {
      params.set('endDate', `${endYear}-${endMonth}`)
    } else {
      params.delete('endDate')
    }
    
    // URL'i güncelle ve modalı kapat
    router.push(`/tours?${params.toString()}`)
    setIsOpen(false)
  }
  
  // Filtreyi temizle
  const clearFilter = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('startDate')
    params.delete('endDate')
    
    router.push(`/tours?${params.toString()}`)
    setStartMonth(currentMonth)
    setStartYear(currentYear)
    setEndMonth('')
    setEndYear('')
    setIsOpen(false)
  }
  
  // Tarih fonksiyonları
  const isDateInPast = (year: string, month: string) => {
    if (!year || !month) return false
    
    const targetDate = new Date(parseInt(year), parseInt(month) - 1)
    const today = new Date()
    today.setDate(1)
    today.setHours(0, 0, 0, 0)
    
    return targetDate < today
  }
  
  const isEndDateBeforeStartDate = (sYear: string, sMonth: string, eYear: string, eMonth: string) => {
    if (!sYear || !sMonth || !eYear || !eMonth) return false
    
    const startDate = new Date(parseInt(sYear), parseInt(sMonth) - 1)
    const endDate = new Date(parseInt(eYear), parseInt(eMonth) - 1)
    
    return endDate < startDate
  }
  
  const getMonthYearLabel = (month: string, year: string) => {
    if (!month || !year) return ''
    return `${monthNames[parseInt(month) - 1]} ${year}`
  }
  
  // Butonun gösterimi
  const getButtonText = () => {
    if (startMonth && startYear) {
      if (endMonth && endYear) {
        return `${getMonthYearLabel(startMonth, startYear)} - ${getMonthYearLabel(endMonth, endYear)}`
      }
      return `${getMonthYearLabel(startMonth, startYear)} sonrası`
    }
    return 'Tarih'
  }
  
  // Filtre uygulanmış mı durumu
  const isFiltered = 
    (startMonth && startYear && startMonth !== currentMonth) || 
    (endMonth && endYear)
  
  // Ay butonunun sınıfını belirle
  const getMonthButtonClass = (year: string, month: string, isStart: boolean) => {
    const selected = isStart 
      ? (startMonth === month && startYear === year)
      : (endMonth === month && endYear === year)
    
    const isPast = isDateInPast(year, month)
    
    if (selected) {
      return 'bg-emerald-500 text-white hover:bg-emerald-600'
    }
    if (isPast) {
      return 'text-gray-400 cursor-not-allowed'
    }
    return 'hover:bg-gray-100'
  }
  
  // Tarih dönüşüm fonksiyonları
  const getFullDateFromMonthYear = (year: string, month: string, isEndOfMonth = false) => {
    if (!year || !month) return ''
    
    if (isEndOfMonth) {
      // Ayın son gününü hesapla
      const lastDay = new Date(parseInt(year), parseInt(month), 0).getDate()
      return `${year}-${month}-${lastDay}`
    } else {
      // Ayın ilk günü
      return `${year}-${month}-01`
    }
  }
  
  return (
    <div className="relative">
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center justify-between space-x-2 px-4 py-3 rounded-full ${
          isFiltered ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
        } border transition-all duration-200 w-full md:w-auto min-w-[120px]`}
      >
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <span className="font-medium whitespace-nowrap">{getButtonText()}</span>
        </div>
        {isFiltered && (
          <span className="flex items-center justify-center bg-emerald-600 text-white text-xs rounded-full h-5 w-5">
            ✓
          </span>
        )}
      </button>
      
      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          {/* Modal Box */}
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Tarih Filtresi</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              {/* Tarih Aralığı Seçimi */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-md font-medium text-gray-900">Başlangıç Tarihi</h4>
                    <p className="text-sm text-gray-500">Seyahatinizin başlangıç ayını seçin</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowRightIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-md font-medium text-gray-900">Bitiş Tarihi (Opsiyonel)</h4>
                    <p className="text-sm text-gray-500">Seyahatinizin bitiş ayını seçin</p>
                  </div>
                </div>
                
                {/* Tarih Seçim Takvimi */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {/* Başlangıç Tarihi Seçimi */}
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium text-center mb-4">Başlangıç</h5>
                    
                    {/* Yıl Seçimi */}
                    <div className="flex justify-center mb-4 gap-2">
                      {years.map(year => (
                        <button
                          key={`start-${year}`}
                          className={`px-4 py-1.5 rounded-md ${startYear === year.toString() ? 'bg-emerald-100 text-emerald-700 font-medium' : 'hover:bg-gray-100'}`}
                          onClick={() => setStartYear(year.toString())}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                    
                    {/* Ay Seçimi */}
                    <div className="grid grid-cols-3 gap-2">
                      {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map(month => {
                        const isPast = isDateInPast(startYear, month)
                        return (
                          <button
                            key={`start-${month}`}
                            className={`px-2 py-2 rounded-md ${getMonthButtonClass(startYear, month, true)}`}
                            onClick={() => !isPast && setStartMonth(month)}
                            disabled={isPast}
                          >
                            {monthNames[parseInt(month) - 1].substring(0, 3)}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                  
                  {/* Bitiş Tarihi Seçimi */}
                  <div className="border rounded-lg p-4">
                    <h5 className="font-medium text-center mb-4">Bitiş (Opsiyonel)</h5>
                    
                    {/* Yıl Seçimi */}
                    <div className="flex justify-center mb-4 gap-2">
                      {years.map(year => (
                        <button
                          key={`end-${year}`}
                          className={`px-4 py-1.5 rounded-md ${endYear === year.toString() ? 'bg-emerald-100 text-emerald-700 font-medium' : 'hover:bg-gray-100'}`}
                          onClick={() => setEndYear(year.toString())}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                    
                    {/* Ay Seçimi */}
                    <div className="grid grid-cols-3 gap-2">
                      {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map(month => {
                        const isPast = isDateInPast(endYear, month)
                        const isBeforeStart = isEndDateBeforeStartDate(startYear, startMonth, endYear, month)
                        const isDisabled = isPast || isBeforeStart
                        
                        return (
                          <button
                            key={`end-${month}`}
                            className={`px-2 py-2 rounded-md ${getMonthButtonClass(endYear, month, false)}`}
                            onClick={() => !isDisabled && setEndMonth(month)}
                            disabled={isDisabled}
                          >
                            {monthNames[parseInt(month) - 1].substring(0, 3)}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Hızlı Seçim Düğmeleri */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Hızlı Seçim</label>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                  <button
                    className="px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-1"
                    onClick={() => {
                      const now = new Date()
                      setStartMonth((now.getMonth() + 1).toString().padStart(2, '0'))
                      setStartYear(now.getFullYear().toString())
                      setEndMonth('')
                      setEndYear('')
                    }}
                  >
                    <CalendarIcon className="h-4 w-4" />
                    <span>Bu Ay ve Sonrası</span>
                  </button>
                  <button
                    className="px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-1"
                    onClick={() => {
                      const now = new Date()
                      const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1)
                      setStartMonth((nextMonth.getMonth() + 1).toString().padStart(2, '0'))
                      setStartYear(nextMonth.getFullYear().toString())
                      setEndMonth('')
                      setEndYear('')
                    }}
                  >
                    <CalendarIcon className="h-4 w-4" />
                    <span>Gelecek Ay ve Sonrası</span>
                  </button>
                  <button
                    className="px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-1"
                    onClick={() => {
                      const now = new Date()
                      setStartMonth((now.getMonth() + 1).toString().padStart(2, '0'))
                      setStartYear(now.getFullYear().toString())
                      
                      const threeMonthsLater = new Date(now.getFullYear(), now.getMonth() + 3, 0)
                      setEndMonth((threeMonthsLater.getMonth() + 1).toString().padStart(2, '0'))
                      setEndYear(threeMonthsLater.getFullYear().toString())
                    }}
                  >
                    <CalendarIcon className="h-4 w-4" />
                    <span>Önümüzdeki 3 Ay</span>
                  </button>
                  <button
                    className="px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-50 flex items-center justify-center gap-1"
                    onClick={() => {
                      const now = new Date()
                      setStartMonth((now.getMonth() + 1).toString().padStart(2, '0'))
                      setStartYear(now.getFullYear().toString())
                      
                      const sixMonthsLater = new Date(now.getFullYear(), now.getMonth() + 6, 0)
                      setEndMonth((sixMonthsLater.getMonth() + 1).toString().padStart(2, '0'))
                      setEndYear(sixMonthsLater.getFullYear().toString())
                    }}
                  >
                    <CalendarIcon className="h-4 w-4" />
                    <span>Önümüzdeki 6 Ay</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Eğer sadece başlangıç tarihi seçiliyse açıklama ekleyelim */}
            {startMonth && startYear && !endMonth && !endYear && (
              <div className="mt-2 text-sm text-gray-500 italic">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Seçilen ay ve sonrasındaki tarihler için turlar gösterilecek
                </span>
              </div>
            )}
            
            {/* Modal Footer */}
            <div className="flex items-center justify-between p-4 border-t">
              <button
                onClick={clearFilter}
                className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none flex items-center gap-1"
              >
                <XMarkIcon className="h-4 w-4" />
                <span>Temizle</span>
              </button>
              <button
                onClick={applyFilter}
                className="px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none flex items-center gap-1"
              >
                <CheckIcon className="h-4 w-4" />
                <span>Uygula</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 