'use client'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/common/header'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { useSearchParams } from 'next/navigation'

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Tip tanımlamaları
interface TourTypeSettings {
  type: string;
  type_icon_svg: string;
  header_title: string;
  hero_title: string;
  hero_subtitle: string;
  hero_description: string;
  hero_image_path: string;
  left_title: string;
  left_description: string;
  right_image_1: string;
  right_image_2: string;
  section_title: string;
  section_subtitle: string;
}

// Tip tanımlamalarına Tour interface'i ekleyelim
interface Tour {
  id: string;
  slug: string;
  title: string;
  region: string;
  duration: string;
  base_price: number;
  short_description: string;
  hero_image_path: string;
  tour_type_id: string;
}

// Dosyanın üst kısmına getStorageUrl fonksiyonunu ekleyelim
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

export default function TourTypePage() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [settings, setSettings] = useState<TourTypeSettings | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState<Tour[]>([])

  // Gezi türü ayarlarını ve turları çek
  useEffect(() => {
    async function fetchData() {
      if (!type) return;

      try {
        // Önce gezi türü ayarlarını çek
        const { data: settingsData, error: settingsError } = await supabase
          .from('tour_type_settings')
          .select('*')
          .eq('type', type)
          .single();

        if (settingsError) throw settingsError;
        if (settingsData) {
          setSettings(settingsData);

          // Sonra bu türe ait turları çek
          const { data: toursData, error: toursError } = await supabase
            .from('tours')
            .select(`
              *,
              tour_images (
                id,
                storage_path,
                alt_text,
                image_type
              )
            `)
            .eq('tour_type_id', settingsData.id);

          if (toursError) throw toursError;
          if (toursData) setTours(toursData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [type]);

  // Scroll işleyicileri
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  if (isLoading) {
    return <div>Loading...</div>; // Loading state eklenebilir
  }

  if (!settings) {
    return <div>Gezi türü bulunamadı</div>;
  }

  return (
    <main className="relative bg-[#f1dbc4]">
      {/* Hero Section */}
      <section className="relative h-[60vh] mb-8">
        {/* Background Image with jagged edge */}
        <div className="absolute inset-0">
          <div className="relative h-full">
            {/* Base background image */}
            <Image
              src="/images/opportunity-bg.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
              quality={100}
            />
            
            {/* Overlay image and gradient container */}
            <div 
              className="absolute inset-0"
              style={{
                maskImage: 'url("/images/opportunity-bg.png")',
                WebkitMaskImage: 'url("/images/opportunity-bg.png")',
                maskSize: 'cover',
                WebkitMaskSize: 'cover',
              }}
            >
              {/* Hero image */}
              <Image
                src={getStorageUrl(settings.hero_image_path)}
                alt={settings.hero_title}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
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
              <span className="inline-block text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-6">
                {settings.hero_subtitle}
              </span>
              <h1 className="font-butler font-bold text-5xl lg:text-7xl text-white">
                {settings.hero_title}
              </h1>
              <p className="text-xl mt-6 text-white/90 max-w-2xl">
                {settings.hero_description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-butler font-bold text-gray-900 mb-6">
                {settings.left_title}
              </h2>
              <div className="space-y-6 text-gray-600">
                {settings.left_description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right Column - Images */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src={getStorageUrl(settings.right_image_1)}
                  alt="Gezi Türleri"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={getStorageUrl(settings.right_image_2)}
                  alt="Gezi Detay"
                  fill
                  sizes="(max-width: 768px) 192px, 192px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Types Slider Section */}
      <section className="relative bg-[#f1dbc4] pb-24">
        {/* Background Image with jagged edge */}
        <div className="absolute inset-0">
          <div className="relative h-full">
            {/* Base background image */}
            <Image
              src="/images/opportunities-bg.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
              quality={100}
            />
            
            {/* Overlay image and gradient container */}
            <div 
              className="absolute inset-0"
              style={{
                maskImage: 'url("/images/opportunities-bg.png")',
                WebkitMaskImage: 'url("/images/opportunities-bg.png")',
                maskSize: 'cover',
                WebkitMaskSize: 'cover',
              }}
            >
              {/* Pattern image */}
              <Image
                src="/images/pattern-dark.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A2A1A]/90 via-[#1A2A1A]/80 to-[#1A2A1A]" />
            </div>
          </div>
        </div>

        <div className="relative pt-32 pb-24">
          {/* Section Header */}
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-butler font-bold text-white">
                {settings.section_title} <br />
                <span className="text-emerald-400">{settings.section_subtitle}</span>
              </h2>
              {/* Navigation Arrows */}
              <div className="flex gap-4">
                <button 
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors
                    ${canScrollLeft ? 'hover:bg-white/10' : 'opacity-50 cursor-not-allowed'}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white transition-colors
                    ${canScrollRight ? 'hover:bg-white/10' : 'opacity-50 cursor-not-allowed'}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Scrollable Cards */}
          <div className="relative overflow-hidden">
            <div 
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="flex gap-8 overflow-x-auto scrollbar-hide pl-[max(calc((100vw-1280px)/2),1rem)] pb-8"
            >
              {tours.map((tour) => {
                const heroImage = (tour as any).tour_images?.find((img: {image_type: string}) => img.image_type === 'hero');
                const imagePath = heroImage?.storage_path || tour.hero_image_path;

                return (
                  <div key={tour.id} className="min-w-[600px] bg-[#f8f2ea] rounded-3xl overflow-hidden">
                    <div className="relative h-[300px]">
                      <Image
                        src={getStorageUrl(imagePath)}
                        alt={heroImage?.alt_text || tour.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-black/80 text-white text-sm px-4 py-1.5 rounded-full">
                          {tour.region}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                        <span>{tour.region}</span>
                        <span>•</span>
                        <span>{tour.duration}</span>
                      </div>

                      <h3 className="text-2xl font-butler font-bold text-gray-900 mb-4">
                        {tour.title}
                      </h3>

                      <p className="text-gray-600 mb-6">
                        {tour.short_description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="block text-sm text-gray-500">İtibaren</span>
                          <span className="text-xl font-semibold">{tour.base_price.toLocaleString('tr-TR')},- ₺</span>
                        </div>
                        <Link 
                          href={`/tours/${tour.slug}`}
                          className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                        >
                          Bu yolculuğu keşfedin
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
