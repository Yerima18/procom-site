import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer>
      <span className="footer-brand"><img src="/logo-procom.png" alt="PROCOM" /></span>
      <span className="footer-copy">© 2018–2026 PROCOM — Agence de Communication 360°. Tous droits réservés.</span>
      <SocialLinks className="footer-socials" />
    </footer>
  );
}
