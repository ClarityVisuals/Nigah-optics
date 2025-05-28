import Image from 'next/image';
import Link from 'next/link';
import type { Lookbook } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface LookbookCardProps {
  lookbook: Lookbook;
}

export default function LookbookCard({ lookbook }: LookbookCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      <CardHeader className="p-0 relative">
        <Link href={`/lookbooks/${lookbook.id}`} aria-label={`View ${lookbook.title}`}>
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src={lookbook.coverImage}
              alt={`Cover image for ${lookbook.title}`}
              width={800}
              height={450}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              data-ai-hint="fashion editorial style"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow relative z-10 -mt-16 text-primary-foreground">
        <Link href={`/lookbooks/${lookbook.id}`} className="hover:underline">
          <CardTitle className="text-2xl font-bold mb-2 drop-shadow-sm">{lookbook.title}</CardTitle>
        </Link>
        <CardDescription className="text-sm text-primary-foreground/80 mb-3 h-12 overflow-hidden text-ellipsis drop-shadow-sm">
          {lookbook.description.substring(0,100)}{lookbook.description.length > 100 ? '...' : ''}
        </CardDescription>
        {lookbook.season && <p className="text-xs text-primary-foreground/70 drop-shadow-sm">Season: {lookbook.season}</p>}
      </CardContent>
      <CardFooter className="p-6 border-t bg-background">
        <Button asChild variant="outline" className="w-full text-primary border-primary hover:bg-primary/10">
          <Link href={`/lookbooks/${lookbook.id}`}>
            View Lookbook <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
