"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Lookbook, Product } from '@/types';
import { getLookbookById } from '@/data/lookbooks';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import ProductCard from '@/components/product-card';

import { Card, CardContent } from '@/components/ui/card';

export default function LookbookDetailPage({ params }: { params: { id: string } }) {
  const [lookbook, setLookbook] = useState<Lookbook | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const fetchedLookbook = getLookbookById(params.id);
      // Simulate API delay
      setTimeout(() => {
        if (fetchedLookbook) {
          setLookbook(fetchedLookbook);
        }
        setLoading(false);
      }, 300);
    }
  }, [params.id]);

  if (loading) {
     return (
      <div className="container mx-auto px-4 py-8 animate-pulse">
        <div className="h-8 w-1/4 bg-muted rounded mb-8"></div>
        <div className="h-10 w-3/4 bg-muted rounded mb-4"></div>
        <div className="h-6 w-1/2 bg-muted rounded mb-8"></div>
        <div className="bg-muted rounded-lg h-[500px] w-full mb-8"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1,2,3,4].map(i => <div key={i} className="bg-muted rounded h-40"></div>)}
        </div>
         <div className="h-8 w-1/3 bg-muted rounded mb-4"></div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-card p-4 rounded-lg shadow">
                <div className="h-40 bg-muted rounded mb-4"></div>
                <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-full mb-1"></div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  if (!lookbook) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold mb-4">Lookbook Not Found</h1>
        <p className="text-muted-foreground mb-6">Sorry, we couldn't find the lookbook you're looking for.</p>
        <Button asChild variant="outline">
          <Link href="/lookbooks">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lookbooks
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild variant="outline" size="sm" className="mb-8">
        <Link href="/lookbooks">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Lookbooks
        </Link>
      </Button>

      <header className="mb-10 text-center border-b pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">{lookbook.title}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{lookbook.description}</p>
        {lookbook.season && (
          <p className="mt-2 text-sm text-accent font-medium">Season: {lookbook.season}</p>
        )}
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">Gallery</h2>
        
          
            {[lookbook.coverImage, ...lookbook.images].map((image, index) => (
              
                <Card className="border-0 rounded-none">
                  <CardContent className="flex aspect-[16/10] items-center justify-center p-0">
                     <Image
                        src={image}
                        alt={`${lookbook.title} - Image ${index + 1}`}
                        width={1200}
                        height={750}
                        className="object-cover w-full h-full"
                        priority={index === 0}
                        data-ai-hint="fashion photoshoot model"
                      />
                  </CardContent>
                </Card>
             
            ))}
          
      </section>

      {lookbook.featuredProducts && lookbook.featuredProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lookbook.featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product as Product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
