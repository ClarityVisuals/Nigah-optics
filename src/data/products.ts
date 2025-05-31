
import type { Product } from '@/types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Classic Aviators',
    description: 'Timeless aviator sunglasses with a sleek metal frame. Perfect for any occasion, offering 100% UV protection and superior comfort.',
    price: 100,
    images: [
        'https://placehold.co/600x400.png?text=Classic+Aviators+1',
        'https://placehold.co/600x400.png?text=Classic+Aviators+2'
    ],
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
    description: 'A modern take on the iconic wayfarer style. Crafted from durable acetate with polarized lenses for enhanced clarity. These sunglasses offer a versatile look that suits various face shapes and outfits, making them a staple for casual and semi-formal settings.',
    price: 149.50,
    images: [
        '/images/image_2025-05-31_213230895.png', // Updated to user's image
        'https://placehold.co/600x400.png?text=Modern+Wayfarers+2'
    ],
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
    description: 'Experience sophisticated simplicity with our ultra-lightweight round eyeglasses, meticulously crafted from high-quality titanium. Designed for enduring comfort and a subtle, elegant presence, these frames are perfect for daily wear, blending seamless style with practical durability.',
    price: 199.00,
    images: [
        'https://placehold.co/600x400.png?text=Minimalist+Round+1',
        'https://placehold.co/600x400.png?text=Minimalist+Round+2'
    ],
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
    description: 'Elevate your style with our chic cat-eye frames, designed to infuse your look with a touch of retro glamour and playful sophistication. Available in an array of vibrant colors, these glasses are crafted to highlight your features and express your unique personality.',
    price: 175.00,
    images: [
        'https://placehold.co/600x400.png?text=Chic+Cat-Eye+1',
        'https://placehold.co/600x400.png?text=Chic+Cat-Eye+2'
    ],
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
    description: 'Stay ahead of the game with our sporty square sunglasses, engineered for peak performance and durability during active pursuits. Featuring impact-resistant lenses and a secure, comfortable fit, these sunglasses are your ideal companion for any outdoor adventure, providing clear vision and robust protection.',
    price: 160.00,
    images: [
        'https://placehold.co/600x400.png?text=Sporty+Square+1',
        'https://placehold.co/600x400.png?text=Sporty+Square+2'
    ],
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
    description: 'Experience unparalleled comfort and clarity with our ultra-lightweight rimless reading glasses. Designed for extended reading sessions, their minimalist design and superior lenses reduce eye strain, making them perfect for diving into your favorite books or detailed tasks.',
    price: 89.99,
    images: [
        'https://placehold.co/600x400.png?text=Rimless+Reading+1',
        'https://placehold.co/600x400.png?text=Rimless+Reading+2'
    ],
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
  {
    id: '7',
    name: 'Bold Square Frames',
    description: 'Make a statement with these bold square eyeglasses. Their thick frames and distinct shape offer a modern and confident look.',
    price: 210.00,
    images: [
        'https://placehold.co/600x400.png?text=Bold+Square+1',
        'https://placehold.co/600x400.png?text=Bold+Square+2'
    ],
    style: 'Square',
    frameMaterial: 'Acetate',
    colors: ['Black', 'Dark Brown', 'Transparent'],
    size: '55-18-145',
    brand: 'Warby Parker',
    rating: 4.4,
    stock: 30,
    category: 'eyeglasses',
    tags: ['bold', 'modern', 'statement'],
  },
  {
    id: '8',
    name: 'Pilot Style Sunglasses',
    description: 'A variation on the classic aviator, featuring a slightly more angular shape. Offers excellent coverage and UV protection.',
    price: 120.00,
    images: [
        'https://placehold.co/600x400.png?text=Pilot+Style+1',
        'https://placehold.co/600x400.png?text=Pilot+Style+2'
    ],
    style: 'Pilot',
    frameMaterial: 'Metal',
    colors: ['Gunmetal', 'Bronze'],
    size: '59-13-140',
    brand: 'Top Gun',
    rating: 4.1,
    stock: 45,
    category: 'sunglasses',
    tags: ['pilot', 'uv protection', 'unisex'],
  },
  {
    id: '9',
    name: 'Geometric Eyeglasses',
    description: 'Uniquely shaped geometric frames that add an artistic touch to your look. Lightweight and comfortable for all-day wear.',
    price: 185.00,
    images: [
        'https://placehold.co/600x400.png?text=Geometric+Eyeglasses+1',
        'https://placehold.co/600x400.png?text=Geometric+Eyeglasses+2'
    ],
    style: 'Geometric',
    frameMaterial: 'Metal',
    colors: ['Rose Gold', 'Silver'],
    size: '50-20-140',
    brand: 'Eyebobs',
    rating: 4.7,
    stock: 22,
    category: 'eyeglasses',
    tags: ['unique', 'geometric', 'artistic'],
  },
  {
    id: '10',
    name: 'Oversized Sunglasses',
    description: 'Make a fashion statement with these oversized sunglasses. Providing maximum sun protection and a glamorous look.',
    price: 155.00,
    images: [
        'https://placehold.co/600x400.png?text=Oversized+Sunglasses+1',
        'https://placehold.co/600x400.png?text=Oversized+Sunglasses+2'
    ],
    style: 'Oversized',
    frameMaterial: 'Plastic',
    colors: ['Black', 'Tortoise', 'Gradient Brown'],
    size: '62-16-145',
    brand: 'Gucci',
    rating: 4.5,
    stock: 38,
    category: 'sunglasses',
    tags: ['fashion', 'glamour', 'oversized', 'women'],
  },
  {
    id: '11',
    name: 'Kids Animal Frames',
    description: 'Fun and durable eyeglasses for kids featuring playful animal designs on the temples. Made with flexible materials for comfort and safety.',
    price: 75.00,
    images: [
        '/images/kiddo in glasses.PNG',
        'https://placehold.co/600x400.png?text=Kids+Animal+Frames+2'
    ],
    style: 'Animal',
    frameMaterial: 'Flexible Plastic',
    colors: ['Blue', 'Pink', 'Green'],
    size: '42-15-120',
    brand: 'Kids Optical',
    rating: 4.9,
    stock: 55,
    category: 'eyeglasses',
    tags: ['kids', 'fun', 'durable', 'flexible'],
  },
  {
    id: '12',
    name: 'Transition Lenses',
    description: 'These lenses automatically adjust from clear indoors to dark outdoors, providing convenience and protection in varying light conditions.',
    price: 250.00,
    images: [
        'https://placehold.co/600x400.png?text=Transition+Lenses+1',
         'https://placehold.co/600x400.png?text=Transition+Lenses+2'
    ],
    style: 'Lenses',
    frameMaterial: 'N/A',
    colors: ['Clear to Grey', 'Clear to Brown'],
    size: 'N/A',
    brand: 'Transitions',
    rating: 4.7,
    stock: 70,
    category: 'accessories',
    tags: ['lenses', 'photochromic', 'convenience'],
  },
  {
    id: '13',
    name: 'Polarized Sunglass Lenses',
    description: 'Replacement lenses with polarization to reduce glare from reflective surfaces like water and roads, improving visibility and comfort.',
    price: 80.00,
    images: [
        'https://placehold.co/600x400.png?text=Polarized+Lenses+1',
        'https://placehold.co/600x400.png?text=Polarized+Lenses+2'
    ],
    style: 'Lenses',
    frameMaterial: 'N/A',
    colors: ['Grey', 'Brown'],
    size: 'Various',
    brand: 'Polaroid',
    rating: 4.6,
    stock: 65,
    category: 'accessories',
    tags: ['lenses', 'polarized', 'sunglasses'],
  },
  {
    id: '14',
    name: 'Anti-Reflective Coating',
    description: 'A clear coating applied to lenses to eliminate reflections from the front and back surfaces, reducing eye strain and improving the clarity of vision.',
    price: 40.00,
    images: [
        'https://placehold.co/600x400.png?text=AR+Coating+1',
        'https://placehold.co/600x400.png?text=AR+Coating+2'
    ],
    style: 'Accessory',
    frameMaterial: 'N/A',
    colors: ['Clear'],
    size: 'N/A',
    brand: 'Zeiss',
    rating: 4.8,
    stock: 90,
    category: 'accessories',
    tags: ['lenses', 'coating', 'clarity'],
  },
  {
    id: '15',
    name: 'Blue Light Filtering Lenses',
    description: 'Lenses designed to filter out harmful blue light emitted from digital screens, helping to reduce digital eye strain and improve sleep patterns.',
    price: 60.00,
    images: [
        'https://placehold.co/600x400.png?text=Blue+Light+Filter+1',
        'https://placehold.co/600x400.png?text=Blue+Light+Filter+2'
    ],
    style: 'Lenses',
    frameMaterial: 'N/A',
    colors: ['Clear (with slight tint)'],
    size: 'N/A',
    brand: 'Essilor',
    rating: 4.5,
    stock: 80,
    category: 'accessories',
    tags: ['lenses', 'blue light', 'digital strain'],
  },
  {
    id: '16',
    name: 'Stylish Women\'s Glasses',
    description: 'Trendy and elegant glasses for women, featuring a unique frame design that combines modern style with classic comfort.',
    price: 180.00,
    images: [
        '/images/women glasses.PNG',
        'https://placehold.co/600x400.png?text=Stylish+Womens+Glasses+2'
    ],
    style: 'Fashion',
    frameMaterial: 'Acetate',
    colors: ['Pink', 'Tortoise'],
    size: '54-17-140',
    brand: 'Chanel',
    rating: 4.7,
    stock: 25,
    category: 'eyeglasses',
  },
];

export const getProductById = (id: string): Product | undefined => mockProducts.find(p => p.id === id);

export const getFeaturedProducts = (count: number = 3): Product[] => mockProducts.slice(0, count);

export const getAllStyles = (): string[] => Array.from(new Set(mockProducts.map(p => p.style)));
export const getAllFrameMaterials = (): string[] => Array.from(new Set(mockProducts.map(p => p.frameMaterial).filter(fm => fm !== 'N/A')));
export const getAllColors = (): string[] => Array.from(new Set(mockProducts.flatMap(p => p.colors).filter(c => c !== 'N/A' && c !== 'Clear (with slight tint)' && c !== 'Clear to Grey' && c !== 'Clear to Brown' && c !== 'Clear')));
export const getAllCategories = (): string[] => Array.from(new Set(mockProducts.map(p => p.category)));
export const getAllBrands = (): string[] => Array.from(new Set(mockProducts.map(p => p.brand).filter(b => b !== 'N/A')));
export const getPriceRange = (): [number, number] => {
  if (mockProducts.length === 0) return [0, 0];
  const prices = mockProducts.map(p => p.price);
  return [Math.min(...prices), Math.max(...prices)];
};

    