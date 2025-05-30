import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a fallback for Geist
import './globals.css';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { TailwindIndicator } from '@/components/dev/tailwind-indicator'; // For development responsive checks

// Assuming Geist font setup is handled correctly elsewhere or Inter is an acceptable fallback
// For Geist Sans, you'd typically use: import { GeistSans } from 'geist/font/sans';
const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans', // Matching variable name from original scaffold
});

// For Geist Mono: import { GeistMono } from 'geist/font/mono';
const fontMono = Inter({ // Using Inter as fallback for Mono as well
  subsets: ['latin'],
  variable: '--font-geist-mono', // Matching variable name
});

export const metadata: Metadata = {
  title: 'EYENISA - Find Your Perfect Pair',
  description: 'Discover a wide range of stylish glasses and try them on virtually.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        {/* Removed pt-16 as navbar is not fixed anymore, or hero is handling its own offset */}
        <main className="flex-grow"> {/* Removed pt-16, main container doesn't need global padding */}
          {children}
        </main>
        <Footer />
        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  );
}
