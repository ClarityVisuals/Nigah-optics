import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Eye } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Spectacle Studio</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the passion, precision, and people behind your favorite eyewear.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Founded in 2023, Spectacle Studio was born from a simple idea: eyewear should be an extension of your personality, not just a necessity. We believe that finding the perfect pair of glasses can transform how you see the world and how the world sees you.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our journey began with a small team of opticians, designers, and tech enthusiasts who shared a common vision. We wanted to create an online shopping experience that was not only convenient but also inspiring and personal. By combining cutting-edge technology like our Virtual Try-On with a carefully curated selection of high-quality frames, we strive to make finding your next pair of glasses an enjoyable adventure.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            At Spectacle Studio, we're committed to quality, style, and exceptional customer service. We partner with renowned brands and independent designers to bring you a diverse range of options, from timeless classics to the latest trends.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Spectacle Studio Team or Storefront"
            width={600}
            height={400}
            className="object-cover w-full h-full"
            data-ai-hint="eyewear store interior"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-10">Our Core Values</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Customer Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Your vision and satisfaction are our top priorities. We're dedicated to helping you find eyewear you'll love.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Quality & Craftsmanship</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                We meticulously select frames for their durability, comfort, and style, ensuring you receive only the best.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                From virtual try-on technology to personalized recommendations, we embrace innovation to enhance your experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="text-center bg-card p-8 md:p-12 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Join Our Vision</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          We're always looking for passionate individuals to join our team and help us redefine the eyewear experience.
        </p>
        <a href="mailto:careers@spectaclestudio.com" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
          View Open Positions
        </a>
      </section>
    </div>
  );
}
