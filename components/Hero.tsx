import CountUp from './CountUp';

type HeroProps = {
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export default function Hero({ handleNavClick }: HeroProps) {
  return (
    <section className="hero hero-bg" id="hero">
      <div className="hero-bg-image"></div>
      <div className="hero-bg-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">Agence 360° · Appui-Conseil · Formation</div>
        <h1>
          <span className="line"><span>Depuis 2018,</span></span>
          <span className="line"><span>nous transformons</span></span>
          <span className="line"><span>vos idées en <em>succès.</em></span></span>
        </h1>
        <p className="hero-sub">
          Stratégie digitale, production audiovisuelle, design et formation — nous accompagnons entreprises, institutions et organisations à chaque étape de leur communication.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#contact')}>Contactez-nous →</a>
          <a href="#services" className="btn btn-outline-light" onClick={(e) => handleNavClick(e, '#services')}>Nos Services</a>
        </div>
        <div className="hero-metrics">
          <div className="hero-metric"><h3><CountUp target={7} suffix="+" /></h3><p>Années d&apos;expérience</p></div>
          <div className="hero-metric"><h3><CountUp target={100} suffix="+" /></h3><p>Projets livrés</p></div>
          <div className="hero-metric"><h3><CountUp target={262} suffix="K+" /></h3><p>Communauté digitale</p></div>
          <div className="hero-metric"><h3><CountUp target={360} suffix="°" /></h3><p>Communication globale</p></div>
        </div>
      </div>
    </section>
  );
}
