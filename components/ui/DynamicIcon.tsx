import { 
  FaHotel, 
  FaCar, 
  FaUsers, 
  FaUtensils, 
  FaPlane, 
  FaSmile, 
  FaHeadset,
  FaQuestion // fallback ikon
} from 'react-icons/fa';

interface DynamicIconProps {
  name: string;
  size?: number;
}

const iconMap = {
  'hotel': FaHotel,
  'car': FaCar,
  'users': FaUsers,
  'food': FaUtensils,
  'plane': FaPlane,
  'activity': FaSmile,
  'support': FaHeadset
};

export default function DynamicIcon({ name, size = 48 }: DynamicIconProps) {
  // İkon adına göre komponenti al, yoksa fallback ikon kullan
  const IconComponent = iconMap[name as keyof typeof iconMap] || FaQuestion;
  
  return <IconComponent size={size} />;
} 