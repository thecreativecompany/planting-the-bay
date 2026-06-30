'use client';

import { useEffect, useState } from 'react';
import SiteHeader from './components/SiteHeader';

const roadmap = ['Berkeley', 'San Francisco', 'Peninsula', 'San Jose', 'Tri-Valley', 'Beyond'];

const stats = [
  { value: 'Sept 1', label: 'Berkeley launch window' },
  { value: '$1M', label: 'Year-one funding goal' },
  { value: '6', label: 'Bay regions in the roadmap' },
];

const pathways = [
  {
    eyebrow: '01',
    title: 'Join the team',
    body: 'For staff couples, interns, and families considering relocating to help plant in the Bay.',
    href: '/team',
  },
  {
    eyebrow: '02',
    title: 'Serve locally',
    body: 'Help host pop-up services, welcome students, and support neighborhood ministry moments.',
    href: '/get-involved',
  },
  {
    eyebrow: '03',
    title: 'Pray with us',
    body: 'Join the prayer pipeline and receive focused updates as the work grows across each region.',
    href: '/prayer',
  },
];

const givingTiers = [
  { amount: '$25/mo', label: 'builds the prayer and supporter base' },
  { amount: '$250/mo', label: 'supports campus ministry and pop-up gatherings' },
  { amount: 'Major gifts', label: 'accelerate staff, events, and regional expansion' },
];

const launchSignals = [
  {
    id: 'seekers',
    label: 'Seekers',
    metric: 'Digital → table',
    title: 'Turn online attention into real conversations.',
    body: 'Make every reel, update, and invite point toward a next step: prayer, RSVP, coffee, or giving.',
  },
  {
    id: 'gatherings',
    label: 'Gatherings',
    metric: 'Pop-up rhythm',
    title: 'Design small rooms that can become a church.',
    body: 'Host relational services and campus moments that feel personal before they become permanent.',
  },
  {
    id: 'leaders',
    label: 'Leaders',
    metric: 'Staff pipeline',
    title: 'Recruit people who can carry the Bay-wide vision.',
    body: 'Clarify roles for staff couples, interns, hosts, donors, and prayer partners from day one.',
  },
];

const baySignals = ['Prayer pipeline', 'Campus contacts', 'Pop-up RSVPs', 'Monthly partners'];

