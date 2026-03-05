import { partners } from '@/lib/data';

export default function PartnersBar() {
  return (
    <div className="partners-bar">
      <p className="partners-bar-label">Ils nous font confiance</p>
      <div className="partners-track">
        {[...partners, ...partners].map((p, i) => (
          <span key={i} className="partner-logo">{p}</span>
        ))}
      </div>
    </div>
  );
}
