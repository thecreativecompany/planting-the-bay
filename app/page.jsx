'use client';

import { useEffect, useState } from 'react';
import SiteHeader from './components/SiteHeader';
import { Timeline } from '@/components/ui/timeline';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { Church, GraduationCap, HandHeart, MapPinned, Megaphone, UsersRound } from 'lucide-react';
import { EmailSignupForm, GetInvolvedForm } from './components/FormspreeForms';

const roadmap = ['Berkeley', 'San Francisco', 'Peninsula', 'San Jose', 'Tri-Valley', 'Beyond'];

const visionTimeline = [
  {
    title: '01',
    content: (
      <div className="timeline-card">
        <p className="timeline-kicker">Berkeley first</p>
        <h3>Launch campus ministry and a local church together.</h3>
        <p>
          Begin with Berkeley in partnership with SF Bay Fellowship, forming the first local rhythm of prayer, outreach, and relational gatherings.
        </p>
        <div className="timeline-image-grid">
          <img src="/roadmap-photo-1.png" alt="Interview conversation for the Berkeley launch" />
          <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80" alt="People gathered in conversation" />
        </div>
      </div>
    ),
  },
  {
    title: '02',
    content: (
      <div className="timeline-card">
        <p className="timeline-kicker">Pop-up services</p>
        <h3>Create regional gathering points across the Bay.</h3>
        <p>
          Use pop-up services, dinners, and RSVP moments to help seekers, students, families, and supporters find a clear next step.
        </p>
        <div className="timeline-image-grid">
          <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80" alt="Team conversation around a table" />
          <img src="https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=900&q=80" alt="Community event gathering" />
        </div>
      </div>
    ),
  },
  {
    title: '03',
    content: (
      <div className="timeline-card">
        <p className="timeline-kicker">Bay-wide expansion</p>
        <h3>Multiply from Berkeley toward every major region.</h3>
        <p>
          Expand from Berkeley to San Francisco, the Peninsula, San Jose, the Tri-Valley, and beyond through campus contacts, monthly partners, and new leaders.
        </p>
        <div className="timeline-region-list">
          {['Berkeley', 'San Francisco', 'Peninsula', 'San Jose', 'Tri-Valley', 'Beyond'].map((region) => (
            <span key={region}>{region}</span>
          ))}
        </div>
      </div>
    ),
  },
];


const whyBayFeatures = [
  {
    title: 'High-leverage region',
    icon: MapPinned,
    description: 'The Bay connects campuses, neighborhoods, families, founders, and seekers across one influential region.',
  },
  {
    title: 'Campus ministry',
    icon: GraduationCap,
    description: 'Berkeley creates the first anchor for student outreach before expanding toward other major Bay Area campuses.',
  },
  {
    title: 'Pop-up services',
    icon: Church,
    description: 'Regional gatherings give people an easy first step before permanent church plant rhythms are formed.',
  },
  {
    title: 'Digital outreach',
    icon: Megaphone,
    description: 'Social reach can move from content to conversations, RSVPs, prayer, and real local involvement.',
  },
  {
    title: 'Relocation pathway',
    icon: UsersRound,
    description: 'The site must help staff couples, interns, families, and volunteers quickly understand where they fit.',
  },
  {
    title: 'Donor confidence',
    icon: HandHeart,
    description: 'Clear goals, transparent funding, and measurable progress help supporters give with trust.',
  },
];


const whyBayProofPoints = [
  {
    label: 'Survey data slot',
    value: 'Highest-leverage case',
    body: 'Reserved for the final survey finding that identifies the Bay Area as a top planting opportunity in North America.',
  },
  {
    label: 'Social reach',
    value: '~59K',
    body: 'Supporter and seeker traffic can move from existing social reach into prayer, RSVP, giving, and local conversations.',
  },
  {
    label: 'Launch anchor',
    value: 'Berkeley',
    body: 'The first planting focus connects campus ministry and a local church before expansion across the Bay.',
  },
  {
    label: 'Regional roadmap',
    value: '6 regions',
    body: 'Berkeley, San Francisco, the Peninsula, San Jose, the Tri-Valley, and beyond are built into the expansion story.',
  },
];

