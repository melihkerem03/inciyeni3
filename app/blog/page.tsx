'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/common/header'
import { getAllBlogPosts, supabase } from '@/lib/supabase/blog'
import type { BlogPost } from '@/lib/types/blog'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Supabase storage'dan public URL alma fonksiyonu
  const getStorageUrl = (path: string, type: 'post' | 'content' | 'author') => {
    // Eğer path zaten tam URL ise, direkt döndür
    if (path.startsWith('http')) {
      return path;
    }

    // Dosya adını al (tam yoldan veya sadece dosya adından)
    const fileName = path.includes('/') ? path.split('/').pop() : path;
    
    const bucketMap = {
      post: 'blog-post-images',
      content: 'blog-content-images',
      author: 'blog-author-images'
    };

    const { data: { publicUrl } } = supabase.storage
      .from(bucketMap[type])
      .getPublicUrl(fileName || '');
    
    return publicUrl;
  };

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await getAllBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <main className="relative bg-[#f1dbc4]">
      {/* Hero Section */}
      <section className="relative h-[60vh] mb-8">
        {/* Background Image with jagged edge */}
        <div className="absolute inset-0">
          <div className="relative h-full">
            {/* Base background image */}
            <Image
              src="/images/blog-bg.png"
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
                maskImage: 'url("/images/blog-bg.png")',
                WebkitMaskImage: 'url("/images/blog-bg.png")',
                maskSize: 'cover',
                WebkitMaskSize: 'cover',
              }}
            >
              {/* Hero image */}
              <Image
                src="/images/hero-blog.jpg"
                alt="Blog Hero"
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
        <div className="relative h-full max-w-7xl mx-auto px-4">
          <div className="absolute inset-0 flex flex-col justify-center">
            <div className="max-w-4xl text-white px-4 md:px-0">
              <span className="inline-block text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-6">
                BLOG
              </span>
              <h1 className="font-butler font-bold text-5xl lg:text-7xl text-white">
                Seyahat Hikayeleri ve İlham Veren Deneyimler
              </h1>
              <p className="text-xl mt-6 text-white/90 max-w-2xl">
                Dünya'nın dört bir yanından seyahat hikayeleri, kültür keşifleri ve benzersiz deneyimler.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filtreleme barını yatay kaydırılabilir hale getiriyoruz */}
          <div className="bg-white rounded-2xl md:rounded-full shadow-xl p-2 md:p-6 overflow-x-auto scrollbar-hide">
            <div className="flex flex-nowrap items-center gap-1 md:gap-6 min-w-max">
              {/* Kategori Filter */}
              <button className="flex items-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 whitespace-nowrap hover:bg-gray-50 rounded-full transition-colors group">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="font-medium text-sm md:text-lg">Kategoriler</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-emerald-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Tarih Filter */}
              <button className="flex items-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 whitespace-nowrap hover:bg-gray-50 rounded-full transition-colors group">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium text-sm md:text-lg">Tarih</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-emerald-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Yazar Filter */}
              <button className="flex items-center gap-2 md:gap-3 px-4 py-3 md:px-8 md:py-4 whitespace-nowrap hover:bg-gray-50 rounded-full transition-colors group">
                <span className="font-medium text-sm md:text-lg">Yazar</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-emerald-500 transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="mt-12 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          {isLoading ? (
            // Loading state
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/50 animate-pulse rounded-3xl h-[480px]" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link 
                  key={post.id}
                  href={`/blog/${post.slug}`} 
                  className="block group"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    {/* Image Container */}
                    <div className="relative h-[240px]">
                      <Image
                        src={getStorageUrl(post.hero_image, 'post')}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Category Tag */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-black/80 text-white text-sm px-4 py-1.5 rounded-full">
                          {post.category_name}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>{new Date(post.published_at).toLocaleDateString('tr-TR', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}</span>
                        <span>•</span>
                        <span>{post.read_time} dk okuma</span>
                      </div>

                      <h3 className="text-xl font-butler font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-3">
                        <Image
                          src={getStorageUrl(post.author_image, 'author')}
                          alt={post.author_name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <span className="block text-sm font-medium text-gray-900">{post.author_name}</span>
                          <span className="text-sm text-gray-500">{post.author_title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
} 