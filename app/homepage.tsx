"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/common/header'
import TourCard from '@/components/ui/tourcard'
import ReviewCard from '@/components/ui/reviewcard'
import TeamCard from '@/components/ui/teamcard'
import ActivitiesCard from '@/components/ui/activitiescard'
import CountUp from 'react-countup'
import StatsSection from '@/components/stats-section'
import { createClient } from '@supabase/supabase-js'

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Önce getStorageUrl fonksiyonunu ekleyelim (dosyanın üst kısmına)
const getStorageUrl = (path: string | null | undefined): string => {
  if (!path) return '';
  
  if (path.startsWith('http')) {
    return path;
  }

  return supabase.storage
    .from('site-images')  // bucket adını güncelledik
    .getPublicUrl(path)
    .data.publicUrl;
};

// Hero verisi için tip tanımı
interface HeroSettings {
  id: string;
  title: string;
  subtitle: string;
  image_path: string;
}

// Tip tanımlaması ekle
interface PopularTour {
  id: string;
  slug: string;
  title: string;
  region: string;
  duration: string;
  base_price: number;
  short_description: string;
  hero_image_path: string;
  popular_tour: boolean;
  tour_images?: Array<{
    image_type: string;
    storage_path: string;
    alt_text?: string;
  }>;
}

// Tip tanımlamasını ekle
interface FeaturedSectionSettings {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  is_active: boolean;
  display_order: number;
}

// Servis tipi tanımlaması
interface Service {
  id: string;
  name: string;
  short_description: string;
  long_description: string;
  icon_svg: string;
  image_path: string;
  display_order: number;
  is_active: boolean;
  section_subtitle?: string;
  section_title?: string;
}

// Partner tipi tanımlaması ekle
interface Partner {
  id: string;
  name: string;
  logo_path: string;
  website_url?: string;
  display_order: number;
  is_active: boolean;
}

// Tip tanımlamaları ekleyelim
interface MapSettings {
  id: string;
  map_image_path: string;
  title: string;
  subtitle: string;
}

interface MapLocation {
  id: string;
  map_id: string;
  name: string;
  description: string;
  x_position: number;
  y_position: number;
  is_active: boolean;
  image_path?: string;
  slug?: string;
}

interface TourType {
  type: string;
  type_icon_svg: string;
  header_title: string;
}

