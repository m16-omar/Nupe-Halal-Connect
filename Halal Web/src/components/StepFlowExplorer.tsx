import { useState } from 'react';

interface Step {
  title: string;
  description: string;
  badge: string;
}

const STEPS: Step[] = [
  {
    title: '1. Register & Link Wali',
    description: 'Seekers register using their first names and basic profile details. Brides invite their Wali (father, brother, or uncle) via SMS or WhatsApp to link their accounts and activate matching.',
    badge: 'ONBOARDING'
  },
  {
    title: '2. Sunnah-Guided Filtering',
    description: 'Filter profiles by specific LGA of origin (Bida, Mokwa, Patigi, Lokoja, etc.), Islamic practice level (Practising, Moderate, Learning), languages spoken, and marital expectations.',
    badge: 'MATCHMAKING'
  },
  {
    title: '3. Express Interest & Consent',
    description: 'Express interest in compatible profiles. To protect privacy, photos remain blurred. An introduction request requires mutual approval from both the Bride and her Wali before any chat is unlocked.',
    badge: 'MUTUAL CONSENT'
  },
  {
    title: '4. Wali-Chaperoned Group Chat',
    description: 'A dedicated group chat is created with the Seeker, Candidate, and the Bride\'s Wali. Direct one-on-one private messaging is completely disabled. AI and admins moderate discussions to preserve Modesty (Haya).',
    badge: 'SAFE DIALOGUE'
  },
  {
    title: '5. Mosque Mediation & Nikah',
    description: 'Partner Mosques and Registered Imams verify member character references, conduct premarital counseling, and mediate family meetings leading to a blessed Nikah (marriage).',
    badge: 'COMMUNITY TRUST'
  }
];

