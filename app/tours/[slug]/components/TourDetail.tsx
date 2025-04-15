'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/common/header';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type ProgramDay = '1-4' | '5';

interface TourDetailProps {
  tour: {
    id: string;
    slug: string;
    title: string;
    region: string;
    duration: string;
    base_price: number;
    short_description: string;
    long_description: string;
    hero_image_path: string;
    popular_tour: boolean;
    destination_status: boolean;
    opportunity_tour: boolean;
    tour_type_id: string;
    created_at: string;
    updated_at: string;
  };
}

export default function TourDetail({ tour }: TourDetailProps) {
  const [selectedDay, setSelectedDay] = useState<ProgramDay>('1-4');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getStorageUrl = (path: string) => {
    if (path.startsWith('http')) {
      return path;
    }

    const fileName = path.includes('/') ? path.split('/').pop() : path;
    
    const { data: { publicUrl } } = supabase.storage
      .from('tour-images')
      .getPublicUrl(fileName || '');
    
    return publicUrl;
  };

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={getStorageUrl(tour.hero_image_path)}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        </div>

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4">
          <div className="absolute bottom-32 max-w-3xl text-white">
            <h1 className="font-butler text-5xl lg:text-7xl font-bold mb-6">
              {tour.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {tour.short_description}
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="text-lg">{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">{tour.region}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">{tour.base_price} ₺'den başlayan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: tour.long_description }} />
          </div>
        </div>
      </section>
    </main>
  );
} 