export default function HomePage() {
  const [heroData, setHeroData] = useState<HeroSettings | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState<string>('/images/hero-bg.jpg'); // Fallback görsel
  const [popularTours, setPopularTours] = useState<PopularTour[]>([]);
  const [isToursLoading, setIsToursLoading] = useState(true);
  const [featuredSection, setFeaturedSection] = useState<FeaturedSectionSettings | null>(null);
  const [isFeaturedLoading, setIsFeaturedLoading] = useState(true);
  const [services, setServices] = useState<Service[]>([]);
  const [isServicesLoading, setIsServicesLoading] = useState(true);
  const [sectionData, setSectionData] = useState<Service | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [isPartnersLoading, setIsPartnersLoading] = useState(true);
  const [mapSettings, setMapSettings] = useState<MapSettings | null>(null);
  const [mapLocations, setMapLocations] = useState<MapLocation[]>([]);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [tourTypes, setTourTypes] = useState<TourType[]>([]);
  const [isTourTypesLoading, setIsTourTypesLoading] = useState(true);

  // Hero verilerini ve görsel URL'ini çek
  useEffect(() => {
    async function fetchHeroData() {
      try {
        // En son eklenen hero ayarlarını al
        const { data, error } = await supabase
          .from('hero_settings')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(1)
          .single();

        if (error) {
          console.error('Error fetching hero data:', error);
          return;
        }
        
        if (data) {
          setHeroData(data);
          
          // Görsel URL'ini oluştur
          if (data.image_path) {
            const { data: { publicUrl } } = supabase.storage
              .from('site-images')
              .getPublicUrl(data.image_path);
            
            setImageUrl(publicUrl);
          }
        }
      } catch (error) {
        console.error('Error in fetchHeroData:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchHeroData();
  }, []);

  // Popular turları çek
  useEffect(() => {
    async function fetchPopularTours() {
      try {
        const { data, error } = await supabase
          .from('tours')
          .select('*')
          .eq('popular_tour', true)
          .limit(6)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching popular tours:', error);
          return;
        }

        if (data) {
          setPopularTours(data);
        }
      } catch (error) {
        console.error('Error in fetchPopularTours:', error);
      } finally {
        setIsToursLoading(false);
      }
    }

    fetchPopularTours();
  }, []);

  // Featured section verilerini çek
  useEffect(() => {
    async function fetchFeaturedSection() {
      try {
        const { data, error } = await supabase
          .from('featured_section_settings')
          .select('*')
          .eq('is_active', true)
          .order('display_order')
          .limit(1)
          .single();

        if (error) {
          console.error('Error fetching featured section:', error);
          return;
        }

        if (data) {
          setFeaturedSection(data);
        }
      } catch (error) {
        console.error('Error in fetchFeaturedSection:', error);
      } finally {
        setIsFeaturedLoading(false);
      }
    }

    fetchFeaturedSection();
  }, []);

  // Services verilerini çek
  useEffect(() => {
    async function fetchServices() {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .eq('is_active', true)
          .order('display_order');

        if (error) {
          console.error('Error fetching services:', error);
          return;
        }

        if (data) {
          const sectionInfo = data.find(item => item.display_order === 1);
          setSectionData(sectionInfo || null);
          setServices(data);
          // İlk servisi seçili olarak ayarla
          setSelectedService(data[0]);
        }
      } catch (error) {
        console.error('Error in fetchServices:', error);
      } finally {
        setIsServicesLoading(false);
      }
    }

    fetchServices();
  }, []);

  // Partner logolarını çek
  useEffect(() => {
    async function fetchPartners() {
      try {
        const { data, error } = await supabase
          .from('partners')
          .select('*')
          .eq('is_active', true)
          .order('display_order');

        if (error) {
          console.error('Error fetching partners:', error);
          return;
        }

        if (data) {
          setPartners(data);
        }
      } catch (error) {
        console.error('Error in fetchPartners:', error);
      } finally {
        setIsPartnersLoading(false);
      }
    }

    fetchPartners();
  }, []);

  // Harita verilerini çekmek için useEffect ekleyelim
  useEffect(() => {
    async function fetchMapData() {
      try {
        // Harita ayarlarını çek
        const { data: settingsData, error: settingsError } = await supabase
          .from('map_settings')
          .select('*')
          .single();

        if (settingsError) throw settingsError;
        if (settingsData) setMapSettings(settingsData);

        // Aktif lokasyonları çek
        const { data: locationsData, error: locationsError } = await supabase
          .from('map_locations')
          .select('*')
          .eq('is_active', true)
          .order('name');

        if (locationsError) throw locationsError;
        if (locationsData) setMapLocations(locationsData);

      } catch (error) {
        console.error('Error fetching map data:', error);
      } finally {
        setIsMapLoading(false);
      }
    }

    fetchMapData();
  }, []);

  // Gezi türlerini çekmek için useEffect ekleyelim
  useEffect(() => {
    async function fetchTourTypes() {
      try {
        console.log('Fetching tour types...');
        const { data, error } = await supabase
          .from('tour_type_settings')
          .select('type, type_icon_svg, header_title')
          .order('display_order');

        if (error) {
          console.error('Error fetching tour types:', error);
          throw error;
        }
        
        if (data) {
          console.log('Tour types fetched:', data);
          setTourTypes(data);
        } else {
          console.log('No tour types data returned');
        }
      } catch (error) {
        console.error('Error in fetchTourTypes:', error);
      } finally {
        setIsTourTypesLoading(false);
      }
    }

    fetchTourTypes();
  }, []);

  return (
    <main className="relative">
      {/* Hero Section with Background */}
      <section className="relative h-[80vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={heroData?.title || "Hero background"}
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#1A2A1A]" />
        </div>

        {/* Header - hidden on mobile, visible on tablet and larger */}
        <div className="hidden md:block">
          <Header />
        </div>

        {/* Content Container */}
        <div className="relative h-full max-w-7xl mx-auto px-4">
          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="max-w-4xl text-white">
              {isLoading ? (
                <div className="animate-pulse">
                  <div className="h-16 bg-white/20 rounded w-3/4 mb-4"></div>
                  <div className="h-8 bg-white/20 rounded w-1/2"></div>
                </div>
              ) : (
                <>
                  <h1 className="font-butler font-bold text-5xl lg:text-7xl text-white pt-20">
                    {heroData?.title || "Anılar yaratmak için seyahat etmek"}
                  </h1>
                  <p className="text-xl mb-6 text-white pt-4">
                    {heroData?.subtitle || "Hayalinizdeki seyahati birlikte gerçekleştirelim."}
                  </p>
                  <Link 
                    href="/opportunity"
                    className="inline-block underline text-white hover:text-emerald-400 transition"
                  >
                    Tekliflerimizi inceleyin
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Search Card - Compact Premium Design, hidden on mobile */}
          <div className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-sm w-full shadow-2xl lg:right-0 hidden md:block border border-white/20 hover:shadow-emerald-200/20 transition-shadow duration-300">
            <div className="relative z-10">
              {/* Decorative Elements */}
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-emerald-500/20 rounded-full blur-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-lg"></div>
              
              {/* Title with accent */}
              <div className="relative">
                <h2 className="font-butler font-bold text-2xl lg:text-3xl text-gray-800 mb-1">
                  <span className="text-emerald-600 relative">
                    A Global DMC
                    <svg className="absolute -bottom-1 left-0 w-full h-1" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </span> Partner for Your Travel
                </h2>
                <p className="text-gray-600 mb-5 pt-2 text-sm">
                  We operate in about 100 countries globally, giving you a distinct advantage over any one else.
                </p>
              </div>
              
              {/* Options Grid - Dinamik olarak gezi türlerini göster */}
              {tourTypes && tourTypes.length > 0 ? (
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {isTourTypesLoading ? (
                    // Loading state
                    [...Array(3)].map((_, index) => (
                      <div key={index} className="animate-pulse">
                        <div className="p-3 flex flex-col items-center border border-gray-100 rounded-xl">
                          <div className="w-10 h-10 bg-gray-200 rounded-full mb-2"></div>
                          <div className="h-3 bg-gray-200 rounded w-16"></div>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Dinamik gezi türleri - İlk 3 tanesini göster
                    tourTypes.slice(0, 3).map((type) => {
                      console.log('Rendering tour type:', type);
                      return (
                        <Link 
                          key={type.type}
                          href={`/tourtype?type=${type.type}`}
                          className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <div className="relative p-3 flex flex-col items-center border border-gray-100 rounded-xl group-hover:border-emerald-200 transition-colors duration-300">
                            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm mb-2 group-hover:bg-emerald-500 transition-colors duration-300">
                              <div 
                                className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300"
                                dangerouslySetInnerHTML={{ 
                                  __html: type.type_icon_svg ? type.type_icon_svg.replace(/script/gi, '') : ''
                                }}
                              />
                            </div>
                            <span className="text-xs font-medium text-gray-700 group-hover:text-emerald-700 transition-colors duration-300">
                              {type.header_title}
                            </span>
                          </div>
                        </Link>
                      );
                    })
                  )}
                </div>
              ) : null}
              
              {/* Premium CTA Button */}
              <Link
                href="/tours"
                className="relative block w-full py-3 px-5 bg-emerald-500 text-white text-center rounded-xl hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-300/50 overflow-hidden group transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-medium text-sm">
                  Teklifimizi inceleyin
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
              
              {/* Pulse Indicator */}
              <div className="absolute -top-2 -right-2 w-4 h-4">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="relative h-24 bg-[#1A2A1A]" />

      {/* Featured Tours Section */}
      <section className="relative bg-[#f1dbc4] pt-18 pb-[150px] min-h-[1600px]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full" style={{ backgroundColor: '#f1dbc4' }}>
          <div className="relative w-full h-full" style={{ minHeight: '1600px' }}>
            <Image
              src="/images/backgroundup.png"
              alt=""
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="100vw"
              style={{ 
                objectPosition: 'top',
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                minHeight: '1600px',
                display: 'block',
                backgroundColor: '#f1dbc4'
              }}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-40">
          {/* Section Header */}
          <div className="text-center mb-16">
            {isFeaturedLoading ? (
              // Loading state
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-emerald-400/20 rounded w-40 mx-auto"></div>
                <div className="h-8 bg-white/20 rounded w-64 mx-auto"></div>
                <div className="h-4 bg-white/20 rounded max-w-2xl mx-auto"></div>
              </div>
            ) : featuredSection ? (
              <>
                <span className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                  {featuredSection.subtitle}
                </span>
                <h2 className="font-butler font-bold text-4xl text-white">
                  {featuredSection.title}
                </h2>
                <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
                  {featuredSection.description}
                </p>
              </>
            ) : (
              // Fallback içerik
              <>
                <span className="text-sm font-semibold text-emerald-400 tracking-wider uppercase">
                  Öne Çıkan Turlarımız
                </span>
                <h2 className="font-butler font-bold text-4xl text-white">
                  En sevdiğimiz geziler
                </h2>
                <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
                  Tüm gezilerimiz cazip fiyatlıdır ve rezervasyon yaptırmak kolaydır. Beklenmeyen ekstralar olmadan komple seyahatler sunuyoruz.
                </p>
              </>
            )}
          </div>

          {/* Tours Grid - Modern Premium Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {isToursLoading ? (
              // Loading state
              [...Array(6)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-white/5 rounded-2xl h-[500px]"></div>
                </div>
              ))
            ) : popularTours.length > 0 ? (
              popularTours.map((tour) => {
                const heroImage = tour.tour_images?.find(img => img.image_type === 'hero');
                const imagePath = heroImage?.storage_path || tour.hero_image_path;

                return (
                  <div key={tour.id} className="group relative overflow-hidden rounded-2xl h-[500px] shadow-lg transition-all duration-500 hover:shadow-2xl">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 w-full h-full">
                      <Image
                        src={getStorageUrl(imagePath)}
                        alt={heroImage?.alt_text || tour.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      {/* Premium Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Content Container */}
                    <div className="absolute inset-0 flex flex-col justify-between p-10 text-white">
                      {/* Top Section - Region Badge */}
                      <div className="flex justify-between items-start">
                        <span className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium border border-white/20">
                          {tour.region}
                        </span>
                        <span className="bg-emerald-500/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium">
                          {tour.duration} Gün
                        </span>
                      </div>
                      
                      {/* Bottom Section - Tour Details */}
                      <div className="space-y-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        {/* Title */}
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight group-hover:text-emerald-300 transition-colors duration-300">
                          {tour.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-white/80 text-sm lg:text-base line-clamp-3 mb-2">
                          {tour.short_description || "Eşsiz manzaralar ve unutulmaz deneyimler sunan premium tur paketimiz."}
                        </p>
                        
                        {/* Price and CTA */}
                        <div className="flex items-center justify-between pt-5 border-t border-white/10">
                          <div className="flex flex-col">
                            <span className="text-xs text-white/60 uppercase">Başlangıç Fiyatı</span>
                            <span className="text-2xl font-bold text-emerald-400">{tour.base_price} €</span>
                          </div>
                          
                          <Link 
                            href={`/tours/${tour.slug}`}
                            className="group/btn flex items-center gap-2 bg-white/10 hover:bg-emerald-500/70 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 border border-white/10 hover:border-emerald-400/50"
                          >
                            <span className="text-sm font-medium">Detaylar</span>
                            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Premium Accent Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                );
              })
            ) : (
              <div className="col-span-3 text-center text-gray-500">
                Henüz popüler tur bulunmuyor.
              </div>
            )}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <Link 
              href="/tours"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-full 
                transition-all duration-300 hover:bg-emerald-600 transform hover:-translate-y-1"
            >
              <span>TÜM TURLARI GÖRÜNTÜLE</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-[#f1dbc4] pt-20 pb-36 z-20">
        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-20">
            {isServicesLoading ? (
              // Loading state
              <div className="animate-pulse space-y-4">
                <div className="h-8 bg-white/20 rounded w-40 mx-auto"></div>
                <div className="h-12 bg-white/20 rounded w-64 mx-auto"></div>
              </div>
            ) : (
              <>
                <div className="inline-block mb-4">
                  <span className="text-sm font-semibold text-[#1A2A1A] tracking-[0.2em] uppercase bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20">
                    {sectionData?.section_subtitle || "HİZMETLERİMİZ"}
                  </span>
                </div>
                <h2 className="font-butler font-bold text-4xl">
                  {sectionData?.section_title || "Premium Seyahat Deneyimi"}
                </h2>
                <div className="w-24 h-1 bg-[#1A2A1A] mx-auto mt-6 rounded-full" />
              </>
            )}
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-20">
            {isServicesLoading ? (
              // Loading state
              [...Array(7)].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="bg-white/20 rounded-3xl h-[200px]"></div>
                </div>
              ))
            ) : (
              services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`group cursor-pointer flex flex-col items-center p-8 
                    backdrop-blur-lg rounded-3xl border shadow-xl
                    transform hover:scale-105 hover:-translate-y-1
                    transition-all duration-300 ease-out
                    active:scale-95 active:shadow-inner
                    ${selectedService?.id === service.id 
                      ? 'bg-white/30 border-white/20 shadow-2xl' 
                      : 'bg-white/20 border-white/10'
                    }`}
                >
                  <div className={`mb-4 p-4 rounded-2xl transition-colors duration-300
                    ${selectedService?.id === service.id 
                      ? 'bg-white/60 text-emerald-600' 
                      : 'bg-white/40 text-[#1A2A1A]'
                    }`}
                  >
                    <div 
                      className="w-12 h-12"
                      dangerouslySetInnerHTML={{ __html: service.icon_svg }}
                    />
                  </div>
                  <h3 className={`font-butler font-bold text-base mb-2 transition-colors
                    ${selectedService?.id === service.id 
                      ? 'text-emerald-600' 
                      : 'text-[#1A2A1A]'
                    }`}
                  >
                    {service.name}
                  </h3>
                  <p className="text-sm text-[#1A2A1A]/80 text-center">
                    {service.short_description}
                  </p>
                </button>
              ))
            )}
          </div>

          {/* Service Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="font-butler font-bold text-4xl font-bold text-[#1A2A1A] leading-tight">
                {selectedService?.name || "Profesyonel Seyahat"}
                <span className="block">Hizmetleri</span>
              </h3>
              <p className="text-lg text-[#1A2A1A]/80 leading-relaxed">
                {selectedService?.long_description || 
                  "Seyahatinizin her aşamasında yanınızdayız. Otel rezervasyonlarından, ulaşım planlamasına, rehberlik hizmetlerinden, özel aktivite organizasyonlarına kadar tüm ihtiyaçlarınızı karşılıyoruz."}
              </p>
            </div>
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src={selectedService?.image_path ? 
                  supabase.storage
                    .from('site-images')
                    .getPublicUrl(selectedService.image_path)
                    .data.publicUrl 
                  : "/images/services/travel-service.jpg"}
                alt={selectedService?.name || "Seyahat Hizmetleri"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A1A]/60 via-[#1A2A1A]/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#1A2A1A] font-bold">%100 Memnuniyet Garantisi</h4>
                    <p className="text-[#1A2A1A]/60 text-sm">En iyi hizmeti sunmak için buradayız</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Section */}
      <section className="relative bg-[#f1dbc4] py-20 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.png"
            alt=""
            fill
            className="object-cover opacity-100"
            priority
            quality={100}
          />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 min-h-[600px] lg:min-h-[800px]">
            {/* Sol Taraf - Görsel */}
            <div className="relative h-[450px] md:h-[600px] lg:h-full order-2 lg:order-1">
              {/* Ana Görsel */}
              <div className="rounded-[30px] overflow-hidden h-full relative shadow-2xl">
                <Image
                  src="/images/blog/antelope-canyon.jpg"
                  alt="Antelope Canyon"
                  fill
                  className="object-cover rounded-[30px] transform hover:scale-105 transition-transform duration-700"
                  priority
                  style={{ borderRadius: '30px' }}
                />
              </div>
              
              {/* Küçük Görsel */}
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[60%] translate-x-[15%] hidden md:block">
                <div className="rounded-[30px] overflow-hidden aspect-[3/4] shadow-2xl relative ring-4 ring-white/10 backdrop-blur">
                  <Image
                    src="/images/blog/golden-gate.jpg"
                    alt="Golden Gate Bridge"
                    fill
                    className="object-cover rounded-[30px] transform hover:scale-105 transition-transform duration-700"
                    style={{ borderRadius: '30px' }}
                  />
                </div>
              </div>
            </div>

            {/* Sağ Taraf - İçerik */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase">
                    SEYAHAT REHBERİ
                  </span>
                  <h3 className="font-butler font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Kapadokya'nın Masalsı Dünyasına Yolculuk
                    
                    <span className="block mt-2 text-emerald-400">önemli ipuçları</span>
                  </h3>
                </div>

                <p className="text-white/90 text-lg leading-relaxed">
                Peri bacaları ve rengarenk balonlarıyla Kapadokya'nın büyülü atmosferinde unutulmaz bir maceraya çıkın!
                </p>

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500/10 text-emerald-400 rounded-full 
                    hover:bg-emerald-500 hover:text-white transition-all duration-300 group"
                >
                  <span>Blog'a Git</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative bg-[#f1dbc4] py-24">
        <div className="container mx-auto px-4">
          {/* Section Header - Premium Design */}
          <div className="text-center mb-20">
            {isMapLoading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-gray-200 rounded w-40 mx-auto"></div>
                <div className="h-8 bg-gray-200 rounded w-64 mx-auto"></div>
              </div>
            ) : (
              <>
                {/* Decorative Elements */}
                <div className="relative inline-block mb-3">
                  
                  <div className="absolute -bottom-1 -left-1 w-12 h-12 bg-emerald-500/10 rounded-full blur-xl"></div>
                  <div className="absolute -top-1 -right-1 w-12 h-12 bg-emerald-500/10 rounded-full blur-xl"></div>
                </div>
                
                {/* Main Title with Accent */}
                <h2 className="font-butler font-bold text-4xl md:text-5xl text-gray-900 mt-4 mb-3 relative inline-block">
                  <span className="relative">
                    Dünya Genelinde 
                    <svg className="absolute -bottom-2 left-0 w-full h-1.5" viewBox="0 0 200 8" preserveAspectRatio="none">
                      <path d="M0,5 Q50,2 100,5 T200,5" stroke="#10b981" strokeWidth="2" fill="none" />
                    </svg>
                  </span>
                  <span className="text-emerald-700"> Hizmet Verdiğimiz</span> Destinasyonlar
                </h2>
                
                {/* Subtitle with Premium Style */}
                <div className="mt-6 relative">
                  <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-light italic">
                    "Dünyayı Keşfetmeye <span className="font-medium text-emerald-700 not-italic">Bir İnci</span> Yeter"
                  </p>
                  
                  {/* Decorative Divider */}
                  <div className="flex items-center justify-center mt-8">
                    <div className="w-16 h-0.5 bg-gray-300 rounded-full"></div>
                    <div className="mx-4">
                      <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-16 h-0.5 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Map Container - Daha büyük harita */}
          <div className="relative max-w-7xl mx-auto">
            {/* Map Image */}
            <div className="relative">
              <Image
                src={getStorageUrl(mapSettings?.map_image_path) || '/images/turkey-map.png'}
                alt="Türkiye Haritası"
                width={2000}
                height={1200}
                className="w-full h-auto rounded-xl "
              />

              {/* Map Locations */}
              {mapLocations.map((location) => (
                <div 
                  key={location.id}
                  className="absolute group"
                  style={{ 
                    left: `${location.x_position}%`, 
                    top: `${location.y_position}%` 
                  }}
                >
                  {/* Marker Icon - Sadece konum ikonu */}
                  <button 
                    className="relative z-10 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110"
                    onClick={() => setActiveLocation(location.id === activeLocation ? null : location.id)}
                  >
                    <svg 
                      className="w-8 h-8 text-emerald-600 drop-shadow-lg group-hover:text-emerald-500 transition-colors duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </button>
                  
                  {/* Location Info Card */}
                  <div 
                    className={`absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                      activeLocation === location.id 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible translate-y-2'
                    }`}
                  >
                    {/* Card Content */}
                    <div className="p-5">
                      {/* Location Name with Accent */}
                      <div className="mb-3">
                        <h3 className="font-butler text-xl text-gray-800 font-bold">
                          {location.name}
                        </h3>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mt-2"></div>
                      </div>
                      
                      <p className="text-sm leading-relaxed text-gray-600 mb-4">
                        {location.description}
                      </p>
                      
                      <Link 
                        href={`/destination/${location.slug || location.id}`}
                        className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        <span>Keşfet</span>
                        <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                    
                    {/* Close Button */}
                    <button 
                      className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveLocation(null);
                      }}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      
      <section className="relative h-48 overflow-hidden bg-[#fefefe]">
        
        {/* Background Image */}
        <div className="absolute inset-0 flex justify-center">
          <div className="relative w-full" style={{ minWidth: '2400px' }}>
            <Image
              src="/images/partner-section-bg.png"
              alt=""
              fill
              className="object-contain"
              priority
              style={{ 
                maxHeight: '192px',
                backgroundColor: '#f1dbc4'
              }}
            />
          </div>
        </div>

        {/* Logo Slider Container */}
        <div className="relative h-full flex items-center max-w-[1920px] mx-auto">
          {/* Logo Slider */}
          <div className="flex animate-scroll">
            {isPartnersLoading ? (
              // Loading state
              <div className="flex min-w-max items-center">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="w-[120px] h-[40px] bg-gray-200 animate-pulse mx-8" />
                ))}
              </div>
            ) : (
              <>
                {/* İlk set logolar */}
                <div className="flex min-w-max items-center">
                  {partners.map((partner) => (
                    <Image
                      key={partner.id}
                      src={supabase.storage
                        .from('site-images')
                        .getPublicUrl(partner.logo_path)
                        .data.publicUrl}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="object-contain brightness-0 invert mx-8"
                    />
                  ))}
                </div>
                {/* İkinci set logolar (sonsuz scroll için kopya) */}
                <div className="flex min-w-max items-center">
                  {partners.map((partner) => (
                    <Image
                      key={`${partner.id}-2`}
                      src={supabase.storage
                        .from('site-images')
                        .getPublicUrl(partner.logo_path)
                        .data.publicUrl}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="object-contain brightness-0 invert mx-8"
                    />
                  ))}
                </div>
                {/* Üçüncü set logolar (sonsuz scroll için kopya) */}
                <div className="flex min-w-max items-center">
                  {partners.map((partner) => (
                    <Image
                      key={`${partner.id}-3`}
                      src={supabase.storage
                        .from('site-images')
                        .getPublicUrl(partner.logo_path)
                        .data.publicUrl}
                      alt={partner.name}
                      width={120}
                      height={40}
                      className="object-contain brightness-0 invert mx-8"
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
    </main>
  )
}
