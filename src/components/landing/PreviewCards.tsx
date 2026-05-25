import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { CarouselItem } from '../../types/carousel';

interface PreviewCardsProps {
  items: CarouselItem[];
}

export function PreviewCards({ items }: PreviewCardsProps) {
  return (
    <section
      style={{ backgroundColor: '#0a0a0a', padding: '4rem 1.5rem' }}
      aria-label="Portfolio sections"
    >
      <p
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: 'clamp(11px, 1.2vw, 13px)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#666',
          marginBottom: '2rem',
          textAlign: 'center',
        }}
      >
        Explore the work
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.25rem',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {items.map((item) => (
          <Link
            key={item.route}
            to={item.route}
            style={{ textDecoration: 'none' }}
          >
            <div
              style={{
                backgroundColor: '#141414',
                borderLeft: `4px solid ${item.image.bg}`,
                borderRadius: '0 8px 8px 0',
                padding: '1.75rem 1.5rem',
                transition: 'transform 200ms, background-color 200ms',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLDivElement).style.backgroundColor = '#1a1a1a';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLDivElement).style.backgroundColor = '#141414';
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: '1.125rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: item.image.bg,
                    marginBottom: '0.5rem',
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8125rem',
                    color: '#888',
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: item.image.bg }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Deep Dive
                </span>
                <ArrowRight size={14} strokeWidth={2.5} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
