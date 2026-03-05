import { services } from '@/lib/data';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <div>
          <div className="section-tag">Nos expertises</div>
          <h2 className="headline">Des solutions pensées<br/>pour votre <em>impact.</em></h2>
        </div>
        <p className="body-text" style={{ color: 'var(--section-dark-text-muted)' }}>
          Chaque service est conçu pour maximiser votre visibilité et construire une communication cohérente et mémorable.
        </p>
      </div>
      <div className="services-grid">
        {services.map(s => (
          <div key={s.num} className="service-card reveal">
            {s.bg && <div className="service-bg" style={{ backgroundImage: `url('${s.bg}')` }}></div>}
            <div className="s-num">{s.num}</div>
            <div className="s-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <div className="service-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
