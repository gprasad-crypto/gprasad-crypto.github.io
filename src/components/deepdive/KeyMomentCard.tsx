interface KeyMomentCardProps {
  label: string;
  description: string;
  accentColor: string;
}

export function KeyMomentCard({ label, description, accentColor }: KeyMomentCardProps) {
  return (
    <div
      style={{
        backgroundColor: '#141414',
        border: `1px solid ${accentColor}30`,
        borderTop: `3px solid ${accentColor}`,
        borderRadius: '0 0 6px 6px',
        padding: '1.25rem 1rem',
      }}
    >
      <p
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: '0.9375rem',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          color: accentColor,
          marginBottom: '0.4rem',
          lineHeight: 1.2,
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.8125rem',
          color: '#777',
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}
