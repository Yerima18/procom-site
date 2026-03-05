'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PartnersBar from '@/components/PartnersBar';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import BeninBouge from '@/components/BeninBouge';
import Portfolio from '@/components/Portfolio';
import FAQ from '@/components/FAQ';
import CtaSection from '@/components/CtaSection';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [preloaderHidden, setPreloaderHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
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

  return (
    <>
      <div className={`preloader ${preloaderHidden ? 'hidden' : ''}`}>
        <div className="preloader-text"><img src="/logo-procom.png" alt="PROCOM" /></div>
        <div className="preloader-line"></div>
      </div>

      <div className="cursor-dot" ref={cursorRef}></div>
      <a href="#about" className="skip-link" onClick={(e) => handleNavClick(e, '#about')}>Aller au contenu principal</a>

      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        toggleTheme={toggleTheme}
        handleNavClick={handleNavClick}
      />

      <Hero handleNavClick={handleNavClick} />
      <PartnersBar />
      <About />
      <Services />
      <Process />
      <BeninBouge />
      <Portfolio />
      <FAQ />
      <CtaSection handleNavClick={handleNavClick} />
      <Newsletter />
      <Contact />
      <Footer />

      <a href="https://wa.me/2290197677754" target="_blank" rel="noopener noreferrer" className="whatsapp-sticky" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <button className={`back-to-top ${backToTopVisible ? 'visible' : ''}`} onClick={scrollToTop} aria-label="Retour en haut">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
      </button>
    </>
  );
}
