import Image from 'next/image'
import Link from 'next/link'

interface TourCardProps {
  image: string
  title: string
  description: string
  price: string
  link: string
}

export default function TourCard({ image, title, description, price, link }: TourCardProps) {
  return (
    <div className="relative bg-[#243A24] rounded-lg overflow-hidden h-[600px]">
      <div className="h-[300px] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-8 flex flex-col h-[300px]">
        <div className="flex-1 min-h-0">
          <h3 className="text-2xl font-bold text-white mb-4">
            {title}
          </h3>
          <p className="text-white/80 line-clamp-2 text-base">
            {description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-8">
          <div className="text-white">
            <span className="block text-sm opacity-80 mb-1">İtibaren</span>
            <span className="text-xl font-bold">{price},- sayfa</span>
          </div>
          
          <Link
            href={link}
            className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition text-sm font-medium whitespace-nowrap"
          >
            Bu yolculuğu keşfedin
            <svg className="w-4 h-4 ml-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
