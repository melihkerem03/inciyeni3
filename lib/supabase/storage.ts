import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function uploadTourImage(
  file: File,
  tourSlug: string,
  imageType: 'hero' | 'gallery' | 'map'
): Promise<string> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${tourSlug}-${Date.now()}.${fileExt}`;
  let bucketName = '';

  switch (imageType) {
    case 'hero':
      bucketName = 'tour-covers';
      break;
    case 'gallery':
    case 'map':
      bucketName = 'tour-images';
      break;
  }

  const { error } = await supabase.storage
    .from(bucketName)
    .upload(fileName, file);

  if (error) {
    throw error;
  }

  return fileName;
}

export async function deleteTourImage(filePath: string) {
  const { error } = await supabase.storage
    .from('tour-images')
    .remove([filePath]);

  if (error) {
    throw error;
  }
}

export function getTourImageUrl(fileName: string, imageType: 'hero' | 'gallery' | 'map'): string {
  const bucketName = imageType === 'hero' ? 'tour-covers' : 'tour-images';
  
  return supabase.storage
    .from(bucketName)
    .getPublicUrl(fileName)
    .data.publicUrl;
} 