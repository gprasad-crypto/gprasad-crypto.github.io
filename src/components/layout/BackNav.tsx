import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackNavProps {
  accentColor?: string;
}

export function BackNav({ accentColor = '#ffffff' }: BackNavProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <button
      onClick={handleBack}
      aria-label="Back to portfolio"
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: '1.5rem',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(8px)',
        border: `1px solid ${accentColor}40`,
        borderRadius: '2rem',
        padding: '0.5rem 1rem 0.5rem 0.75rem',
        cursor: 'pointer',
        color: 'white',
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        transition: 'background 200ms, border-color 200ms',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = `${accentColor}20`;
        e.currentTarget.style.borderColor = `${accentColor}80`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(0,0,0,0.5)';
        e.currentTarget.style.borderColor = `${accentColor}40`;
      }}
    >
      <ArrowLeft size={14} strokeWidth={2.5} />
      Back
    </button>
  );
}
