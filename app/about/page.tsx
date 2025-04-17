import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PageTemplate from '@/components/common/PageTemplate'
import StatsSection from '@/components/stats-section'
import Header from '@/components/common/header'
import BankAccounts from '@/components/bank-accounts'

export const metadata = {
  title: 'Hakkımızda | İnci Tur',
  description: 'İnci Tur hakkında bilgi edinin. Vizyonumuz, misyonumuz ve değerlerimiz.',
}

export default function AboutPage() {
  return (
    <PageTemplate>
      {/* Hero Section - start from the very top */}
      <section className="relative h-[60vh] -mt-24 bg-[#f1dbc4]"> {/* mb-8 kaldırıldı */}
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
            
            
            
          </div>
        </div>

        {/* Hero Content - shifted down to make room for header */}
        <div className="relative h-full max-w-7xl mx-auto px-4 pt-36"> {/* Added pt-24 to push content down below header */}
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

      {/* About Us Content - pt-0 ekledik ve direkt hero'nun altına yerleştirdik */}
      <section className="pt-0 pb-20 bg-[#f1dbc4]">
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

      

      {/* Company Info Sections */}
      <section className="py-20 bg-[#f1dbc4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Banka Bilgileri - BankAccounts client componenti olarak kullanılıyor */}
            <div>
              <BankAccounts />
            </div>

            {/* Billing Info */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-8 mb-8"> {/* Arka plan rengi beyaza çevrildi */}
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