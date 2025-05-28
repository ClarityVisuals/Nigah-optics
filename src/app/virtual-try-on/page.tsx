import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Sparkles, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function VirtualTryOnPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto shadow-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary to-accent p-8 text-primary-foreground">
          <div className="flex items-center gap-4">
            <Camera className="h-12 w-12" />
            <div>
              <CardTitle className="text-3xl md:text-4xl font-bold">Virtual Try-On</CardTitle>
              <CardDescription className="text-lg text-primary-foreground/80 mt-1">
                See how our glasses look on you, right from your device!
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 md:p-10 space-y-8">
          <div className="text-center">
            <Image
              src="https://placehold.co/800x450.png"
              alt="Mockup of virtual try-on feature"
              width={800}
              height={450}
              className="rounded-lg shadow-md mx-auto border"
              data-ai-hint="webcam glasses tryon"
            />
            <p className="text-sm text-muted-foreground mt-2">Feature demonstration. Actual interface may vary.</p>
          </div>

          <div className="text-center p-6 bg-secondary/50 rounded-lg">
            <Sparkles className="h-10 w-10 text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-3 text-primary">Coming Soon!</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              We're working hard to bring you an immersive virtual try-on experience. 
              Soon, you'll be able to use your webcam or upload a photo to see how our frames fit your face and get personalized style recommendations.
            </p>
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/products">Explore Products</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl"><Camera className="h-6 w-6 text-primary"/>How It Will Work</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>1. Enable your webcam or upload a clear photo of yourself.</p>
                <p>2. Browse our catalog and select frames to try on.</p>
                <p>3. See the glasses realistically overlaid on your face in real-time.</p>
                <p>4. Get AI-powered suggestions for styles that suit your face shape.</p>
              </CardContent>
            </Card>
            <Card className="bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl"><HelpCircle className="h-6 w-6 text-primary"/>Need Help Choosing?</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p className="mb-3">
                  While our virtual try-on is under development, our expert stylists are here to help! 
                  Contact us for a personalized consultation or check out our style guides.
                </p>
                <div className="space-x-3">
                   <Button variant="outline" asChild>
                    <Link href="/contact">Contact Stylist</Link>
                  </Button>
                  <Button variant="link" asChild className="text-primary">
                    <Link href="/blog/style-guides">View Style Guides</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
