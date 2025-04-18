import Image from 'next/image'
import Header from '@/components/common/header'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import FilterSection from '@/components/FilterSection'

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

async function getToursData(searchParams: any) {
  let query = supabase
    .from('tours')
    .select(`
      *,
      tour_images (storage_path, alt_text, image_type)
    `)
  
  // Fiyat filtresi
  if (searchParams?.minPrice) {
    query = query.gte('base_price', parseInt(searchParams.minPrice))
  }
  
  if (searchParams?.maxPrice) {
    query = query.lte('base_price', parseInt(searchParams.maxPrice))
  }
  
  // Para birimi filtresi
  if (searchParams?.currency) {
    query = query.eq('base_price_currency', searchParams.currency)
  }
  
  // Tarih filtreleri
  if (searchParams?.startDate) {
    // Seçilen ay ve yılın ilk günü (YYYY-MM-01)
    const [startYear, startMonth] = searchParams.startDate.split('-')
    const startDateStr = `${startYear}-${startMonth}-01`
    
    // Turların başlangıç tarihi seçilen tarihten sonra olmalı
    // VEYA turların bitiş tarihi seçilen tarihten sonra olmalı
    query = query.or(`base_date_start.gte.${startDateStr},base_date_end.gte.${startDateStr}`)
  }
  
  if (searchParams?.endDate) {
    // Seçilen ay ve yılın son günü
    const [endYear, endMonth] = searchParams.endDate.split('-')
    const lastDay = new Date(parseInt(endYear), parseInt(endMonth), 0).getDate()
    const endDateStr = `${endYear}-${endMonth}-${lastDay}`
    
    // Turların başlangıç tarihi seçilen son tarihten önce olmalı
    query = query.lte('base_date_start', endDateStr)
  }
  
  const { data: tours, error } = await query

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

// Client componentlerini dynamic import ile yükle
const BudgetFilter = dynamic(() => import('@/components/filters/BudgetFilter'), {
  ssr: false
})
const DateFilter = dynamic(() => import('@/components/filters/DateFilter'), {
  ssr: false
})

export default async function ToursPage({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const tours = await getToursData(searchParams)
  const totalTours = tours.length

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

      {/* Client Component olarak FilterSection */}
      <FilterSection totalTours={totalTours} />

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
