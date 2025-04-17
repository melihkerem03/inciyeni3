"use client";

import React, { useState } from 'react';

export default function BankAccounts() {
  // Kopyalama durumunu takip etmek için state
  const [copiedIban, setCopiedIban] = useState<string | null>(null);

  // Kopyalama fonksiyonu
  const copyToClipboard = (text: string) => {
    // Kopyalama işlemi için fallback yöntem
    const fallbackCopy = () => {
      // Görünmeyen bir textarea oluştur
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';  // Sayfanın akışını bozmaması için
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
        // Kopyalama komutunu çalıştır
        const successful = document.execCommand('copy');
        if (successful) {
          setCopiedIban(text);
          setTimeout(() => setCopiedIban(null), 2000); // 2 saniye sonra sıfırla
        }
      } catch (err) {
        console.error('Kopyalama başarısız oldu:', err);
      }
      
      document.body.removeChild(textArea);
    };

    // Modern clipboard API ile kopyalama dene
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopiedIban(text);
          setTimeout(() => setCopiedIban(null), 2000); // 2 saniye sonra sıfırla
        })
        .catch(err => {
          console.error('Kopyalama başarısız oldu:', err);
          fallbackCopy(); // Modern API başarısız olursa fallback kullan
        });
    } else {
      fallbackCopy(); // Clipboard API yoksa fallback kullan
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8 relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-100">Banka Hesap Bilgileri</h2>
      
      <div className="space-y-8">
        {/* Garanti Bankası - TL */}
        <div className="bg-gray-50 p-4 rounded-lg relative">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Garanti Bankası</span>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">TL</span>
          </div>
          <div className="space-y-1 text-sm text-gray-600 mb-3">
            <p><span className="inline-block w-20 font-medium">Şube:</span> Ümraniye</p>
            <p><span className="inline-block w-20 font-medium">Hesap Adı:</span> İnci Uluslararası Turizm Ticaret ve Limited Şirketi</p>
            <p><span className="inline-block w-20 font-medium">Hesap No:</span> 787 - 6294389</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-xs md:text-sm bg-white p-2 rounded border border-gray-200 flex-grow break-all">
              TR93 0006 2000 7870 0006 2943 89
            </p>
            <button 
              type="button"
              className="bg-emerald-100 text-emerald-700 p-2 rounded hover:bg-emerald-200 relative z-10" 
              onClick={() => copyToClipboard('TR93 0006 2000 7870 0006 2943 89')}
              aria-label="IBAN Kopyala"
            >
              {copiedIban === 'TR93 0006 2000 7870 0006 2943 89' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              )}
            </button>
          </div>
          {copiedIban === 'TR93 0006 2000 7870 0006 2943 89' && (
            <div className="absolute right-2 bottom-[-20px] bg-emerald-600 text-white text-xs py-1 px-2 rounded shadow-md z-20">
              Kopyalandı!
            </div>
          )}
        </div>
        
        {/* Garanti Bankası - EUR */}
        <div className="bg-gray-50 p-4 rounded-lg relative">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Garanti Bankası</span>
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">EUR</span>
          </div>
          <div className="space-y-1 text-sm text-gray-600 mb-3">
            <p><span className="inline-block w-20 font-medium">Şube:</span> Ümraniye</p>
            <p><span className="inline-block w-20 font-medium">Hesap Adı:</span> İnci Uluslararası Turizm Ticaret ve Limited Şirketi</p>
            <p><span className="inline-block w-20 font-medium">Hesap No:</span> 787 - 9068393</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-xs md:text-sm bg-white p-2 rounded border border-gray-200 flex-grow break-all">
              TR50 0006 2000 7870 0009 0683 93
            </p>
            <button 
              type="button"
              className="bg-emerald-100 text-emerald-700 p-2 rounded hover:bg-emerald-200 relative z-10" 
              onClick={() => copyToClipboard('TR50 0006 2000 7870 0009 0683 93')}
              aria-label="IBAN Kopyala"
            >
              {copiedIban === 'TR50 0006 2000 7870 0009 0683 93' ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
              )}
            </button>
          </div>
          {copiedIban === 'TR50 0006 2000 7870 0009 0683 93' && (
            <div className="absolute right-2 bottom-[-20px] bg-emerald-600 text-white text-xs py-1 px-2 rounded shadow-md z-20">
              Kopyalandı!
            </div>
          )}
        </div>
        
        {/* Garanti Bankası - USD */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Garanti Bankası</span>
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">USD</span>
          </div>
          <div className="space-y-1 text-sm text-gray-600 mb-3">
            <p><span className="inline-block w-20 font-medium">Şube:</span> Ümraniye</p>
            <p><span className="inline-block w-20 font-medium">Hesap Adı:</span> İnci Uluslararası Turizm Ticaret ve Limited Şirketi</p>
            <p><span className="inline-block w-20 font-medium">Hesap No:</span> 787 - 9068394</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-xs md:text-sm bg-white p-2 rounded border border-gray-200 flex-grow break-all">
              TR23 0006 2000 7870 0009 0683 94
            </p>
            <button className="bg-emerald-100 text-emerald-700 p-2 rounded hover:bg-emerald-200" 
              onClick={() => {navigator.clipboard.writeText('TR23 0006 2000 7870 0009 0683 94')}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Halkbank - TL */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Halkbank</span>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">TL</span>
          </div>
          <div className="space-y-1 text-sm text-gray-600 mb-3">
            <p><span className="inline-block w-20 font-medium">Şube:</span> Ümraniye</p>
            <p><span className="inline-block w-20 font-medium">Hesap Adı:</span> İnci Uluslararası Turizm Ticaret ve Limited Şirketi</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-xs md:text-sm bg-white p-2 rounded border border-gray-200 flex-grow break-all">
              TR15 0001 2009 8660 0010 2607 26
            </p>
            <button className="bg-emerald-100 text-emerald-700 p-2 rounded hover:bg-emerald-200" 
              onClick={() => {navigator.clipboard.writeText('TR15 0001 2009 8660 0010 2607 26')}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Kuveyt Türk - TL */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Kuveyt Türk</span>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">TL</span>
          </div>
          <div className="space-y-1 text-sm text-gray-600 mb-3">
            <p><span className="inline-block w-20 font-medium">Şube:</span> Atakent Şubesi</p>
            <p><span className="inline-block w-20 font-medium">Hesap Adı:</span> İnci Uluslararası Turizm Ticaret ve Limited Şirketi</p>
            <p><span className="inline-block w-20 font-medium">Hesap No:</span> 95712958-1</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-xs md:text-sm bg-white p-2 rounded border border-gray-200 flex-grow break-all">
              TR22 0020 5000 0957 1295 8000 01
            </p>
            <button className="bg-emerald-100 text-emerald-700 p-2 rounded hover:bg-emerald-200" 
              onClick={() => {navigator.clipboard.writeText('TR22 0020 5000 0957 1295 8000 01')}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Kuveyt Türk - EUR */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Kuveyt Türk</span>
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">EUR</span>
          </div>
          <div className="space-y-1 text-sm text-gray-600 mb-3">
            <p><span className="inline-block w-20 font-medium">Şube:</span> Atakent Şubesi</p>
            <p><span className="inline-block w-20 font-medium">Hesap Adı:</span> İnci Uluslararası Turizm Ticaret ve Limited Şirketi</p>
            <p><span className="inline-block w-20 font-medium">Hesap No:</span> 95712958-02</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-xs md:text-sm bg-white p-2 rounded border border-gray-200 flex-grow break-all">
              TR11 0020 5000 0957 1295 8001 02
            </p>
            <button className="bg-emerald-100 text-emerald-700 p-2 rounded hover:bg-emerald-200" 
              onClick={() => {navigator.clipboard.writeText('TR11 0020 5000 0957 1295 8001 02')}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Kuveyt Türk - USD */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-gray-800">Kuveyt Türk</span>
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">USD</span>
          </div>
          <div className="space-y-1 text-sm text-gray-600 mb-3">
            <p><span className="inline-block w-20 font-medium">Şube:</span> Atakent Şubesi</p>
            <p><span className="inline-block w-20 font-medium">Hesap Adı:</span> İnci Uluslararası Turizm Ticaret ve Limited Şirketi</p>
            <p><span className="inline-block w-20 font-medium">Hesap No:</span> 95712958-01</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-xs md:text-sm bg-white p-2 rounded border border-gray-200 flex-grow break-all">
              TR38 0020 5000 0957 1295 8001 01
            </p>
            <button className="bg-emerald-100 text-emerald-700 p-2 rounded hover:bg-emerald-200" 
              onClick={() => {navigator.clipboard.writeText('TR38 0020 5000 0957 1295 8001 01')}}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bilgilendirme mesajı */}
        <div className="mt-4 text-sm text-emerald-600 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-50 rounded">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>IBAN numarasını kopyalamak için sağdaki butona tıklayabilirsiniz.</p>
        </div>
      </div>
    </div>
  );
} 