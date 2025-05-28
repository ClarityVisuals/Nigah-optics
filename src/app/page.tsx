
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product-card';
import LookbookCard from '@/components/lookbook-card';
import { getFeaturedProducts } from '@/data/products';
import { getFeaturedLookbooks } from '@/data/lookbooks';
import { ChevronRight, Eye, ShoppingBag } from 'lucide-react';

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
          className="absolute inset-0 z-0 opacity-100"
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

      {/* SHOP Section (formerly Featured Products) */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <ShoppingBag className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">Shop Our Collection</h2>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-base">
              <Link href="/products">
                Explore All Products <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Visual Lookbooks Section */}
      <div className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Discover Our Lookbooks</h2>
              <p className="text-muted-foreground max-w-lg">Get inspired by our curated collections and see how our eyewear complements different styles.</p>
            </div>
            <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary/10 hover:text-primary px-6 py-3">
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
      </div>

      {/* Call to Action - Example: Newsletter Signup or Special Offer */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <Eye className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">Stay In Style</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest arrivals, exclusive offers, and styling tips from EYENISA.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-3 border border-input rounded-md focus:ring-2 focus:ring-primary outline-none text-base"
              aria-label="Email for newsletter"
            />
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
