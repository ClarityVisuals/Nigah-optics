"use client";

import { useState, useEffect, useMemo } from 'react';
import type { Product, FilterCriteria } from '@/types';
import { mockProducts, getPriceRange, getAllStyles, getAllFrameMaterials, getAllColors, getAllCategories, getAllBrands } from '@/data/products';
import ProductCard from '@/components/product-card';
import ProductFilters from '@/components/product-filters'; // Will create this
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const initialPriceRange = getPriceRange();

export default function ProductsPage() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterCriteria>({ priceRange: initialPriceRange });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setAllProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setIsLoading(false);
    }, 500);
  }, []);

  const availableFilters = useMemo(() => ({
    styles: getAllStyles(),
    frameMaterials: getAllFrameMaterials(),
    colors: getAllColors(),
    categories: getAllCategories(),
    brands: getAllBrands(),
    priceRange: getPriceRange(),
  }), []);

  useEffect(() => {
    let currentProducts = [...allProducts];

    // Apply search term
    if (searchTerm) {
      currentProducts = currentProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply filters
    if (filters.style && filters.style.length > 0) {
      currentProducts = currentProducts.filter(product => filters.style!.includes(product.style));
    }
    if (filters.frameMaterial && filters.frameMaterial.length > 0) {
      currentProducts = currentProducts.filter(product => filters.frameMaterial!.includes(product.frameMaterial));
    }
    if (filters.color && filters.color.length > 0) {
      currentProducts = currentProducts.filter(product => product.colors.some(c => filters.color!.includes(c)));
    }
    if (filters.category && filters.category.length > 0) {
      currentProducts = currentProducts.filter(product => filters.category!.includes(product.category));
    }
    if (filters.brand && filters.brand.length > 0) {
      currentProducts = currentProducts.filter(product => filters.brand!.includes(product.brand));
    }
    if (filters.priceRange) {
      currentProducts = currentProducts.filter(product => product.price >= filters.priceRange![0] && product.price <= filters.priceRange![1]);
    }

    setFilteredProducts(currentProducts);
  }, [searchTerm, filters, allProducts]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="hidden md:block md:col-span-3 space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-card p-4 rounded-lg shadow animate-pulse">
              <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/2 mb-1"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          ))}
        </div>
        <div className="md:col-span-9">
          <div className="h-10 bg-muted rounded w-1/4 mb-6 animate-pulse"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-card p-4 rounded-lg shadow animate-pulse">
                <div className="h-40 bg-muted rounded mb-4"></div>
                <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-muted rounded w-full mb-1"></div>
                <div className="h-4 bg-muted rounded w-1/2 mb-2"></div>
                <div className="h-10 bg-muted rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Filters Sidebar - Desktop */}
      <aside className="hidden md:block md:w-1/4 lg:w-1/5 sticky top-20 h-[calc(100vh-10rem)]">
        <ScrollArea className="h-full pr-4">
          <ProductFilters filters={filters} onFilterChange={setFilters} availableFilters={availableFilters} />
        </ScrollArea>
      </aside>

      {/* Main Content Area */}
      <main className="w-full md:w-3/4 lg:w-4/5">
        <div className="mb-8 p-4 bg-card rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-2 text-primary">Our Collection</h1>
          <p className="text-muted-foreground mb-4">
            Browse through our extensive range of eyeglasses and sunglasses. Use the filters to find your perfect match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-grow w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, brand, style..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            {/* Filters Trigger - Mobile */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden w-full sm:w-auto flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                <SheetHeader className="p-4 border-b">
                  <SheetTitle>Filter Products</SheetTitle>
                </SheetHeader>
                <ScrollArea className="h-[calc(100%-4rem)]">
                   <div className="p-4">
                    <ProductFilters filters={filters} onFilterChange={setFilters} availableFilters={availableFilters} />
                   </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No products match your criteria.</p>
            <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filters.</p>
            <Button variant="link" onClick={() => {setSearchTerm(''); setFilters({priceRange: initialPriceRange})}} className="mt-4 text-primary">
              Clear all filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
