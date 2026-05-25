import { useState, useEffect, useCallback, useRef } from 'react';
import type { NavDirection } from '../types/carousel';

const ANIMATION_DURATION = 650;
const ITEM_COUNT = 4;

export function useCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigate = useCallback(
    (direction: NavDirection) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActiveIndex((prev) =>
        direction === 'next'
          ? (prev + 1) % ITEM_COUNT
          : (prev + ITEM_COUNT - 1) % ITEM_COUNT
      );
      timerRef.current = setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
    },
    [isAnimating]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const getRoleIndex = useCallback(
    (role: 'left' | 'right' | 'back') => {
      if (role === 'left') return (activeIndex + ITEM_COUNT - 1) % ITEM_COUNT;
      if (role === 'right') return (activeIndex + 1) % ITEM_COUNT;
      return (activeIndex + 2) % ITEM_COUNT; // back
    },
    [activeIndex]
  );

  return { activeIndex, isAnimating, isMobile, navigate, getRoleIndex };
}
