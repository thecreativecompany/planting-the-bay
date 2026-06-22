'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

export const primaryNav = [
  { label: 'Story', href: '/story' },
  { label: 'Vision', href: '/vision' },
  { label: 'Why the Bay', href: '/why-the-bay' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Give', href: '/give' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => pathname === href;

  return (
    <header className="ptb-header">
      <a href="/" className="ptb-logo" aria-label="Planting the Bay home">
        <strong>PLANTING</strong>
        <span>THE BAY</span>
      </a>

      <nav className="ptb-desktop-nav" aria-label="Primary navigation">
        {primaryNav.map((item) => (
          <a key={item.label} href={item.href} className={isActive(item.href) ? 'is-active' : undefined}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className={`ptb-menu ${menuOpen ? 'is-open' : ''}`}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`ptb-mobile-nav ${menuOpen ? 'is-open' : ''}`}>
        <a href="/" className={pathname === '/' ? 'is-active' : undefined} onClick={() => setMenuOpen(false)}>
          Home
        </a>
        {primaryNav.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={isActive(item.href) ? 'is-active' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <span className="mobile-nav-divider" />
        <a href="/team" onClick={() => setMenuOpen(false)}>Team</a>
        <a href="/updates" onClick={() => setMenuOpen(false)}>Updates</a>
        <a href="/prayer" onClick={() => setMenuOpen(false)}>Prayer</a>
        <a href="/partners" onClick={() => setMenuOpen(false)}>Partners</a>
        <a href="/faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </header>
  );
}