const budgetUses = [
  {
    title: 'Planting staff',
    body: 'Supports Stuart and Ashley plus the first two staff-couple roles focused on campus ministry and church planting.',
    tag: 'People',
  },
  {
    title: 'Campus ministry',
    body: 'Funds Berkeley-first student outreach, follow-up, discipleship rhythms, and future campus expansion.',
    tag: 'Students',
  },
  {
    title: 'Pop-up services',
    body: 'Covers venue, hospitality, worship, kids, production, and RSVP-ready gatherings across Bay regions.',
    tag: 'Gatherings',
  },
  {
    title: 'Expansion infrastructure',
    body: 'Supports communications, systems, travel, donor updates, and the 3D Bay Area vision storytelling asset.',
    tag: 'Systems',
  },
];

const upcomingGatherings = [
  {
    region: 'Berkeley',
    date: 'September launch',
    detail: 'First pop-up gathering and campus ministry on-ramp.',
  },
  {
    region: 'San Francisco',
    date: 'Coming soon',
    detail: 'Regional interest gathering for supporters, seekers, and host homes.',
  },
  {
    region: 'Peninsula',
    date: 'Coming soon',
    detail: 'Early prayer and RSVP pathway for the next expansion corridor.',
  },
];

const partnerItems = [
  {
    name: 'SF Bay Fellowship',
    detail: 'Berkeley launch partner and local support structure.',
  },
  {
    name: 'ICOC network',
    detail: 'Existing church relationships, donor credibility, and shared mission alignment.',
  },
  {
    name: 'Partner churches',
    detail: 'A place for supporting churches, logos, and endorsement quotes.',
  },
];

