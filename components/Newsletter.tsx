'use client';

export default function Newsletter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector('button') as HTMLButtonElement;
    btn.textContent = 'Merci !';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = "S'inscrire"; btn.disabled = false; }, 3000);
  };

  return (
    <div className="newsletter">
      <div className="newsletter-inner">
        <h3 className="headline">Restez <em>Informé</em></h3>
        <p className="body-text">Recevez nos conseils communication, nos dernières réalisations et les tendances du secteur directement dans votre boîte mail.</p>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Votre adresse email" required />
          <button type="submit" className="btn btn-primary">S&apos;inscrire</button>
        </form>
      </div>
    </div>
  );
}
