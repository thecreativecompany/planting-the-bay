'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { PRIMARY_NAV_LINKS } from '../navigation';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle('ptb-menu-open', menuOpen);
    return () => document.body.classList.remove('ptb-menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 12);
    updateScrolledState();
    window.addEventListener('scroll', updateScrolledState, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolledState);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href) => pathname === href || (pathname === '/' && href === '/#home');
  const closeMenu = () => setMenuOpen(false);
  const track = (eventName) => {
    if (typeof window === 'undefined') return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName });
  };

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <header className={`ptb-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <a href="/#home" className="ptb-logo" aria-label="Planting the Bay home" onClick={closeMenu}>
          <i aria-hidden="true" />
          <strong>Planting</strong>
          <span>The Bay</span>
        </a>

        <nav className="ptb-desktop-nav" aria-label="Primary navigation">
          {PRIMARY_NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={[isActive(item.href) ? 'is-active' : '', item.label === 'Give' ? 'nav-give' : ''].filter(Boolean).join(' ') || undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`ptb-menu ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X aria-hidden="true" className="ptb-menu-close-icon" strokeWidth={2.4} />
          ) : (
            <span aria-hidden="true" className="ptb-menu-lines">
              <span className="ptb-menu-line" />
              <span className="ptb-menu-line" />
              <span className="ptb-menu-line" />
            </span>
          )}
        </button>

        <nav id="mobile-navigation" className={`ptb-mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen} inert={!menuOpen ? '' : undefined}>
          {PRIMARY_NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={[isActive(item.href) ? 'is-active' : '', item.label === 'Give' ? 'nav-give' : ''].filter(Boolean).join(' ') || undefined}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <div className="mobile-cta-bar" aria-label="Mobile quick actions">
        <a href="/give" onClick={() => track('mobile_give_click')}>Give</a>
        <a href="/get-involved" onClick={() => track('mobile_get_involved_click')}>Get Involved</a>
      </div>
    </>
  );
}
