'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Header from '@/components/common/header'
import { getBlogPost, supabase } from '@/lib/supabase/blog'
import type { BlogPost } from '@/lib/types/blog'

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | null>(null);
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
    async function fetchPost() {
      try {
        const data = await getBlogPost(params.slug);
        setPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [params.slug]);

  if (isLoading) return <div>Loading...</div>;
  if (!post) return <div>Blog yazısı bulunamadı</div>;

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
                src={getStorageUrl(post.hero_image, 'post')}
                alt={post.title}
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
            <div className="max-w-4xl text-white">
              <span className="inline-block text-sm font-semibold text-emerald-400 tracking-wider uppercase mb-6">
                {post.category_name}
              </span>
              <h1 className="font-butler font-bold text-5xl lg:text-7xl text-white">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-3">
                  <Image
                    src={getStorageUrl(post.author_image, 'author')}
                    alt={post.author_name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <span className="block text-white font-medium">{post.author_name}</span>
                    <span className="text-white/80 text-sm">{post.author_title}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <span>{new Date(post.published_at).toLocaleDateString('tr-TR', { 
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}</span>
                  <span>•</span>
                  <span>{post.read_time} dk okuma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-3xl overflow-hidden shadow-xl">
              
              

              {/* Content Images */}
              {post.content_images && post.content_images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 px-8 md:px-12">
                  {post.content_images.map((img, index) => (
                    <div 
                      key={index} 
                      className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg group"
                    >
                      <Image
                        src={getStorageUrl(img.path, 'content')}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Content Header */}
                
                
                <div className="flex items-center justify-center gap-4 mb-12">
                  <span className="px-6 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                    {post.category_name}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  <span className="text-gray-600">{post.read_time} dk okuma</span>
                </div>
                <h1 className="font-butler font-bold text-3xl lg:text-3xl text-gray-900 text-center mb-6">
                  {post.title}
                </h1>

                <div className="prose prose-lg max-w-none prose-headings:font-butler prose-headings:font-bold prose-emerald
                  prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8
                  prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-lg
                  prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-700
                  prose-strong:text-gray-900 prose-strong:font-semibold
                  prose-li:text-gray-600 prose-li:leading-relaxed
                  prose-img:rounded-2xl prose-img:shadow-xl"
                >
                  {post.content_sections.map((section, index) => {
                    if (section.type === 'paragraph' || section.type === 'heading') {
                      return (
                        <div key={index} dangerouslySetInnerHTML={{ __html: section.content as string }} />
                      );
                    }
                    
                    if (section.type === 'tips_box') {
                      const tipContent = section.content as { title: string; tips: string[] };
                      return (
                        <div key={index} className="bg-emerald-50 rounded-2xl p-8 my-12">
                          <h3 className="text-xl font-bold text-emerald-800 mb-4">{tipContent.title}</h3>
                          <ul className="space-y-3 text-emerald-700">
                            {tipContent.tips.map((tip, tipIndex) => (
                              <li key={tipIndex}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    }

                    return null;
                  })}
                </div>

                {/* Tags */}
                <div className="mt-16 pt-8 border-t border-gray-100">
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag) => (
                      <span key={tag.slug} className="px-6 py-2.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors cursor-pointer">
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
} 