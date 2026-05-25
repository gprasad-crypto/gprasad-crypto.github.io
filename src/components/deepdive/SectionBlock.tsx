import { PullQuote } from './PullQuote';
import type { SectionData } from '../../data/pagesContent';

interface SectionBlockProps {
  section: SectionData;
  accentColor: string;
}

export function SectionBlock({ section, accentColor }: SectionBlockProps) {
  return (
    <div style={{ marginBottom: '4rem' }}>
      <h2
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: accentColor,
          marginBottom: '1.25rem',
          lineHeight: 1.1,
        }}
      >
        {section.heading}
      </h2>

      {section.body.map((paragraph, i) => (
        <p
          key={i}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
            color: '#d4d4d4',
            lineHeight: 1.75,
            marginBottom: i < section.body.length - 1 ? '1rem' : 0,
          }}
        >
          {paragraph}
        </p>
      ))}

      {section.pullQuote && (
        <PullQuote text={section.pullQuote.text} accentColor={accentColor} />
      )}
    </div>
  );
}
