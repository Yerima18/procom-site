type CtaSectionProps = {
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export default function CtaSection({ handleNavClick }: CtaSectionProps) {
  return (
    <section className="cta-section">
      <h2 className="headline reveal">Prêt à donner un nouveau souffle<br/>à votre <em>communication ?</em></h2>
      <p className="body-text reveal">Discutons de votre projet. Premier échange gratuit, sans engagement.</p>
      <div className="cta-buttons reveal">
        <a href="#contact" className="btn btn-white" onClick={(e) => handleNavClick(e, '#contact')}>Demander un devis →</a>
        <a href="https://wa.me/2290197677754" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Réserver un appel WhatsApp</a>
      </div>
    </section>
  );
}
