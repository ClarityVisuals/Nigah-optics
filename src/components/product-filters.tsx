"use client";

import type { FilterCriteria } from '@/types';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

interface ProductFiltersProps {
  filters: FilterCriteria;
  onFilterChange: (newFilters: FilterCriteria) => void;
  availableFilters: {
    styles: string[];
    frameMaterials: string[];
    colors: string[];
    categories: string[];
    brands: string[];
    priceRange: [number, number];
  };
}

export default function ProductFilters({ filters, onFilterChange, availableFilters }: ProductFiltersProps) {
  
  const handleCheckboxChange = (category: keyof FilterCriteria, value: string) => {
    const currentValues = (filters[category] as string[] | undefined) || [];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(item => item !== value)
      : [...currentValues, value];
    onFilterChange({ ...filters, [category]: newValues });
  };

  const handlePriceChange = (newPriceRange: [number, number]) => {
    onFilterChange({ ...filters, priceRange: newPriceRange });
  };
  
  const resetFilters = () => {
    onFilterChange({ priceRange: availableFilters.priceRange });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={resetFilters} className="text-primary">
          Reset
        </Button>
      </div>
      <Accordion type="multiple" defaultValue={['category', 'style', 'price']} className="w-full">
        
        <AccordionItem value="category">
          <AccordionTrigger className="text-base">Category</AccordionTrigger>
          <AccordionContent className="space-y-2 pt-1">
            {availableFilters.categories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`cat-${category}`}
                  checked={(filters.category || []).includes(category)}
                  onCheckedChange={() => handleCheckboxChange('category', category)}
                />
                <Label htmlFor={`cat-${category}`} className="font-normal capitalize">{category}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="style">
          <AccordionTrigger className="text-base">Style</AccordionTrigger>
          <AccordionContent className="space-y-2 pt-1">
            {availableFilters.styles.map(style => (
              <div key={style} className="flex items-center space-x-2">
                <Checkbox
                  id={`style-${style}`}
                  checked={(filters.style || []).includes(style)}
                  onCheckedChange={() => handleCheckboxChange('style', style)}
                />
                <Label htmlFor={`style-${style}`} className="font-normal">{style}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="frameMaterial">
          <AccordionTrigger className="text-base">Frame Material</AccordionTrigger>
          <AccordionContent className="space-y-2 pt-1">
            {availableFilters.frameMaterials.map(material => (
              <div key={material} className="flex items-center space-x-2">
                <Checkbox
                  id={`material-${material}`}
                  checked={(filters.frameMaterial || []).includes(material)}
                  onCheckedChange={() => handleCheckboxChange('frameMaterial', material)}
                />
                <Label htmlFor={`material-${material}`} className="font-normal">{material}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand">
          <AccordionTrigger className="text-base">Brand</AccordionTrigger>
          <AccordionContent className="space-y-2 pt-1">
            {availableFilters.brands.map(brand => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={(filters.brand || []).includes(brand)}
                  onCheckedChange={() => handleCheckboxChange('brand', brand)}
                />
                <Label htmlFor={`brand-${brand}`} className="font-normal">{brand}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="color">
          <AccordionTrigger className="text-base">Color</AccordionTrigger>
          <AccordionContent className="space-y-2 pt-1">
            {availableFilters.colors.map(color => (
              <div key={color} className="flex items-center space-x-2">
                <Checkbox
                  id={`color-${color}`}
                  checked={(filters.color || []).includes(color)}
                  onCheckedChange={() => handleCheckboxChange('color', color)}
                />
                <Label htmlFor={`color-${color}`} className="font-normal">{color}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-base">Price Range</AccordionTrigger>
          <AccordionContent className="pt-4 pb-2">
            <Slider
              min={availableFilters.priceRange[0]}
              max={availableFilters.priceRange[1]}
              step={1}
              value={filters.priceRange || availableFilters.priceRange}
              onValueChange={(value) => handlePriceChange(value as [number, number])}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${(filters.priceRange || availableFilters.priceRange)[0]}</span>
              <span>${(filters.priceRange || availableFilters.priceRange)[1]}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
