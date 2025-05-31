
"use client";

import { useState, useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollFadeInProps {
  children: ReactNode;
  delay?: number; // in milliseconds
  className?: string;
  as?: keyof JSX.IntrinsicElements; // To allow wrapping different HTML elements
  threshold?: number; // Intersection Observer threshold
  initialTranslateY?: string; // e.g., 'translate-y-8', 'translate-y-12'
  duration?: string; // e.g., 'duration-700', 'duration-1000'
}

export default function ScrollFadeIn({
  children,
  delay = 0,
  className,
  as: WrapperComponent = 'div',
  threshold = 0.1,
  initialTranslateY = 'translate-y-12',
  duration = 'duration-1000'
}: ScrollFadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset when out of view
        }
      },
      {
        threshold: threshold,
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const animationClasses = isVisible
    ? 'opacity-100 translate-y-0'
    : `opacity-0 ${initialTranslateY}`;
  
  const transitionDelay = isVisible ? `${delay}ms` : '0ms';

  return (
    <WrapperComponent
      // @ts-ignore This is a common pattern for dynamic components with refs
      ref={elementRef}
      className={cn(
        'transition-all transform ease-out',
        duration,
        animationClasses,
        className
      )}
      style={{ transitionDelay }}
    >
      {children}
    </WrapperComponent>
  );
}
