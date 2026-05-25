interface PullQuoteProps {
  text: string;
  accentColor: string;
}

export function PullQuote({ text, accentColor }: PullQuoteProps) {
  return (
    <blockquote
      style={{
        margin: '3rem 0',
        padding: '2rem 2rem 2rem 2.5rem',
        borderLeft: `4px solid ${accentColor}`,
        backgroundColor: '#111',
        position: 'relative',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: '5rem',
          lineHeight: 0.8,
          color: accentColor,
          opacity: 0.4,
          display: 'block',
          marginBottom: '0.5rem',
          userSelect: 'none',
        }}
      >
        "
      </span>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          fontStyle: 'italic',
          color: '#e8e8e8',
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {text}
      </p>
    </blockquote>
  );
}
