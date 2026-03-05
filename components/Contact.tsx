'use client';

import { services } from '@/lib/data';
import SocialLinks from './SocialLinks';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector('.form-submit') as HTMLButtonElement;
    const originalText = btn.textContent;
    btn.textContent = 'Demande envoyée !';
    btn.style.background = '#16A34A';
    btn.disabled = true;
    const fd = new FormData(form);
    const subject = encodeURIComponent('Demande de devis — ' + ((fd.get('company') as string) || (fd.get('name') as string)));
    const body = encodeURIComponent('Nom : ' + fd.get('name') + '\nEmail : ' + fd.get('email') + '\nEntreprise : ' + fd.get('company') + '\nService : ' + fd.get('service') + '\n\nMessage :\n' + fd.get('message'));
    window.open('mailto:contact@agenceprocom.pro?subject=' + subject + '&body=' + body, '_self');
    setTimeout(() => { btn.textContent = originalText; btn.style.background = ''; btn.disabled = false; }, 4000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid container">
        <div className="contact-info">
          <div className="section-tag">Contact</div>
          <h2 className="headline reveal">Parlons de votre<br/><em>prochain projet.</em></h2>
          <p className="body-text reveal">Agence de Communication 360° basée à Cotonou, Bénin. Nous sommes à votre écoute pour transformer vos ambitions en résultats concrets.</p>
          <div className="contact-detail reveal"><label>Adresse</label><p>C/ 520 St Michel, Jéricho<br/>03 BP 136, Cotonou, Bénin</p></div>
          <div className="contact-detail reveal"><label>Téléphones</label><p><a href="tel:+2290197677754">+229 01 97 67 77 54</a><br/><a href="tel:+2290166617878">+229 01 66 61 78 78</a></p></div>
          <div className="contact-detail reveal"><label>Email</label><p><a href="mailto:contact@agenceprocom.pro">contact@agenceprocom.pro</a></p></div>
          <div className="contact-detail reveal"><label>Site web</label><p><a href="https://www.agenceprocom.pro" target="_blank" rel="noopener noreferrer">www.agenceprocom.pro</a></p></div>
          <div className="contact-detail reveal"><label>Informations légales</label><p>SARL — RC : RB/COT/18 B 21281<br/>IFU : 3201810265722</p></div>
          <SocialLinks className="contact-socials reveal" />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Demander un devis</h3>
          <div className="form-row">
            <div className="form-group"><label htmlFor="cf-name">Nom complet</label><input type="text" id="cf-name" name="name" placeholder="Votre nom" required /></div>
            <div className="form-group"><label htmlFor="cf-email">Email</label><input type="email" id="cf-email" name="email" placeholder="votre@email.com" required /></div>
          </div>
          <div className="form-row">
            <div className="form-group"><label htmlFor="cf-company">Entreprise / Organisation</label><input type="text" id="cf-company" name="company" placeholder="Nom de votre structure" /></div>
            <div className="form-group"><label htmlFor="cf-phone">Téléphone</label><input type="tel" id="cf-phone" name="phone" placeholder="+229 XX XX XX XX" /></div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cf-service">Service souhaité</label>
              <select id="cf-service" name="service" required>
                <option value="">Sélectionnez un service</option>
                {services.map(s => <option key={s.num}>{s.title}</option>)}
                <option>Autre</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="cf-budget">Budget estimé</label>
              <select id="cf-budget" name="budget">
                <option value="">Sélectionnez</option>
                <option>{'< 500 000 CFA'}</option>
                <option>500 000 – 1 500 000 CFA</option>
                <option>1 500 000 – 5 000 000 CFA</option>
                <option>{'> 5 000 000 CFA'}</option>
              </select>
            </div>
          </div>
          <div className="form-group"><label htmlFor="cf-message">Décrivez votre projet</label><textarea id="cf-message" name="message" placeholder="Parlez-nous de vos besoins, vos objectifs, votre calendrier..." required></textarea></div>
          <button type="submit" className="form-submit">Envoyer la demande →</button>
        </form>
        <div className="contact-map reveal">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0!2d2.4075!3d6.3654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9!2sJericho%2C+Cotonou!5e0!3m2!1sfr!2sbj!4v1700000000000"
            width="100%" height="300"
            style={{ border: 0, borderRadius: '8px', filter: 'grayscale(30%) contrast(1.05)' }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PROCOM — Jéricho, Cotonou"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
