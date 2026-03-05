'use client';

import { useState } from 'react';
import { portfolioItems } from '@/lib/data';

const categories: [string, string][] = [
  ['tout', 'Tout'],
  ['site', 'Sites Web'],
  ['evenement', 'Événements'],
  ['goodies', 'Goodies & Plaquettes'],
  ['studio', 'Studio'],
];

export default function Portfolio() {
  const [filter, setFilter] = useState('tout');

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <div>
          <div className="section-tag">Nos réalisations</div>
          <h2 className="headline reveal">Des projets qui<br/>parlent <em>d&apos;eux-mêmes.</em></h2>
        </div>
        <p className="body-text reveal">Découvrez quelques-unes de nos plus belles réalisations à travers le Bénin et au-delà.</p>
      </div>
      <div className="portfolio-categories reveal">
        {categories.map(([f, l]) => (
          <button key={f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{l}</button>
        ))}
      </div>
      <div className="portfolio-grid">
        {portfolioItems.filter(p => filter === 'tout' || p.cat === filter).map((p, i) => (
          <div key={i} className={`portfolio-card ${p.wide ? 'wide' : ''}`}>
            <img src={p.img} alt={p.title} loading="lazy" />
            <div className="portfolio-card-overlay"><h4>{p.title}</h4><p>{p.desc}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
