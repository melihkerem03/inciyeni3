'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

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
  password: string
  passwordConfirm: string
}

export default function AcentaKayitForm() {
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
    email: '',
    password: '',
    passwordConfirm: ''
  })
  
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [step, setStep] = useState(1)
  const [debugInfo, setDebugInfo] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    setStep(2)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setDebugInfo(null)
    
    try {
      // Şifre kontrolü
      if (formData.password !== formData.passwordConfirm) {
        throw new Error('Şifreler eşleşmiyor')
      }
      
      // Doğrudan acenta verilerini tabloya ekle (auth kullanmadan)
      console.log('Acenta bilgileri kaydediliyor...')
      setDebugInfo('Acenta bilgileri kaydediliyor...')
      
      const { data: acentaData, error: acentaError } = await supabase
        .from('acentalar')
        .insert([
          {
            acenta_ismi: formData.acenteAdi,
            telefon: formData.telefon,
            mobil_telefon: formData.mobil,
            ulke: formData.ulke,
            sehir: formData.sehir,
            adres: formData.adres,
            cinsiyet: formData.cinsiyet,
            isim: formData.isim,
            soyisim: formData.soyisim,
            email: formData.email,
            password_hash: formData.password
          }
        ])
        .select()
      
      if (acentaError) {
        console.error('Acenta kayıt hatası:', acentaError)
        throw new Error(`Acenta bilgileri kaydedilemedi: ${acentaError.message}`)
      }
      
      console.log('Acenta kaydı başarılı:', acentaData)
      setDebugInfo(prev => prev + '\nAcenta bilgileri başarıyla kaydedildi')
      
      // Başarılı mesajı göster
      setSuccess(true)
      
      // Başarılı mesajı gösterdikten sonra yönlendir
      setTimeout(() => {
        router.push('/acenta-giris')
      }, 3000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Kayıt sırasında bilinmeyen bir hata oluştu'
      console.error('Kayıt hatası:', err)
      setError(errorMessage)
      setDebugInfo(prev => prev + '\n❌ HATA: ' + errorMessage)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-2xl text-center border border-green-100 shadow-inner">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-white mb-8 shadow-lg">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Kayıt İşleminiz Tamamlandı!</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-md mx-auto">
          Kaydınız başarıyla alınmıştır. Hesabınız incelendikten sonra aktif edilecektir.
        </p>
        <div className="w-full max-w-xs mx-auto bg-white rounded-full h-2 mb-3 overflow-hidden shadow-inner">
          <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full animate-pulse" style={{ width: '100%' }}></div>
        </div>
        <p className="text-sm text-gray-600">
          Giriş sayfasına yönlendiriliyorsunuz...
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* İlerleme göstergesi */}
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step >= 1 ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg' : 'bg-gray-200 text-gray-600'}`}>
              1
            </div>
            <div className="ml-4">
              <p className={`text-sm font-medium ${step >= 1 ? 'text-gray-900' : 'text-gray-500'}`}>Acente Bilgileri</p>
            </div>
          </div>
          <div className="hidden sm:block w-24 border-t border-gray-300"></div>
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-12 h-12 rounded-full ${step >= 2 ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg' : 'bg-gray-200 text-gray-600'}`}>
              2
            </div>
            <div className="ml-4">
              <p className={`text-sm font-medium ${step >= 2 ? 'text-gray-900' : 'text-gray-500'}`}>Yönetici Bilgileri</p>
            </div>
          </div>
        </div>
      </div>

      {/* Acente Bilgileri */}
      {step === 1 && (
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Acente Bilgileri
            </h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="acenteAdi" className="block text-sm font-medium text-gray-700">
                  Acente Adı <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="acenteAdi"
                    id="acenteAdi"
                    required
                    value={formData.acenteAdi}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2.5"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">
                  Telefon <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="telefon"
                    id="telefon"
                    required
                    value={formData.telefon}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2.5"
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
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2.5"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="ulke" className="block text-sm font-medium text-gray-700">
                  Ülke <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="ulke"
                    id="ulke"
                    required
                    value={formData.ulke}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2.5"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="sehir" className="block text-sm font-medium text-gray-700">
                  Şehir <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="sehir"
                    id="sehir"
                    required
                    value={formData.sehir}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2.5"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label htmlFor="adres" className="block text-sm font-medium text-gray-700">
                  Adres <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <textarea
                    name="adres"
                    id="adres"
                    required
                    value={formData.adres}
                    onChange={handleChange}
                    rows={3}
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
            >
              İlerle
              <svg className="ml-2 -mr-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Yönetici Bilgileri */}
      {step === 2 && (
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Yönetici Bilgileri
            </h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-6">
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
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2.5"
                  >
                    <option value="erkek">Erkek</option>
                    <option value="kadin">Kadın</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="isim" className="block text-sm font-medium text-gray-700">
                  İsim <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="isim"
                    id="isim"
                    required
                    value={formData.isim}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2.5"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="soyisim" className="block text-sm font-medium text-gray-700">
                  Soyisim <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="soyisim"
                    id="soyisim"
                    required
                    value={formData.soyisim}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2.5"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-posta <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2.5"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Şifre <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2.5"
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500">En az 8 karakter, bir büyük harf ve bir rakam içermelidir.</p>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="passwordConfirm" className="block text-sm font-medium text-gray-700">
                  Şifre Tekrar <span className="text-red-500">*</span>
                </label>
                <div className="mt-1">
                  <input
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    required
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-lg py-2.5"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hata mesajı */}
          {error && (
            <div className="p-4 text-sm text-red-700 bg-red-50 rounded-lg border border-red-200">
              <div className="flex">
                <svg className="w-5 h-5 text-red-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200"
            >
              {loading ? 'Kaydediliyor...' : 'Kayıt Ol'}
            </button>
          </div>
        </div>
      )}
    </form>
  )
} 