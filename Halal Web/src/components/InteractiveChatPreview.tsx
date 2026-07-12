import { useState, useEffect, useRef } from 'react';

interface Message {
  sender: 'groom' | 'bride' | 'wali' | 'system';
  name: string;
  text: string;
  time: string;
}

const DIALOGUES = {
  expectations: [
    { sender: 'system', name: 'System', text: 'Chat Room secured. Alhaji Usman (Wali) is present.', time: '10:00 AM' },
    { sender: 'groom', name: 'Yahaya (Groom)', text: 'Assalamu Alaikum. Alhaji, Aisha, I hope you are well. What are the key qualities you value in a spouse?', time: '10:01 AM' },
    { sender: 'bride', name: 'Aisha (Bride)', text: 'Wa Alaikum Assalam. Character and modesty are most important to me. I want to build a home grounded in deen.', time: '10:02 AM' },
    { sender: 'wali', name: 'Alhaji Usman (Wali)', text: 'Aisha values her deen above all, Yahaya. And as her Wali, I support this. How do you plan to lead the family in practice?', time: '10:03 AM' },
    { sender: 'groom', name: 'Yahaya (Groom)', text: 'Insha Allah, I intend to establish regular prayers in our home and ensure we make decisions together based on Quran and Sunnah.', time: '10:04 AM' },
    { sender: 'wali', name: 'Alhaji Usman (Wali)', text: 'Masha Allah, that is what we want to hear. May Allah guide you both.', time: '10:05 AM' },
  ],
  roles: [
    { sender: 'system', name: 'System', text: 'Chat Room secured. Alhaji Usman (Wali) is present.', time: '11:15 AM' },
    { sender: 'groom', name: 'Yahaya (Groom)', text: 'Regarding careers and family responsibilities, what are your thoughts, Aisha?', time: '11:16 AM' },
    { sender: 'bride', name: 'Aisha (Bride)', text: 'I wish to continue my teaching career, but my family and children will always be my primary responsibility.', time: '11:18 AM' },
    { sender: 'wali', name: 'Alhaji Usman (Wali)', text: 'I expect my daughter to be supported in her aspirations, provided it does not harm her home. It is a balance.', time: '11:19 AM' },
    { sender: 'groom', name: 'Yahaya (Groom)', text: 'I agree, Alhaji. I respect Aisha\'s profession. We will support each other and balance work and home responsibilities.', time: '11:21 AM' },
  ],
  timeline: [
    { sender: 'system', name: 'System', text: 'Chat Room secured. Alhaji Usman (Wali) is present.', time: '02:30 PM' },
    { sender: 'groom', name: 'Yahaya (Groom)', text: 'Alhaji, if we find compatibility, what is the family\'s timeline expectations for marriage?', time: '02:31 PM' },
    { sender: 'wali', name: 'Alhaji Usman (Wali)', text: 'We prefer not to delay the marriage when compatibility is clear. We look at within 6 to 9 months, Insha Allah.', time: '02:33 PM' },
    { sender: 'bride', name: 'Aisha (Bride)', text: 'Yes, that is a comfortable timeline for me as well, allowing us enough time for preparations.', time: '02:34 PM' },
    { sender: 'groom', name: 'Yahaya (Groom)', text: 'Alhamdulillah, that timeline works perfectly for my family too. I will discuss with my parents about a formal visit.', time: '02:36 PM' },
  ]
};

