type NavbarProps = {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  activeSection: string;
  toggleTheme: () => void;
  handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export default function Navbar({ scrolled, menuOpen, setMenuOpen, activeSection, toggleTheme, handleNavClick }: NavbarProps) {
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="nav-brand" onClick={(e) => handleNavClick(e, '#hero')}>
        <img src="/logo-procom.png" alt="PROCOM" />
      </a>
      <button
        className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span></span><span></span><span></span>
      </button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {[['#about', 'À Propos'], ['#services', 'Services'], ['#benin-bouge', 'Bénin Bouge'], ['#portfolio', 'Portfolio'], ['#contact', 'Contact']].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className={activeSection === href.slice(1) ? 'active' : ''}
            onClick={(e) => handleNavClick(e, href)}
          >
            {label}
          </a>
        ))}
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Basculer le thème">
          <svg className="theme-icon sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg className="theme-icon moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        </button>
        <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, '#contact')}>Demander un devis</a>
      </div>
    </nav>
  );
}