export default function Home() {
  const [activeSignal, setActiveSignal] = useState(launchSignals[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal, .section-reveal').forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

    const revealItems = Array.from(document.querySelectorAll('.reveal, .section-reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="ptb-page">
      <SiteHeader />

      <a href="/give" className="sticky-give">
        Give
      </a>

      <section id="home" className="hero-section section-reveal" aria-label="Planting the Bay hero">
        <div className="hero-shell reveal">
          <div className="hero-copy">
            <p className="hero-kicker">Beginning September 1 • Berkeley first</p>
            <h1 className="hero-title" aria-label="Plant first. Reach THE BAY.">
              {[
                ['Plant'],
                ['first.'],
                ['Reach'],
                ['THE', 'BAY.'],
              ].map((line) => (
                <span className="hero-title-line" key={line.join(' ')}>
                  {line.map((word) => (
                    <span className="split-mask" key={word}><span className="split-word">{word}</span></span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="hero-lede">
              A church-planting and campus-ministry initiative beginning in Berkeley and multiplying across the San Francisco Bay Area.
            </p>
            <div className="hero-actions">
              <a href="/give" className="btn btn-dark">Give</a>
              <a href="/get-involved" className="btn btn-light">Get Involved</a>
            </div>
          </div>

          <div className="hero-media-wrap">
            <div className="bay-layer is-back" aria-hidden="true" />
            <div className="bay-layer is-mid" aria-hidden="true" />
            <div className="bay-layer is-front" aria-hidden="true" />
            <div className="hero-media" data-gsap="video-parallax" aria-label="Planting the Bay vision video">
              <iframe
                src="https://www.youtube.com/embed/R_FuIcXQSow?playsinline=1&rel=0&modestbranding=1"
                title="Planting the Bay vision video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="hero-orbit-card" data-gsap="lift">
              <span>3-year arc</span>
              <strong>$5M+</strong>
              <small>fundraising vision for a Bay-wide movement</small>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="roadmap-section section-reveal" aria-label="Bay Area expansion roadmap">
        <div className="roadmap-content reveal">
          <p className="section-eyebrow">At-a-glance vision</p>
          <h2>Berkeley first, then the Bay.</h2>
          <p>
            Build campus ministry and a local church first, then multiply into the major regions of the Bay with clear next steps for donors, prayer partners, and team members.
          </p>
        </div>

        <div className="roadmap-track reveal" role="list">
          <div className="roadmap-line" aria-hidden="true"><span /></div>
          {roadmap.map((place, index) => (
            <div key={place} className="roadmap-stop" role="listitem" style={{ '--delay': `${index * 70}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{place}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="why-bay" className="case-section section-reveal" aria-label="Why the Bay section">
        <div className="case-inner reveal">
          <p className="section-eyebrow">Why the Bay</p>
          <h2>The need, the data, and the moment.</h2>
          <p>
            The Bay Area is a high-leverage opportunity for church planting, campus ministry, social outreach, and regional expansion — beginning with Berkeley and growing outward.
          </p>
        </div>
        <div className="stat-grid reveal" data-gsap="stagger-grid" role="list">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label} role="listitem">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="social-funnel-section section-reveal" aria-label="Digital to in-person pathway">
        <div className="section-heading reveal">
          <p className="section-eyebrow">Three movement engines</p>
          <h2>From a reel to a room to a region.</h2>
        </div>
        <div className="funnel-grid" data-gsap="stagger-grid">
          {[
            ['Social outreach', 'Use existing digital reach to find seekers and supporters across the Bay.'],
            ['Pop-up services', 'Create RSVP-ready gatherings in campuses, homes, and neighborhood venues.'],
            ['Campus ministry', 'Build first in Berkeley, then multiply student leadership across major campuses.'],
          ].map(([title, body], index) => (
            <article
              className="funnel-card"
              data-gsap="lift"
              data-parallax-depth={[-7, -12, -8][index]}
              key={title}
              style={{ '--delay': `${index * 90}ms` }}
            >
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>


      <section className="signal-section section-reveal" aria-label="Interactive Bay launch command center">
        <div className="signal-shell reveal">
          <div className="signal-copy">
            <p className="section-eyebrow">Launch command center</p>
            <h2>Make the movement feel alive.</h2>
            <p>
              A modern supporter page should not just explain the plan — it should let people feel the rhythm of invites, rooms, prayer, and generosity coming together across the Bay.
            </p>
            <div className="signal-pills" aria-label="Movement indicators">
              {baySignals.map((signal) => (
                <span key={signal}>{signal}</span>
              ))}
            </div>
          </div>

          <div className="signal-console" data-gsap="lift">
            <div className="signal-tabs" role="tablist" aria-label="Launch focus areas">
              {launchSignals.map((signal) => (
                <button
                  key={signal.id}
                  type="button"
                  role="tab"
                  aria-selected={activeSignal.id === signal.id}
                  className={activeSignal.id === signal.id ? 'is-active' : undefined}
                  onClick={() => setActiveSignal(signal)}
                >
                  {signal.label}
                </button>
              ))}
            </div>
            <div className="signal-panel" role="tabpanel" aria-live="polite">
              <span>{activeSignal.metric}</span>
              <h3>{activeSignal.title}</h3>
              <p>{activeSignal.body}</p>
              <a href="/get-involved">Explore next steps</a>
            </div>
            <div className="signal-map" aria-hidden="true">
              {roadmap.slice(0, 5).map((place, index) => (
                <span key={place} style={{ '--x': `${12 + index * 18}%`, '--y': `${68 - (index % 3) * 22}%`, '--delay': `${index * 110}ms` }}>
                  {place}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="momentum-section section-reveal" aria-label="Fundraising momentum">
        <div className="momentum-card reveal">
          <div>
            <p className="section-eyebrow">Year 1 Momentum</p>
            <h2>$1,000,000</h2>
            <p>Launch funding goal for staff, campus ministry, pop-up services, and early expansion infrastructure.</p>
          </div>
          <div className="meter-wrap" data-gsap="lift" aria-label="Fundraising progress target">
            <div className="meter-topline">
              <span>Funding target</span>
              <strong>Year 1</strong>
            </div>
            <div className="meter-bar" aria-hidden="true">
              <span />
            </div>
            <div className="meter-labels">
              <span>$0</span>
              <span>$1M</span>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="story-section section-reveal" aria-label="Our story section">
        <div className="story-card reveal">
          <figure className="story-photo" data-gsap="image-wipe">
            <img src="/roadmap-photo-1.png" alt="A ministry conversation representing Planting the Bay leadership and relational outreach" />
          </figure>
          <div className="story-copy">
            <p className="section-eyebrow">Lead Evangelist + Planting Coordinators</p>
            <h2>Stuart & Ashley Mains</h2>
            <p>
              A personal story of calling, partnership with SF Bay Fellowship, and a Berkeley-first strategy for a Bay-wide movement.
            </p>
            <a href="/team" className="btn btn-light">Meet the team</a>
          </div>
        </div>
      </section>

      <section id="get-involved" className="pathways-section section-reveal" aria-label="Get involved pathways">
        <div className="section-heading reveal">
          <p className="section-eyebrow">Get Involved</p>
          <h2>Choose your path into the story.</h2>
        </div>
        <div className="pathway-grid" data-gsap="stagger-grid">
          {pathways.map((pathway, index) => (
            <article key={pathway.title} className="pathway-card reveal" data-gsap="lift" style={{ '--delay': `${index * 90}ms` }}>
              <span>{pathway.eyebrow}</span>
              <h3>{pathway.title}</h3>
              <p>{pathway.body}</p>
              <a href={pathway.href}>Start here →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="give" className="give-section section-reveal" aria-label="Give section">
        <div className="give-frame reveal">
          <p className="section-eyebrow">Give / recurring first</p>
          <div className="give-card-inner">
            <div>
              <h2>Bay Builders</h2>
              <p>
                A monthly partner program for people helping fund the first three years of church planting and campus ministry across the Bay.
              </p>
            </div>
            <div className="tier-grid" data-gsap="stagger-grid">
              {givingTiers.map((tier) => (
                <div key={tier.amount} className="tier-card" data-gsap="lift">
                  <strong>{tier.amount}</strong>
                  <span>{tier.label}</span>
                </div>
              ))}
            </div>
            <div className="give-actions">
              <a href="mailto:giving@plantingthebay.com" className="btn btn-dark">Start giving</a>
              <a href="mailto:giving@plantingthebay.com" className="btn btn-light">Major gifts / DAF</a>
            </div>
          </div>
        </div>
      </section>

      <section className="email-section section-reveal" aria-label="Email updates">
        <div className="email-inner reveal">
          <p className="section-eyebrow">Updates</p>
          <h2>Follow the planting story.</h2>
          <p>Get prayer requests and milestones as Berkeley launches and the Bay Area roadmap unfolds.</p>
          <a className="btn btn-light" href="mailto:hello@plantingthebay.com?subject=Planting%20the%20Bay%20updates">Request updates</a>
        </div>
      </section>

      <footer className="ptb-footer section-reveal" data-gsap="footer-rise">
        <div className="footer-grid">
          <div className="footer-brand">
            <strong>Planting the Bay</strong>
            <span>Berkeley first. Bay-wide next.</span>
          </div>
          <div className="footer-column">
            <a href="/story">Story</a>
            <a href="/vision">Vision</a>
            <a href="/why-the-bay">Why the Bay</a>
          </div>
          <div className="footer-column">
            <a href="/get-involved">Get Involved</a>
            <a href="/give">Give</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>©2026 Planting the Bay</span>
          <small>Giving information available on request.</small>
        </div>
      </footer>
    </main>
  );
}
