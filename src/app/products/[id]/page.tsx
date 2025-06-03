"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/types';
import { getProductById } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';


export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (params.id) {
      const fetchedProduct = getProductById(params.id);
      // Simulate API delay
      setTimeout(() => {
        if (fetchedProduct) {
          setProduct(fetchedProduct);
          setSelectedImage(fetchedProduct.images[0]);
        }
        setLoading(false);
      }, 300);
    }
  }, [params.id]);

  const handleAddToCart = () => {
    if (!product) return;
    // Placeholder for add to cart logic
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
      action: (
        <Link href="/cart">
           <Button variant="outline" size="sm">View Cart</Button>
        </Link>
      ),
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 w-1/4 bg-muted rounded mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="bg-muted rounded-lg h-[400px] md:h-[500px] w-full mb-4"></div>
              <div className="flex gap-2">
                {[1,2,3].map(i => <div key={i} className="bg-muted rounded h-20 w-20"></div>)}
              </div>
            </div>
            <div className="space-y-6">
              <div className="h-10 w-3/4 bg-muted rounded"></div>
              <div className="h-6 w-1/4 bg-muted rounded"></div>
              <div className="h-4 w-full bg-muted rounded"></div>
              <div className="h-4 w-5/6 bg-muted rounded"></div>
              <div className="h-4 w-4/6 bg-muted rounded"></div>
              <div className="h-12 w-1/2 bg-muted rounded mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Button asChild variant="outline">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild variant="outline" size="sm" className="mb-6">
        <Link href="/products">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </Button>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          <Card className="overflow-hidden">
            <CardContent className="p-2 md:p-4">
            <Image
              src={selectedImage || product.images[0]}
              alt={`Main image of ${product.name}`}
              width={600}
              height={600}
              className="rounded-lg object-contain w-full max-h-[500px]"
              data-ai-hint={`${product.style.toLowerCase()} ${product.category} detail`}
              priority
            />
            </CardContent>
          </Card>
          
          
              {product.images.map((img, index) => (
               
                  <button
                    onClick={() => setSelectedImage(img)}
                    className={`block rounded-md overflow-hidden border-2 transition-all ${selectedImage === img ? 'border-primary ring-2 ring-primary' : 'border-transparent hover:border-muted-foreground/50'}`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1} of ${product.name}`}
                      width={100}
                      height={100}
                      className="object-cover aspect-square"
                      data-ai-hint="product thumbnail"
                    />
                  </button>
                
              ))}
           
        </div>

        {/* Product Information */}
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-primary">{product.name}</h1>
          
          <div className="flex items-center space-x-4">
            <p className="text-3xl font-extrabold text-foreground">PKR {product.price.toFixed(2)}</p>
            {product.rating && (
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating!) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">({product.rating.toFixed(1)})</span>
              </div>
            )}
          </div>

          <p className="text-muted-foreground text-base leading-relaxed">{product.description}</p>
          
          <Separator />

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Details:</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li><span className="font-medium text-foreground">Brand:</span> {product.brand}</li>
              <li><span className="font-medium text-foreground">Style:</span> {product.style}</li>
              <li><span className="font-medium text-foreground">Frame Material:</span> {product.frameMaterial}</li>
              <li><span className="font-medium text-foreground">Size:</span> {product.size}</li>
              <li><span className="font-medium text-foreground">Category:</span> <span className="capitalize">{product.category}</span></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Available Colors:</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map(color => (
                <Badge key={color} variant="outline" className="text-sm px-3 py-1">{color}</Badge>
              ))}
            </div>
          </div>
          
          <Separator />

          {product.stock > 0 ? (
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span>In Stock ({product.stock} available)</span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-red-600">
              <AlertTriangle className="h-5 w-5" />
              <span>Out of Stock</span>
            </div>
          )}

          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-base py-3 px-8 shadow-md transition-transform hover:scale-105" 
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>

          {product.tags && product.tags.length > 0 && (
            <div className="pt-4">
              <h3 className="text-sm font-semibold mb-1">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="capitalize">{tag}</Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
