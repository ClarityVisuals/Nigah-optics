import Link from 'next/link';
import { Glasses } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Glasses className="h-6 w-6 text-primary" />
            <span className="font-semibold text-foreground">EYENISA</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0 text-sm">
            <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} EYENISA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
