"use client"

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { createClient } from '@supabase/supabase-js';

// Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Stats tipi
interface Stat {
  id: string;
  title: string;
  subtitle_first: string;
  subtitle_second: string;
  stat_value: number;
  stat_label: string;
  stat_description: string;
  stat_icon_svg: string;
  display_order: number;
  is_active: boolean;
}

export default function StatsSection() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sectionInfo, setSectionInfo] = useState<Stat | null>(null);

  // Stats verilerini çek
  useEffect(() => {
    let isMounted = true; // Component mount durumunu takip et

    async function fetchStats() {
      try {
        const { data, error } = await supabase
          .from('stats')
          .select('*')
          .eq('is_active', true)
          .order('display_order');

        if (error) {
          console.error('Error fetching stats:', error);
          return;
        }

        if (data && isMounted) {
          console.log('Fetched stats:', data); // Debug için
          setStats(data);
          setSectionInfo(data.find(item => item.display_order === 1) || null);
        }
      } catch (error) {
        console.error('Error in fetchStats:', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchStats();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []); // Boş dependency array

  // SVG render helper'ı güncelle
  const renderSVG = (svg: string) => {
    try {
      // SVG string'i temizle
      let cleanSvg = svg.trim()
        .replace(/script/gi, '') // script taglerini kaldır
        .replace(/\n/g, '') // yeni satırları kaldır
        .replace(/\s+/g, ' '); // fazla boşlukları tek boşluğa indir

      // SVG tag kontrolü
      if (!cleanSvg.startsWith('<svg')) {
        console.error('Invalid SVG format - missing opening tag:', svg);
        return '';
      }
      if (!cleanSvg.endsWith('</svg>')) {
        console.error('Invalid SVG format - missing closing tag:', svg);
        return '';
      }

      // SVG boyut kontrolü ve düzeltmesi
      if (!cleanSvg.includes('class="') && !cleanSvg.includes('class=\'')) {
        // class attribute yoksa ekle
        cleanSvg = cleanSvg.replace('<svg', '<svg class="w-16 h-16"');
      }

      // viewBox kontrolü
      if (!cleanSvg.includes('viewBox="')) {
        cleanSvg = cleanSvg.replace('<svg', '<svg viewBox="0 0 24 24"');
      }

      // Temel SVG attributelerini kontrol et ve ekle
      const basicAttrs = {
        'fill': 'none',
        'stroke': 'currentColor',
        'stroke-width': '1.5',
        'xmlns': 'http://www.w3.org/2000/svg'
      };

      Object.entries(basicAttrs).forEach(([attr, value]) => {
        if (!cleanSvg.includes(`${attr}="`)) {
          cleanSvg = cleanSvg.replace('<svg', `<svg ${attr}="${value}"`);
        }
      });

      // size-6 class'ını w-16 h-16 ile değiştir
      cleanSvg = cleanSvg.replace('class="size-6"', 'class="w-16 h-16"');
      
      return cleanSvg;
    } catch (error) {
      console.error('Error rendering SVG:', error);
      return '';
    }
  };

  return (
    <section className="relative bg-[#f1dbc4] py-24 lg:py-32 overflow-hidden">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#1A2A1A]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#1A2A1A]/5 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-24">
          {isLoading ? (
            // Loading state
            <div className="animate-pulse space-y-4">
              <div className="h-6 bg-[#1A2A1A]/10 rounded w-48 mx-auto"></div>
              <div className="h-12 bg-[#1A2A1A]/10 rounded w-96 mx-auto"></div>
            </div>
          ) : (
            <>
              <span className="inline-block text-sm font-medium text-[#1A2A1A]/80 tracking-wider uppercase mb-6">
                {sectionInfo?.title || "RAKAMLARLA BİZ"}
              </span>
              <h2 className="text-4xl lg:text-6xl font-butler font-bold text-[#1A2A1A] mb-8 leading-tight">
                <span className="block">{sectionInfo?.subtitle_first || "Seyahatin"}</span>
                <span className="block mt-2 text-[#243A24]">
                  {sectionInfo?.subtitle_second || "Geleceğini Şekillendiriyoruz"}
                </span>
              </h2>
              <div className="h-px w-24 bg-[#1A2A1A]/20 mx-auto" />
            </>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {isLoading ? (
            // Loading state
            [...Array(3)].map((_, index) => (
              <div key={index} className="animate-pulse space-y-4">
                <div className="h-16 w-16 bg-[#1A2A1A]/10 rounded-full mx-auto"></div>
                <div className="h-10 bg-[#1A2A1A]/10 rounded w-24 mx-auto"></div>
                <div className="h-6 bg-[#1A2A1A]/10 rounded w-48 mx-auto"></div>
                <div className="h-4 bg-[#1A2A1A]/10 rounded w-32 mx-auto"></div>
              </div>
            ))
          ) : (
            stats.map((stat) => (
              <div
                key={stat.id}
                className="group relative flex flex-col items-center text-center"
              >
                {/* İkon container */}
                <div className="relative mb-8">
                  <div 
                    className="text-[#1A2A1A] opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    dangerouslySetInnerHTML={{ 
                      __html: renderSVG(stat.stat_icon_svg)
                    }}
                  />
                </div>

                {/* Sayı */}
                <div className="mb-6">
                  <div className="text-6xl lg:text-7xl font-butler font-bold text-[#243A24] tracking-tight">
                    <CountUp end={stat.stat_value} suffix="+" duration={2.5} />
                  </div>
                </div>

                {/* Başlık ve Açıklama */}
                <div>
                  <h3 className="text-2xl font-butler font-bold text-[#1A2A1A] mb-4">
                    {stat.stat_label}
                  </h3>
                  <p className="text-[#1A2A1A]/70 text-lg">
                    {stat.stat_description}
                  </p>
                </div>

                {/* İnce ayırıcı çizgi */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-px 
                  bg-[#1A2A1A]/10 group-hover:bg-[#1A2A1A]/20 
                  transition-all duration-500" />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
} 