import Image from 'next/image'
import Header from '@/components/common/header'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

// Sayfanın her 0 saniyede bir yenilenmesini sağlar
export const revalidate = 0;

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

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

async function getToursData() {
  const { data: tours, error } = await supabase
    .from('tours')
    .select(`
      *,
      tour_images (storage_path, alt_text, image_type)
    `)

  if (error) {
    console.error('Error fetching tours:', error)
    return []
  }

  return tours
}

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

export default async function ToursPage() {
  const tours = await getToursData()

  return (
    <main className="relative bg-[#f1dbc4]">
      {/* Hero Section */}
      <section className="relative h-[60vh] mb-8">
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
                src="/images/hero-tours.jpg"
                alt="Tours Hero"
                fill
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
            <div className="max-w-4xl text-white px-4 md:px-0">
              <span className="inline-block text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-6">
                TÜM TURLARIMIZ
              </span>
              <h1 className="font-butler font-bold text-5xl lg:text-7xl text-white">
                Unutulmaz Deneyimler İçin Özel Rotalar
              </h1>
              <p className="text-xl mt-6 text-white/90 max-w-2xl">
                Dünya'nın en güzel yerlerini keşfetmek için hazırladığımız özel turlarımızı inceleyin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filtreleme barını yatay kaydırılabilir hale getiriyoruz */}
          <div className="bg-white rounded-2xl md:rounded-full shadow-md p-2 md:p-6 overflow-x-auto scrollbar-hide">
            <div className="flex flex-nowrap items-center gap-1 md:gap-6 min-w-max">
              {/* Hedefler Filter */}
              <button className="flex items-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 whitespace-nowrap hover:bg-gray-50 rounded-full transition-colors group">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
                <span className="font-medium text-sm md:text-lg">Hedefler</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-emerald-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Gezi türü Filter */}
              <button className="flex items-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 whitespace-nowrap hover:bg-gray-50 rounded-full transition-colors group">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-medium text-sm md:text-lg">Gezi türü</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-emerald-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Bütçe Filter */}
              <button className="flex items-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 whitespace-nowrap hover:bg-gray-50 rounded-full transition-colors group">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-sm md:text-lg">Bütçe</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-emerald-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Seyahat ayı Filter */}
              <button className="flex items-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 whitespace-nowrap hover:bg-gray-50 rounded-full transition-colors group">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium text-sm md:text-lg">Seyahat ayı</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-emerald-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Seyahat süresi Filter */}
              <button className="flex items-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 whitespace-nowrap hover:bg-gray-50 rounded-full transition-colors group">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-sm md:text-lg">Seyahat süresi</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-emerald-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid Section */}
      <section className="mt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tours.map((tour) => {
              const heroImage = tour.tour_images?.find((img: {image_type: string}) => img.image_type === 'hero');
              const imagePath = heroImage?.storage_path || tour.hero_image_path;

              return (
                <Link 
                  key={tour.id} 
                  href={`/tours/${tour.slug}`} 
                  className="block bg-[#f8f2ea] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={getStorageUrl(imagePath)}
                      alt={heroImage?.alt_text || tour.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Tags */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-black/80 text-white text-sm px-4 py-1.5 rounded-full">
                        {tour.region}
                      </span>
                    </div>
                    {tour.opportunity_tour && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-block bg-black/80 text-white text-sm px-4 py-1.5 rounded-full">
                          SEYAHAT FIRSATI
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Location and Duration */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <span>{tour.title.split(' ').pop()}</span>
                      <span>•</span>
                      <span>{tour.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-butler font-bold text-gray-900 mb-4">
                      {tour.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">
                      {tour.short_description}
                    </p>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-sm text-gray-500">İtibaren</span>
                        <span className="text-xl font-semibold">
                          {formatPrice(tour.base_price, tour.base_price_currency)}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-2 text-emerald-600 font-medium group">
                        Bu yolculuğu keşfedin
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
