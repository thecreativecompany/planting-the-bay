'use client';

import { useEffect, useState } from 'react';

const navItems = ['Home', 'About', 'Location', 'Next Steps', 'Media', 'Ministries', 'Give'];

const heroSlides = [
  {
    eyebrow: 'New church plant for the Bay',
    title: 'Planting the Bay',
    kicker: 'Rooted here. Growing together.',
    className: 'slide-one',
  },
  {
    eyebrow: 'Sundays coming soon',
    title: 'A place to belong',
    kicker: 'Faith, family, and community in the heart of the Bay.',
    className: 'slide-two',
  },
  {
    eyebrow: 'Join the story',
    title: 'Hope for every neighborhood',
    kicker: 'Gather, serve, and build with us from day one.',
    className: 'slide-three',
  },
];

const values = [
  {
    label: 'House',
    preposition: 'of',
    title: 'Prayer',
    text: 'We begin with dependence, worship, and a deep belief that God is moving in the Bay.',
  },
  {
    label: 'House',
    preposition: 'of',
    title: 'Presence',
    text: 'We create spaces where people can encounter peace, hope, and meaningful connection.',
  },
  {
    label: 'Home',
    preposition: 'for',
    title: 'People',
    text: 'We are building a welcoming community for families, neighbors, seekers, and friends.',
  },
];

