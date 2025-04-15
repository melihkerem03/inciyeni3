import React from 'react';
import Image from 'next/image';

const DestinationPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/italy-hero.jpg" // İtalya'yı temsil eden bir görsel eklemelisiniz
            alt="İtalya Manzarası"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-[1920px] mx-auto px-4 py-20 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              İtalya'da Unutulmaz Bir Macera
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Antik Roma'nın görkemli yapılarından Rönesans sanatının başyapıtlarına, 
              İtalyan mutfağının lezzetlerinden Akdeniz'in muhteşem kıyılarına uzanan 
              benzersiz bir yolculuk.
            </p>
            <div className="flex gap-4">
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

      {/* Main Content */}
      <section className="max-w-[1920px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Öne Çıkan Özellikler */}
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="text-emerald-500 mb-4">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Tarihi Yerler</h3>
            <p className="text-gray-600">
              Roma'nın antik kalıntılarından Floransa'nın Rönesans hazinelerine, 
              İtalya'nın zengin tarihini keşfedin.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="text-emerald-500 mb-4">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Gastronomi</h3>
            <p className="text-gray-600">
              İtalyan mutfağının eşsiz lezzetlerini, yerel şarapları ve özgün 
              yemek kültürünü deneyimleyin.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="text-emerald-500 mb-4">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Kültür Turları</h3>
            <p className="text-gray-600">
              Yerel yaşamı, sanatı ve gelenekleri yakından tanıyabileceğiniz 
              özel rehberli turlar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DestinationPage;
