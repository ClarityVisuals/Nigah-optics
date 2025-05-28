export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  style: 'Aviator' | 'Wayfarer' | 'Round' | 'Square' | 'Cat-Eye' | 'Rimless';
  frameMaterial: 'Metal' | 'Acetate' | 'Titanium' | 'Plastic' | 'Wood';
  colors: string[];
  size: string; // e.g., '50-20-145' (lensWidth-bridgeWidth-templeLength)
  brand: string;
  rating?: number; // Optional rating 1-5
  stock: number;
  category: 'sunglasses' | 'eyeglasses' | 'kids';
  tags?: string[];
};

export type Lookbook = {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  images: string[];
  season?: 'Spring/Summer' | 'Fall/Winter' | 'All Season';
  featuredProducts?: Product[]; // Optional: link products featured in the lookbook
};

export type FilterCriteria = {
  style?: string[];
  frameMaterial?: string[];
  priceRange?: [number, number];
  color?: string[];
  category?: string[];
  brand?: string[];
};
