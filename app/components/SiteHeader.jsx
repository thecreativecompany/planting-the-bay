'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const primaryNav = [
  { label: 'Home', href: '/#home' },
  { label: 'Our Story', href: '/#story' },
  { label: 'Our Vision', href: '/#vision' },
  { label: 'Why the Bay', href: '/#why-bay' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Give', href: '/give' },
];

const secondaryNav = [
  { label: 'Team', href: '/team' },
  { label: 'Updates', href: '/updates' },
  { label: 'Prayer', href: '/prayer' },
  { label: 'Partners', href: '/partners' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle('ptb-menu-open', menuOpen);
    return () => document.body.classList.remove('ptb-menu-open');
  }, [menuOpen]);

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
      <header className="ptb-header">
        <a href="/#home" className="ptb-logo" aria-label="Planting the Bay home" onClick={closeMenu}>
          <i aria-hidden="true" />
          <strong>Planting</strong>
          <span>The Bay</span>
        </a>

        <nav className="ptb-desktop-nav" aria-label="Primary navigation">
          {primaryNav.map((item) => (
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
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav id="mobile-navigation" className={`ptb-mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen} inert={!menuOpen ? '' : undefined}>
          {primaryNav.map((item) => (
            <a key={item.label} href={item.href} className={isActive(item.href) ? 'is-active' : undefined} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <span className="mobile-nav-divider" aria-hidden="true" />
          {secondaryNav.map((item) => (
            <a key={item.label} href={item.href} className={pathname === item.href ? 'is-active' : undefined} onClick={closeMenu}>
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
