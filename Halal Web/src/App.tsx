import Navbar from './components/Navbar';
import InteractiveChatPreview from './components/InteractiveChatPreview';
import InteractiveProfilePreview from './components/InteractiveProfilePreview';
import StepFlowExplorer from './components/StepFlowExplorer';
import FaqAccordion from './components/FaqAccordion';
import './App.css';

function App() {
  return (
    <>
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="badge-tag">⚖️ Quran & Sunnah Guided Marriage Matrimony</span>
            <div className="arabic-quote-hero">وَخَلَقْنَاكُمْ أَزْوَاجًا</div>
            <h1 className="hero-title">
              Dignified Matrimonial introduction for <span style={{ color: 'var(--color-accent-gold)' }}>Nupe Muslims</span>
            </h1>
            <p className="hero-subtitle">
              Nupe Halal Connect is a specialized, sharia-compliant matchmaking (ta'aruf) platform that prioritizes modesty, early Wali (guardian) involvement, and community trust. 
            </p>
            <div className="hero-actions">
              <a href="#download" className="btn btn-primary">Begin Your Journey</a>
              <a href="#interactive-preview" className="btn btn-outline">Explore Interactive Demo</a>
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <InteractiveChatPreview />
          </div>
        </div>
      </section>

      {/* Core Value Pillars Section */}
      <section id="features" className="pillars-section">
        <div className="container">
          <div className="section-header">
            <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-highlight-gold)', textTransform: 'uppercase' }}>Core Pillars</span>
            <h2>How We Keep Courtship Halal</h2>
            <p className="section-subtitle">We build features around Islamic jurisprudence and cultural etiquette to provide a safe, respectful environment.</p>
            <div className="gold-divider"></div>
          </div>

          <div className="pillars-grid">
            <div className="pillar-card">
              <div className="pillar-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="pillar-title">Strict Modesty (Haya)</h3>
              <p className="pillar-desc">
                Photos are blurred by default. Seeker photos can only be requested and unblurred with explicit, mutual consent. This shifts the focus from superficial browsing to deep values.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="pillar-title">Wali Involvement</h3>
              <p className="pillar-desc">
                To protect our sisters, private 1-on-1 chatting is disabled. All communications are hosted in group chats that automatically include the Bride's Wali (guardian) or a family chaperone.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className="pillar-title">Mosque Verified Badge</h3>
              <p className="pillar-desc">
                Registered local Imams verify applicant details, character references, and mosque affiliations. A mosque verification badge adds a strong layer of trust to search profiles.
              </p>
            </div>

            <div className="pillar-card">
              <div className="pillar-icon-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="pillar-title">Nupe Culterally Aligned</h3>
              <p className="pillar-desc">
                Tailored matching with custom filters for Local Government Areas (LGAs) in Niger/Kwara states, native language options (Nupe, Hausa, English), and local community mapping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step Journey Section */}
      <section id="how-it-works" className="journey-section">
        <div className="container">
          <div className="section-header">
            <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-highlight-gold)', textTransform: 'uppercase' }}>Process Flow</span>
            <h2>How Nupe Halal Connect Works</h2>
            <p className="section-subtitle">Five structured phases designed to transition seekers from registration to a blessed Islamic marriage.</p>
            <div className="gold-divider"></div>
          </div>
          
          <StepFlowExplorer />
        </div>
      </section>

      {/* Seeker Profile Preview Section */}
      <section id="interactive-preview" className="preview-section">
        <div className="container preview-grid">
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span className="badge-tag">🔬 Interactive Demo</span>
            <h2 style={{ margin: 0, fontSize: '2.2rem' }}>
              Explore the Seeker Profile Experience
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Take a look at how matchmaking profiles are built on our platform. The focus is entirely on a candidate's religious practices, education, lifestyle, and marriage expectations rather than pictures.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--color-primary-green)', fontWeight: 'bold' }}>✓</span>
                <span><strong>Modesty Protection:</strong> Photos are blurred by default and only unblurred with authorization.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--color-primary-green)', fontWeight: 'bold' }}>✓</span>
                <span><strong>Verified Statuses:</strong> Government identity matches and local mosque references are marked clearly.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--color-primary-green)', fontWeight: 'bold' }}>✓</span>
                <span><strong>Wali Alignment:</strong> Brides link their Wali contact info, assuring family backing from day one.</span>
              </div>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <a href="#download" className="btn btn-primary">Try It In The App</a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <InteractiveProfilePreview />
          </div>
        </div>
      </section>

      {/* Mosque Partner / Counseling Section */}
      <section id="counseling" className="counseling-section">
        <div className="container counseling-grid">
          <div className="imam-card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>
                🕌
              </div>
              <div>
                <h4 style={{ margin: 0, color: 'var(--color-primary-green)', fontSize: '1.15rem' }}>Mallam Ibrahim</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)' }}>Registered Counselor · Kaduna Central Mosque</p>
              </div>
            </div>
            
            <div style={{
              background: '#FAF9F6',
              padding: '1rem',
              borderRadius: '8px',
              borderLeft: '4px solid var(--color-accent-gold)',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              color: '#333'
            }}>
              "Ta'aruf is a sacred mechanism. Involving family early prevents temptations and guides our youth toward stable households. We verify references and provide premarital counseling to ensure marriages start on truth."
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.8rem' }}>
              <div style={{ background: 'rgba(30, 86, 49, 0.04)', padding: '10px', borderRadius: '6px' }}>
                <strong>Counseling Hours:</strong> 25+ hours completed
              </div>
              <div style={{ background: 'rgba(30, 86, 49, 0.04)', padding: '10px', borderRadius: '6px' }}>
                <strong>Imam Verification:</strong> Sharia Board Vetted
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span className="badge-tag">🕌 Mosque Integration</span>
            <h2 style={{ margin: 0, fontSize: '2.2rem' }}>
              Local Mosque Verification & Counseling
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>
              Nupe Halal Connect acts as a digital bridge to your local Muslim community. Registered Imams provide verification, premarital advice, and mediation services to assist families in arranging marriages.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Seekers can request mediation if discussions stall, allowing respected community elders to guide the matchmaking journey smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-header">
            <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-highlight-gold)', textTransform: 'uppercase' }}>Clarifications</span>
            <h2>Frequently Asked Questions</h2>
            <p className="section-subtitle">Understanding the rules, logic, and sharia-compliance of Nupe Halal Connect.</p>
            <div className="gold-divider"></div>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* Download App Call to Action */}
      <section id="download" className="download-section">
        <div className="container download-grid">
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--color-accent-gold)', textTransform: 'uppercase' }}>Get Started Today</span>
            <h2 style={{ color: 'white' }}>Complete Half of Your Deen</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Join thousands of verified Nupe Muslims finding compatible partners in a respectful, modest environment.
            </p>
          </div>

          <div className="store-buttons">
            <a href="#" className="store-btn" onClick={(e) => { e.preventDefault(); alert("App Store download link! Coming soon on iOS."); }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.62.73-1.16 1.87-1.01 2.98.67.05 1.83-.55 2.96-1.43z" />
              </svg>
              <div>
                <span style={{ fontSize: '0.65rem', display: 'block', textTransform: 'uppercase', opacity: 0.8 }}>Coming soon on</span>
                <strong>Apple App Store</strong>
              </div>
            </a>

            <a href="#" className="store-btn" onClick={(e) => { e.preventDefault(); alert("Play Store download link! Coming soon on Android."); }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 5.27v13.46c0 .88.75 1.57 1.63 1.51L15.3 12 4.63 3.76C3.75 3.7 3 4.39 3 5.27zm16.5 6.01L16 9.38l-2.7 2.62L16 14.62l3.5-1.9c.7-.38.7-.99 0-1.44zM12 12l2.7-2.62-10.07-5.6C4 3.4 3.2 3.6 3 4l9 8zm0 0l-9 8c.2.4 1 .6 1.63.22l10.07-5.6L12 12z" />
              </svg>
              <div>
                <span style={{ fontSize: '0.65rem', display: 'block', textTransform: 'uppercase', opacity: 0.8 }}>Coming soon on</span>
                <strong>Google Play Store</strong>
              </div>
            </a>
          </div>
        </div>

        {/* CSS-rendered soft glowing mosque silhouette backdrop */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(to top, rgba(30, 86, 49, 0.4), transparent)',
          opacity: 0.5,
          pointerEvents: 'none'
        }} />
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <div className="container footer-grid">
          <div className="footer-col">
            <div className="footer-logo">
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--color-primary-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span>NUPE HALAL CONNECT</span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              Modesty, Transparency, and Family Involvement in the Pursuit of Marriage.<br />
              Guided strictly by the Qur'an & Sunnah.
            </p>
            <p style={{ fontStyle: 'italic', fontSize: '0.8rem', color: 'var(--color-accent-gold)', marginTop: '0.5rem' }}>
              "And We created you in pairs." (78:8)
            </p>
          </div>

          <div className="footer-col">
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 700 }}>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#features">Halal Features</a></li>
              <li><a href="#interactive-preview">Interactive Demo</a></li>
              <li><a href="#counseling">Counseling & Mediation</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 700 }}>Support & LGAs</h4>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>
              Serving Minna, Bida, Mokwa, Gbako, Katcha, Lavun, Edu, Patigi, Lokoja, and Nupe diaspora worldwide.
            </p>
            <p style={{ fontSize: '0.85rem', margin: 0 }}>
              Email: support@nupehalalconnect.com
            </p>
          </div>
        </div>

        <div className="footer-bottom container">
          <p>© 2026 Nupe Halal Connect. All rights reserved. Built for the Nupe Muslim Ummah.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
