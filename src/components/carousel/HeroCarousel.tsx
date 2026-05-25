import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useCarousel } from '../../hooks/useCarousel';
import { GrainOverlay } from './GrainOverlay';
import { CarouselItem } from './CarouselItem';
import type { CarouselItem as CarouselItemType } from '../../types/carousel';
import type { CarouselRole } from '../../types/carousel';

interface HeroCarouselProps {
  items: CarouselItemType[];
}

export function HeroCarousel({ items }: HeroCarouselProps) {
  const { activeIndex, isMobile, navigate } = useCarousel();
  const navTo = useNavigate();

  // Preload all images on mount
  useEffect(() => {
    items.forEach((item) => {
      const img = new Image();
      img.src = item.image.src;
    });
  }, [items]);

  const getRoleForIndex = (index: number): CarouselRole => {
    if (index === activeIndex) return 'center';
    if (index === (activeIndex + 3) % 4) return 'left';
    if (index === (activeIndex + 1) % 4) return 'right';
    return 'back';
  };

  const activeItem = items[activeIndex];

  return (
    <div
      style={{
        backgroundColor: activeItem.image.bg,
        transition: 'background-color 650ms cubic-bezier(0.4,0,0.2,1)',
        fontFamily: "'Inter', sans-serif",
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>

        {/* Ghost text */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            insetInline: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 2,
            top: '18%',
            gap: '0.25em',
          }}
        >
          <span
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(90px, 28vw, 380px)',
              fontWeight: 900,
              color: 'white',
              opacity: 1,
              lineHeight: 1,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              whiteSpace: 'nowrap',
            }}
          >
            ENTERPRISE UX
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(11px, 1.5vw, 18px)',
              fontWeight: 500,
              color: 'white',
              opacity: 0.65,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            the journey of creating calm in chaos
          </span>
        </div>

        {/* Carousel items */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 3 }}>
          {items.map((item, index) => (
            <CarouselItem
              key={item.route}
              src={item.image.src}
              role={getRoleForIndex(index)}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Grain overlay */}
        <GrainOverlay />

        {/* Brand label top-left */}
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            left: isMobile ? '1rem' : '2rem',
            zIndex: 60,
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            color: 'white',
            opacity: 0.9,
            letterSpacing: '0.18em',
          }}
        >
          GP · PORTFOLIO
        </div>

        {/* Bottom-left: title + description + nav buttons */}
        <div
          style={{
            position: 'absolute',
            bottom: isMobile ? '1.5rem' : '5rem',
            left: isMobile ? '1rem' : '6rem',
            zIndex: 60,
            maxWidth: 320,
          }}
        >
          <p
            style={{
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              marginBottom: isMobile ? '0.5rem' : '0.75rem',
              fontSize: isMobile ? '1rem' : '1.375rem',
              color: 'white',
              opacity: 0.95,
              margin: `0 0 ${isMobile ? '0.5rem' : '0.75rem'} 0`,
            }}
          >
            {activeItem.title}
          </p>

          {!isMobile && (
            <p
              style={{
                fontSize: '0.875rem',
                color: 'white',
                opacity: 0.85,
                lineHeight: 1.6,
                marginBottom: '1.25rem',
                margin: '0 0 1.25rem 0',
              }}
            >
              {activeItem.description}
            </p>
          )}

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {/* Prev button */}
            <button
              onClick={() => navigate('prev')}
              aria-label="Previous"
              style={{
                width: isMobile ? '3rem' : '4rem',
                height: isMobile ? '3rem' : '4rem',
                borderRadius: '50%',
                background: 'transparent',
                border: '2px solid white',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 150ms, background-color 150ms',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <ArrowLeft size={26} strokeWidth={2.25} />
            </button>

            {/* Next button */}
            <button
              onClick={() => navigate('next')}
              aria-label="Next"
              style={{
                width: isMobile ? '3rem' : '4rem',
                height: isMobile ? '3rem' : '4rem',
                borderRadius: '50%',
                background: 'transparent',
                border: '2px solid white',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 150ms, background-color 150ms',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <ArrowRight size={26} strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* Bottom-right: DISCOVER IT */}
        <button
          onClick={() => navTo(activeItem.route)}
          aria-label={`Discover ${activeItem.title}`}
          style={{
            position: 'absolute',
            bottom: isMobile ? '1.5rem' : '5rem',
            right: isMobile ? '1rem' : '2.5rem',
            zIndex: 60,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(20px, 4vw, 56px)',
            fontWeight: 400,
            color: 'white',
            opacity: 0.95,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            textTransform: 'uppercase',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 200ms',
            padding: 0,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.95'; }}
        >
          DISCOVER IT
          <ArrowRight
            style={{ width: isMobile ? '1.25rem' : '2rem', height: isMobile ? '1.25rem' : '2rem' }}
            strokeWidth={2.25}
          />
        </button>

      </div>
    </div>
  );
}