export default function StepFlowExplorer() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="glass-card step-explorer-container" style={{
      width: '100%',
      background: 'white',
      borderRadius: '24px',
      padding: '2.5rem',
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: '2.5rem',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-color)',
      textAlign: 'left'
    }}>
      {/* Steps List (Left Column) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-primary-green)', marginBottom: '0.5rem' }}>
          The Ta'aruf Journey
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          We have replaced modern, unmonitored dating swiping with a structured, family-inclusive process that strictly adheres to the Quran and Sunnah.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  background: isActive ? 'rgba(30, 86, 49, 0.05)' : 'transparent',
                  border: 'none',
                  borderLeft: isActive ? '4px solid var(--color-primary-green)' : '4px solid transparent',
                  borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                  padding: '16px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'var(--transition-fast)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    color: isActive ? 'var(--color-accent-gold)' : 'var(--text-muted)',
                    letterSpacing: '0.05em'
                  }}>
                    {step.badge}
                  </span>
                  {isActive && <span style={{ color: 'var(--color-primary-green)', fontWeight: 'bold' }}>→</span>}
                </div>
                <h4 style={{ 
                  margin: 0, 
                  fontSize: '1.05rem', 
                  fontWeight: 700, 
                  color: isActive ? 'var(--color-primary-green)' : 'var(--color-dark-charcoal)' 
                }}>
                  {step.title}
                </h4>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Visualization (Right Column) */}
      <div style={{ 
        background: '#FAF8F4', 
        borderRadius: '20px', 
        border: '1px solid rgba(30, 86, 49, 0.08)',
        padding: '2.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '400px'
      }}>
        {/* Dynamic Detail Text */}
        <div>
          <span style={{ 
            fontSize: '0.75rem', 
            fontWeight: 800, 
            background: 'var(--color-primary-green)', 
            color: 'white', 
            padding: '4px 10px', 
            borderRadius: '4px',
            letterSpacing: '0.05em'
          }}>
            STEP {activeStep + 1}
          </span>
          <h4 style={{ fontSize: '1.4rem', fontWeight: 800, marginBlock: '1rem 0.5rem', color: 'var(--color-primary-green)' }}>
            {STEPS[activeStep].title}
          </h4>
          <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: '1.6' }}>
            {STEPS[activeStep].description}
          </p>
        </div>

        {/* Custom Mini Visualization based on Active Step */}
        <div style={{ 
          marginTop: '1.5rem', 
          background: 'white', 
          border: '1px solid var(--border-color)', 
          borderRadius: '12px',
          padding: '1.25rem',
          boxShadow: 'var(--shadow-sm)',
          minHeight: '180px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {activeStep === 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
                <span style={{ color: 'green', fontWeight: 'bold' }}>✓</span>
                <span>Seeker Profile Form Completed</span>
              </div>
              <div style={{ background: '#FFFDF9', border: '1px solid #E8E2D5', padding: '10px', borderRadius: '8px' }}>
                <span style={{ display: 'block', fontSize: '0.7rem', color: '#999', fontWeight: 'bold' }}>Wali SMS Invitation Template:</span>
                <p style={{ fontSize: '0.8rem', color: '#555', margin: '4px 0 0 0', lineHeight: '1.3' }}>
                  "Assalamu Alaikum Father, Aisha has added you as her Wali on Nupe Halal Connect so you can review and chaperone marriage requests: <u>https://nhc.app/wali/3012</u>"
                </p>
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.8rem' }}>
                <div style={{ background: '#F0F5F2', padding: '8px', borderRadius: '6px', border: '1px solid rgba(30,86,49,0.1)' }}>
                  <strong>LGA of Origin:</strong> Bida, Niger
                </div>
                <div style={{ background: '#F0F5F2', padding: '8px', borderRadius: '6px', border: '1px solid rgba(30,86,49,0.1)' }}>
                  <strong>Practice Level:</strong> Practising
                </div>
                <div style={{ background: '#F0F5F2', padding: '8px', borderRadius: '6px', border: '1px solid rgba(30,86,49,0.1)' }}>
                  <strong>Languages:</strong> Nupe, Hausa
                </div>
                <div style={{ background: '#F0F5F2', padding: '8px', borderRadius: '6px', border: '1px solid rgba(30,86,49,0.1)' }}>
                  <strong>Timeline:</strong> Within 1 Year
                </div>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-primary-green)', fontWeight: 'bold', textAlign: 'center', marginTop: '4px' }}>
                🔍 32 Compatible Candidates Found matching criteria
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '1.5rem' }}>💌</span>
              <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary-green)' }}>Express Interest Notification Sent</strong>
              <p style={{ fontSize: '0.75rem', color: '#666', margin: 0 }}>
                "Yahaya has requested an introduction. Photos are blurred. Alhaji Usman (Wali) and Aisha have both received alerts to approve."
              </p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: '#DDF5E6', color: '#1B5E20', borderRadius: '4px', fontWeight: 'bold' }}>Aisha: Approved</span>
                <span style={{ fontSize: '0.7rem', padding: '2px 8px', background: '#DDF5E6', color: '#1B5E20', borderRadius: '4px', fontWeight: 'bold' }}>Wali: Approved</span>
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifySelf: 'stretch', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '4px', fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--color-primary-green)' }}>
                <span>🔒 Alhaji Usman\'s Supervision</span>
                <span>Active</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ background: '#E3F2FD', padding: '6px 10px', borderRadius: '8px', fontSize: '0.75rem', alignSelf: 'flex-end', maxWidth: '85%' }}>
                  <strong>Yahaya:</strong> "I reside in Abuja. I\'m a software developer."
                </div>
                <div style={{ background: '#FFF9E6', padding: '6px 10px', borderRadius: '8px', fontSize: '0.75rem', alignSelf: 'flex-start', maxWidth: '85%', borderLeft: '3px solid var(--color-accent-gold)' }}>
                  <strong>Alhaji Usman:</strong> "Aisha resides in Minna. We welcome software developers. Let\'s discuss family expectations."
                </div>
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'rgba(212, 175, 55, 0.15)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'var(--color-highlight-gold)', 
                fontWeight: 'bold', 
                fontSize: '1.25rem' 
              }}>
                🕌
              </div>
              <strong style={{ fontSize: '0.85rem', color: 'var(--color-primary-green)' }}>Mosque character reference verification</strong>
              <p style={{ fontSize: '0.75rem', color: '#666', margin: 0, lineHeight: '1.3' }}>
                Mallam Ibrahim (Minna Central Mosque Imam) verified Aisha\'s reference. Family counseling scheduled, leading to safe home visits and Nikah.
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* StepExplorer Styles */}
      <style>{`
        @media (max-width: 900px) {
          .step-explorer-container {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}
