'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

// Para birimi seçenekleri
const currencies = [
  { value: 'TRY', label: '₺ Türk Lirası' },
  { value: 'EUR', label: '€ Euro' },
  { value: 'USD', label: '$ Dolar' }
]

export default function BudgetFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  // Modal açık mı durumu
  const [isOpen, setIsOpen] = useState(false)
  
  // Seçili para birimi ve fiyat aralığı
  const [selectedCurrency, setSelectedCurrency] = useState('TRY')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  
  // Client-side değerleri yükle
  useEffect(() => {
    setSelectedCurrency(searchParams.get('currency') || 'TRY')
    setMinPrice(searchParams.get('minPrice') || '')
    setMaxPrice(searchParams.get('maxPrice') || '')
  }, [searchParams])
  
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
    
    // Para birimi ekle
    if (selectedCurrency) {
      params.set('currency', selectedCurrency)
    } else {
      params.delete('currency')
    }
    
    // Min fiyat ekle
    if (minPrice) {
      params.set('minPrice', minPrice)
    } else {
      params.delete('minPrice')
    }
    
    // Max fiyat ekle
    if (maxPrice) {
      params.set('maxPrice', maxPrice)
    } else {
      params.delete('maxPrice')
    }
    
    // URL'i güncelle ve modalı kapat
    router.push(`/tours?${params.toString()}`)
    setIsOpen(false)
  }
  
  // Filtreyi temizle
  const clearFilter = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('currency')
    params.delete('minPrice')
    params.delete('maxPrice')
    
    router.push(`/tours?${params.toString()}`)
    setSelectedCurrency('TRY')
    setMinPrice('')
    setMaxPrice('')
    setIsOpen(false)
  }
  
  // Para birimi sembolü
  const getCurrencySymbol = () => {
    switch (selectedCurrency) {
      case 'TRY': return '₺'
      case 'EUR': return '€'
      case 'USD': return '$'
      default: return '₺'
    }
  }
  
  // Butonun gösterimi
  const getButtonText = () => {
    if (minPrice && maxPrice) {
      return `${getCurrencySymbol()} ${formatNumber(minPrice)} - ${formatNumber(maxPrice)}`
    }
    if (minPrice) {
      return `${getCurrencySymbol()} ${formatNumber(minPrice)}+`
    }
    if (maxPrice) {
      return `${getCurrencySymbol()} 0 - ${formatNumber(maxPrice)}`
    }
    return 'Bütçe'
  }
  
  // Sayıyı formatla (1000 -> 1.000)
  const formatNumber = (num: string) => {
    return new Intl.NumberFormat('tr-TR').format(parseInt(num))
  }
  
  const isFiltered = minPrice || maxPrice
  
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
            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
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
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Bütçe Filtresi</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              {/* Para Birimi Seçimi */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Para Birimi</label>
                <div className="grid grid-cols-3 gap-2">
                  {currencies.map(currency => (
                    <button
                      key={currency.value}
                      className={`px-3 py-2 text-sm rounded-md border ${selectedCurrency === currency.value ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'border-gray-300 hover:bg-gray-50'}`}
                      onClick={() => setSelectedCurrency(currency.value)}
                    >
                      {currency.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Fiyat Giriş Alanları */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Fiyat Aralığı</label>
                <div className="flex items-center space-x-3">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{getCurrencySymbol()}</span>
                    <input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      min={0}
                      className="w-full pl-8 pr-3 py-2.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                  <span className="text-gray-400">-</span>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">{getCurrencySymbol()}</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      min={0}
                      className="w-full pl-8 pr-3 py-2.5 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              
              {/* Hızlı Seçim Düğmeleri */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Hızlı Seçim</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className="px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-50"
                    onClick={() => {
                      setMinPrice('0');
                      setMaxPrice('5000');
                    }}
                  >
                    {getCurrencySymbol()} 0 - 5.000
                  </button>
                  <button
                    className="px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-50"
                    onClick={() => {
                      setMinPrice('5000');
                      setMaxPrice('10000');
                    }}
                  >
                    {getCurrencySymbol()} 5.000 - 10.000
                  </button>
                  <button
                    className="px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-50"
                    onClick={() => {
                      setMinPrice('10000');
                      setMaxPrice('20000');
                    }}
                  >
                    {getCurrencySymbol()} 10.000 - 20.000
                  </button>
                  <button
                    className="px-3 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-50"
                    onClick={() => {
                      setMinPrice('20000');
                      setMaxPrice('');
                    }}
                  >
                    {getCurrencySymbol()} 20.000+
                  </button>
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="flex items-center justify-between p-4 border-t">
              <button
                onClick={clearFilter}
                className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none"
              >
                Temizle
              </button>
              <button
                onClick={applyFilter}
                className="px-4 py-2.5 text-sm font-medium text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none"
              >
                Uygula
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 