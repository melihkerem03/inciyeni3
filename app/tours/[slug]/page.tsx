'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import TourDetailClient from './TourDetailClient'
import { notFound } from 'next/navigation'
import { revalidatePath } from 'next/cache'

// Sayfanın her 0 saniyede bir yenilenmesini sağlar
export const revalidate = 0

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// Tour tipi
interface Tour {
  id: string
  slug: string
  title: string
  region: string
  duration: string
  base_price: number
  short_description: string
  long_description: string
  hero_image_path: string
  popular_tour: boolean
  destination_status: boolean
  opportunity_tour: boolean
  tour_type_id: string
  created_at: string
  updated_at: string
  tour_images: Array<{
    id: string
    storage_path: string
    alt_text: string
    image_type: string
    display_order: number
  }>
  tour_highlights: Array<{
    id: string
    content: string
    display_order: number
  }>
  tour_inclusions: Array<{
    id: string
    content: string
    display_order: number
  }>
  tour_tips: Array<{
    id: string
    content: string
    icon_name: string
  }>
  tour_daily_programs: Array<{
    id: string
    day_range: string
    title: string
    description: string
  }>
  tour_dates_prices: any[]
  tour_weather_data: any[]
}

interface TourImage {
  id: string
  storage_path: string
  alt_text: string
  image_type: string
  display_order: number
}

export default function TourPage({ params }: { params: { slug: string } }) {
  const [tour, setTour] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchTour() {
      try {
        // İlk olarak turu bulalım
        const { data: tourData, error: tourError } = await supabase
          .from('tours')
          .select('*')
          .eq('slug', params.slug)
          .single();

        console.log('Tour data:', tourData);

        if (tourError) {
          console.error('Error fetching tour:', tourError);
          return;
        }

        if (tourData) {
          // Şimdi ilişkili verileri ayrı ayrı çekelim
          const [
            imagesData,
            highlightsData,
            inclusionsData,
            tipsData,
            programsData,
            pricesData,
            weatherData
          ] = await Promise.all([
            supabase.from('tour_images').select('*').eq('tour_id', tourData.id),
            supabase.from('tour_highlights').select('*').eq('tour_id', tourData.id),
            supabase.from('tour_inclusions').select('*').eq('tour_id', tourData.id),
            supabase.from('tour_tips').select('*').eq('tour_id', tourData.id),
            supabase.from('tour_daily_programs').select('*').eq('tour_id', tourData.id),
            supabase.from('tour_dates_prices').select('*').eq('tour_id', tourData.id),
            supabase.from('tour_weather_data').select('*').eq('tour_id', tourData.id)
          ]);

          console.log('Related data:', {
            images: imagesData.data,
            highlights: highlightsData.data,
            inclusions: inclusionsData.data,
            tips: tipsData.data,
            programs: programsData.data,
            prices: pricesData.data,
            weather: weatherData.data
          });

          // Tüm verileri birleştir
          const fullTourData = {
            ...tourData,
            tour_images: imagesData.data || [],
            tour_highlights: highlightsData.data || [],
            tour_inclusions: inclusionsData.data || [],
            tour_tips: tipsData.data || [],
            tour_daily_programs: programsData.data || [],
            tour_dates_prices: pricesData.data || [],
            tour_weather_data: weatherData.data || []
          };

          setTour(fullTourData);
        }
      } catch (error) {
        console.error('Error in fetchTour:', error);
      } finally {
        setIsLoading(false);
      }
    }

    if (params.slug) {
      fetchTour();
    }
  }, [params.slug]);

  if (isLoading) {
    return <div>Yükleniyor...</div>
  }

  if (!tour) {
    return notFound()
  }

  return <TourDetailClient tour={tour} />
} 