export default function InteractiveChatPreview() {
  const [activeTopic, setActiveTopic] = useState<'expectations' | 'roles' | 'timeline'>('expectations');
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [typingIndex, setTypingIndex] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Restart dialogue when activeTopic changes
  useEffect(() => {
    setVisibleMessages([]);
    setTypingIndex(0);
  }, [activeTopic]);

  // Handle message typing simulation
  useEffect(() => {
    if (typingIndex === -1) return;
    const targetDialogue = DIALOGUES[activeTopic];

    if (typingIndex < targetDialogue.length) {
      setIsTyping(true);
      const delay = targetDialogue[typingIndex].sender === 'system' ? 500 : 1500;
      
      const timer = setTimeout(() => {
        setVisibleMessages(prev => [...prev, targetDialogue[typingIndex] as Message]);
        setTypingIndex(prev => prev + 1);
        setIsTyping(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [typingIndex, activeTopic]);

  // Scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [visibleMessages, isTyping]);

  return (
    <div className="chat-preview-widget" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '420px', margin: '0 auto' }}>
      
      {/* Topic Switchers */}
      <div className="topic-chips" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setActiveTopic('expectations')} 
          className={`chip ${activeTopic === 'expectations' ? 'active' : ''}`}
        >
          Expectations
        </button>
        <button 
          onClick={() => setActiveTopic('roles')} 
          className={`chip ${activeTopic === 'roles' ? 'active' : ''}`}
        >
          Family Roles
        </button>
        <button 
          onClick={() => setActiveTopic('timeline')} 
          className={`chip ${activeTopic === 'timeline' ? 'active' : ''}`}
        >
          Marriage Timeline
        </button>
      </div>

      {/* CSS Phone Frame */}
      <div className="phone-frame" style={{
        background: '#1e1e1e',
        borderRadius: '40px',
        padding: '12px',
        boxShadow: 'var(--shadow-lg)',
        border: '4px solid #333',
        width: '100%',
        aspectRatio: '9 / 18',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Notch */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120px',
          height: '22px',
          backgroundColor: '#1e1e1e',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          zIndex: 10
        }} />

        {/* Screen */}
        <div className="phone-screen" style={{
          background: 'var(--color-soft-cream)',
          borderRadius: '32px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Active Group Header */}
          <div className="chat-header" style={{
            background: 'var(--color-primary-green)',
            color: 'white',
            padding: '28px 1rem 12px 1rem',
            textAlign: 'left',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: 5
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ display: 'flex', position: 'relative', width: '38px', height: '24px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--color-accent-gold)', border: '2px solid var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'var(--color-primary-green)', fontWeight: 'bold' }}>Y</div>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#FFF', border: '2px solid var(--color-primary-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'var(--color-primary-green)', fontWeight: 'bold', position: 'absolute', left: '12px' }}>A</div>
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.9rem', color: 'white', fontWeight: 600 }}>Ta'aruf Chat Room</h4>
                <p style={{ margin: 0, fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)' }}>Aisha + Yahaya (Wali present)</p>
              </div>
            </div>
            {/* Chaperone Notification Ribbon */}
            <div style={{
              marginTop: '8px',
              background: 'rgba(212, 175, 55, 0.25)',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              color: 'var(--color-accent-gold)',
              fontSize: '0.65rem',
              padding: '2px 8px',
              borderRadius: '4px',
              textAlign: 'center',
              fontWeight: 500,
              letterSpacing: '0.02em'
            }}>
              🔒 MODERATED CHAPERONE ACTIVE
            </div>
          </div>

          {/* Message List Area */}
          <div className="chat-messages" style={{
            flex: 1,
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            overflowY: 'auto',
            background: '#F9F6F0'
          }}>
            {visibleMessages.map((msg, idx) => {
              if (msg.sender === 'system') {
                return (
                  <div key={idx} style={{
                    fontSize: '0.7rem',
                    color: 'var(--color-primary-green)',
                    background: 'rgba(30, 86, 49, 0.08)',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    marginBlock: '4px',
                    border: '1px dashed rgba(30, 86, 49, 0.2)',
                    fontWeight: 500
                  }}>
                    🛡️ {msg.text}
                  </div>
                );
              }

              const isGroom = msg.sender === 'groom';
              const isWali = msg.sender === 'wali';

              let bubbleBg = 'var(--color-surface-white)';
              let textColor = 'var(--color-dark-charcoal)';
              let alignSelf = 'flex-start';
              let nameColor = 'var(--color-primary-green)';

              if (isGroom) {
                bubbleBg = 'var(--color-primary-green)';
                textColor = 'white';
                alignSelf = 'flex-end';
                nameColor = 'var(--color-accent-gold)';
              } else if (isWali) {
                bubbleBg = '#F3E8C4'; // gold-ish bubble
                textColor = '#5A460A';
                alignSelf = 'flex-start';
                nameColor = '#C59B27';
              }

              return (
                <div 
                  key={idx} 
                  style={{
                    alignSelf,
                    maxWidth: '85%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isGroom ? 'flex-end' : 'flex-start',
                    animation: 'fadeInUp 0.3s ease forwards'
                  }}
                >
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, color: nameColor, marginBottom: '2px', paddingInline: '4px' }}>
                    {msg.name}
                  </span>
                  <div style={{
                    background: bubbleBg,
                    color: textColor,
                    padding: '8px 12px',
                    borderRadius: '12px',
                    borderTopRightRadius: isGroom ? '0px' : '12px',
                    borderTopLeftRadius: !isGroom ? '0px' : '12px',
                    fontSize: '0.8rem',
                    lineHeight: '1.4',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                    textAlign: 'left'
                  }}>
                    {msg.text}
                  </div>
                  <span style={{ fontSize: '0.6rem', color: '#999', marginTop: '2px', paddingInline: '4px' }}>
                    {msg.time}
                  </span>
                </div>
              );
            })}

            {isTyping && (
              <div style={{ alignSelf: 'flex-start', display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--color-secondary-grey)', marginBottom: '2px' }}>
                  Typing...
                </span>
                <div style={{
                  background: 'rgba(0,0,0,0.05)',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'center'
                }}>
                  <div className="typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#888', animation: 'bounce 1.4s infinite ease-in-out both' }} />
                  <div className="typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#888', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '0.2s' }} />
                  <div className="typing-dot" style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#888', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '0.4s' }} />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Fixed Supervised Chat Input bar */}
          <div style={{
            padding: '8px 12px',
            background: 'white',
            borderTop: '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              flex: 1,
              background: '#F0F0F0',
              borderRadius: '20px',
              padding: '6px 12px',
              fontSize: '0.75rem',
              color: '#888',
              textAlign: 'left'
            }}>
              🚫 Direct typing is locked
            </div>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'var(--color-primary-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              opacity: 0.6
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .topic-chips .chip {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          border: 1px solid var(--color-primary-green);
          background: transparent;
          color: var(--color-primary-green);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .topic-chips .chip.active {
          background: var(--color-primary-green);
          color: white;
        }
        .topic-chips .chip:hover:not(.active) {
          background: rgba(30, 86, 49, 0.05);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }
      `}</style>
    </div>
  );
}
