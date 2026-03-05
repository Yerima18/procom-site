'use client';

import { useState } from 'react';
import { faqItems } from '@/lib/data';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="faq" id="faq">
      <div className="faq-header">
        <div className="section-tag" style={{ justifyContent: 'center' }}>Questions fréquentes</div>
        <h2 className="headline reveal">Tout ce que vous devez<br/>savoir <em>avant de commencer.</em></h2>
        <p className="body-text reveal">Les réponses aux questions que nos clients posent le plus souvent.</p>
      </div>
      <div className="faq-list">
        {faqItems.map((item, i) => (
          <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
            <button
              className="faq-question"
              aria-expanded={openFaq === i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              {item.q}<span className="faq-icon">+</span>
            </button>
            <div className="faq-answer" role="region"><p>{item.a}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
