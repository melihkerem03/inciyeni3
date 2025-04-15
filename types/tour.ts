export interface Tour {
  id: string;
  slug: string;
  title: string;
  region: string;
  duration: string;
  base_price: number;
  short_description: string;
  long_description: string;
  hero_image_path?: string;
  tour_images: TourImage[];
  tour_highlights: TourHighlight[];
  tour_inclusions: TourInclusion[];
  tour_tips: TourTip[];
  tour_daily_programs: TourDailyProgram[];
  tour_dates_prices: TourDatePrice[];
  tour_weather_data: TourWeatherData[];
}

export interface TourImage {
  id: string;
  tour_id: string;
  storage_path: string;
  alt_text: string;
  image_type: 'hero' | 'gallery' | 'map';
  display_order: number;
}

export interface TourHighlight {
  id: string;
  tour_id: string;
  content: string;
  display_order: number;
}

export interface TourInclusion {
  id: string;
  tour_id: string;
  content: string;
  display_order: number;
}

export interface TourTip {
  id: string;
  tour_id: string;
  content: string;
  icon_name: string;
}

export interface TourDailyProgram {
  id: string;
  tour_id: string;
  day: number;
  title: string;
  description: string;
  created_at?: string;
  updated_at?: string;
}

export interface TourDatePrice {
  id: string;
  tour_id: string;
  travel_period: string;
  price_category: string;
  airline: string;
  price: number;
}

export interface TourWeatherData {
  id: string;
  tour_id: string;
  month: string;
  temperature: number;
  rainfall: number;
  is_best_period: boolean;
} 