import type { Product } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Classic Aviators',
    description: 'Timeless aviator sunglasses with a sleek metal frame. Perfect for any occasion, offering 100% UV protection and superior comfort.',
    price: 129.99,
    images: ['https://placehold.co/600x400.png?text=Aviator+Front', 'https://placehold.co/600x400.png?text=Aviator+Side', 'https://placehold.co/600x400.png?text=Aviator+Angle'],
    style: 'Aviator',
    frameMaterial: 'Metal',
    colors: ['Gold', 'Silver', 'Black'],
    size: '58-14-140',
    brand: 'Ray-Ban',
    rating: 4.5,
    stock: 50,
    category: 'sunglasses',
    tags: ['classic', 'uv protection', 'unisex'],
  },
  {
    id: '2',
    name: 'Modern Wayfarers',
    description: 'A contemporary take on the iconic wayfarer style. Made from durable acetate with polarized lenses for enhanced clarity.',
    price: 149.50,
    images: ['https://placehold.co/600x400.png?text=Wayfarer+Front', 'https://placehold.co/600x400.png?text=Wayfarer+Detail'],
    style: 'Wayfarer',
    frameMaterial: 'Acetate',
    colors: ['Black', 'Tortoise Shell'],
    size: '52-18-145',
    brand: 'Oakley',
    rating: 4.2,
    stock: 35,
    category: 'sunglasses',
    tags: ['polarized', 'modern', 'durable'],
  },
  {
    id: '3',
    name: 'Minimalist Round Glasses',
    description: 'Lightweight round eyeglasses crafted from high-quality titanium. Ideal for a sophisticated, understated look.',
    price: 199.00,
    images: ['https://placehold.co/600x400.png?text=Round+Front', 'https://placehold.co/600x400.png?text=Round+On+Model'],
    style: 'Round',
    frameMaterial: 'Titanium',
    colors: ['Silver', 'Gunmetal'],
    size: '48-20-140',
    brand: 'Persol',
    rating: 4.8,
    stock: 20,
    category: 'eyeglasses',
    tags: ['lightweight', 'titanium', 'minimalist'],
  },
  {
    id: '4',
    name: 'Chic Cat-Eye Frames',
    description: 'Elegant cat-eye eyeglasses that add a touch of retro glamour. Available in vibrant colors.',
    price: 175.00,
    images: ['https://placehold.co/600x400.png?text=CatEye+Front', 'https://placehold.co/600x400.png?text=CatEye+Lifestyle'],
    style: 'Cat-Eye',
    frameMaterial: 'Acetate',
    colors: ['Red', 'Black', 'Blue Tortoise'],
    size: '53-16-135',
    brand: 'Prada',
    rating: 4.6,
    stock: 28,
    category: 'eyeglasses',
    tags: ['retro', 'fashion', 'women'],
  },
  {
    id: '5',
    name: 'Sporty Square Sunglasses',
    description: 'Durable square sunglasses designed for active lifestyles. Feature impact-resistant lenses and a secure fit.',
    price: 160.00,
    images: ['https://placehold.co/600x400.png?text=Square+Sport+Front', 'https://placehold.co/600x400.png?text=Square+Sport+Action'],
    style: 'Square',
    frameMaterial: 'Plastic',
    colors: ['Matte Black', 'Navy Blue'],
    size: '60-15-130',
    brand: 'Nike Vision',
    rating: 4.3,
    stock: 40,
    category: 'sunglasses',
    tags: ['sport', 'durable', 'men'],
  },
  {
    id: '6',
    name: 'Rimless Reading Glasses',
    description: 'Ultra-lightweight rimless reading glasses for maximum comfort and clarity. Perfect for extended reading sessions.',
    price: 89.99,
    images: ['https://placehold.co/600x400.png?text=Rimless+Reading'],
    style: 'Rimless',
    frameMaterial: 'Metal',
    colors: ['Gold', 'Silver'],
    size: '50-18-140 (various powers)',
    brand: 'Readers Co.',
    rating: 4.0,
    stock: 60,
    category: 'eyeglasses',
    tags: ['reading', 'lightweight', 'comfort'],
  },
];

export const getProductById = (id: string): Product | undefined => mockProducts.find(p => p.id === id);

export const getFeaturedProducts = (count: number = 3): Product[] => mockProducts.slice(0, count);

export const getAllStyles = (): string[] => Array.from(new Set(mockProducts.map(p => p.style)));
export const getAllFrameMaterials = (): string[] => Array.from(new Set(mockProducts.map(p => p.frameMaterial)));
export const getAllColors = (): string[] => Array.from(new Set(mockProducts.flatMap(p => p.colors)));
export const getAllCategories = (): string[] => Array.from(new Set(mockProducts.map(p => p.category)));
export const getAllBrands = (): string[] => Array.from(new Set(mockProducts.map(p => p.brand)));
export const getPriceRange = (): [number, number] => {
  if (mockProducts.length === 0) return [0, 0];
  const prices = mockProducts.map(p => p.price);
  return [Math.min(...prices), Math.max(...prices)];
};
