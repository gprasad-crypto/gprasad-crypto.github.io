import { BackNav } from '../layout/BackNav';
import { DeepDiveHero } from './DeepDiveHero';
import { SectionBlock } from './SectionBlock';
import { KeyMomentCard } from './KeyMomentCard';
import type { DeepDiveContent } from '../../data/pagesContent';

interface DeepDivePageProps {
  content: DeepDiveContent;
}

export function DeepDivePage({ content }: DeepDivePageProps) {
  const { accentColor, imageSrc, title, subtitle, intro, sections, keyMoments } = content;

  return (
    <main style={{ backgroundColor: '#0d0d0d', minHeight: '100vh' }}>
      <BackNav accentColor={accentColor} />

      <DeepDiveHero
        title={title}
        subtitle={subtitle}
        accentColor={accentColor}
        imageSrc={imageSrc}
      />

      {/* Intro */}
      <div
        style={{
          maxWidth: '64rem',
          margin: '0 auto',
          padding: '4rem 1.5rem 0',
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)',
            color: '#a0a0a0',
            lineHeight: 1.7,
            borderLeft: `3px solid ${accentColor}`,
            paddingLeft: '1.25rem',
            marginBottom: 0,
          }}
        >
          {intro}
        </p>
      </div>

      {/* Sections */}
      <div
        style={{
          maxWidth: '64rem',
          margin: '0 auto',
          padding: '4rem 1.5rem',
        }}
      >
        {sections.map((section) => (
          <SectionBlock
            key={section.heading}
            section={section}
            accentColor={accentColor}
          />
        ))}
      </div>

      {/* Key Moments */}
      <div
        style={{
          backgroundColor: '#0a0a0a',
          padding: '4rem 1.5rem 5rem',
        }}
      >
        <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#555',
              marginBottom: '1.5rem',
            }}
          >
            Key Moments
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {keyMoments.map((moment) => (
              <KeyMomentCard
                key={moment.label}
                label={moment.label}
                description={moment.description}
                accentColor={accentColor}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div
        style={{
          borderTop: `1px solid #1e1e1e`,
          padding: '1.5rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            color: '#444',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          GP · Lead UX Designer · Salesforce Industries · 2026
        </p>
      </div>
    </main>
  );
}
