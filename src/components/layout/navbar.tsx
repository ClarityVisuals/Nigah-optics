
import Link from 'next/link';
import { Glasses, ShoppingBag, Camera, BookOpenText, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from './mode-toggle';

const navItems = [
  { href: '/products', label: 'Products', icon: <ShoppingBag className="h-4 w-4" /> },
  { href: '/virtual-try-on', label: 'Virtual Try-On', icon: <Camera className="h-4 w-4" /> },
  { href: '/lookbooks', label: 'Lookbooks', icon: <BookOpenText className="h-4 w-4" /> },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Removed background image and styling from here, navbar is now transparent */}
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary">
          <Glasses className="h-7 w-7" />
          {/* Text color might need adjustment if it clashes with hero image. Adding a subtle shadow. */}
          <span className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Spectacle Studio</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              // Adding a subtle text shadow to nav links for better visibility
              className="text-foreground/90 transition-colors hover:text-foreground flex items-center gap-1 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-background/80 hover:bg-background"> {/* Added slight background to mobile menu button for visibility */}
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background"> {/* Ensure sheet content has a background */}
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-primary mb-4">
                  <Glasses className="h-7 w-7" />
                  <span>Spectacle Studio</span>
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
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
