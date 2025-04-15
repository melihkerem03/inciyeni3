import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/common/header';

// Desteklenen destinasyonları tanımlayalım
const destinations = {
  italy: {
    title: "İtalya'da Unutulmaz Bir Macera",
    description: "Antik Roma'nın görkemli yapılarından Rönesans sanatının başyapıtlarına, İtalyan mutfağının lezzetlerinden Akdeniz'in muhteşem kıyılarına uzanan benzersiz bir yolculuk.",
    heroImage: "/images/italy-hero.jpg",
  },
  // Diğer destinasyonlar buraya eklenebilir
};

// Sayfa props tipini tanımlayalım
interface PageProps {
  params: {
    slug: string;
  };
}

const DestinationPage = ({ params }: PageProps) => {
  // URL'den gelen slug'ı kontrol edelim
  const destination = destinations[params.slug as keyof typeof destinations];

  // Eğer geçersiz bir slug varsa 404 sayfasına yönlendirelim
  if (!destination) {
    notFound();
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
                src={destination.heroImage}
                alt={`${destination.title} Manzarası`}
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
        <div className="relative h-full max-w-[1920px] mx-auto px-4 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              {destination.title}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {destination.description}
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors">
                Turları Keşfet
              </button>
              <button className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-sm hover:bg-white/20 transition-colors">
                Daha Fazla Bilgi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-16">
            {/* Sol Taraf - Görseller */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative">
                {/* Ana Görsel */}
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/destinations/italy/italy-main.jpg"
                    alt="Roma Colosseum"
                    width={600}
                    height={800}
                    className="w-full object-cover"
                  />
                </div>

                {/* Üst Üste Binen İkinci Görsel */}
                <div className="overflow-hidden rounded-3xl w-[45%] absolute -right-12 bottom-16">
                  <Image
                    src="/images/destinations/italy/italy-detail.jpg"
                    alt="Venedik Kanalları"
                    width={300}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Sağ Taraf - İçerik */}
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
              <div>
                {/* Başlık */}
                <h1 className="font-butler text-5xl mb-8">
                  <span className="text-[#B68D52]">Büyüleyici</span> İtalya
                </h1>

                {/* Açıklama */}
                <p className="text-gray-700 text-lg leading-relaxed">
                  İtalya'nın her köşesi, tarih, sanat ve kültürle bezenmiş bir hazine sandığı gibidir. 
                  Roma'nın antik sokaklarından Floransa'nın Rönesans meydanlarına, 
                  Venedik'in romantik kanallarından Toskana'nın büyüleyici tepelerine kadar, 
                  her adımda yeni bir keşif sizi bekliyor. İtalyan mutfağının eşsiz lezzetleri, 
                  dünyaca ünlü şarapları ve sıcakkanlı insanlarıyla İtalya, 
                  unutulmaz bir seyahat deneyimi sunuyor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Details Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            {/* Önemli Noktalar */}
            <div>
              <h3 className="text-2xl font-butler mb-8">Önemli Noktalar</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#B68D52] mt-2"></span>
                  <span>Roma'nın tarihi merkezini keşfedin</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#B68D52] mt-2"></span>
                  <span>Venedik'in romantik kanallarında gondol turu</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#B68D52] mt-2"></span>
                  <span>Floransa'da Rönesans sanatını keşfedin</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#B68D52] mt-2"></span>
                  <span>Toskana bağlarında şarap tadımı</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#B68D52] mt-2"></span>
                  <span>Amalfi Sahili'nin muhteşem manzaraları</span>
                </li>
              </ul>
            </div>

            {/* Dahil */}
            <div>
              <h3 className="text-2xl font-butler mb-8">Dahil</h3>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-[#B68D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Turkish Airlines ile direkt uçuş</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-[#B68D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>4-5 yıldızlı butik otellerde konaklama</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-[#B68D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Profesyonel Türkçe rehberlik hizmeti</span>
                </li>
                <li className="flex items-center gap-4">
                  <svg className="w-5 h-5 text-[#B68D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Şehirler arası lüks ulaşım</span>
                </li>
              </ul>
            </div>

            {/* İpuçları */}
            <div>
              <h3 className="text-2xl font-butler mb-8">İpuçları</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="p-2 rounded-full bg-[#B68D52]/10">
                    <svg className="w-5 h-5 text-[#B68D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <p>İlkbahar ve sonbahar ayları İtalya'yı gezmek için en ideal dönemlerdir</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="p-2 rounded-full bg-[#B68D52]/10">
                    <svg className="w-5 h-5 text-[#B68D52]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <p>Büyük şehirlerde toplu taşıma kullanmak araç kiralamaktan daha avantajlıdır</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationPage; 