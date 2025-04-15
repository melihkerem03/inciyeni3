import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Destinasyon Bulunamadı</h2>
        <p className="text-gray-600 mb-6">
          Aradığınız destinasyon sayfası mevcut değil.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
} 