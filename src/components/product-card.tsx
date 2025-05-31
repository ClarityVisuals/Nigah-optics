
import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'; // Removed CardTitle
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';
import ScrollFadeIn from './scroll-fade-in';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} aria-label={`View details for ${product.name}`}>
          <div className="aspect-w-4 aspect-h-3">
            <Image
              src={product.images[0]}
              alt={`Image of ${product.name}`}
              width={400}
              height={300}
              className="object-cover w-full h-full"
              data-ai-hint={`${product.style.toLowerCase()} ${product.category}`}
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/products/${product.id}`} className="hover:text-primary">
          <ScrollFadeIn 
            delay={50} 
            as="div" 
            className="text-lg font-semibold mb-1 truncate" // Classes for title
            title={product.name}
          >
            {product.name}
          </ScrollFadeIn>
        </Link>
        <ScrollFadeIn 
          delay={100} 
          as="p" 
          className="text-sm text-muted-foreground mb-2 h-10 overflow-hidden text-ellipsis" // Classes for description
        >
          {product.description.substring(0, 70)}{product.description.length > 70 ? '...' : ''}
        </ScrollFadeIn>
        <div className="flex items-center justify-between mb-2">
          <ScrollFadeIn delay={150} as="p" className="text-xl font-bold text-primary">
            PKR {product.price.toFixed(2)}
          </ScrollFadeIn>
          {product.rating && (
            <ScrollFadeIn delay={200} as="div">
              <Badge variant="outline" className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-500" />
                {product.rating.toFixed(1)}
              </Badge>
            </ScrollFadeIn>
          )}
        </div>
        <ScrollFadeIn delay={250} as="div" className="flex flex-wrap gap-1 mb-2">
          <Badge variant="secondary">{product.style}</Badge>
          <Badge variant="secondary">{product.frameMaterial}</Badge>
        </ScrollFadeIn>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <ScrollFadeIn delay={300} as="div" className="w-full">
          <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href={`/products/${product.id}`}>View Details</Link>
          </Button>
        </ScrollFadeIn>
      </CardFooter>
    </Card>
  );
}
