import { GrainOverlay } from '../carousel/GrainOverlay';

interface DeepDiveHeroProps {
  title: string;
  subtitle: string;
  accentColor: string;
  imageSrc: string;
}

export function DeepDiveHero({ title, subtitle, accentColor, imageSrc }: DeepDiveHeroProps) {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '70vh',
        backgroundColor: accentColor,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Ghost background text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(60px, 20vw, 280px)',
            fontWeight: 900,
            color: 'white',
            opacity: 0.12,
            lineHeight: 1,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
          }}
        >
          ENTERPRISE UX
        </span>
      </div>

      {/* Character image */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          height: '85%',
          aspectRatio: '0.6 / 1',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        <img
          src={imageSrc}
          alt=""
          draggable={false}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom center',
          }}
        />
      </div>

      {/* Grain overlay */}
      <GrainOverlay />

      {/* Text content */}
      <div
        style={{
          position: 'relative',
          zIndex: 60,
          padding: '3rem 2rem 3rem',
          maxWidth: 900,
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '0.75rem',
          }}
        >
          {subtitle}
        </p>
        <h1
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(36px, 8vw, 100px)',
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            color: 'white',
            lineHeight: 1,
            margin: 0,
          }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
