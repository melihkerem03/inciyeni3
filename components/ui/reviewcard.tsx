import Image from 'next/image'

interface ReviewCardProps {
  quote: string
  author: string
  tour: string
}

export default function ReviewCard({ quote, author, tour }: ReviewCardProps) {
  return (
    <div className="bg-[#FAF7F4] rounded-lg p-8 h-[380px] flex flex-col">
      <blockquote className="flex-1 min-h-0">
        <p className="text-gray-800 text-lg leading-relaxed line-clamp-5">
          "{quote}"
        </p>
      </blockquote>
      
      <div className="mt-auto pt-6 border-t border-[#E5DED8]">
        <p className="font-medium text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">{tour}</p>
      </div>
    </div>
  )
} 