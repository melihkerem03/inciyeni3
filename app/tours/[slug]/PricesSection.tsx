"use client";

import React from 'react';
import { Tour } from '@/types/tour';

type PricesSectionProps = {
  tour: Tour;
}

export default function PricesSection({ tour }: PricesSectionProps) {
  // Para birimi sembollerini tanımla
  const currencySymbols = {
    USD: '$',
    EUR: '€',
    TRY: '₺'
  };

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Başlık */}
        <div className="mb-12">
          <h2 className="text-5xl font-butler">
            Tüm <span className="text-[#B68D52]">tarihler ve fiyatlar</span>
          </h2>
          <h3 className="text-4xl font-butler mt-2">tek bakışta</h3>
        </div>

        {/* Tablo */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          

          {/* Tablo Satırları */}
          {tour.tour_dates_prices.map((datePrice) => (
            <div 
              key={datePrice.id}
              className="grid grid-cols-1 md:grid-cols-5 px-4 md:px-8 py-4 md:py-6 border-b border-gray-100 items-center hover:bg-gray-50"
            >
              <div className="md:col-span-1 py-2 md:py-0">
                <span className="font-medium md:hidden inline-block w-32">Seyahat dönemi: </span>
                {datePrice.travel_period}
              </div>
              <div className="md:col-span-1 py-2 md:py-0">
                <span className="font-medium md:hidden inline-block w-32">Fiyat Aralığı: </span>
                {datePrice.price_category}
              </div>
              <div className="md:col-span-1 py-2 md:py-0">
                <span className="font-medium md:hidden inline-block w-32">Uçak: </span>
                {datePrice.airline}
              </div>
              <div className="md:col-span-2 py-2 md:py-0">
                <span className="font-medium md:hidden inline-block w-32">Seyahat fiyatı: </span>
                <span className="font-medium text-[#B68D52]">
                  {Intl.NumberFormat('tr-TR').format(datePrice.price)} {currencySymbols[datePrice.currency] || datePrice.currency}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bilgilendirme Notu */}
        <div className="mt-6 text-sm text-gray-500 italic">
          * Fiyatlarımız belirtilen para birimlerinde gösterilmektedir. Güncel döviz kurları için lütfen bizimle iletişime geçin.
        </div>
      </div>
    </section>
  );
} 