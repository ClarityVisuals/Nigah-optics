import LookbookCard from '@/components/lookbook-card';
import { mockLookbooks } from '@/data/lookbooks';
import { BookOpen } from 'lucide-react';

export default function LookbooksPage() {
  const lookbooks = mockLookbooks; // In a real app, fetch this data

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <BookOpen className="h-16 w-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary">Visual Lookbooks</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Get inspired by our curated collections and seasonal styles. Discover the latest trends and find your next favorite look.
        </p>
      </header>

      {lookbooks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lookbooks.map((lookbook) => (
            <LookbookCard key={lookbook.id} lookbook={lookbook} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">No lookbooks available at the moment.</p>
          <p className="text-sm text-muted-foreground mt-2">Check back soon for new collections!</p>
        </div>
      )}
    </div>
  );
}
