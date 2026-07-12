import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Why is direct 1-on-1 chatting disabled?",
    answer: "Nupe Halal Connect strictly adheres to Islamic modesty (haya) and segregation of unrelated genders. In accordance with the Sunnah, private unchaperoned conversations are discouraged. All chats on our platform occur within a supervised group room that automatically includes the bride's Wali (guardian) or a family member. This ensures transparency, safety, and mutual accountability."
  },
  {
    question: "Who can act as a Wali (Guardian) on the platform?",
    answer: "A Wali is typically a father, paternal grandfather, elder brother, paternal uncle, or elder son (for widows/divorcees). In cases where a family wali is unavailable, our registered local Imams can step in to serve as chaperones and verification mediators."
  },
  {
    question: "Is the platform exclusive to Nupe Muslims?",
    answer: "Yes, our primary focus is the Nupe Muslim community (representing over 1 million people across Niger, Kwara, Kogi, and the FCT). This localization allows us to offer custom filters for local government areas (LGAs) in Niger/Kwara states, native language support, and a trusted network of local mosque Imams. We plan to scale to other Muslim communities in future phases."
  },
  {
    question: "How do you protect users' privacy, especially for women?",
    answer: "We prioritize privacy: full names are kept private, and photos are blurred by default. Photos can only be requested, and are only unblurred with the seeker's explicit consent. Furthermore, government IDs uploaded for verification are fully encrypted, and no screenshotting is allowed inside the mobile chat rooms."
  }
];

export default function FaqAccordion() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion-container" style={{
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      textAlign: 'left'
    }}>
      {FAQS.map((faq, idx) => {
        const isExpanded = expandedIndex === idx;
        return (
          <div 
            key={idx}
            style={{
              background: 'white',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition-normal)'
            }}
          >
            {/* Question Header */}
            <button
              onClick={() => toggleFaq(idx)}
              aria-expanded={isExpanded}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--color-primary-green)'
              }}
            >
              <span>{faq.question}</span>
              <span style={{ 
                transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                fontSize: '1.2rem',
                color: 'var(--color-accent-gold)',
                fontWeight: 'bold'
              }}>
                ▼
              </span>
            </button>

            {/* Answer body */}
            <div 
              style={{
                maxHeight: isExpanded ? '300px' : '0px',
                opacity: isExpanded ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
                background: '#FAF9F6'
              }}
            >
              <p style={{ 
                padding: '1.25rem 1.5rem', 
                margin: 0, 
                fontSize: '0.95rem', 
                color: 'var(--color-secondary-grey)',
                lineHeight: '1.6',
                borderTop: '1px solid rgba(30, 86, 49, 0.05)'
              }}>
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
