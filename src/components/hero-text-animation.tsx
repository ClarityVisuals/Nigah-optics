
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface HeroTextAnimationProps {
  titleLine1: string;
  titleLine2: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function HeroTextAnimation({ titleLine1, titleLine2, description, buttonText, buttonLink }: HeroTextAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjust this value to control when the animation triggers
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const baseClasses = "transition-all transform ease-out";
  const commonDuration = "duration-700";
  const visibleClasses = "opacity-100 translate-y-0";
  const hiddenClasses = "opacity-0 translate-y-8"; // Elements start 32px lower

  return (
    <div ref={sectionRef} className="relative z-10 max-w-2xl text-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center h-full">
      <h1 className="text-[3.15rem] md:text-[4.725rem] font-bold mb-4 drop-shadow-md">
        <span
          className={`${baseClasses} ${commonDuration} block ${isVisible ? visibleClasses : hiddenClasses}`}
          style={{ transitionDelay: isVisible ? '0ms' : '0ms' }}
        >
          {titleLine1}
        </span>
        <span
          className={`${baseClasses} ${commonDuration} block ${isVisible ? visibleClasses : hiddenClasses}`}
          style={{ transitionDelay: isVisible ? '150ms' : '0ms' }}
        >
          {titleLine2}
        </span>
      </h1>
      <p
        className={`${baseClasses} ${commonDuration} text-[0.91875rem] md:text-[1.05rem] mb-10 max-w-xl drop-shadow-sm ${isVisible ? visibleClasses : hiddenClasses}`}
        style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
      >
        {description}
      </p>
      <div
        className={`${baseClasses} ${commonDuration} ${isVisible ? visibleClasses : hiddenClasses}`}
        style={{ transitionDelay: isVisible ? '450ms' : '0ms' }}
      >
        <Button asChild size="lg" className="px-10 py-6 text-[1.18125rem] font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-lg transition-transform hover:scale-105">
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
}
