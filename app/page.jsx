'use client';

import { useEffect, useState } from 'react';

const navItems = ['About', 'Location', 'Next Steps', 'Media', 'Give'];

const footerLinks = [
  ['About', 'Location', 'Next Steps'],
  ['Media', 'Ministries', 'Give'],
  ['Instagram', 'Facebook', 'Email'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll('.reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const parallaxItems = Array.from(document.querySelectorAll('[data-parallax]'));
    let ticking = false;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight || 1;

      parallaxItems.forEach((item) => {
        const speed = Number(item.getAttribute('data-parallax')) || 0.08;
        const rect = item.getBoundingClientRect();
        const distanceFromCenter = rect.top + rect.height / 2 - viewportHeight / 2;
        const y = distanceFromCenter * speed * -1;
        item.style.setProperty('--parallax-y', `${y.toFixed(2)}px`);
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateParallax);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateParallax);
    };
  }, []);

  return (
    <main className="sd-page bg-[#f6f4ef] text-black">
      <header className="sd-header">
        <a href="#home" className="sd-logo" aria-label="Planting the Bay home">
          <strong>PLANTING</strong>
          <span>THE BAY</span>
        </a>

        <nav className="sd-desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>
              {item}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="sd-menu"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`sd-mobile-nav ${menuOpen ? 'is-open' : ''}`}>
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

      <section id="home" className="hero-social" aria-label="Hero section">
        <div className="hero-mark hero-mark-left">LET&apos;S</div>
        <div className="hero-mark hero-mark-center">GET</div>
        <div className="hero-mark hero-mark-right">ROOTED</div>

        <div className="hero-inner reveal">
          <h1 className="hero-social-title" aria-label="God loves the Bay">
            <span>GOD LOVES</span>
            <span className="hero-title-line">
              <em>THE</em>
              <b>BAY</b>
            </span>
          </h1>

          <button
            type="button"
            className={`hero-video-card parallax-object ${videoPlaying ? 'is-playing' : ''}`}
            data-parallax="0.12"
            onClick={() => setVideoPlaying((playing) => !playing)}
            aria-label="Play launch message video"
          >
            <span className="video-topline">
              <span className="video-avatar">PTB</span>
              Now You Know | Planting the Bay
            </span>
            <span className="video-stage">
              <span className="video-person" />
              <span className="video-pulpit" />
              <span className="video-light video-light-one" />
              <span className="video-light video-light-two" />
            </span>
            <span className="video-control">{videoPlaying ? 'Ⅱ' : '▶'}</span>
            <span className="video-footer">
              <span>CC</span>
              <span>Watch message</span>
              <span>YouTube</span>
            </span>
          </button>

          <div className="hero-side-brand" aria-hidden="true">
            <span>PB</span>
            <small>PLANTING THE BAY</small>
            <i>©</i>
          </div>
        </div>
      </section>

      <section id="location" className="sunday-section" aria-label="Service times and location">
        <p className="micro micro-left">LET&apos;S</p>
        <p className="micro micro-center">GET</p>
        <p className="micro micro-right">ROOTED</p>

        <div className="sunday-word" aria-hidden="true">SUNDAY</div>

        <div className="sunday-content reveal">
          <h2>
            <span>BAY AREA</span>
            <em>SUNDAYS</em>
          </h2>
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="service-pill">
            <strong>9AM + 11:30AM</strong>
            <span>
              →
              <small>DIRECTIONS</small>
            </span>
          </a>
        </div>

        <div className="mini-photo mini-photo-one parallax-object" data-parallax="0.16" aria-hidden="true">
          <span />
        </div>
        <div className="mini-photo mini-photo-two parallax-object" data-parallax="0.1" aria-hidden="true">
          <span />
        </div>
        <div className="mini-photo mini-photo-three parallax-object" data-parallax="0.2" aria-hidden="true">
          <span />
        </div>
        <div className="blue-rule" aria-hidden="true" />
      </section>

      <section id="about" className="values-section" aria-label="Values section">
        <div className="values-copy reveal">
          <span className="cream-square" aria-hidden="true" />
          <h2>
            <span className="serif-word">HOUSE</span>
            <small>OF</small>
            <strong>PRAYER</strong>
            <span className="serif-word offset">HOUSE</span>
            <small>OF</small>
            <strong>PRESENCE</strong>
            <i className="blue-pill" aria-hidden="true" />
            <span className="dot-row" aria-hidden="true">
              <b />
              <b />
              <b />
            </span>
            <span className="serif-word lower">HOUSE</span>
            <small>FOR</small>
            <strong>PEOPLE</strong>
          </h2>
        </div>
      </section>

      <section id="next-steps" className="pastors-section" aria-label="Pastors introduction">
        <div className="pastor-label reveal">OUR <em>Pastors</em></div>
        <div className="pastors-card reveal">
          <div className="pastor-photo" aria-hidden="true">
            <span className="person person-one" />
            <span className="person person-two" />
          </div>
          <div className="pastor-copy">
            <h2>MEET OUR PASTORS</h2>
            <a href="#about">LEARN MORE</a>
          </div>
        </div>
      </section>

      <section id="media" className="home-campaign" aria-label="Campaign feature">
        <div className="stage-scene parallax-object" data-parallax="0.05" aria-hidden="true">
          <span className="beam beam-one" />
          <span className="beam beam-two" />
          <span className="beam beam-three" />
          <span className="crowd" />
        </div>
        <div className="campaign-copy reveal">
          <h2>ALMOST HOME</h2>
          <p>
            Partner with us to raise faith, hope, and community in the Bay. Every gift helps create a home for families, neighbors, and anyone looking for belonging.
          </p>
          <a href="#give">LEARN MORE</a>
        </div>
      </section>

      <section id="give" className="word-year-section" aria-label="Word for the year">
        <div className="word-year-frame reveal">
          <p>OUR WORD FOR THE YEAR</p>
          <div className="word-card-inner">
            <h2>ROOTED</h2>
            <p>
              “They will be like a tree planted by the water that sends out its roots by the stream.” Jeremiah 17:8
            </p>
            <span>PTB</span>
          </div>
        </div>
      </section>

      <footer className="sd-footer">
        <div className="footer-square" aria-hidden="true" />
        <div className="footer-grid">
          {footerLinks.map((group, index) => (
            <div key={index} className="footer-column">
              {group.map((link) => (
                <a key={link} href={link === 'Email' ? 'mailto:hello@plantingthebay.com' : '#home'}>
                  {link}
                </a>
              ))}
            </div>
          ))}
          <div className="footer-mini-logo" aria-hidden="true">
            <span>PB</span>
            <small>PLANTING THE BAY</small>
            <i>©</i>
          </div>
        </div>
        <div className="footer-bottom">
          <span>©2026</span>
          <small>ALL RIGHTS RESERVED.</small>
          <strong>PLANTING THE BAY</strong>
        </div>
      </footer>
    </main>
  );
}
