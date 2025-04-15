'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type FormData = {
  acenteAdi: string
  telefon: string
  mobil: string
  ulke: string
  sehir: string
  adres: string
  cinsiyet: 'erkek' | 'kadin'
  isim: string
  soyisim: string
  email: string
}

export default function AcentaForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    acenteAdi: '',
    telefon: '',
    mobil: '',
    ulke: '',
    sehir: '',
    adres: '',
    cinsiyet: 'erkek',
    isim: '',
    soyisim: '',
    email: ''
  })
  
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      // Burada form verilerini API'ye gönderme işlemi yapılabilir
      // Örnek: await fetch('/api/acenta-basvuru', { method: 'POST', body: JSON.stringify(formData) })
      
      // Simüle edilmiş başarılı işlem
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSuccess(true)
      // Başarılı mesajı gösterdikten sonra anasayfaya yönlendir
      setTimeout(() => {
        router.push('/')
      }, 3000)
    } catch (err) {
      setError('Başvuru gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        <h2 className="text-2xl font-semibold text-green-800 mb-2">Başvurunuz Alındı!</h2>
        <p className="text-green-700">Başvurunuz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.</p>
        <p className="text-sm text-green-600 mt-4">Anasayfaya yönlendiriliyorsunuz...</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
      {/* Acente Bilgileri */}
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">Acente Bilgileri</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="acenteAdi" className="block text-sm font-medium text-gray-700">
                Acente Adı *
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="acenteAdi"
                  id="acenteAdi"
                  required
                  value={formData.acenteAdi}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">
                Telefon *
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="telefon"
                  id="telefon"
                  required
                  value={formData.telefon}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="mobil" className="block text-sm font-medium text-gray-700">
                Mobil
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="mobil"
                  id="mobil"
                  value={formData.mobil}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="ulke" className="block text-sm font-medium text-gray-700">
                Ülke *
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="ulke"
                  id="ulke"
                  required
                  value={formData.ulke}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="sehir" className="block text-sm font-medium text-gray-700">
                Şehir *
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="sehir"
                  id="sehir"
                  required
                  value={formData.sehir}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="adres" className="block text-sm font-medium text-gray-700">
                Adres *
              </label>
              <div className="mt-1">
                <textarea
                  name="adres"
                  id="adres"
                  required
                  value={formData.adres}
                  onChange={handleChange}
                  rows={3}
                  className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Yönetici Bilgileri */}
        <div className="pt-8">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Yönetici Bilgileri</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="cinsiyet" className="block text-sm font-medium text-gray-700">
                Cinsiyet
              </label>
              <div className="mt-1">
                <select
                  id="cinsiyet"
                  name="cinsiyet"
                  value={formData.cinsiyet}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                >
                  <option value="erkek">Erkek</option>
                  <option value="kadin">Kadın</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="isim" className="block text-sm font-medium text-gray-700">
                İsim *
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="isim"
                  id="isim"
                  required
                  value={formData.isim}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="soyisim" className="block text-sm font-medium text-gray-700">
                Soyisim *
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="soyisim"
                  id="soyisim"
                  required
                  value={formData.soyisim}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-posta *
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form gönderme butonu */}
      <div className="pt-5">
        {error && (
          <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
              loading ? 'bg-emerald-400' : 'bg-emerald-600 hover:bg-emerald-700'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500`}
          >
            {loading ? 'Gönderiliyor...' : 'Başvuruyu Gönder'}
          </button>
        </div>
      </div>
    </form>
  )
} 