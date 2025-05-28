import type { Lookbook } from '@/types';
import { mockProducts } from './products';

export const mockLookbooks: Lookbook[] = [
  {
    id: '1',
    title: 'Summer Breeze Collection',
    description: 'Embrace the sunny days with our latest collection of lightweight and vibrant sunglasses. Perfect for beach outings and city adventures.',
    coverImage: 'https://placehold.co/800x600.png?text=Summer+Lookbook+Cover',
    images: [
      'https://placehold.co/1024x768.png?text=Summer+Model+1',
      'https://placehold.co/1024x768.png?text=Summer+Product+Focus',
      'https://placehold.co/1024x768.png?text=Summer+Lifestyle',
    ],
    season: 'Spring/Summer',
    featuredProducts: [mockProducts[0], mockProducts[1]],
  },
  {
    id: '2',
    title: 'Urban Professional Edit',
    description: 'Sophisticated eyeglasses for the modern professional. Discover frames that blend style and comfort for your workday.',
    coverImage: 'https://placehold.co/800x600.png?text=Urban+Lookbook+Cover',
    images: [
      'https://placehold.co/1024x768.png?text=Urban+Model+Office',
      'https://placehold.co/1024x768.png?text=Urban+Close+Up',
      'https://placehold.co/1024x768.png?text=Urban+Meeting+Scene',
    ],
    season: 'All Season',
    featuredProducts: [mockProducts[2], mockProducts[3]],
  },
  {
    id: '3',
    title: 'Adventure Ready Gear',
    description: 'Durable and stylish eyewear for your next adventure. Frames built to withstand the elements while keeping you looking sharp.',
    coverImage: 'https://placehold.co/800x600.png?text=Adventure+Lookbook+Cover',
    images: [
      'https://placehold.co/1024x768.png?text=Adventure+Hiking',
      'https://placehold.co/1024x768.png?text=Adventure+Mountain+View',
      'https://placehold.co/1024x768.png?text=Adventure+Gear+Shot',
    ],
    season: 'All Season',
    featuredProducts: [mockProducts[4]],
  },
];

export const getLookbookById = (id: string): Lookbook | undefined => mockLookbooks.find(l => l.id === id);

export const getFeaturedLookbooks = (count: number = 2): Lookbook[] => mockLookbooks.slice(0, count);
