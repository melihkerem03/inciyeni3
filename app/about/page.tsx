import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageTemplate from '@/components/common/PageTemplate'
import StatsSection from '@/components/stats-section'
import Header from '@/components/common/header'

export const metadata = {
  title: 'Hakkımızda | İnci Tur',
  description: 'İnci Tur hakkında bilgi edinin. Vizyonumuz, misyonumuz ve değerlerimiz.',
}

export default function AboutPage() {
  return (
    <PageTemplate>
      {/* Hero Section - start from the very top */}
      <section className="relative h-[60vh] mb-8 -mt-24"> {/* Negative margin to pull up and compensate for PageTemplate padding */}
        {/* Background Image with jagged edge */}
        <div className="absolute inset-0">
          <div className="relative h-full">
            {/* Base background image */}
            <Image
              src="/images/tours-bg.png"
              alt=""
              fill
              className="object-cover"
              priority
              quality={100}
            />
            
            {/* Overlay image and gradient container */}
            <div 
              className="absolute inset-0"
              style={{
                maskImage: 'url("/images/tours-bg.png")',
                WebkitMaskImage: 'url("/images/tours-bg.png")',
                maskSize: 'cover',
                WebkitMaskSize: 'cover',
              }}
            >
              {/* Hero image */}
              <Image
                src="/images/about-hero.jpg"
                alt="Hakkımızda Hero"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1A2A1A]" />
            </div>
          </div>
        </div>

        {/* Hero Content - shifted down to make room for header */}
        <div className="relative h-full max-w-7xl mx-auto px-4 pt-24"> {/* Added pt-24 to push content down below header */}
          <div className="absolute inset-0 flex flex-col justify-center pt-24"> {/* Added pt-24 to adjust positioning */}
            <div className="max-w-4xl text-white">
              <span className="inline-block text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-6">
                HAKKIMIZDA
              </span>
              <h1 className="font-butler font-bold text-5xl lg:text-7xl text-white">
                İnci DMC Turizm
              </h1>
              <p className="text-xl mt-6 text-white/90 max-w-2xl">
                2010 yılından bu yana size unutulmaz seyahat deneyimleri sunuyoruz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-20 bg-[#f1dbc4]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">İnci DMC Turizm</h2>
              <p className="text-gray-600 mb-4">
                İnci DMC Turizm, 2010 yılından bu yana turizm sektöründe faaliyet gösteren, deneyimli ve profesyonel kadrosuyla müşterilerine en iyi hizmeti sunmayı hedefleyen bir seyahat acentesidir.
              </p>
              <p className="text-gray-600 mb-4">
                Şirketimiz, yurt içi ve yurt dışı turları, otel rezervasyonları, uçak biletleri, vize işlemleri ve transfer hizmetleri gibi geniş bir yelpazede hizmet vermektedir.
              </p>
              <p className="text-gray-600 mb-8">
                Misyonumuz, müşterilerimize unutulmaz seyahat deneyimleri yaşatmak ve beklentilerinin ötesinde hizmet sunmaktır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Principles Cards */}
      <section className="bg-[#f1dbc4] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Seyahat Acenteliği Meslek İlkeleri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Müşteri Memnuniyeti</h3>
              <p className="text-gray-600">
                Müşterilerimizin memnuniyeti en öncelikli hedefimizdir. Tüm hizmetlerimizde kalite standartlarını en üst düzeyde tutmayı taahhüt ederiz.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Şeffaflık</h3>
              <p className="text-gray-600">
                Tüm işlemlerimizde şeffaflık ilkesini benimser, müşterilerimize doğru ve eksiksiz bilgi vermeyi garanti ederiz.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Profesyonellik</h3>
              <p className="text-gray-600">
                Sektördeki deneyimimiz ve uzman kadromuzla profesyonel hizmet anlayışını benimseriz.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Güvenilirlik</h3>
              <p className="text-gray-600">
                Tüm işlemlerimizde güvenilirlik esastır. Müşterilerimizin bilgilerinin gizliliğine önem veririz.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sürdürülebilirlik</h3>
              <p className="text-gray-600">
                Çevreye duyarlı turizm anlayışını benimser, sürdürülebilir turizm ilkelerine bağlı kalırız.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Yasal Uyumluluk</h3>
              <p className="text-gray-600">
                Tüm faaliyetlerimizde yasal düzenlemelere ve mevzuata uygun hareket ederiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Sections */}
      <section className="py-20 bg-[#f1dbc4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Office & Bank Info */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">İnci DMC Office</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Banka Hesap Bilgileri</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">Garanti Bankası</p>
                    <p className="text-gray-600 text-sm">Şube: Ümraniye Şubesi (072)</p>
                    <p className="text-gray-600 text-sm">Hesap Sahibi: İnci DMC Turizm</p>
                    <p className="text-gray-800 mt-2 font-mono">IBAN: TR12 3456 7890 1234 5678 90</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">İş Bankası</p>
                    <p className="text-gray-600 text-sm">Şube: Ümraniye Şubesi (1235)</p>
                    <p className="text-gray-600 text-sm">Hesap Sahibi: İnci DMC Turizm</p>
                    <p className="text-gray-800 mt-2 font-mono">IBAN: TR98 7654 3210 9876 5432 10</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">Ziraat Bankası</p>
                    <p className="text-gray-600 text-sm">Şube: Ümraniye Şubesi (2345)</p>
                    <p className="text-gray-600 text-sm">Hesap Sahibi: İnci DMC Turizm</p>
                    <p className="text-gray-800 mt-2 font-mono">IBAN: TR65 4321 0987 6543 2109 87</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Info */}
            <div>
              <div className="bg-[#f1dbc4] rounded-xl shadow-sm p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">Fatura Bilgileri</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Şirket Bilgileri</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><span className="font-medium text-gray-700">Firma Ünvanı:</span> İnci DMC Turizm Ltd. Şti.</li>
                    <li><span className="font-medium text-gray-700">Vergi Dairesi:</span> Ümraniye</li>
                    <li><span className="font-medium text-gray-700">Vergi No:</span> 123 456 7890</li>
                    <li><span className="font-medium text-gray-700">Ticaret Sicil No:</span> 123456</li>
                    <li><span className="font-medium text-gray-700">Mersis No:</span> 0123456789000001</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Adres Bilgileri</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li><span className="font-medium text-gray-700">Adres:</span> Atakent, Yavuzlar Plaza, Mithatpaşa Cd. no:72 D:4, 34400 Ümraniye/İstanbul</li>
                    <li><span className="font-medium text-gray-700">Telefon:</span> <a href="tel:+905073011616" className="text-emerald-600 hover:underline">+90 507 301 16 16</a></li>
                    <li><span className="font-medium text-gray-700">Email:</span> <a href="mailto:fatura@incidmcturizm.com" className="text-emerald-600 hover:underline">fatura@incidmcturizm.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  )
} 