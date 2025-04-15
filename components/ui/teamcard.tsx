import Image from 'next/image'
import Link from 'next/link'

interface TeamCardProps {
  image: string
  name: string
  role: string
  description: string
  link: string
}

export default function TeamCard({ image, name, role, description, link }: TeamCardProps) {
  return (
    <div className="relative bg-[#F8F6F3] rounded-[2rem] overflow-hidden h-[800px] group">
      {/* Profil Görseli */}
      <div className="h-[400px] relative bg-[#F0EDE9]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center"
        />
      </div>
      
      {/* İçerik */}
      <div className="p-10">
        {/* İsim */}
        <h3 className="text-3xl font-bold text-gray-900 mb-6">{name}</h3>

        {/* Özellikler Listesi */}
        <div className="space-y-4">
          {/* Dünya İkonu ve Ülkeler */}
          <div className="flex gap-3">
            <div className="text-emerald-500">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>

          {/* Bavul İkonu ve Gezi Tipleri */}
          <div className="flex gap-3">
            <div className="text-emerald-500">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <p className="text-gray-700 text-base">{role}</p>
          </div>

          {/* Email İkonu ve Email */}
          <div className="flex gap-3">
            <div className="text-emerald-500">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-700 text-base">c.vandijk@travelworld.nl</p>
          </div>

          {/* Telefon İkonu ve Numara */}
          <div className="flex gap-3">
            <div className="text-emerald-500">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <p className="text-gray-700 text-base">073 - 707 43 10</p>
          </div>
        </div>
      </div>
    </div>
  )
} 