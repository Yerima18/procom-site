export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-images reveal">
        <div className="about-img-main">
          <img src="/hero-team.png" alt="Équipe créative PROCOM" loading="lazy" />
        </div>
        <div className="about-img-secondary">
          <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=350&fit=crop" alt="Production digitale" loading="lazy" />
        </div>
        <div className="about-badge-float"><h4>7+</h4><p>ans d&apos;expertise</p></div>
      </div>
      <div className="about-content">
        <div className="section-tag">À Propos de PROCOM</div>
        <h2 className="headline reveal">L&apos;agence qui donne de la <em>voix</em> à vos ambitions.</h2>
        <p className="body-text reveal">
          Fondée en 2018 à Cotonou, PROCOM est une agence conseil en communication 360° dédiée à l&apos;appui-conseil et à la formation. Nous aidons entreprises, institutions et organisations à bâtir leur visibilité, structurer leur communication et accélérer leur transformation digitale sur le continent.
        </p>
        <div className="about-legal reveal">
          <div className="about-legal-item"><label>Statut</label><span>SARL</span></div>
          <div className="about-legal-item"><label>RC</label><span>RB/COT/18 B 21281</span></div>
          <div className="about-legal-item"><label>IFU</label><span>3201810265722</span></div>
        </div>
        <div className="about-expertise reveal">
          {['Communication Digitale', 'Production Audiovisuelle', 'Design Graphique', 'Communication de Crise', 'Nation Branding'].map(s => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="about-highlights reveal">
          <div className="about-highlight"><h4>Stratégie</h4><p>Approche data-driven et sur mesure pour chaque client</p></div>
          <div className="about-highlight"><h4>Créativité</h4><p>Des idées audacieuses qui captent l&apos;attention</p></div>
          <div className="about-highlight"><h4>Innovation</h4><p>Technologies et tendances au service de vos objectifs</p></div>
          <div className="about-highlight"><h4>Résultats</h4><p>Performance mesurable et impact concret</p></div>
        </div>
      </div>
    </section>
  );
}
