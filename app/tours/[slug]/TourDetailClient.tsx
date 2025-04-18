'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/common/header';
import { Tour } from '@/types/tour';
import { createClient } from '@supabase/supabase-js';
import React from 'react';
import PricesSection from './PricesSection';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type ProgramDay = '1-4' | '5';

interface TourDetailProps {
  tour: Tour;
}

interface DailyProgram {
  id: string;
  tour_id: string;
  day: number;
  title: string;
  description: string;
}

const getStorageUrl = (path: string | null | undefined): string => {
  if (!path) return '';
  
  if (path.startsWith('http')) {
    return path;
  }

  return supabase.storage
    .from('site-images')
    .getPublicUrl(path)
    .data.publicUrl;
};

const getHeroImage = (tour: Tour) => {
  if (tour.hero_image_path) {
    return {
      storage_path: tour.hero_image_path,
      alt_text: tour.title
    };
  }
  return tour.tour_images.find(img => img.image_type === 'hero');
};

const getMapImage = (tour: Tour) => {
  return tour.tour_images.find(img => img.image_type === 'map');
};

const getGalleryImages = (tour: Tour) => {
  return tour.tour_images
    .filter(img => img.image_type === 'gallery')
    .sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
};

// Para birimi sembollerini tanımla
const currencySymbols: Record<string, string> = {
  USD: '$',
  EUR: '€',
  TRY: '₺'
};

// Fiyat formatlaması için güvenilir fonksiyon
const formatPrice = (price: number | null | undefined, currency: string | null | undefined) => {
  const safePrice = typeof price === 'number' ? price : 0;
  const safeCurrency = currency && typeof currency === 'string' ? currency.toUpperCase() : 'USD';
  const symbol = currencySymbols[safeCurrency] || safeCurrency;
  
  return `${Intl.NumberFormat('tr-TR').format(safePrice)} ${symbol}`;
};

