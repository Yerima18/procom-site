const steps = [
  { n: 1, t: 'Écoute & Diagnostic', d: "Nous analysons vos besoins, votre marché et vos objectifs pour poser les bases d'une stratégie solide." },
  { n: 2, t: 'Stratégie & Proposition', d: "Nous élaborons un plan d'action sur mesure avec un calendrier précis, un budget clair et des livrables définis." },
  { n: 3, t: 'Création & Production', d: 'Notre équipe conçoit et produit chaque support avec exigence, en vous impliquant à chaque validation.' },
  { n: 4, t: 'Livraison & Suivi', d: 'Nous livrons, déployons et mesurons les résultats. Reporting régulier et ajustements inclus.' },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-header">
        <div className="section-tag" style={{ justifyContent: 'center' }}>Notre méthode</div>
        <h2 className="headline reveal">Votre projet en <em>4 étapes.</em></h2>
        <p className="body-text reveal">Un processus clair, efficace et transparent pour garantir des résultats à la hauteur de vos ambitions.</p>
      </div>
      <div className="process-steps">
        {steps.map((step, i) => (
          <div key={step.n} className={`process-step reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
            <div className="process-step-num">{step.n}</div>
            <h4>{step.t}</h4>
            <p>{step.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
