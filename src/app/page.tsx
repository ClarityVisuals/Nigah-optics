
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
      <section className="relative min-h-screen flex items-center justify-start text-left">
        <Image
          src="/images/website image 1.png"
          alt="Stylish person wearing glasses"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
          data-ai-hint="fashion model eyeglasses"
          priority
        />
        {/* Overlay to darken the image for text visibility */}
        <div className="absolute inset-0 bg-black/30 z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl text-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center h-full">
          <h1 className="text-[3.15rem] md:text-[4.725rem] font-bold mb-4 drop-shadow-md">
            <span>ClearView</span><br />
            <span>EyeGlasses</span>
          </h1>
          <p className="text-[0.91875rem] md:text-[1.05rem] mb-10 max-w-xl drop-shadow-sm">
            Discover your perfect vision with our curated collection of stylish eyewear. Quality frames, exceptional lenses, and a new way to see the world.
          </p>
          <Button asChild size="lg" className="px-10 py-6 text-[1.18125rem] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg transition-transform hover:scale-105">
            <Link href="/products">SHOP NOW</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <div className="container mx-auto px-4">
        <section className="py-16 bg-background">
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
        </section>
      </div>

      {/* Visual Lookbooks Section */}
      <div className="container mx-auto px-4">
        <section className="py-16 bg-background">
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
        </section>
      </div>

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