export default function TourDetailClient({ tour }: TourDetailProps) {
  console.log('Para birimi:', tour.base_price_currency); // Hata ayıklama için
  
  // Fiyat ve para birimi bilgilerini al
  const basePrice = tour.base_price || 0;
  const baseCurrency = tour.base_price_currency || 'USD';

  // Ekran boyutu ve yönü için state'ler
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isPortrait, setIsPortrait] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // İlk günü varsayılan olarak seç
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // İyileştirilmiş mobil cihaz algılama
  const [isMobileView, setIsMobileView] = useState(false)
  
  useEffect(() => {
    // Sayfa yüklendiğinde ve pencere boyutu değiştiğinde kontrol et
    const checkDevice = () => {
      // Hem pencere genişliğini hem de User Agent'ı kontrol et
      const width = window.innerWidth
      const isMobile = width <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobileView(isMobile)
    }
    
    // Sayfa yüklendiğinde kontrol et
    checkDevice()
    
    // Pencere boyutu değiştiğinde kontrol et
    window.addEventListener('resize', checkDevice)
    
    // Temizleme
    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  // Ekran boyutlarını ve yönünü izle
  useEffect(() => {
    // İlk render'da pencere boyutlarını ayarla
    setWindowWidth(window.innerWidth);
    // Portrait mode tespiti (genişlik < yükseklik)
    setIsPortrait(window.innerHeight > window.innerWidth);
    // Mobil cihaz tespiti (768px genişlikten az)
    setIsMobile(window.innerWidth < 768);

    // Resize olayını dinle
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsPortrait(window.innerHeight > window.innerWidth);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, []);

  // Görselleri filtrele
  const heroImage = getHeroImage(tour);
  const mapImage = getMapImage(tour);
  const galleryImages = getGalleryImages(tour);

  // Günlük programları hazırla ve düzenle
  const dailyPrograms = React.useMemo(() => {
    if (!tour.tour_daily_programs || tour.tour_daily_programs.length === 0) {
      return [];
    }
    
    return tour.tour_daily_programs.map(program => {
      // day_range değerinden ilk günü çıkar (1-2 aralığından 1 değerini alır)
      let day = 1;
      
      if (program.day_range) {
        const dayParts = program.day_range.split('-');
        if (dayParts.length > 0 && !isNaN(parseInt(dayParts[0]))) {
          day = parseInt(dayParts[0]);
        }
      }
      
      return { ...program, day };
    }).sort((a, b) => a.day - b.day);
  }, [tour.tour_daily_programs]);
  
  // İlk günü varsayılan olarak seç
  useEffect(() => {
    if (dailyPrograms.length > 0) {
      setSelectedDay(dailyPrograms[0].day);
    }
  }, [dailyPrograms]);

  // Gün değişiklik işleyicisi
  const handleDayChange = (day: number) => {
    console.log("Gün değiştiriliyor:", day);
    setSelectedDay(day);
  };

  // Mobil dikey görünüm için koşul
  const isMobilePortrait = isMobile && isPortrait;

  // İçeriği koşullu olarak render et
  if (isMobileView) {
    return (
      <main className="bg-[#f1dbc4] overflow-x-hidden">
        {/* Hero Section - Mobil */}
        <section className="relative h-[50vh]">
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
              
              {/* Hero image with mask */}
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
                {heroImage && (
                  <Image
                    src={getStorageUrl(heroImage.storage_path)}
                    alt={heroImage.alt_text || tour.title}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1A2A1A]" />
              </div>
            </div>
          </div>

          {/* Header */}
          <Header />

          {/* Hero Content */}
          <div className="relative h-full px-4">
            <div className="absolute inset-0 flex flex-col justify-center">
              <div className="text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-2">
                  <span>{tour.region}</span>
                  <span>•</span>
                  <span>{tour.duration}</span>
                </div>
                <h1 className="font-butler font-bold text-3xl text-white mb-4">
                  {tour.title}
                </h1>
                <div className="flex items-center gap-4">
                  <div>
                    <span className="block text-xs text-white/80">Başlangıç Fiyatı</span>
                    <span className="text-2xl font-semibold">{formatPrice(basePrice, baseCurrency)}</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Görseller Bölümü - Mobil */}
        <section className="px-4 mt-6 mb-8">
          <div className="relative">
            {/* Ana Görsel */}
            {galleryImages[0] && (
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src={getStorageUrl(galleryImages[0].storage_path)}
                  alt={galleryImages[0].alt_text || "Tur görseli"}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Üst Üste Binen İkinci Görsel */}
            {galleryImages[1] && (
              <div className="absolute -right-2 bottom-8 w-[40%] aspect-square">
                <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={getStorageUrl(galleryImages[1].storage_path)}
                    alt={galleryImages[1].alt_text || "Tur görseli"}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* İçerik Bölümü - Mobil */}
        <section className="px-4 mb-0 bg-[#f1dbc4] rounded-t-3xl pt-8">
          <div className="space-y-6">
            {/* Başlık */}
            <h2 className="font-butler text-3xl">
              <span className="text-[#B68D52]">{tour.title}</span> 
            </h2>

            {/* Alt Başlık */}
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#B68D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#B68D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>{tour.region}</span>
              </div>
            </div>

            {/* Açıklama */}
            <div className="space-y-3">
              <p className="text-gray-700 text-sm leading-relaxed">
                {tour.short_description}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {tour.long_description}
              </p>
            </div>

            {/* Price and CTA */}
            <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-1">Başlangıç fiyatı</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900">
                    {formatPrice(tour.base_price, tour.base_price_currency)}
                  </span>
                  <span className="text-sm text-gray-500 ml-2">/ kişi başı</span>
                </div>
              </div>
              
              
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Özel fiyat teklifleri için bizimle iletişime geçin
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tur Özellikleri Bölümü - Mobil */}
        <section className="px-4 bg-[#f1dbc4]">
          {/* Önemli Noktalar */}
          <div className="py-6 border-t border-gray-100">
            <h3 className="text-xl font-butler mb-4">Önemli Noktalar</h3>
            <ul className="space-y-3">
              {(tour.tour_highlights || [])
                .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
                .map((highlight) => (
                  <li key={highlight.id} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#B68D52] mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-gray-700">{highlight.content}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Dahil */}
          <div className="py-6 border-t border-gray-100">
            <h3 className="text-xl font-butler mb-4">Dahil</h3>
            <ul className="space-y-3">
              {(tour.tour_inclusions || [])
                .sort((a, b) => (a.display_order || 0) - (b.display_order || 0))
                .map((inclusion) => (
                  <li key={inclusion.id} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#B68D52] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{inclusion.content}</span>
                  </li>
                ))}
            </ul>
          </div>

          
          

          {/* İpuçları */}
          {tour.tour_tips && tour.tour_tips.length > 0 && (
            <div className="py-6 border-t border-gray-100">
              <h3 className="text-xl font-butler mb-4">İpuçları</h3>
              <div className="space-y-4">
                {tour.tour_tips.map((tip) => (
                  <div key={tip.id} className="flex items-start gap-3">
                    <span className="p-1.5 rounded-full bg-[#B68D52]/10 flex-shrink-0">
                      <svg className="w-4 h-4 text-[#B68D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <p className="text-sm text-gray-700">{tip.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          
        </section>
        
        {/* Günlük Program Bölümü - Mobil */}
        <section className="py-10 bg-[#f1dbc4]">
          <div className="px-4">
            {/* Başlık */}
            <h2 className="text-2xl font-butler mb-6">
              Günlük <span className="text-[#B68D52]">program</span>
            </h2>

            {/* Program Seçici - Yatay Kaydırılabilir - Z-INDEX ARTTIRILDI */}
            {dailyPrograms.length > 1 && (
              <div className="mb-6 relative z-10">
                <div className="overflow-x-auto -mx-4 px-4 scrollbar-hidden pb-2"
                  style={{
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}>
                  <div className="flex gap-2 min-w-max">
                    {dailyPrograms.map((program) => (
                      <button
                        key={program.id}
                        onClick={() => handleDayChange(program.day)}
                        className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors cursor-pointer active:bg-gray-800 ${
                          selectedDay === program.day
                            ? 'bg-[#1A2A1A] text-white'
                            : 'bg-white/80 text-gray-700 hover:bg-white'
                        }`}
                        style={{ touchAction: "manipulation" }}
                      >
                        {program.day}. Gün
                      </button>
                    ))}
                  </div>
                </div>
                {/* Custom CSS ekleme */}
                <style jsx>{`
                  .scrollbar-hidden::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
              </div>
            )}

            {/* Seçili Günün İçeriği */}
            <div className="relative z-0">
              {dailyPrograms
                .filter(program => program.day === selectedDay)
                .map(program => (
                  <div 
                    key={program.id} 
                    className="space-y-4 p-6 bg-white rounded-2xl mb-6"
                  >
                    <h3 className="text-xl font-butler text-gray-900">
                      {program.title}
                    </h3>
                    <div className="prose max-w-none">
                      <p className="text-sm text-gray-600 whitespace-pre-line">
                        {program.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Harita */}
            {mapImage && (
              <div className="relative h-[250px] rounded-2xl overflow-hidden mt-2 bg-white/50 p-2">
                <Image
                  src={getStorageUrl(mapImage.storage_path)}
                  alt={mapImage.alt_text || "Tur haritası"}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </section>
        
        {/* Resimler Bölümü - Mobil */}
        <section className="pb-16 overflow-x-hidden">
          <div className="px-4 mb-5">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-2xl font-butler">Seyahat</h2>
                <span className="text-2xl font-butler text-[#B68D52]">görüntüleri</span>
              </div>

              {/* Mobile Navigation Arrows */}
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`w-9 h-9 rounded-full border border-[#B68D52] flex items-center justify-center text-[#B68D52] transition-colors
                    ${canScrollLeft ? 'hover:bg-[#B68D52] hover:text-white active:bg-[#B68D52] active:text-white' : 'opacity-50 cursor-not-allowed'}`}
                  aria-label="Önceki görseller"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`w-9 h-9 rounded-full border border-[#B68D52] flex items-center justify-center text-[#B68D52] transition-colors
                    ${canScrollRight ? 'hover:bg-[#B68D52] hover:text-white active:bg-[#B68D52] active:text-white' : 'opacity-50 cursor-not-allowed'}`}
                  aria-label="Sonraki görseller"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Images - Mobil */}
          <div className="relative w-full">
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pl-4 pb-4"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                paddingRight: '1rem'
              }}
            >
              {galleryImages.map((image) => (
                <div 
                  key={image.id}
                  className="flex-none w-[280px] h-[180px] relative rounded-xl overflow-hidden snap-center"
                >
                  <Image
                    src={getStorageUrl(image.storage_path)}
                    alt={image.alt_text || "Tur görseli"}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Fiyatlar ve Tarihler Bölümü - Client Component olarak ayrıldı */}
        <PricesSection tour={tour} />
      </main>
    );
  }

  // Masaüstü veya yatay görünüm için orijinal tasarım
  return (
    <main className="relative bg-[#f1dbc4] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] mb-8">
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
            
            {/* Hero image with mask */}
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
              {heroImage && (
                <Image
                  src={getStorageUrl(heroImage.storage_path)}
                  alt={heroImage.alt_text || tour.title}
                  fill
                  className="object-cover"
                  priority
                />
              )}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1A2A1A]" />
            </div>
          </div>
        </div>

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4">
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="max-w-4xl text-white">
              <div className="flex items-center gap-2 text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-6">
                <span>{tour.region}</span>
                <span>•</span>
                <span>{tour.duration}</span>
              </div>
              <h1 className="font-butler font-bold text-5xl lg:text-7xl text-white mb-6">
                {tour.title}
              </h1>
              <div className="flex items-center gap-6">
                <div>
                  <span className="block text-sm text-white/80">Başlangıç Fiyatı</span>
                  <span className="text-3xl font-semibold">{formatPrice(basePrice, baseCurrency)}</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-16">
            {/* Sol Taraf - Görseller */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative">
                {/* Ana Görsel */}
                {galleryImages[0] && (
                  <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
                    <Image
                      src={getStorageUrl(galleryImages[0].storage_path)}
                      alt={galleryImages[0].alt_text || "Tur görseli"}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Üst Üste Binen İkinci Görsel */}
                {galleryImages[1] && (
                  <div className="absolute -right-12 bottom-16 w-[45%] aspect-square">
                    <div className="relative w-full h-full overflow-hidden rounded-3xl">
                      <Image
                        src={getStorageUrl(galleryImages[1].storage_path)}
                        alt={galleryImages[1].alt_text || "Tur görseli"}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sağ Taraf - İçerik */}
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-center pl-0 lg:pl-8">
              <div className="space-y-8">
                {/* Başlık */}
                <h1 className="font-butler text-5xl">
                  <span className="text-[#B68D52]">{tour.title}</span> 
                </h1>

                {/* Alt Başlık */}
                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#B68D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#B68D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span>{tour.region}</span>
                  </div>
                </div>

                {/* Açıklama */}
                <div className="space-y-4">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {tour.short_description}
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {tour.long_description}
                  </p>
                </div>

                {/* Price and CTA */}
                <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
                  <div className="mb-6">
                    <div className="text-sm text-gray-500 mb-1">Başlangıç fiyatı</div>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-900">
                        {formatPrice(tour.base_price, tour.base_price_currency)}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">/ kişi başı</span>
                    </div>
                  </div>
                  
                  <Link 
                    href={`/contact?tour=${tour.title}`}
                    className="block w-full bg-[#1A2A1A] hover:bg-[#2C3C2C] text-white text-center font-medium py-3 rounded-xl transition duration-300"
                  >
                    Hemen Bilgi Alın
                  </Link>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      Özel fiyat teklifleri için bizimle iletişime geçin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tur Özellikleri Bölümü */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-24">
            {/* Önemli Noktalar */}
            <div>
              <h3 className="text-2xl font-butler mb-8">Önemli Noktalar</h3>
              <ul className="space-y-6">
                {tour.tour_highlights
                  .sort((a, b) => a.display_order - b.display_order)
                  .map((highlight) => (
                    <li key={highlight.id} className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-[#B68D52] mt-2"></span>
                      <span>{highlight.content}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Dahil */}
            <div>
              <h3 className="text-2xl font-butler mb-8">Dahil</h3>
              <ul className="space-y-6">
                {tour.tour_inclusions
                  .sort((a, b) => a.display_order - b.display_order)
                  .map((inclusion) => (
                    <li key={inclusion.id} className="flex items-center gap-4">
                      <svg className="w-5 h-5 text-[#B68D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{inclusion.content}</span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* İpuçları */}
            <div>
              <h3 className="text-2xl font-butler mb-8">İpuçları</h3>
              {tour.tour_tips.map((tip) => (
                <div key={tip.id} className="flex items-start gap-4">
                  <span className="p-2 rounded-full bg-[#B68D52]/10">
                    <svg className="w-5 h-5 text-[#B68D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <p>{tip.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Günlük Program Bölümü */}
      <section className="py-24 bg-[#f1dbc4]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Başlık */}
          <h2 className="text-5xl font-butler mb-12">
            Günlük <span className="text-[#B68D52]">program</span>
          </h2>

          {/* Program Seçici */}
          <div className="flex gap-4 mb-8">
            {dailyPrograms.map((program) => (
              <button
                key={program.id}
                onClick={() => setSelectedDay(program.day)}
                className={`px-6 py-3 rounded-full transition-colors ${
                  selectedDay === program.day
                    ? 'bg-[#1A2A1A] text-white'
                    : 'bg-white/80 text-gray-700 hover:bg-white'
                }`}
              >
                {program.day}. Gün
              </button>
            ))}
          </div>

          {/* Seçili Günün İçeriği */}
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-12 lg:col-span-7">
              {dailyPrograms
                .filter(program => program.day === selectedDay)
                .map(program => (
                  <div 
                    key={program.id} 
                    className="space-y-6 p-8 rounded-3xl"
                  >
                    <h3 className="text-2xl font-butler text-gray-900">
                      {program.title}
                    </h3>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-600 whitespace-pre-line">
                        {program.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Harita */}
            <div className="col-span-12 lg:col-span-5">
              {mapImage && (
                <div className="relative h-[400px] rounded-3xl overflow-hidden mt-[-200px]">
                  <Image
                    src={getStorageUrl(mapImage.storage_path)}
                    alt={mapImage.alt_text || "Tur haritası"}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Resimler Bölümü */}
      <section className="pb-24 w-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-butler">Seyahat</h2>
              <span className="text-4xl font-butler text-[#B68D52]">görüntüleri</span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button 
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-12 h-12 rounded-full border border-[#B68D52] flex items-center justify-center text-[#B68D52] transition-colors
                  ${canScrollLeft ? 'hover:bg-[#B68D52] hover:text-white' : 'opacity-50 cursor-not-allowed'}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-12 h-12 rounded-full border border-[#B68D52] flex items-center justify-center text-[#B68D52] transition-colors
                  ${canScrollRight ? 'hover:bg-[#B68D52] hover:text-white' : 'opacity-50 cursor-not-allowed'}`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Images */}
        <div className="relative w-full">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pl-[max(calc((100vw-1280px)/2),1rem)] pb-8"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="flex-none w-[500px] h-[300px] relative rounded-3xl overflow-hidden snap-center"
              >
                <Image
                  src={getStorageUrl(image.storage_path)}
                  alt={image.alt_text}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiyatlar ve Tarihler Bölümü - Client Component olarak ayrıldı */}
      <PricesSection tour={tour} />

      {/* Faydalı ve Pratik Bilgiler Bölümü */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Başlık ve Göstergeler */}
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-5xl font-butler">
              Faydalı ve <span className="text-[#B68D52]">pratik bilgiler</span>
            </h2>
            
            {/* Sıcaklık ve Fiyat Göstergeleri */}
            <div className="flex flex-row gap-8">
              <div className="flex flex-row justify-center items-center gap-3">
                <span className="w-8 h-4 rounded-full bg-[#FFA500]"></span>
                <span className="text-sm">Sıcaklık °C</span>
                <span className="text-xs text-gray-500">(Butler, 24px)</span>
              </div>
              <div className="flex flex-row justify-center items-center gap-3">
                <span className="w-8 h-4 rounded-full bg-[#4CAF50]/25"></span>
                <span className="text-sm">Ort. € cinsinden fiyat</span>
                <span className="text-xs text-gray-500">(Inter, 14px)</span>
              </div>
            </div>
          </div>

          {/* Grafik Bölümü */}
          <div className="w-full">
            {/* Grafik İçeriği */}
            <div className="grid grid-cols-12 gap-2">
              {tour.tour_weather_data.map((month) => (
                <div key={month.id} className="flex flex-col justify-end w-full h-[400px] relative mt-8 mb-16">
                  <div className="flex flex-col justify-end h-[400px] bg-brown-75/50 overflow-hidden rounded-xl relative">
                    {/* Wave Border and Month Info */}
                    <div className="w-full flex flex-col justify-end h-full relative">
                      {/* Temperature Bar - Base Layer */}
                      <div 
                        className="flex w-full bg-[#FFA500] absolute z-[1] bottom-0 rounded-xl"
                        style={{ height: `${(month.temperature / 40) * 100}%` }}
                      />
                      
                      {/* Rain Bar - Above Temperature */}
                      <div 
                        className="flex w-full bg-blue-400 absolute z-[2] bottom-0 rounded-xl"
                        style={{ 
                          height: `${(month.rainfall / 8) * 40}%`,
                          opacity: 0.8
                        }}
                      />
                      
                      {/* Temperature Text */}
                      <div 
                        className="flex w-full absolute z-[3] pt-4 font-bold text-base justify-center bottom-0 rounded-xl text-white"
                        style={{ height: `${(month.temperature / 40) * 100}%` }}
                      >
                        {month.temperature}°C
                      </div>
                      
                      {/* Month and Rain Info */}
                      <div className="flex w-full flex-col gap-1 items-center p-2 text-sm uppercase absolute bottom-0 z-[3]">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="icon"
                          width="16px"
                          height="16px"
                          viewBox="0 0 256 256"
                        >
                          <path 
                            fill="currentColor" 
                            d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 216a72.08 72.08 0 0 1-72-72c0-57.23 55.47-105 72-118c16.53 13 72 60.75 72 118a72.08 72.08 0 0 1-72 72m55.89-62.66a57.6 57.6 0 0 1-46.56 46.55a9 9 0 0 1-1.33.11a8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"
                          />
                        </svg>
                        {month.rainfall}mm
                      </div>
                    </div>
                  </div>

                  {/* Month Name */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium text-gray-700">
                    {month.month}
                  </div>

                  {/* Highlight Box for Best Period */}
                  {month.is_best_period && (
                    <div className="w-[calc(100%+20px)] h-[calc(100%+100px)] -translate-x-[10px] -translate-y-[-60px] bg-gradient-to-t from-[#B68D52]/10 to-transparent border-2 border-[#B68D52] absolute rounded-xl z-[4] overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-[#B68D52]/80 group">
                      {/* Decorative Elements */}
                      <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#B68D52]/20 via-transparent to-[#B68D52]/5"></div>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#B68D52]"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#B68D52]"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#B68D52]"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#B68D52]"></div>

                      {/* Best Period Label */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-auto px-4 py-1">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#B68D52] via-[#D4AF37] to-[#B68D52] opacity-90 blur-[1px]"></div>
                          <span className="relative flex items-center justify-center gap-1 text-white text-xs font-bold uppercase py-1 px-3">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            En İyi Dönem
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 