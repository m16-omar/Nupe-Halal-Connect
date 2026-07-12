import { useState } from 'react';

export default function InteractiveProfilePreview() {
  const [activeTab, setActiveTab] = useState<'deen' | 'expectations' | 'wali'>('deen');
  const [isPhotoUnlocked, setIsPhotoUnlocked] = useState(false);
  const [photoRequestSent, setPhotoRequestSent] = useState(false);

  const handleRequestPhoto = () => {
    setPhotoRequestSent(true);
    // Simulate auto-approval after 2 seconds for interactive feel
    setTimeout(() => {
      setIsPhotoUnlocked(true);
    }, 2000);
  };

  return (
    <div className="glass-card profile-preview-card" style={{
      width: '100%',
      maxWidth: '480px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '24px',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-color)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      textAlign: 'left'
    }}>
      {/* Profile Header (Badges & Blurred Avatar) */}
      <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
        
        {/* Photo Container */}
        <div style={{ position: 'relative', width: '90px', height: '90px', borderRadius: '20px', overflow: 'hidden', border: '2px solid var(--color-primary-green)' }}>
          {/* Mock photo - styled CSS container representing a modest profile icon */}
          <div style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1E5631, #D4AF37)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            filter: isPhotoUnlocked ? 'none' : 'blur(16px)',
            transition: 'filter 0.5s ease',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.5rem'
          }}>
            {isPhotoUnlocked ? (
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 18H2v-1a7 7 0 0 1 14 0v1zm8-9h4m-2-2v4" />
              </svg>
            ) : (
              <span>NHC</span>
            )}
          </div>
          
          {/* Overlay text when locked */}
          {!isPhotoUnlocked && (
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(30, 86, 49, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              textAlign: 'center',
              padding: '4px'
            }}>
              🔒 BLURRED
            </div>
          )}
        </div>

        {/* Profile Identity Details */}
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, color: 'var(--color-primary-green)' }}>Aisha</h3>
            <span style={{ 
              fontSize: '0.75rem', 
              fontWeight: 600, 
              padding: '2px 8px', 
              background: 'rgba(30, 86, 49, 0.1)', 
              color: 'var(--color-primary-green)',
              borderRadius: '99px'
            }}>
              24 yrs
            </span>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBlock: '2px 6px' }}>Minna, Niger State (Nupe origin)</p>
          
          {/* Verification Badges */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ 
              fontSize: '0.7rem', 
              fontWeight: 600, 
              padding: '2px 8px', 
              background: 'rgba(212, 175, 55, 0.15)', 
              color: 'var(--color-highlight-gold)', 
              border: '1px solid rgba(212,175,55,0.3)',
              borderRadius: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              🛡️ ID Verified
            </span>
            <span style={{ 
              fontSize: '0.7rem', 
              fontWeight: 600, 
              padding: '2px 8px', 
              background: 'rgba(30, 86, 49, 0.1)', 
              color: 'var(--color-primary-green)', 
              border: '1px solid rgba(30,86,49,0.15)',
              borderRadius: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              🕌 Mosque Verified
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ 
        display: 'flex', 
        borderBottom: '1px solid var(--border-color)', 
        marginBlock: '0.5rem',
        fontSize: '0.9rem',
        fontWeight: 600
      }}>
        <button 
          onClick={() => setActiveTab('deen')}
          style={{
            flex: 1,
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'deen' ? '2px solid var(--color-primary-green)' : '2px solid transparent',
            color: activeTab === 'deen' ? 'var(--color-primary-green)' : 'var(--text-muted)',
            paddingBlock: '8px',
            cursor: 'pointer',
            fontWeight: 700
          }}
        >
          Deen & Values
        </button>
        <button 
          onClick={() => setActiveTab('expectations')}
          style={{
            flex: 1,
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'expectations' ? '2px solid var(--color-primary-green)' : '2px solid transparent',
            color: activeTab === 'expectations' ? 'var(--color-primary-green)' : 'var(--text-muted)',
            paddingBlock: '8px',
            cursor: 'pointer',
            fontWeight: 700
          }}
        >
          Expectations
        </button>
        <button 
          onClick={() => setActiveTab('wali')}
          style={{
            flex: 1,
            background: 'none',
            border: 'none',
            borderBottom: activeTab === 'wali' ? '2px solid var(--color-primary-green)' : '2px solid transparent',
            color: activeTab === 'wali' ? 'var(--color-primary-green)' : 'var(--text-muted)',
            paddingBlock: '8px',
            cursor: 'pointer',
            fontWeight: 700
          }}
        >
          Wali Info
        </button>
      </div>

      {/* Tab Contents */}
      <div className="tab-content" style={{ minHeight: '130px', fontSize: '0.9rem' }}>
        {activeTab === 'deen' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <span style={{ fontWeight: 700, color: 'var(--color-primary-green)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Practice Level</span>
              <span style={{ fontSize: '0.95rem' }}>Practising (Committed to all Fardh & Sunnah, Hijab)</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, color: 'var(--color-primary-green)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Languages</span>
              <span style={{ fontSize: '0.95rem' }}>Nupe, English, Hausa</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, color: 'var(--color-primary-green)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Education / Occupation</span>
              <span style={{ fontSize: '0.95rem' }}>B.Sc. Education / Primary School Teacher</span>
            </div>
          </div>
        )}

        {activeTab === 'expectations' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <span style={{ fontWeight: 700, color: 'var(--color-primary-green)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Expected Timeline</span>
              <span style={{ fontSize: '0.95rem' }}>Within 6 months to 1 year</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, color: 'var(--color-primary-green)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Marriage Expectations</span>
              <p style={{ fontStyle: 'italic', color: '#444', marginTop: '2px', lineHeight: '1.4' }}>
                "I am looking for a god-fearing Nupe brother who resides in Abuja or Minna. Someone supportive, honest, and dedicated to building a peaceful family on Islamic values."
              </p>
            </div>
          </div>
        )}

        {activeTab === 'wali' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div>
              <span style={{ fontWeight: 700, color: 'var(--color-primary-green)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Guardian Name</span>
              <span style={{ fontSize: '0.95rem' }}>Alhaji Usman (Father)</span>
            </div>
            <div>
              <span style={{ fontWeight: 700, color: 'var(--color-primary-green)', display: 'block', fontSize: '0.8rem', textTransform: 'uppercase' }}>Verification Status</span>
              <span style={{ fontSize: '0.95rem', color: 'var(--color-highlight-gold)', fontWeight: 600 }}>🟢 Linked & Active (Consent Required)</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.3' }}>
              💡 In compliance with Islamic jurisprudence, Aisha's profile is fully managed in coordination with her father. All matches automatically alert him.
            </p>
          </div>
        )}
      </div>

      {/* Profile Interactions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
        
        {/* Photo Button */}
        {!isPhotoUnlocked ? (
          <button 
            onClick={handleRequestPhoto}
            disabled={photoRequestSent}
            className="btn btn-outline" 
            style={{ 
              width: '100%', 
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              opacity: photoRequestSent ? 0.7 : 1,
              cursor: photoRequestSent ? 'not-allowed' : 'pointer'
            }}
          >
            {photoRequestSent ? (
              <>
                <svg className="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ animation: 'spin 1s linear infinite' }}>
                  <circle cx="12" cy="12" r="10" strokeDasharray="32" />
                </svg>
                Waiting for Wali Approval...
              </>
            ) : (
              <>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Request Photo Access
              </>
            )}
          </button>
        ) : (
          <div style={{ 
            fontSize: '0.8rem', 
            color: 'var(--color-primary-green)', 
            background: 'rgba(30, 86, 49, 0.08)',
            padding: '8px 12px',
            borderRadius: '8px',
            textAlign: 'center',
            fontWeight: 600
          }}>
            ✅ Photo Unlocked (Wali Approved)
          </div>
        )}

        {/* Express Interest Button */}
        <button 
          onClick={() => alert("Interest request demo! This sends an alert to Alhaji Usman.")}
          className="btn btn-primary" 
          style={{ 
            width: '100%',
            fontSize: '0.9rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          Express Interest (Initiate Ta'aruf)
        </button>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .spinner circle {
          stroke-linecap: round;
        }
      `}</style>
    </div>
  );
}
