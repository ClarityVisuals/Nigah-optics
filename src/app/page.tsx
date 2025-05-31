
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/product-card';
import { ChevronRight, Eye, ShoppingBag, TrendingUp, UserCheck, Star } from 'lucide-react';
import HeroTextAnimation from '@/components/hero-text-animation'; // Import the new component

export default function HomePage() {
  const popularProducts = getFeaturedProducts(4);

  const categories = [
    {
      title: "Men Glasses",
      href: "/products?category=men",
      imageSrc: "https://placehold.co/400x500.png",
      imageAlt: "Collection of men's glasses",
      aiHint: "men eyeglasses",
    },
    {
      title: "Women Glasses",
      href: "/products?category=women",
      imageSrc: "https://placehold.co/400x500.png",
      imageAlt: "Collection of women's glasses",
      aiHint: "women eyeglasses model",
    },
    {
      title: "Kids Glasses",
      href: "/products?category=kids",
      imageSrc: "https://placehold.co/400x500.png",
      imageAlt: "Collection of kids' glasses",
      aiHint: "kids eyeglasses fun",
    },
    {
      title: "Sun Glasses",
      href: "/products?category=sunglasses",
      imageSrc: "https://placehold.co/400x500.png",
      imageAlt: "Collection of sunglasses",
      aiHint: "sunglasses fashion",
    },
    {
      title: "Lenses",
      href: "/products?category=lenses",
      imageSrc: "https://placehold.co/400x500.png",
      imageAlt: "Close-up of optical lenses",
      aiHint: "prescription lenses detail",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start text-left">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Stylish person wearing glasses"
          fill
          className="absolute inset-0 z-0 object-cover"
          data-ai-hint="fashion model eyeglasses"
          priority
        />
        <HeroTextAnimation
          titleLine1="ClearView"
          titleLine2="EyeGlasses"
          description="Discover your perfect vision with our curated collection of stylish eyewear. Quality frames, exceptional lenses, and a new way to see the world."
          buttonText="SHOP NOW"
          buttonLink="/products"
        />
      </section>

      {/* Shop Our Collection Section (Categories) */}
      <div id="shop-our-collection-section" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <ShoppingBag className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">Shop Our Collection</h2>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-base mt-4">
              <Link href="/products">
                Explore All Products <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    width={400}
                    height={500}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={category.aiHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div> {/* Gradient overlay for text readability */}
                  <div className="absolute bottom-0 left-0 p-4 md:p-6 z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 drop-shadow-md">
                      {category.title}
                    </h3>
                    <span className="text-base font-semibold text-white/90 hover:text-white group-hover:underline flex items-center transition-colors">
                      Shop Now <ChevronRight className="ml-1 h-5 w-5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Products Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <TrendingUp className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-3">Popular Products</h2>
            <p className="text-muted-foreground max-w-xl">Check out some of our best-selling items that customers love!</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {popularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary px-8 py-3 text-base">
              <a href="#shop-our-collection-section">
                View All Products <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-background">
        <div className="md:grid md:grid-cols-2 items-stretch">
          <div className="relative min-h-[300px] md:min-h-0">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Woman wearing stylish glasses in a city scene"
              fill
              className="object-cover w-full h-full"
              data-ai-hint="woman glasses city"
            />
          </div>
          <div className="bg-card p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-sm">
                ABOUT
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              We Make Quality<br />
              Glasses For Everyone.
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              EYENISA is dedicated to providing high-quality, stylish eyewear for everyone. We believe that clear vision and great style go hand-in-hand. Our curated collections feature a wide range of frames to suit every taste and need, from timeless classics to the latest trends.
            </p>
            <Button asChild variant="outline" size="lg" className="self-start border-foreground text-foreground hover:bg-foreground/10">
              <Link href="/about">
                Learn More <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Previously Testimonials) */}
      <section> {/* No top margin to connect with section above */}
        <div className="md:grid md:grid-cols-2 items-stretch">
          {/* Left Column: Why Choose Us Intro */}
          <div className="bg-card p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-sm mb-4 self-start">
              WHY US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At EYENISA, we're committed to providing not just eyewear, but a seamless and delightful experience. From our curated selection of high-quality frames to our expert advice and cutting-edge virtual try-on technology, discover why thousands choose us for their vision needs.
            </p>
          </div>

          {/* Right Column: Testimonial */}
          <div className="bg-foreground text-primary-foreground p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center min-h-[300px] md:min-h-0">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Great Customer Service!
            </h3>
            <div className="mb-4">
              <Image
                src="https://placehold.co/100x100.png"
                alt="Customer Avatar - Abdul Rafay"
                width={80}
                height={80}
                className="rounded-full mx-auto border-2 border-background shadow-md"
                data-ai-hint="customer avatar person"
              />
            </div>
            <p className="font-semibold text-lg">Abdul Rafay</p>
            <p className="text-sm leading-relaxed max-w-md mt-2">
              "The team at EYENISA was incredibly helpful in finding the perfect pair of glasses for me. Their virtual try-on made the process so easy, and the quality is outstanding!"
            </p>
          </div>
        </div>
      </section>

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
              className="flex-grow p-3 border border-input rounded-md focus:ring-2 focus:ring-primary outline-none text-base bg-background"
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