const fieldNotes = [
  {
    title: 'Berkeley launch prep',
    body: 'Monthly progress note for launch milestones, staff recruitment, and first gatherings.',
  },
  {
    title: 'Prayer needs',
    body: 'Focused prayer requests for students, seekers, staff couples, and open doors across the Bay.',
  },
  {
    title: 'Supporter update',
    body: 'A donor retention touchpoint showing progress toward the Year 1 goal and what gifts are making possible.',
  },
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
    <main id="main-content" className="ptb-page">
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
            <dl className="hero-proof-strip" aria-label="Planting the Bay launch proof points">
              <div><dt>Launch anchor</dt><dd>Berkeley</dd></div>
              <div><dt>Roadmap</dt><dd>6 regions</dd></div>
              <div><dt>Vision arc</dt><dd>$5M+</dd></div>
            </dl>
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

      <section id="vision" className="roadmap-section timeline-roadmap-section section-reveal" aria-label="Bay Area expansion roadmap">
        <Timeline
          data={visionTimeline}
          eyebrow="Bay-wide roadmap"
          title="A three-step launch arc."
          description="Start with Berkeley, build repeatable pop-up and campus rhythms, then multiply through every major Bay Area corridor."
        />
      </section>

      <section id="why-bay" className="case-section why-feature-section section-reveal" aria-label="Why the Bay section">
        <div className="case-inner reveal">
          <p className="section-eyebrow">Why the Bay</p>
          <h2>The need, the data, and the moment.</h2>
          <p>
            The Bay Area is a high-leverage opportunity for church planting, campus ministry, social outreach, and regional expansion — beginning with Berkeley and growing outward.
          </p>
        </div>

        <div className="why-feature-grid reveal" data-gsap="stagger-grid" role="list">
          {whyBayFeatures.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} role="listitem" className="why-feature-card" />
          ))}
        </div>

        <div className="proof-grid reveal" aria-label="Why the Bay proof points">
          {whyBayProofPoints.map((point) => (
            <article className="proof-card" key={point.label}>
              <span>{point.label}</span>
              <strong>{point.value}</strong>
              <p>{point.body}</p>
            </article>
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

      <section className="budget-section section-reveal" aria-label="Where your gift goes">
        <div className="section-heading reveal">
          <p className="section-eyebrow">Where your gift goes</p>
          <h2>Transparent funding for the first year.</h2>
        </div>
        <div className="budget-grid reveal" data-gsap="stagger-grid">
          {budgetUses.map((item) => (
            <article className="budget-card" key={item.title}>
              <span>{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <p className="budget-note reveal">
          Final percentages and line-item figures can be updated from Sanity once the approved Year 1 budget is ready.
        </p>
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

      <section className="partner-section section-reveal" aria-label="Partners and endorsements">
        <div className="section-heading reveal">
          <p className="section-eyebrow">Partners + Endorsements</p>
          <h2>Planting with trusted partners.</h2>
        </div>
        <div className="partner-grid reveal">
          {partnerItems.map((partner) => (
            <article className="partner-card" key={partner.name}>
              <strong>{partner.name}</strong>
              <p>{partner.detail}</p>
            </article>
          ))}
        </div>
        <blockquote className="endorsement-quote reveal">
          “We believe the Bay Area is ready for a fresh movement of faith, campus ministry, and regional church planting.”
          <span>Endorsement placeholder — replace with approved partner quote.</span>
        </blockquote>
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
      

        <div className="form-panel reveal">
          <GetInvolvedForm />
        </div>
      </section>

      <section className="events-section section-reveal" aria-label="Upcoming pop-up services">
        <div className="section-heading reveal">
          <p className="section-eyebrow">Pop-up services</p>
          <h2>Next gathering points.</h2>
        </div>
        <div className="events-grid reveal">
          {upcomingGatherings.map((event) => (
            <article className="event-card" key={event.region}>
              <span>{event.date}</span>
              <h3>{event.region}</h3>
              <p>{event.detail}</p>
              <a href="mailto:hello@plantingthebay.com?subject=Pop-up%20RSVP">RSVP / learn more →</a>
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

            <div className="giving-widget" aria-label="Giving options mockup">
              <div className="giving-toggle" role="group" aria-label="Gift frequency">
                <button type="button" className="is-active">Monthly</button>
                <button type="button">One-time</button>
              </div>
              <label>
                Fund designation
                <select defaultValue="planting-the-bay">
                  <option value="planting-the-bay">Planting the Bay fund</option>
                  <option value="general">General initiative</option>
                </select>
              </label>
              <div className="payment-methods" aria-label="Giving methods">
                <span>Card</span>
                <span>ACH</span>
                <span>DAF</span>
                <span>Stock</span>
              </div>
              <p>Tax-deductible giving and automated receipts should be connected through the final giving platform.</p>
            </div>

            <div className="give-actions">
              <a href="mailto:giving@plantingthebay.com" className="btn btn-dark">Start giving</a>
              <a href="mailto:giving@plantingthebay.com" className="btn btn-light">Major gifts / DAF</a>
            </div>
          </div>
        </div>
      </section>

      <section className="field-notes-section section-reveal" aria-label="Latest updates and field notes">
        <div className="section-heading reveal">
          <p className="section-eyebrow">Updates / Stories</p>
          <h2>Field notes from the Bay.</h2>
        </div>
        <div className="field-notes-grid reveal">
          {fieldNotes.map((note) => (
            <article className="field-note-card" key={note.title}>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
              <a href="/updates">Read updates →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="email-section section-reveal" aria-label="Email updates">
        <div className="email-inner reveal">
          <p className="section-eyebrow">Updates</p>
          <h2>Follow the planting story.</h2>
          <p>Get prayer requests and milestones as Berkeley launches and the Bay Area roadmap unfolds.</p>
          <EmailSignupForm />
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
