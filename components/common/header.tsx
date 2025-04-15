'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@supabase/supabase-js';

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Tip tanımlamaları
interface Tour {
  id: string;
  title: string;
  region: string;
  slug: string;
  destination_status: boolean;
}

// Bölgelere göre turları grupla
interface GroupedTours {
  [key: string]: Tour[];
}

// Tip tanımlamalarına ekle
interface RegionImage {
  region: string;
  image_path: string;
}

// Tip tanımlamaları
interface TourType {
  type: string;
  type_icon_svg: string;
  header_title: string;
}

// Logo ayarları için tip tanımı
interface LogoSettings {
  id: string;
  logo_path: string;
}

// getStorageUrl yardımcı fonksiyonu
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

export default function Header() {
  const [destinations, setDestinations] = useState<GroupedTours>({});
  const [regionImages, setRegionImages] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [tourTypes, setTourTypes] = useState<TourType[]>([]);
  const [logoSettings, setLogoSettings] = useState<LogoSettings | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDesktopView, setIsDesktopView] = useState(false);

  // Destinasyonları ve bölge görsellerini çek
  useEffect(() => {
    async function fetchData() {
      try {
        // Destinasyonları çek
        const { data: toursData, error: toursError } = await supabase
          .from('tours')
          .select('*')
          .eq('destination_status', true)
          .order('region');

        if (toursError) throw toursError;

        // Bölge görsellerini çek
        const { data: imagesData, error: imagesError } = await supabase
          .from('region_images')
          .select('region, image_path');

        if (imagesError) throw imagesError;

        // Turları grupla
        if (toursData) {
          const grouped = toursData.reduce((acc: GroupedTours, tour: Tour) => {
            if (!acc[tour.region]) {
              acc[tour.region] = [];
            }
            acc[tour.region].push(tour);
            return acc;
          }, {});
          setDestinations(grouped);
        }

        // Bölge görsellerini map'le
        if (imagesData) {
          const imageMap = imagesData.reduce((acc: Record<string, string>, img: RegionImage) => {
            acc[img.region] = img.image_path;
            return acc;
          }, {});
          setRegionImages(imageMap);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // Gezi türlerini çek
  useEffect(() => {
    async function fetchTourTypes() {
      try {
        const { data, error } = await supabase
          .from('tour_type_settings')
          .select('type, type_icon_svg, header_title')
          .order('type');

        if (error) throw error;
        if (data) setTourTypes(data);
      } catch (error) {
        console.error('Error fetching tour types:', error);
      }
    }

    fetchTourTypes();
  }, []);

  useEffect(() => {
    async function fetchLogoSettings() {
      try {
        const { data, error } = await supabase
          .from('logo_settings')
          .select('*')
          .single();

        if (error) throw error;
        if (data) setLogoSettings(data);
      } catch (error) {
        console.error('Error fetching logo:', error);
      }
    }

    fetchLogoSettings();
  }, []);

  // Update the resize handler to set the view state
  useEffect(() => {
    const handleResize = () => {
      // Use a larger breakpoint (1024px) to account for landscape mode on tablets
      setIsDesktopView(window.innerWidth >= 1024);
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle dropdown in mobile view
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="relative z-50 w-full">
      {/* Conditional rendering based on viewport size */}
      {isDesktopView ? (
        // Desktop Header
        <div className="max-w-[1920px] mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src={logoSettings ? getStorageUrl(logoSettings.logo_path) : '/images/logo.png'}
                alt="İnci DMC"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="absolute left-1/2 -translate-x-1/2">
              <ul className="flex items-center gap-8">
                <li><Link href="/tours" className="text-white font-semibold text-lg hover:text-emerald-400 transition-colors">Tüm Turlar</Link></li>
                
                {/* Destinasyonlar Dropdown */}
                <li className="relative group">
                  <button className="flex items-center gap-2 text-white font-semibold text-lg hover:text-emerald-400 transition-colors">
                    <span>Destinasyonlar</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Invisible bridge */}
                  <div className="absolute h-10 w-full -bottom-10 invisible"></div>

                  {/* Dropdown Menu */}
                  <div className="fixed invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg flex w-[75vw]" 
                    style={{ top: "80px" }}>
                    {/* Destinations Grid */}
                    <div className="w-full p-12">
                      {isLoading ? (
                        // Loading state
                        <div className="grid grid-cols-3 gap-8">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="animate-pulse space-y-4">
                              <div className="h-6 bg-gray-200 rounded w-32"></div>
                              <div className="space-y-2">
                                {[...Array(3)].map((_, j) => (
                                  <div key={j} className="h-4 bg-gray-100 rounded w-48"></div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 gap-8">
                          {Object.entries(destinations).map(([region, tours]) => (
                            <div 
                              key={region} 
                              className="min-w-[250px]"
                              onMouseEnter={() => setHoveredRegion(region)}
                              onMouseLeave={() => setHoveredRegion(null)}
                            >
                              <h4 className="font-bold text-lg mb-4 text-gray-700 border-b pb-2">
                                {region}
                              </h4>
                              <div className="space-y-2">
                                {tours.map((tour) => (
                                  <Link 
                                    key={tour.id}
                                    href={`/tours/${tour.slug}`}
                                    className="flex items-center justify-between text-gray-600 hover:text-emerald-500 transition-colors font-medium py-1"
                                  >
                                    <span>{tour.title}</span>
                                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" 
                                      fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" 
                                        strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Region Image */}
                    <div className="w-1/3 relative overflow-hidden bg-[#f1dbc4]">
                      {hoveredRegion && regionImages[hoveredRegion] ? (
                        <Image
                          src={supabase.storage
                            .from('site-images')
                            .getPublicUrl(regionImages[hoveredRegion])
                            .data.publicUrl}
                          alt={`${hoveredRegion} bölgesi`}
                          fill
                          className="object-cover transition-all duration-500 hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center p-8">
                          <Image
                            src="/images/dünya.jpg"
                            alt="World Map"
                            fill
                            className="object-cover transition-all duration-500 hover:scale-110"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </li>

                {/* Gezi türü Dropdown */}
                <li className="relative group">
                  <button className="flex items-center gap-2 text-white font-semibold text-lg hover:text-emerald-400 transition-colors">
                    <span>Gezi türü</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Invisible bridge */}
                  <div className="absolute h-10 w-full -bottom-10 invisible"></div>

                  {/* Dropdown Menu */}
                  <div className="fixed invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg w-[75vw]" style={{ top: "80px" }}>
                    <div className="p-8">
                      <div className="grid grid-cols-7 gap-4">
                        {tourTypes.map((type) => (
                          <Link
                            key={type.type}
                            href={`/tourtype?type=${type.type}`}
                            className="flex flex-col items-center gap-4 p-6 rounded-xl hover:bg-gray-50 transition-colors group"
                          >
                            {/* SVG Icon */}
                            <div 
                              className="text-gray-600 group-hover:text-emerald-500 transition-colors"
                              dangerouslySetInnerHTML={{ 
                                __html: type.type_icon_svg.replace(/script/gi, '')
                              }}
                            />
                            {/* Title */}
                            <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-500 text-center transition-colors">
                              {type.header_title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>

                {/* Fırsatlar */}
                <li>
                  <Link
                    href="/opportunity"
                    className="text-white font-semibold text-lg hover:text-emerald-400 transition-colors"
                  >
                    Fırsatlar
                  </Link>
                </li>

                {/* Bloglar */}
                <li>
                  <Link
                    href="/blog"
                    className="text-white font-semibold text-lg hover:text-emerald-400 transition-colors"
                  >
                    Bloglar
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Sağ Taraf Butonları */}
            <div className="flex items-center gap-6">
              {/* Acenta Girişi Butonu */}
              <Link
                href="/acenta-giris"
                className="flex items-center gap-3 px-6 py-3 bg-emerald-500 text-white rounded-full 
                  hover:bg-emerald-600 transition-all duration-300 group"
              >
                <span className="text-lg font-semibold">Acenta Girişi</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // Mobile Header
        <>
          {/* Fixed Logo */}
          <div className="fixed top-6 left-4 z-50">
            <Link href="/" className="shrink-0">
              <Image
                src={logoSettings ? getStorageUrl(logoSettings.logo_path) : '/images/logo.png'}
                alt="İnci DMC"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="fixed top-6 right-4 z-50 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              // X icon for close
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Overlay */}
          <div className={`fixed inset-0 bg-[#1A2A1A] z-40 transition-all duration-300 ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            <div className="flex flex-col h-full pt-24 px-6 overflow-y-auto">
              <nav className="flex-1">
                <ul className="space-y-6">
                  <li>
                    <Link 
                      href="/tours" 
                      className="text-white text-2xl font-semibold block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Tüm Turlar
                    </Link>
                  </li>
                  
                  {/* Destinasyonlar Dropdown */}
                  <li>
                    <button 
                      className="flex items-center justify-between w-full text-white text-2xl font-semibold py-2"
                      onClick={() => toggleDropdown('destinations')}
                    >
                      <span>Destinasyonlar</span>
                      <svg 
                        className={`w-6 h-6 transition-transform duration-300 ${activeDropdown === 'destinations' ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Content */}
                    <div className={`mt-2 space-y-4 pl-4 ${activeDropdown === 'destinations' ? 'block' : 'hidden'}`}>
                      {Object.entries(destinations).map(([region, tours]) => (
                        <div key={region} className="mb-4">
                          <h4 className="text-emerald-400 text-xl font-semibold mb-2">{region}</h4>
                          <ul className="space-y-2 pl-2">
                            {tours.map((tour) => (
                              <li key={tour.id}>
                                <Link 
                                  href={`/tours/${tour.slug}`}
                                  className="text-white/80 hover:text-white block py-1"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {tour.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </li>

                  {/* Gezi türü Dropdown */}
                  <li>
                    <button 
                      className="flex items-center justify-between w-full text-white text-2xl font-semibold py-2"
                      onClick={() => toggleDropdown('tourTypes')}
                    >
                      <span>Gezi türü</span>
                      <svg 
                        className={`w-6 h-6 transition-transform duration-300 ${activeDropdown === 'tourTypes' ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Content */}
                    <div className={`mt-2 grid grid-cols-2 gap-4 pl-4 ${activeDropdown === 'tourTypes' ? 'block' : 'hidden'}`}>
                      {tourTypes.map((type) => (
                        <Link
                          key={type.type}
                          href={`/tourtype?type=${type.type}`}
                          className="flex flex-col items-center p-4 bg-white/10 rounded-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div 
                            className="text-emerald-400 mb-2"
                            dangerouslySetInnerHTML={{ 
                              __html: type.type_icon_svg.replace(/script/gi, '')
                            }}
                          />
                          <span className="text-white text-center">{type.header_title}</span>
                        </Link>
                      ))}
                    </div>
                  </li>

                  <li>
                    <Link 
                      href="/opportunity" 
                      className="text-white text-2xl font-semibold block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Fırsatlar
                    </Link>
                  </li>

                  <li>
                    <Link 
                      href="/blog" 
                      className="text-white text-2xl font-semibold block py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Bloglar
                    </Link>
                  </li>
                </ul>
              </nav>
              
              {/* Mobile Menu Footer */}
              <div className="py-8 border-t border-white/20 mt-8">
                <Link
                  href="/acenta-giris"
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-emerald-500 text-white rounded-full w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg font-semibold">Acenta Girişi</span>
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
