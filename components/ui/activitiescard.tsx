import Image from 'next/image'
import Link from 'next/link'

interface ActivitiesCardProps {
  image: string
  date: string
  location: string
  title: string
  description: string
  link: string
}

export default function ActivitiesCard({ image, date, location, title, description, link }: ActivitiesCardProps) {
  return (
    <div className="bg-white rounded-[2rem] overflow-hidden group hover:shadow-xl transition-all duration-300">
      {/* Görsel Alanı */}
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* İçerik */}
      <div className="p-8">
        {/* Tarih ve Lokasyon */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>{date}</span>
          <span>•</span>
          <span>{location}</span>
        </div>

        {/* Başlık */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {title}
        </h3>

        {/* Açıklama */}
        <p className="text-gray-600 mb-6 line-clamp-3">
          {description}
        </p>

        {/* Link */}
        <Link
          href={link}
          className="inline-flex items-center text-gray-900 hover:text-emerald-600 transition-colors group"
        >
          <span className="mr-2">Devamını oku</span>
          <svg 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
} 