const nextSteps = [
  'Visit a gathering',
  'Meet the launch team',
  'Join a group',
  'Serve the city',
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

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
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f6f0e5] text-[#17130f]">
      <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-white/20 bg-[#17130f]/70 px-5 py-3 text-white shadow-2xl shadow-black/20 backdrop-blur-xl">
          <a href="#home" className="group flex items-center gap-3" aria-label="Planting the Bay home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#d7ef67] text-sm font-black text-[#17130f] transition-transform duration-300 group-hover:rotate-12">
              PB
            </span>
            <span className="hidden text-xs font-bold uppercase tracking-[0.28em] sm:block">
              Planting the Bay
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="nav-link">
                {item}
              </a>
            ))}
          </div>

          <a href="#give" className="hidden rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#17130f] transition hover:-translate-y-0.5 hover:bg-[#d7ef67] md:inline-flex">
            Partner
          </a>

          <button
            type="button"
            className="menu-button lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </nav>

        <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </div>
      </header>

      <section id="home" className="relative min-h-screen bg-[#17130f] text-white">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`hero-media ${slide.className} ${activeSlide === index ? 'is-active' : ''}`}
              aria-hidden={activeSlide !== index}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70" />
          <div className="grain" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-10 pt-32 sm:px-8 lg:px-12 lg:pb-12">
          <div className="mb-auto flex flex-wrap items-center justify-between gap-4 pt-24">
            <a href="#location" className="announcement-card reveal">
              <span>Launch gatherings</span>
              <strong>Coming Soon</strong>
            </a>
            <div className="hidden max-w-xs text-right text-sm uppercase leading-relaxed tracking-[0.22em] text-white/70 md:block reveal">
              A church plant for the Bay Area built around faith, people, and the city.
            </div>
          </div>

          <div className="reveal">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#d7ef67]">
              {heroSlides[activeSlide].eyebrow}
            </p>
            <h1 className="hero-title">
              <span>Planting</span>
              <span>The Bay</span>
            </h1>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-xl font-medium leading-relaxed text-white/82 sm:text-2xl">
                {heroSlides[activeSlide].kicker}
              </p>
              <div className="flex gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={`slide-dot ${activeSlide === index ? 'is-active' : ''}`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee-section" aria-label="Planting the Bay message">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index}>Gather • Grow • Serve • Plant the Bay •</span>
          ))}
        </div>
      </section>

      <section id="location" className="section-shell bg-[#f6f0e5]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="reveal">
            <p className="section-eyebrow">Gather with us</p>
            <h2 className="section-heading">Sundays in the Bay</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5c5147]">
              Use this section for service times, launch dates, directions, and the primary invitation. The layout follows the bold split-callout feel of the reference site while keeping the content editable for Planting the Bay.
            </p>
          </div>

          <div className="location-card reveal">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#73665b]">Launch schedule</p>
              <h3>9AM + 11:30AM</h3>
            </div>
            <div className="h-px bg-[#17130f]/15" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#73665b]">Location</p>
              <h3>Bay Area</h3>
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="primary-button">
              Directions
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="relative bg-[#17130f] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="absolute inset-0 grid-backdrop" />
        <div className="relative mx-auto max-w-[1440px]">
          <div className="reveal mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-eyebrow text-[#d7ef67]">Who we are</p>
              <h2 className="section-heading text-white">A house with a heart for the Bay.</h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-white/68">
              Oversized typography, staggered reveals, and image-style panels help this section feel energetic without needing final photography yet.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {values.map((value, index) => (
              <article key={value.title} className="value-card reveal" style={{ transitionDelay: `${index * 90}ms` }}>
                <span>{value.label}</span>
                <small>{value.preposition}</small>
                <strong>{value.title}</strong>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="next-steps" className="section-shell bg-[#ebe0cf]">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="media-stack reveal">
            <div className="media-photo media-photo-large" />
            <div className="media-photo media-photo-small" />
            <div className="floating-note">
              <span>New here?</span>
              <strong>Start here</strong>
            </div>
          </div>

          <div className="reveal">
            <p className="section-eyebrow">Next steps</p>
            <h2 className="section-heading">Find your place in the story.</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#5c5147]">
              Create a clear path for visitors after the hero: attend, connect, serve, and join the launch team.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {nextSteps.map((step, index) => (
                <a href="#" key={step} className="step-link">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {step}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ministries" className="section-shell bg-[#f6f0e5]">
        <div className="reveal mb-10 text-center">
          <p className="section-eyebrow">Ministries</p>
          <h2 className="section-heading mx-auto max-w-5xl">Built for kids, students, families, and neighbors.</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {['Kids', 'Groups', 'Outreach'].map((ministry, index) => (
            <a href="#" key={ministry} className="ministry-card reveal" style={{ transitionDelay: `${index * 80}ms` }}>
              <span>0{index + 1}</span>
              <strong>{ministry}</strong>
              <p>Replace this placeholder with a short description for the ministry page.</p>
            </a>
          ))}
        </div>
      </section>

      <section id="media" className="split-feature bg-[#17130f] text-white">
        <div className="feature-image reveal" />
        <div className="feature-copy reveal">
          <p className="section-eyebrow text-[#d7ef67]">Media</p>
          <h2 className="section-heading text-white">Stories, messages, and updates from the launch.</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/68">
            Use this area for livestreams, recent messages, sermon series, or announcement videos. The hover CTA is ready for a media archive link.
          </p>
          <a href="#" className="secondary-button mt-8">Watch latest</a>
        </div>
      </section>

      <section id="give" className="section-shell bg-[#d7ef67]">
        <div className="campaign-card reveal">
          <div>
            <p className="section-eyebrow">Partner with us</p>
            <h2 className="campaign-title">Plant the future.</h2>
          </div>
          <p>
            Invite people to give, volunteer, or support the launch. This mirrors the strong campaign-style CTA from the reference, but uses original Planting the Bay content.
          </p>
          <a href="#" className="dark-button">Give / Partner</a>
        </div>
      </section>

      <section className="section-shell bg-[#f6f0e5]">
        <div className="word-card reveal">
          <p className="section-eyebrow">Our word for the year</p>
          <h2>Rooted</h2>
          <p>
            A simple editorial block for the annual theme, vision statement, or launch-year focus.
          </p>
        </div>
      </section>

      <footer className="bg-[#17130f] px-5 py-12 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-[1fr_1fr_1fr]">
          <div>
            <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-full bg-[#d7ef67] font-black text-[#17130f]">PB</div>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Planting the Bay is a starter homepage inspired by the bold section flow, motion, and interactions of Social Dallas, rebuilt with original placeholder content.
            </p>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#location">Location</a>
            <a href="#next-steps">Next Steps</a>
            <a href="#ministries">Ministries</a>
          </div>
          <div className="footer-links">
            <a href="#media">Media</a>
            <a href="#give">Give</a>
            <a href="mailto:hello@plantingthebay.com">Email</a>
            <a href="#home">Back to top</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
