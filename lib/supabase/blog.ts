import { createClient } from '@supabase/supabase-js'
import { BlogPost as BlogPostType } from '../types/blog'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Blog yazısı tipi
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  hero_image: string;
  read_time: number;
  published_at: string;
  category: {
    name: string;
    slug: string;
  };
  author: {
    name: string;
    title: string;
    image_path: string;
  };
  tags: {
    name: string;
    slug: string;
  }[];
}

// Tüm blog yazılarını getir
export async function getAllBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data as BlogPostType[];
}

// Tek bir blog yazısını getir
export async function getBlogPost(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error) throw error;
  return data as BlogPostType;
}

// Kategoriye göre blog yazılarını getir
export async function getBlogPostsByCategory(categorySlug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(name, slug),
      author:blog_authors(name, title, image_path),
      tags:blog_posts_tags(
        tag:blog_tags(name, slug)
      )
    `)
    .eq('category.slug', categorySlug)
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data as BlogPostType[];
}

// Etikete göre blog yazılarını getir
export async function getBlogPostsByTag(tagSlug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      category:blog_categories(name, slug),
      author:blog_authors(name, title, image_path),
      tags:blog_posts_tags!inner(
        tag:blog_tags!inner(name, slug)
      )
    `)
    .eq('tags.tag.slug', tagSlug)
    .eq('is_published', true)
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data as BlogPostType[];
}

// Görüntülenme sayısını artır
export async function incrementViewCount(slug: string) {
  const { error } = await supabase
    .rpc('increment_view_count', { post_slug: slug });

  if (error) throw error;
} 