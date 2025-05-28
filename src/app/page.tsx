
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product-card';
import LookbookCard from '@/components/lookbook-card';
import { getFeaturedProducts } from '@/data/products';
import { getFeaturedLookbooks } from '@/data/lookbooks';
import { ChevronRight } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts(3);
  const featuredLookbooks = getFeaturedLookbooks(2);

  return (
    <>
      {/* Hero Section */}
      {/* Adjusted min-height to screen height, image opacity removed, content padding managed by layout */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <Image
          src="/images/website image 1.png"
          alt="Stylish person wearing glasses"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0" 
          data-ai-hint="fashion model eyeglasses"
          priority
        />
        {/* Content within the hero section is removed */}
        <div className="relative z-10 max-w-3xl mx-auto text-white p-8 sm:p-12 md:p-16">
          {/* All text and buttons previously here are now removed */}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">Featured Products</h2>
            <Button variant="link" asChild className="text-primary hover:text-accent">
              <Link href="/products">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Visual Lookbooks Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-semibold">Discover Our Lookbooks</h2>
            <Button variant="link" asChild className="text-primary hover:text-accent">
              <Link href="/lookbooks">
                Explore Lookbooks <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredLookbooks.map((lookbook) => (
              <LookbookCard key={lookbook.id} lookbook={lookbook} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Example: Newsletter Signup or Special Offer */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay In Style</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest arrivals, exclusive offers, and styling tips from EYENISA.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 border rounded-md focus:ring-2 focus:ring-primary outline-none"
              aria-label="Email for newsletter"
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
