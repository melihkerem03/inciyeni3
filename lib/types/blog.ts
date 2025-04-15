export interface BlogImage {
  fileName: string;
  publicUrl: string;
  alt: string;
  bucketName: string;
}

export interface ContentSection {
  type: 'paragraph' | 'heading' | 'image_gallery' | 'image' | 'tips_box';
  content:
    | string
    | {
        images?: BlogImage[];
        title?: string;
        tips?: string[];
      }
    | BlogImage;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category_name: string;
  category_slug: string;
  hero_image: string;
  content_images: Array<{
    path: string;
    alt: string;
  }>;
  published_at: string;
  read_time: number;
  author_name: string;
  author_title: string;
  author_image: string;
  tags: Array<{
    name: string;
    slug: string;
  }>;
  content_sections: ContentSection[];
  is_published: boolean;
  is_featured: boolean;
  view_count: number;
  created_at: string;
  updated_at: string;
} 