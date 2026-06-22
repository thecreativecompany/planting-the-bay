'use client';

import { useEffect, useState } from 'react';
import SiteHeader from './components/SiteHeader';

const roadmap = ['Berkeley', 'San Francisco', 'Peninsula', 'San Jose', 'Tri-Valley', 'Beyond'];

const pathways = [
  {
    eyebrow: '01',
    title: 'Join the team',
    body: 'For staff couples, interns, and families considering relocating to help plant in the Bay.',
  },
  {
    eyebrow: '02',
    title: 'Serve locally',
    body: 'Help host pop-up services, welcome students, and support neighborhood ministry moments.',
  },
  {
    eyebrow: '03',
    title: 'Pray with us',
    body: 'Join the prayer pipeline and receive focused updates as the work grows across each region.',
  },
];

const givingTiers = [
  { amount: '$25/mo', label: 'helps build the prayer and supporter base' },
  { amount: '$250/mo', label: 'helps fund campus ministry support' },
  { amount: 'Major gifts', label: 'help accelerate staff, events, and expansion' },
];

export default function Home() {
  useEffect(() => {
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
    <main className="ptb-page">
      <SiteHeader />

      <a href="/give" className="sticky-give">
        Give
      </a>

      <section id="home" className="hero-section section-reveal light-wipe hero-wipe" aria-label="Hero section">
        <div className="hero-micro hero-micro-left">STORY</div>
        <div className="hero-micro hero-micro-center">VISION</div>
        <div className="hero-micro hero-micro-right">GIVE</div>

        <div className="hero-shell reveal">
          <p className="hero-kicker">Beginning September 1 • Berkeley first</p>
          <h1 className="hero-title" aria-label="Plant first, reach the Bay">
            <span>PLANT</span>
            <span>FIRST.</span>
            <span className="hero-title-row">
              <em>REACH</em>
            </span>
            <span className="hero-title-bay">THE BAY</span>
          </h1>

          <div className="vision-video parallax-object" data-parallax="0.12">
            <iframe
              src="https://www.youtube.com/embed/R3GfuzLMPkA?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&loop=1&playlist=R3GfuzLMPkA"
              title="Planting the Bay vision video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <div className="hero-copy-panel">
            <p>
              A church-planting and campus-ministry initiative across the San Francisco Bay Area — starting in Berkeley and expanding outward.
            </p>
            <div className="hero-actions">
              <a href="/give" className="btn btn-dark">Give</a>
              <a href="/get-involved" className="btn btn-light">Get Involved</a>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="roadmap-section section-reveal light-wipe" aria-label="Bay Area expansion roadmap">
        <p className="micro micro-left">BERKELEY</p>
        <p className="micro micro-center">TO</p>
        <p className="micro micro-right">BEYOND</p>
        <div className="roadmap-word" aria-hidden="true">BAY</div>

        <div className="roadmap-content reveal">
          <p className="section-eyebrow">At-a-glance vision</p>
          <h2>
            <span>BERKELEY</span>
            <em>FIRST</em>
          </h2>
          <p>
            Build campus ministry and a local church first, then multiply into the major regions of the Bay.
          </p>
        </div>

        <div className="roadmap-track reveal">
          {roadmap.map((place, index) => (
            <div key={place} className="roadmap-stop" style={{ '--delay': `${index * 90}ms` }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{place}</strong>
            </div>
          ))}
        </div>

        <div className="mini-card mini-card-one parallax-object" data-parallax="0.16" aria-hidden="true">
          <span />
        </div>
        <div className="mini-card mini-card-two parallax-object" data-parallax="0.1" aria-hidden="true">
          <span />
        </div>
        <div className="mini-card mini-card-three parallax-object" data-parallax="0.2" aria-hidden="true">
          <span />
        </div>
      </section>

      <section id="why-bay" className="case-section section-reveal dark-wipe" aria-label="Why the Bay section">
        <div className="case-inner reveal">
          <h2>
            <span className="serif-word">WHY</span>
            <small>THE</small>
            <strong>BAY</strong>
            <span className="serif-word offset">WHY</span>
            <small>NOW</small>
            <strong>MOVE</strong>
            <span className="dot-row" aria-hidden="true">
              <b />
              <b />
              <b />
            </span>
          </h2>
          <p>
            The Bay Area is a high-leverage opportunity for church planting, campus ministry, social outreach, and regional expansion.
          </p>
        </div>
      </section>

      <section className="momentum-section section-reveal light-wipe reverse-wipe" aria-label="Fundraising momentum">
        <div className="momentum-card reveal">
          <div>
            <p className="section-eyebrow">Year 1 Momentum</p>
            <h2>$1,000,000</h2>
            <p>Launch funding goal for staff, campus ministry, pop-up services, and early expansion infrastructure.</p>
          </div>
          <div className="meter-wrap" aria-label="Fundraising progress meter placeholder">
            <div className="meter-topline">
              <span>Progress meter</span>
              <strong>Live total ready</strong>
            </div>
            <div className="meter-bar">
              <span />
            </div>
            <div className="meter-labels">
              <span>$0</span>
              <span>$1M</span>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="story-section section-reveal blue-wipe" aria-label="Our story section">
        <div className="story-label reveal">OUR <em>Story</em></div>
        <div className="story-card reveal">
          <div className="story-photo parallax-object" data-parallax="0.08" aria-hidden="true">
            <span className="person person-one" />
            <span className="person person-two" />
          </div>
          <div className="story-copy">
            <p className="section-eyebrow">Lead Evangelist + Planting Coordinators</p>
            <h2>Stuart & Ashley Mains</h2>
            <p>
              The home for the emotional narrative: calling, partnership with SF Bay Fellowship, and the people behind the planting work.
            </p>
            <a href="/get-involved" className="btn btn-light">Meet the team</a>
          </div>
        </div>
      </section>

      <section id="get-involved" className="pathways-section section-reveal light-wipe" aria-label="Get involved pathways">
        <div className="section-heading reveal">
          <p className="section-eyebrow">Get Involved</p>
          <h2>Choose your path into the story.</h2>
        </div>
        <div className="pathway-grid">
          {pathways.map((pathway, index) => (
            <article key={pathway.title} className="pathway-card reveal" style={{ '--delay': `${index * 120}ms` }}>
              <span>{pathway.eyebrow}</span>
              <h3>{pathway.title}</h3>
              <p>{pathway.body}</p>
              <a href="mailto:hello@plantingthebay.com">Start here →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="flyover-section section-reveal dark-wipe reverse-wipe" aria-label="Bay Area flyover feature">
        <div className="flyover-scene parallax-object" data-parallax="0.05" aria-hidden="true">
          <span className="beam beam-one" />
          <span className="beam beam-two" />
          <span className="beam beam-three" />
          <span className="map-line" />
        </div>
        <div className="flyover-copy reveal">
          <p className="section-eyebrow">3D Bay flyover placeholder</p>
          <h2>FROM ONE SEED TO MANY REGIONS</h2>
          <p>Use the existing Bay Area flyover here as the visual centerpiece for the expansion roadmap.</p>
        </div>
      </section>

      <section id="give" className="give-section section-reveal dark-wipe" aria-label="Give section">
        <div className="give-frame reveal">
          <p className="section-eyebrow">Give / recurring first</p>
          <div className="give-card-inner">
            <div>
              <h2>BAY BUILDERS</h2>
              <p>
                A monthly partner program for people helping fund the first three years of church planting and campus ministry across the Bay.
              </p>
            </div>
            <div className="tier-grid">
              {givingTiers.map((tier, index) => (
                <div key={tier.amount} className="tier-card" style={{ '--delay': `${index * 90}ms` }}>
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

      <section className="email-section section-reveal dark-wipe reverse-wipe" aria-label="Email capture">
        <div className="email-inner reveal">
          <h2>Follow the planting story.</h2>
          <p>Get updates, prayer requests, and milestones as Berkeley launches and the Bay Area roadmap unfolds.</p>
          <form className="email-form">
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <footer className="ptb-footer section-reveal footer-wipe">
        <div className="footer-square" aria-hidden="true" />
        <div className="footer-grid">
          <div className="footer-column">
            <a href="/story">Story</a>
            <a href="/vision">Vision</a>
            <a href="/why-the-bay">Why the Bay</a>
          </div>
          <div className="footer-column">
            <a href="/get-involved">Get Involved</a>
            <a href="/give">Give</a>
            <a href="/team">Team</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-column">
            <a href="/partners">Partners</a>
            <a href="/updates">Updates</a>
            <a href="/prayer">Prayer</a>
          </div>
          <div className="footer-mini-logo" aria-hidden="true">
            <span>PB</span>
            <small>PLANTING THE BAY</small>
            <i>©</i>
          </div>
        </div>
        <div className="footer-bottom">
          <span>©2026</span>
          <small>501(c)(3) giving info placeholder.</small>
          <strong>PLANTING THE BAY</strong>
        </div>
      </footer>
    </main>
  );
}
