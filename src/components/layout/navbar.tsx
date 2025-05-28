
import Link from 'next/link';
import { Glasses, ShoppingBag, Menu, Home, Users, MapPin, Award, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from './mode-toggle';

const navItems = [
  { href: '/', label: 'Home', icon: <Home className="h-4 w-4" /> },
  { href: '/products', label: 'Shop', icon: <ShoppingBag className="h-4 w-4" /> },
  { href: '/about', label: 'About', icon: <Users className="h-4 w-4" /> },
  { href: '/contact', label: 'Location', icon: <MapPin className="h-4 w-4" /> },
  { href: '/about#why-us', label: 'Why Us', icon: <Award className="h-4 w-4" /> } // Linking to about page, potentially a section
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary">
          <Glasses className="h-7 w-7" />
          <span className="text-foreground dark:text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">EYENISA</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-foreground dark:text-white/90 transition-colors hover:text-primary dark:hover:text-primary flex items-center gap-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link 
            href="/cart" 
            className="p-2 text-foreground dark:text-white/90 transition-colors hover:text-primary dark:hover:text-primary drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]"
            aria-label="View shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Link>
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-background/80 text-foreground dark:text-white">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary mb-4">
                  <Glasses className="h-7 w-7" />
                  <span>EYENISA</span>
                </Link>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                ))}
                 <Link
                    href="/cart"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Cart
                  </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
