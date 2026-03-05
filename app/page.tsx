'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

const socialIcons = {
  facebook: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  instagram: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  twitter: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  tiktok: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
  youtube: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
};

function SocialLinks({ className }: { className: string }) {
  return (
    <div className={className}>
      <a href="#" aria-label="Facebook">{socialIcons.facebook}</a>
      <a href="#" aria-label="Instagram">{socialIcons.instagram}</a>
      <a href="#" aria-label="LinkedIn">{socialIcons.linkedin}</a>
      <a href="#" aria-label="X / Twitter">{socialIcons.twitter}</a>
      <a href="#" aria-label="TikTok">{socialIcons.tiktok}</a>
      <a href="#" aria-label="YouTube">{socialIcons.youtube}</a>
    </div>
  );
}

const partners = ['MARINA','ADPME','SIMAU','UNICEF','SIAB','ARI CARE','Trésors Royaux','Africa Design School','Vodun Days','Choiseul Summit'];

const services = [
  { num: '01', title: 'Communication Digitale', desc: "Stratégies en ligne sur mesure pour engager votre audience sur l'ensemble des canaux numériques.", tags: ['Social Media','SEO','Ads','E-réputation'], bg: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { num: '02', title: 'Design Graphique', desc: "Identités visuelles percutantes, supports print et digitaux qui reflètent l'essence de votre marque.", tags: ['Branding','Print','UI/UX','Packaging'], bg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg> },
  { num: '03', title: 'Production Audiovisuelle', desc: 'Studio photos, spots publicitaires, podcasts, motion design et plateaux TV de qualité professionnelle.', tags: ['Vidéo','Photo','Podcast','Motion'], bg: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg> },
  { num: '04', title: 'Communication Corporate', desc: 'Messages institutionnels clairs et cohérents pour renforcer la confiance de vos parties prenantes.', tags: ['Institutionnel','Relations Publiques','Discours'], icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> },
  { num: '05', title: 'Communication de Crise', desc: 'Dispositif de gestion de crise, veille et protection de votre réputation en temps réel.', tags: ['Crise','Veille','Réputation'], icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> },
  { num: '06', title: 'Nation Branding', desc: "Valorisation de l'image du Bénin à l'international, communication pays et rayonnement culturel.", tags: ['Image Pays','Diplomatie','Culture'], icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/></svg> },
  { num: '07', title: 'Veille & Monitoring', desc: 'Surveillance continue de votre e-réputation et analyse des tendances de votre secteur.', tags: ['E-réputation','Analyse','Tendances'], icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { num: '08', title: 'Formation', desc: 'Programmes pratiques pour développer les compétences communication et digitales de vos équipes.', tags: ['Coaching','Ateliers','Audit','Stratégie'], bg: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { num: '09', title: 'Conception de Stands', desc: "Modélisation 2D/3D et aménagement d'espaces pour salons, foires et événements professionnels.", tags: ['3D Render','Scénographie','Événementiel'], bg: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg> },
];

const portfolioItems = [
  { title: 'Projet SIMAU — 20 000 Logements', desc: 'Couverture · Interviews · Spots promotionnels', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=450&fit=crop', cat: 'evenement', wide: true },
  { title: 'Trésors Royaux', desc: 'Site Web · Design', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=375&fit=crop', cat: 'site' },
  { title: 'Vodun Days 2026', desc: 'Événement · Communication', img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&h=375&fit=crop', cat: 'evenement' },
  { title: 'Africa Design School', desc: 'Site Web · Identité', img: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=500&h=375&fit=crop', cat: 'site' },
  { title: 'Choiseul Summit Africa', desc: 'Couverture complète', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=375&fit=crop', cat: 'evenement' },
  { title: 'UNICEF Bénin', desc: 'Goodies · Plaquettes · Supports', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=375&fit=crop', cat: 'goodies' },
  { title: 'Studio PROCOM', desc: 'Photos · Podcasts · Plateaux TV professionnels', img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&h=450&fit=crop', cat: 'studio', wide: true },
];

const faqItems = [
  { q: 'Quels sont vos délais de livraison habituels ?', a: "Chaque projet est unique. Un design graphique simple peut être livré sous 5 jours ouvrables, tandis qu'un site web ou une campagne complète nécessite 3 à 6 semaines. Nous définissons ensemble un calendrier précis dès le démarrage du projet." },
  { q: 'Comment fonctionne votre politique tarifaire ?', a: "Nous proposons des devis sur mesure adaptés à votre budget et à vos objectifs. Chaque devis détaille les livrables, le calendrier et les coûts associés. Pas de frais cachés — tout est transparent dès le départ." },
  { q: 'Combien de retouches sont incluses ?', a: "Nos forfaits incluent généralement 2 à 3 tours de retouches. Nous travaillons en étroite collaboration avec vous à chaque étape de validation pour garantir un résultat conforme à vos attentes." },
  { q: 'Quels modes de paiement acceptez-vous ?', a: "Nous acceptons les virements bancaires, le Mobile Money et les paiements en espèces. Un acompte de 50% est demandé au lancement, le solde étant dû à la livraison finale." },
  { q: "Proposez-vous un accompagnement après livraison ?", a: "Absolument. Nous offrons un suivi post-livraison incluant le reporting, les ajustements nécessaires et un support continu pour vous aider à tirer le meilleur de votre investissement." },
  { q: 'Comment se passe le reporting de mes campagnes ?', a: "Vous recevez des rapports détaillés selon la fréquence convenue (hebdomadaire ou mensuelle) avec les indicateurs clés de performance, les résultats atteints et nos recommandations d'optimisation." },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    if (!ref.current || animated.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const duration = 2000;
        const start = performance.now();
        function update(now: number) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [preloaderHidden, setPreloaderHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [portfolioFilter, setPortfolioFilter] = useState('tout');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [backToTopVisible, setBackToTopVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setPreloaderHidden(true), 1500);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(pointer: fine)').matches && cursorRef.current) {
      cursorRef.current.style.display = 'block';
      const move = (e: MouseEvent) => {
        if (cursorRef.current) {
          cursorRef.current.style.left = e.clientX - 4 + 'px';
          cursorRef.current.style.top = e.clientY - 4 + 'px';
        }
      };
      document.addEventListener('mousemove', move);
      return () => document.removeEventListener('mousemove', move);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setBackToTopVisible(window.scrollY > 600);
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 120) current = s.getAttribute('id') || '';
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = useCallback(() => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('procom-theme', next);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', next === 'dark' ? '#5B8DEF' : '#1B4DDB');
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (href === '#hero') { scrollToTop(); return; }
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector('button') as HTMLButtonElement;
    btn.textContent = 'Merci !';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = "S'inscrire"; btn.disabled = false; }, 3000);
  };

  return (
    <>
      <div className={`preloader ${preloaderHidden ? 'hidden' : ''}`}>
        <div className="preloader-text"><img src="/logo-procom.png" alt="PROCOM" /></div>
        <div className="preloader-line"></div>
      </div>

      <div className="cursor-dot" ref={cursorRef}></div>
      <a href="#about" className="skip-link" onClick={(e) => handleNavClick(e, '#about')}>Aller au contenu principal</a>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-brand" onClick={(e) => handleNavClick(e, '#hero')}><img src="/logo-procom.png" alt="PROCOM" /></a>
        <button className={`mobile-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"><span></span><span></span><span></span></button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {[['#about','À Propos'],['#services','Services'],['#benin-bouge','Bénin Bouge'],['#portfolio','Portfolio'],['#contact','Contact']].map(([href, label]) => (
            <a key={href} href={href} className={activeSection === href.slice(1) ? 'active' : ''} onClick={(e) => handleNavClick(e, href)}>{label}</a>
          ))}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Basculer le thème">
            <svg className="theme-icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            <svg className="theme-icon moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
          </button>
          <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, '#contact')}>Demander un devis</a>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-grid-lines"></div>
        <div className="hero-pattern"></div>
        <div className="hero-content">
          <div className="hero-badge">Agence 360° · Appui-Conseil · Formation</div>
          <h1>
            <span className="line"><span>Depuis 2018,</span></span>
            <span className="line"><span>nous transformons</span></span>
            <span className="line"><span>vos idées en <em>succès.</em></span></span>
          </h1>
          <p className="hero-sub">Stratégie digitale, production audiovisuelle, design et formation — nous accompagnons entreprises, institutions et organisations à chaque étape de leur communication.</p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, '#contact')}>Contactez-nous →</a>
            <a href="#services" className="btn btn-outline" onClick={(e) => handleNavClick(e, '#services')}>Nos Services</a>
          </div>
          <div className="hero-metrics">
            <div className="hero-metric"><h3><CountUp target={7} suffix="+" /></h3><p>Années d&apos;expérience</p></div>
            <div className="hero-metric"><h3><CountUp target={100} suffix="+" /></h3><p>Projets livrés</p></div>
            <div className="hero-metric"><h3><CountUp target={262} suffix="K+" /></h3><p>Communauté digitale</p></div>
            <div className="hero-metric"><h3><CountUp target={360} suffix="°" /></h3><p>Communication globale</p></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-frame"></div>
          <img src="/hero-team.png" alt="Équipe PROCOM en action" loading="lazy" />
        </div>
      </section>

      <div className="partners-bar">
        <p className="partners-bar-label">Ils nous font confiance</p>
        <div className="partners-track">
          {[...partners, ...partners].map((p, i) => <span key={i} className="partner-logo">{p}</span>)}
        </div>
      </div>

      <section className="about" id="about">
        <div className="about-images reveal">
          <div className="about-img-main"><img src="/hero-team.png" alt="Équipe créative PROCOM" loading="lazy" /></div>
          <div className="about-img-secondary"><img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=350&fit=crop" alt="Production digitale" loading="lazy" /></div>
          <div className="about-badge-float"><h4>7+</h4><p>ans d&apos;expertise</p></div>
        </div>
        <div className="about-content">
          <div className="section-tag">À Propos de PROCOM</div>
          <h2 className="headline reveal">L&apos;agence qui donne de la <em>voix</em> à vos ambitions.</h2>
          <p className="body-text reveal">Fondée en 2018 à Cotonou, PROCOM est une agence conseil en communication 360° dédiée à l&apos;appui-conseil et à la formation. Nous aidons entreprises, institutions et organisations à bâtir leur visibilité, structurer leur communication et accélérer leur transformation digitale sur le continent.</p>
          <div className="about-legal reveal">
            <div className="about-legal-item"><label>Statut</label><span>SARL</span></div>
            <div className="about-legal-item"><label>RC</label><span>RB/COT/18 B 21281</span></div>
            <div className="about-legal-item"><label>IFU</label><span>3201810265722</span></div>
          </div>
          <div className="about-expertise reveal">
            {['Communication Digitale','Production Audiovisuelle','Design Graphique','Communication de Crise','Nation Branding'].map(s => <span key={s}>{s}</span>)}
          </div>
          <div className="about-highlights reveal">
            <div className="about-highlight"><h4>Stratégie</h4><p>Approche data-driven et sur mesure pour chaque client</p></div>
            <div className="about-highlight"><h4>Créativité</h4><p>Des idées audacieuses qui captent l&apos;attention</p></div>
            <div className="about-highlight"><h4>Innovation</h4><p>Technologies et tendances au service de vos objectifs</p></div>
            <div className="about-highlight"><h4>Résultats</h4><p>Performance mesurable et impact concret</p></div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-header">
          <div><div className="section-tag">Nos expertises</div><h2 className="headline">Des solutions pensées<br/>pour votre <em>impact.</em></h2></div>
          <p className="body-text" style={{color:'var(--section-dark-text-muted)'}}>Chaque service est conçu pour maximiser votre visibilité et construire une communication cohérente et mémorable.</p>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.num} className="service-card reveal">
              {s.bg && <div className="service-bg" style={{backgroundImage:`url('${s.bg}')`}}></div>}
              <div className="s-num">{s.num}</div>
              <div className="s-icon">{s.icon}</div>
              <h3>{s.title}</h3><p>{s.desc}</p>
              <div className="service-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="process-header">
          <div className="section-tag" style={{justifyContent:'center'}}>Notre méthode</div>
          <h2 className="headline reveal">Votre projet en <em>4 étapes.</em></h2>
          <p className="body-text reveal">Un processus clair, efficace et transparent pour garantir des résultats à la hauteur de vos ambitions.</p>
        </div>
        <div className="process-steps">
          {[{n:1,t:'Écoute & Diagnostic',d:"Nous analysons vos besoins, votre marché et vos objectifs pour poser les bases d'une stratégie solide."},{n:2,t:'Stratégie & Proposition',d:"Nous élaborons un plan d'action sur mesure avec un calendrier précis, un budget clair et des livrables définis."},{n:3,t:'Création & Production',d:'Notre équipe conçoit et produit chaque support avec exigence, en vous impliquant à chaque validation.'},{n:4,t:'Livraison & Suivi',d:'Nous livrons, déployons et mesurons les résultats. Reporting régulier et ajustements inclus.'}].map((step, i) => (
            <div key={step.n} className={`process-step reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
              <div className="process-step-num">{step.n}</div><h4>{step.t}</h4><p>{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="benin-bouge" id="benin-bouge">
        <div className="benin-bouge-glow"></div>
        <div className="benin-bouge-content">
          <div className="bb-left">
            <div className="section-tag">Notre média premium</div>
            <div className="bb-slogan">Bénin Bouge — Le média du Bénin qui BOUGE.</div>
            <h2 className="headline reveal">Le média qui capture<br/>l&apos;énergie du <em>Bénin.</em></h2>
            <p className="body-text reveal">Bénin Bouge met en lumière les projets structurels, les événements culturels, économiques et sociaux, ainsi que les initiatives locales et les voix qui façonnent le Bénin d&apos;aujourd&apos;hui.</p>
            <a href="#" className="btn btn-outline-light reveal">Découvrir Bénin Bouge →</a>
          </div>
          <div className="bb-right">
            <div className="bb-stats-grid reveal">
              {[{v:262,s:'K+',l:'Abonnés total'},{v:165,s:'K+',l:'TikTok'},{v:41,s:'K+',l:'Facebook'},{v:39,s:'K+',l:'WhatsApp'},{v:13,s:'K+',l:'Instagram'},{v:100,s:'+',l:'Projets couverts'}].map(st => (
                <div key={st.l} className="bb-stat"><h4><CountUp target={st.v} suffix={st.s} /></h4><p>{st.l}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="portfolio-header">
          <div><div className="section-tag">Nos réalisations</div><h2 className="headline reveal">Des projets qui<br/>parlent <em>d&apos;eux-mêmes.</em></h2></div>
          <p className="body-text reveal">Découvrez quelques-unes de nos plus belles réalisations à travers le Bénin et au-delà.</p>
        </div>
        <div className="portfolio-categories reveal">
          {[['tout','Tout'],['site','Sites Web'],['evenement','Événements'],['goodies','Goodies & Plaquettes'],['studio','Studio']].map(([f, l]) => (
            <button key={f} className={portfolioFilter === f ? 'active' : ''} onClick={() => setPortfolioFilter(f)}>{l}</button>
          ))}
        </div>
        <div className="portfolio-grid">
          {portfolioItems.filter(p => portfolioFilter === 'tout' || p.cat === portfolioFilter).map((p, i) => (
            <div key={i} className={`portfolio-card ${p.wide ? 'wide' : ''} reveal`}><img src={p.img} alt={p.title} loading="lazy" /><div className="portfolio-card-overlay"><h4>{p.title}</h4><p>{p.desc}</p></div></div>
          ))}
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-header">
          <div className="section-tag" style={{justifyContent:'center'}}>Questions fréquentes</div>
          <h2 className="headline reveal">Tout ce que vous devez<br/>savoir <em>avant de commencer.</em></h2>
          <p className="body-text reveal">Les réponses aux questions que nos clients posent le plus souvent.</p>
        </div>
        <div className="faq-list">
          {faqItems.map((item, i) => (
            <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
              <button className="faq-question" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>{item.q}<span className="faq-icon">+</span></button>
              <div className="faq-answer" role="region"><p>{item.a}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2 className="headline reveal">Prêt à donner un nouveau souffle<br/>à votre <em>communication ?</em></h2>
        <p className="body-text reveal">Discutons de votre projet. Premier échange gratuit, sans engagement.</p>
        <div className="cta-buttons reveal">
          <a href="#contact" className="btn btn-white" onClick={(e) => handleNavClick(e, '#contact')}>Demander un devis →</a>
          <a href="https://wa.me/2290197677754" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Réserver un appel WhatsApp</a>
        </div>
      </section>

      <div className="newsletter">
        <div className="newsletter-inner">
          <h3 className="headline">Restez <em>Informé</em></h3>
          <p className="body-text">Recevez nos conseils communication, nos dernières réalisations et les tendances du secteur directement dans votre boîte mail.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input type="email" placeholder="Votre adresse email" required />
            <button type="submit" className="btn btn-primary">S&apos;inscrire</button>
          </form>
        </div>
      </div>

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
          <form className="contact-form" onSubmit={handleContactSubmit}>
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
              <div className="form-group"><label htmlFor="cf-service">Service souhaité</label><select id="cf-service" name="service" required><option value="">Sélectionnez un service</option>{services.map(s => <option key={s.num}>{s.title}</option>)}<option>Autre</option></select></div>
              <div className="form-group"><label htmlFor="cf-budget">Budget estimé</label><select id="cf-budget" name="budget"><option value="">Sélectionnez</option><option>{'< 500 000 CFA'}</option><option>500 000 – 1 500 000 CFA</option><option>1 500 000 – 5 000 000 CFA</option><option>{'> 5 000 000 CFA'}</option></select></div>
            </div>
            <div className="form-group"><label htmlFor="cf-message">Décrivez votre projet</label><textarea id="cf-message" name="message" placeholder="Parlez-nous de vos besoins, vos objectifs, votre calendrier..." required></textarea></div>
            <button type="submit" className="form-submit">Envoyer la demande →</button>
          </form>
          <div className="contact-map reveal">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.0!2d2.4075!3d6.3654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a9!2sJericho%2C+Cotonou!5e0!3m2!1sfr!2sbj!4v1700000000000" width="100%" height="300" style={{border:0,borderRadius:'8px',filter:'grayscale(30%) contrast(1.05)'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="PROCOM — Jéricho, Cotonou"></iframe>
          </div>
        </div>
      </section>

      <footer>
        <span className="footer-brand"><img src="/logo-procom.png" alt="PROCOM" /></span>
        <span className="footer-copy">© 2018–2026 PROCOM — Agence de Communication 360°. Tous droits réservés.</span>
        <SocialLinks className="footer-socials" />
      </footer>

      <a href="https://wa.me/2290197677754" target="_blank" rel="noopener noreferrer" className="whatsapp-sticky" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <button className={`back-to-top ${backToTopVisible ? 'visible' : ''}`} onClick={scrollToTop} aria-label="Retour en haut">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
      </button>
    </>
  );
}
