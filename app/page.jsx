'use client';

import { useEffect, useState } from 'react';

const navItems = ['About', 'Location', 'Next Steps', 'Media', 'Give'];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const parallaxItems = Array.from(document.querySelectorAll('[data-parallax]'));
    if (!parallaxItems.length) return undefined;

    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;

      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const speed = Number(item.getAttribute('data-speed') || 0.08);
        const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter;
        const y = Math.max(-90, Math.min(90, distanceFromCenter * speed * -1));
        item.style.setProperty('--parallax-y', `${y}px`);
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#home" className="brand-mark" aria-label="Planting the Bay home">
          <strong>Planting</strong>
          <span>The Bay</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-trigger"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(' ', '-')}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </header>

      <section id="home" className="hero-section">
        <div className="hero-inner">
          <h1 className="hero-type reveal">
            <span>God Loves</span>
            <span className="hero-bottom-line">
              <em>The Bay</em>
              <i aria-hidden="true" />
            </span>
          </h1>

          <div className="hero-video reveal" data-parallax data-speed="0.105">
            <div className="video-topline">
              <span className="video-avatar">PB</span>
              <span>Now You Know | Planting The Bay</span>
            </div>
            <button className="play-button" type="button" aria-label="Play video preview">
              <span />
            </button>
            <div className="video-bottomline">
              <span>CC</span>
              <span>Watch message</span>
              <span>YouTube</span>
            </div>
          </div>

          <div className="hero-side-logo reveal" aria-label="Planting the Bay monogram">
            <strong>PB</strong>
            <span>Planting the Bay</span>
            <small>©</small>
          </div>
        </div>

        <div className="micro-label-row hero-labels" aria-hidden="true">
          <span>Let&apos;s</span>
          <span>Get</span>
          <span>Rooted</span>
        </div>
      </section>

      <section id="location" className="service-section">
        <div className="micro-label-row service-labels" aria-hidden="true">
          <span>Let&apos;s</span>
          <span>Get</span>
          <span>Rooted</span>
        </div>

        <span className="faded-word" aria-hidden="true">Sunday</span>

        <div className="service-art service-art-left" data-parallax data-speed="0.14" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="service-art service-art-right" data-parallax data-speed="-0.11" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="service-art service-art-top" data-parallax data-speed="0.08" aria-hidden="true">
          <span />
          <span />
        </div>

        <div className="service-content reveal">
          <h2>
            <span>Bay Area</span>
            <span>Sundays</span>
          </h2>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="service-cta">
            <strong>9AM + 11:30AM</strong>
            <span>→</span>
          </a>
        </div>
      </section>

      <section id="about" className="values-section">
        <div className="values-stack reveal">
          <p>
            <span className="serif">House</span>
            <small>of</small>
            <strong>Prayer</strong>
          </p>
          <p>
            <span className="serif">House</span>
            <small>of</small>
            <strong>Presence</strong>
            <i aria-hidden="true" />
          </p>
          <p>
            <b aria-hidden="true" />
            <span className="serif">House</span>
            <small>for</small>
            <strong>People</strong>
          </p>
        </div>
      </section>

      <section id="next-steps" className="pastors-section">
        <div className="pastors-accent" aria-hidden="true" />
        <h2 className="section-kicker reveal">Our <em>Pastors</em></h2>

        <div className="pastors-card reveal">
          <div className="pastor-photo" data-parallax data-speed="0.055" aria-label="Pastors image placeholder">
            <div className="figure figure-one" />
            <div className="figure figure-two" />
          </div>
          <div className="pastor-copy">
            <h3>Meet<br />Our<br />Pastors</h3>
            <a href="#about">Learn More</a>
          </div>
        </div>
      </section>

      <section id="media" className="campaign-section">
        <div className="stage-lights" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="campaign-copy reveal" data-parallax data-speed="0.04">
          <h2>Almost<br />Home</h2>
          <p>
            Partner with us to raise faith, hope, and community in the Bay. Every gift helps create a home for families, neighbors, and anyone seeking belonging.
          </p>
          <a href="#give">Learn More</a>
        </div>
      </section>

      <section id="give" className="word-section">
        <div className="word-frame reveal">
          <p>Our word for the year</p>
          <div className="word-card">
            <h2>Rooted</h2>
            <blockquote>
              “They will be like a tree planted by the water that sends out its roots by the stream.” — Jeremiah 17:8
            </blockquote>
            <span>PTB</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-square" aria-hidden="true" />

        <div className="footer-middle">
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#location">Location</a>
            <a href="#next-steps">Next Steps</a>
          </div>
          <div className="footer-links">
            <a href="#media">Media</a>
            <a href="#about">Ministries</a>
            <a href="#give">Give</a>
          </div>
          <div className="footer-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="mailto:hello@plantingthebay.com">Email</a>
          </div>
          <div className="footer-logo">
            <strong>PB</strong>
            <span>Planting the Bay</span>
            <small>©</small>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <strong>©2026</strong>
            <span>All rights<br />reserved.</span>
          </div>
          <h2>Planting The Bay</h2>
        </div>
      </footer>
    </main>
  );
}
