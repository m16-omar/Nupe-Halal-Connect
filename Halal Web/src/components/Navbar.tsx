import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'var(--transition-normal)',
        paddingBlock: isScrolled ? '0.75rem' : '1.25rem',
        background: isScrolled ? 'rgba(253, 251, 247, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-color)' : '1px solid transparent'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo Stack */}
        <a href="#" className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary-green)' }}>
          <div style={{
            position: 'relative',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'var(--color-primary-green)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {/* Custom Shield Outline inside circle */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {/* Little gold heart inside shield */}
            <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--color-accent-gold)" style={{ position: 'absolute', top: '15px' }}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <span style={{ letterSpacing: '0.05em', lineHeight: 1.1, textAlign: 'left' }}>
            NUPE HALAL<br />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-accent-gold)' }}>CONNECT</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-menu" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#interactive-preview" className="nav-link">Interactive Demo</a>
          <a href="#counseling" className="nav-link">Mosque Counseling</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        {/* Action Button */}
        <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#download" className="btn btn-accent pulse-effect" style={{ paddingBlock: '0.625rem', paddingInline: '1.25rem', fontSize: '0.875rem' }}>
            Download App
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'var(--color-primary-green)',
            cursor: 'pointer',
            padding: '0.5rem',
            zIndex: 1001
          }}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(30, 86, 49, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 998
          }}
        />
      )}

      {/* Mobile Drawer Menu */}
      <div 
        className="mobile-drawer"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '280px',
          background: 'var(--color-soft-cream)',
          zIndex: 999,
          boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.15)',
          padding: '80px 2rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <a href="#how-it-works" className="nav-link-mobile" onClick={() => setIsOpen(false)}>How It Works</a>
        <a href="#features" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Features</a>
        <a href="#interactive-preview" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Interactive Demo</a>
        <a href="#counseling" className="nav-link-mobile" onClick={() => setIsOpen(false)}>Mosque Counseling</a>
        <a href="#faq" className="nav-link-mobile" onClick={() => setIsOpen(false)}>FAQ</a>
        <hr style={{ border: 'none', borderBottom: '1px solid var(--border-color)', marginBlock: '0.5rem' }} />
        <a href="#download" className="btn btn-primary" onClick={() => setIsOpen(false)}>
          Download App
        </a>
      </div>
      
      {/* Navbar Custom Styles */}
      <style>{`
        .nav-link {
          font-weight: 500;
          color: var(--text-primary);
          transition: var(--transition-fast);
          font-size: 0.95rem;
          position: relative;
        }
        .nav-link:hover, .nav-link:focus-visible {
          color: var(--color-primary-green);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--color-accent-gold);
          transition: var(--transition-fast);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link-mobile {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1.15rem;
          color: var(--color-primary-green);
          padding-block: 0.5rem;
        }
        .pulse-effect {
          animation: heartbeat 2s infinite ease-in-out;
        }
        @keyframes heartbeat {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); box-shadow: 0 0 15px rgba(212, 175, 55, 0.4); }
          100% { transform: scale(1); }
        }
        @media (max-width: 768px) {
          .desktop-menu, .desktop-cta {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
