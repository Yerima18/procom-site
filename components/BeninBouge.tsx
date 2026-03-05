import CountUp from './CountUp';

const stats = [
  { v: 262, s: 'K+', l: 'Abonnés total' },
  { v: 165, s: 'K+', l: 'TikTok' },
  { v: 41,  s: 'K+', l: 'Facebook' },
  { v: 39,  s: 'K+', l: 'WhatsApp' },
  { v: 13,  s: 'K+', l: 'Instagram' },
  { v: 100, s: '+',  l: 'Projets couverts' },
];

export default function BeninBouge() {
  return (
    <section className="benin-bouge" id="benin-bouge">
      <div className="benin-bouge-glow"></div>
      <div className="benin-bouge-content">
        <div className="bb-left">
          <div className="section-tag">Notre média premium</div>
          <div className="bb-slogan">Bénin Bouge — Le média du Bénin qui BOUGE.</div>
          <h2 className="headline reveal">Le média qui capture<br/>l&apos;énergie du <em>Bénin.</em></h2>
          <p className="body-text reveal">
            Bénin Bouge met en lumière les projets structurels, les événements culturels, économiques et sociaux, ainsi que les initiatives locales et les voix qui façonnent le Bénin d&apos;aujourd&apos;hui.
          </p>
          <a href="#" className="btn btn-outline-light reveal">Découvrir Bénin Bouge →</a>
        </div>
        <div className="bb-right">
          <div className="bb-stats-grid reveal">
            {stats.map(st => (
              <div key={st.l} className="bb-stat">
                <h4><CountUp target={st.v} suffix={st.s} /></h4>
                <p>{st.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
