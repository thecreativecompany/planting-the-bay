'use client';

import { useEffect, useState } from 'react';
import SiteHeader from './components/SiteHeader';
import { EmailSignupForm } from './components/FormspreeForms';
import {
  ArrowRight,
  Banknote,
  CalendarDays,
  Church,
  Compass,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  MapPinned,
  Megaphone,
  Mountain,
  Play,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';

const regions = ['Berkeley', 'San Francisco', 'Peninsula', 'San Jose', 'Tri-Valley', 'Beyond'];

const visionTags = ['Berkeley First', 'Bay Area Movement', 'Campus Ministry + Local Church', 'Launching September 1'];

const heroProof = [
  { value: '01', label: 'Berkeley launch city' },
  { value: '$1M', label: 'Year 1 funding goal' },
  { value: '2+', label: 'Staff couples in Year 1' },
];

const fundingStats = [
  { label: 'Year 1', value: '$1M' },
  { label: 'Year 2', value: '$2M' },
  { label: 'Year 3', value: '$2M+' },
];

const whyCards = [
  { metric: 'UC', title: 'World-class campuses', body: 'Berkeley anchors a student-focused launch with room to expand toward the Bay’s major universities.', icon: GraduationCap },
  { metric: '5', title: 'Strategic cities', body: 'San Francisco, the Peninsula, San Jose, and Tri-Valley connect culture, families, and global influence.', icon: MapPinned },
  { metric: '∞', title: 'Relational influence', body: 'A single conversation can travel through campuses, companies, homes, churches, and online communities.', icon: UsersRound },
  { metric: '6', title: 'Expansion potential', body: 'The roadmap is built to multiply leaders, pop-up gatherings, and campus ministry across the whole region.', icon: Compass },
  { metric: 'Gen Z', title: 'Belonging + purpose', body: 'A generation is searching for community, meaning, spiritual formation, and a place to build.', icon: HeartHandshake },
];

const pillars = [
  { title: 'Social Media Outreach', body: 'Using digital reach to find, engage, and invite people across the Bay.', icon: Megaphone, image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80' },
  { title: 'Pop-Up Services', body: 'Regional gatherings that create momentum, community, and accessible next steps.', icon: Church, image: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=900&q=80' },
  { title: 'Campus Ministry Growth', body: 'Building student-centered ministry on Bay Area campuses, starting in Berkeley.', icon: GraduationCap, image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80' },
];

const roadmapPhases = [
  ['Phase 1', 'Berkeley', 'Launch campus ministry and a local church in partnership with SF Bay Fellowship.'],
  ['Phase 2', 'San Francisco', 'Create pop-up gatherings, prayer rooms, and city relationships.'],
  ['Phase 3', 'Peninsula', 'Build the next corridor through families, hosts, and campus contacts.'],
  ['Phase 4', 'San Jose', 'Reach students, young professionals, and South Bay neighborhoods.'],
  ['Phase 5', 'Tri-Valley', 'Mobilize families and volunteers into a regional ministry rhythm.'],
  ['Phase 6', 'Beyond', 'Multiply a repeatable church-planting and campus-ministry model.'],
];

const pathways = [
  { label: 'Staffing', title: 'Join the Team / Staff Couples', body: 'For couples, interns, and families considering relocating to plant with us.', cta: 'Explore Staff Roles', href: '/team' },
  { label: 'Volunteer', title: 'Serve or Volunteer', body: 'Use your time and gifts to support gatherings, outreach, hospitality, and local ministry.', cta: 'Serve With Us', href: '/get-involved' },
  { label: 'On the ground', title: 'Relocate to the Bay', body: 'Join the mission on the ground and help build the next chapter of the Bay Area church.', cta: 'Start the Conversation', href: '/contact' },
  { label: 'Prayer', title: 'Pray With Us', body: 'Join the prayer pipeline and receive updates as the movement grows.', cta: 'Join the Prayer List', href: '/prayer' },
];

const givingTiers = [
  { amount: '$25/mo', label: 'Support the movement' },
  { amount: '$100/mo', label: 'Help fuel outreach' },
  { amount: '$250/mo', label: 'Help fund campus ministry' },
  { amount: '$500/mo', label: 'Invest in staff and planting work' },
];

const budget = [
  { title: 'Staff Couples', value: '42%', body: 'Lead team support and two additional staff couples for Year 1.' },
  { title: 'Campus Ministry', value: '20%', body: 'Berkeley-first outreach, discipleship, student gatherings, and follow-up.' },
  { title: 'Pop-Up Services', value: '14%', body: 'Venues, hospitality, worship, kids, production, and launch gatherings.' },
  { title: 'Outreach & Media', value: '12%', body: 'Social content, story capture, invitations, and campaign communication.' },
  { title: 'Events & Operations', value: '12%', body: 'Regional logistics, systems, travel, donor updates, and administration.' },
];

const stories = [
  { category: 'Launch Update', date: 'Sep 1', title: 'Berkeley launch begins', excerpt: 'A first look at the prayer, staffing, and ministry rhythms leading into launch.', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80' },
  { category: 'Campus Ministry', date: 'Fall', title: 'Building student-centered ministry', excerpt: 'How Berkeley becomes the first anchor for campus outreach across the Bay.', image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80' },
  { category: 'Vision Story', date: 'Roadmap', title: 'From one city to a Bay-wide movement', excerpt: 'The story behind expanding from Berkeley to San Francisco, the Peninsula, San Jose, and beyond.', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80' },
];

function trackConversion(eventName, metadata = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...metadata });
}

function CountUp({ value, prefix = '', suffix = '', label }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const node = document.querySelector(`[data-count-label="${label}"]`);
    if (!node) return undefined;

    if (reduce) {
      setDisplay(value);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = window.performance.now();
      const duration = 1250;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) window.requestAnimationFrame(tick);
      };
      window.requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.45 });

    observer.observe(node);
    return () => observer.disconnect();
  }, [label, value]);

  return <strong data-count-label={label}>{prefix}{display.toLocaleString()}{suffix}</strong>;
}

function CampaignButton({ href, children, variant = 'primary', eventName, className = '' }) {
  return (
    <a
      href={href}
      className={`campaign-btn campaign-btn-${variant} ${className}`}
      onClick={() => trackConversion(eventName || `cta_${children.toString().toLowerCase().replaceAll(' ', '_')}`, { href })}
    >
      <span>{children}</span>
      <ArrowRight size={16} aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  const [selectedTier, setSelectedTier] = useState('$100/mo');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [progressVisible, setProgressVisible] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const items = Array.from(document.querySelectorAll('[data-reveal]'));

    if (reduce) {
      items.forEach((item) => item.classList.add('is-visible'));
      return undefined;
    }

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

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const card = document.querySelector('.progress-card');
    if (!card) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setProgressVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setProgressVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.42 });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <main id="main-content" className="campaign-page">
      <SiteHeader />

      {videoModalOpen && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-labelledby="vision-video-title" onClick={() => setVideoModalOpen(false)}>
          <div className="video-modal-card" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="video-modal-close" aria-label="Close vision video preview" onClick={() => setVideoModalOpen(false)}>×</button>
            <div className="video-modal-frame">
              <Play size={34} fill="currentColor" aria-hidden="true" />
            </div>
            <div>
              <p className="campaign-eyebrow">Vision video</p>
              <h2 id="vision-video-title">Berkeley first. The Bay next.</h2>
              <p>This space is ready for the final 30–60 second launch video featuring Stuart and Ashley, Berkeley, campuses, and Bay Area neighborhoods.</p>
            </div>
          </div>
        </div>
      )}

      <section id="home" className="campaign-hero" aria-label="Planting the Bay hero">
        <div className="hero-noise" aria-hidden="true" />
        <div className="campaign-container hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="campaign-eyebrow">A Berkeley-first Bay Area movement</p>
            <h1>Planting the Bay</h1>
            <h2>A movement to reach Berkeley first — then the Bay Area and beyond.</h2>
            <p className="hero-description">
              Beginning September 1, Stuart and Ashley Mains are launching a church-planting and campus-ministry initiative across the San Francisco Bay Area, starting in Berkeley in partnership with the SF Bay Fellowship.
            </p>
            <div className="campaign-actions">
              <CampaignButton href="/give" eventName="give_to_vision_click">Give to the Vision</CampaignButton>
              <CampaignButton href="/get-involved" variant="secondary" eventName="get_involved_click">Get Involved</CampaignButton>
            </div>
            <div className="trust-tags" aria-label="Launch details">
              {visionTags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className="hero-proof-strip" aria-label="Campaign proof points">
              {heroProof.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="video-placeholder" aria-label="30 to 60 second vision video preview">
              <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=80" alt="Golden Gate Bridge and San Francisco Bay Area vision video preview" />
              <div className="video-overlay">
                <button type="button" aria-label="Open 60-second vision video preview" onClick={() => { trackConversion('vision_video_preview_click'); setVideoModalOpen(true); }}>
                  <Play size={22} fill="currentColor" aria-hidden="true" />
                </button>
                <span>Watch the 60-second Berkeley launch vision</span>
              </div>
            </div>
            <div className="hero-stat-card">
              <span>Year 1 goal</span>
              <strong>$1,000,000</strong>
              <small>Staff couples, campus ministry, pop-up services, and regional outreach.</small>
            </div>
            <div className="hero-location-card" aria-hidden="true">
              <span>Launch corridor</span>
              <strong>Berkeley → Bay</strong>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="vision-strip campaign-section" aria-label="At-a-glance vision strip">
        <div className="campaign-container" data-reveal>
          <div className="section-header compact">
            <p className="campaign-eyebrow">At-a-glance vision</p>
            <h2>Berkeley first. The Bay next.</h2>
          </div>
          <div className="region-route" aria-label="Regional expansion route">
            {regions.map((region, index) => (
              <article key={region} style={{ '--i': index }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{region}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fundraising" className="fundraising-band campaign-section" aria-label="Fundraising momentum">
        <div className="campaign-container fundraising-grid" data-reveal>
          <div>
            <p className="campaign-eyebrow">Fundraising momentum</p>
            <h2>Year 1 Goal: $1,000,000</h2>
            <p>Fuel the first year of church planting, campus ministry, staff couples, pop-up services, and regional outreach.</p>
            <div className="recurring-callout"><strong>Monthly partners create predictable launch momentum.</strong><span>Recurring gifts help the team plan staffing, campus rhythms, pop-up services, and follow-up before launch day.</span></div>
            <CampaignButton href="/give" eventName="give_monthly_click">Give Monthly</CampaignButton>
          </div>
          <div className={`progress-card ${progressVisible ? 'is-visible' : ''}`}>
            <div className="progress-meta"><span><CountUp value={180000} prefix="$" label="year-one-committed" /> committed toward launch</span><CountUp value={18} suffix="%" label="year-one-percent" /></div>
            <div className="progress-bar" role="progressbar" aria-label="Fundraising progress toward the Year 1 goal" aria-valuemin="0" aria-valuemax="1000000" aria-valuenow="180000"><span /></div>
            <div className="progress-labels"><span>Committed</span><span>$1M Year 1 Goal</span></div>
            <div className="funding-stats">
              {fundingStats.map((stat) => <div key={stat.label}><span>{stat.label}</span><strong>{stat.value}</strong></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="story-editorial campaign-section" aria-label="The story of Stuart and Ashley Mains">
        <div className="campaign-container story-grid" data-reveal>
          <div className="story-images">
            <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80" alt="Warm ministry conversation representing Stuart and Ashley Mains" />
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80" alt="Community gathering for the Planting the Bay story" />
          </div>
          <div>
            <p className="campaign-eyebrow">The Story</p>
            <h2>Called to plant. Sent to serve. Ready for the Bay.</h2>
            <p>Stuart and Ashley Mains serve as Lead Evangelist and Planting Coordinators, leading the first phase of the initiative in Berkeley while building toward a multi-region Bay Area movement.</p>
            <blockquote>“We believe the Bay Area can become a launching point for renewal, discipleship, and campus transformation.”</blockquote>
          </div>
        </div>
      </section>

      <section id="why-bay" className="why-bay-teaser campaign-section" aria-label="Why the Bay teaser">
        <div className="campaign-container" data-reveal>
          <div className="section-header">
            <p className="campaign-eyebrow">Why the Bay? Why now?</p>
            <h2>The Bay Area represents one of the highest-leverage opportunities for church planting and campus ministry in North America.</h2>
            <CampaignButton href="/why-the-bay" variant="secondary" eventName="explore_need_click">Explore the Need</CampaignButton>
          </div>
          <div className="why-grid">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return <article key={card.title}><div className="why-card-top"><Icon size={22} aria-hidden="true" /><strong>{card.metric}</strong></div><h3>{card.title}</h3><p>{card.body}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="pillars-section campaign-section" aria-label="Three strategy pillars">
        <div className="campaign-container" data-reveal>
          <div className="section-header compact">
            <p className="campaign-eyebrow">Three core pillars</p>
            <h2>Digital reach, local rooms, campus roots.</h2>
          </div>
          <div className="pillar-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article key={pillar.title}>
                  <img src={pillar.image} alt={`${pillar.title} strategy image`} />
                  <div><Icon size={22} aria-hidden="true" /><h3>{pillar.title}</h3><p>{pillar.body}</p></div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="map-roadmap campaign-section" aria-label="Expansion roadmap map section">
        <div className="campaign-container roadmap-grid" data-reveal>
          <div>
            <p className="campaign-eyebrow">Expansion roadmap</p>
            <h2>Berkeley first. The Bay next.</h2>
            <p>A cinematic Bay Area flyover will anchor this section as final media is approved; the current route view shows the launch path from Berkeley into each priority region.</p>
            <div className="roadmap-proof"><span>6-phase expansion</span><span>Campus + church model</span><span>Bay-wide replication</span></div>
          </div>
          <div className="flyover-card">
            <div className="bay-map-placeholder" aria-label="Animated Bay Area expansion map from Berkeley across the region"><div className="bay-route-line" aria-hidden="true" />{regions.slice(0, 5).map((region, index) => <i key={region} style={{ '--x': `${16 + index * 17}%`, '--y': `${62 - (index % 2) * 24}%`, '--delay': `${index * 120}ms` }}>{region}</i>)}<Mountain size={42} aria-hidden="true" /><span>Bay Area expansion flyover</span></div>
            <div className="phase-list">
              {roadmapPhases.map(([phase, place, body]) => <article key={phase}><span>{phase}</span><strong>{place}</strong><p>{body}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section id="get-involved" className="pathways-hub campaign-section" aria-label="Get involved pathways">
        <div className="campaign-container" data-reveal>
          <div className="section-header compact">
            <p className="campaign-eyebrow">Get involved</p>
            <h2>Find your place in the story.</h2>
          </div>
          <div className="pathway-grid-v2">
            {pathways.map((pathway, index) => <article key={pathway.title}><span className="pathway-kicker">{String(index + 1).padStart(2, '0')} / {pathway.label}</span><h3>{pathway.title}</h3><p>{pathway.body}</p><a href={pathway.href} onClick={() => trackConversion('pathway_click', { pathway: pathway.title })}>{pathway.cta}<ArrowRight size={15} /></a></article>)}
          </div>
        </div>
      </section>

      <section id="give" className="giving-preview campaign-section" aria-label="Giving section">
        <div className="campaign-container giving-grid" data-reveal>
          <div>
            <p className="campaign-eyebrow">Give to plant the Bay</p>
            <h2>Give to plant the Bay.</h2>
            <p>Your gift helps fund campus ministry, local church planting, staff couples, pop-up services, and regional outreach.</p>
            <div className="giving-focus"><strong>Most useful next step:</strong><span>choose a monthly gift so the launch team can plan with confidence.</span></div>
            <div className="trust-notes"><span><ShieldCheck size={16} /> Tax-deductible giving</span><span><Banknote size={16} /> Card / ACH / major gift options</span><span><CalendarDays size={16} /> Automated receipts</span></div>
            <CampaignButton href="/give" eventName="give_now_click">Give Now</CampaignButton>
          </div>
          <div className="giving-card">
            <span>Become a monthly partner</span>
            <div className="tier-grid-v2">{givingTiers.map((tier) => <button type="button" key={tier.amount} className={selectedTier === tier.amount ? 'is-selected' : undefined} aria-pressed={selectedTier === tier.amount} onClick={() => { setSelectedTier(tier.amount); trackConversion('giving_tier_click', { tier: tier.amount }); }}><strong>{tier.amount}</strong><small>{tier.label}</small></button>)}</div>
            <p>Gifts can be directed to the general initiative or the Planting the Bay fund through the approved giving platform.</p>
            <div className="giving-assurance"><span>2–3 tap mobile path</span><span>Receipts automated</span><span>Major gifts welcomed</span></div>
          </div>
        </div>
      </section>

      <section className="budget-breakdown campaign-section" aria-label="Where your gift goes">
        <div className="campaign-container" data-reveal>
          <div className="section-header compact">
            <p className="campaign-eyebrow">Transparency</p>
            <h2>Where your gift goes</h2>
          </div>
          <div className="budget-grid-v2">
            {budget.map((item) => <article key={item.title}><strong>{item.value}</strong><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
          <p className="editable-note">Budget categories are prepared for final approved amounts and donor reporting updates.</p>
        </div>
      </section>

      <section className="stories-section campaign-section" aria-label="Latest updates and stories">
        <div className="campaign-container" data-reveal>
          <div className="section-header compact">
            <p className="campaign-eyebrow">Latest updates</p>
            <h2>Stories from the Bay</h2>
          </div>
          <div className="story-card-grid">
            {stories.map((story) => <article key={story.title}><img src={story.image} alt={`${story.title} story image`} /><div><span>{story.category} • {story.date}</span><h3>{story.title}</h3><p>{story.excerpt}</p><a href="/updates">Read More <ArrowRight size={14} /></a></div></article>)}
          </div>
        </div>
      </section>

      <section className="email-prayer campaign-section" aria-label="Email and prayer capture">
        <div className="campaign-container email-grid" data-reveal>
          <div>
            <p className="campaign-eyebrow">Prayer + updates</p>
            <h2>Follow the story. Pray with us. Build with us.</h2>
            <p>Get updates, prayer requests, and stories as the vision moves from Berkeley across the Bay.</p>
          </div>
          <div className="email-card">
            <EmailSignupForm />
            <a href="/prayer" onClick={() => trackConversion('prayer_request_click')}>Submit a Prayer Request</a>
          </div>
        </div>
      </section>

      <footer className="campaign-footer" aria-label="Footer">
        <div className="campaign-container footer-grid-v2">
          <div>
            <strong>Planting the Bay</strong>
            <p>Berkeley first. Bay Area movement. Campus ministry and local church planting for the next generation.</p>
            <div className="footer-signal"><span>Launching September 1</span><span>Berkeley / SF Bay Fellowship</span></div>
            <div className="footer-actions"><CampaignButton href="/give" eventName="footer_give_click">Give</CampaignButton><CampaignButton href="/get-involved" variant="secondary" eventName="footer_get_involved_click">Get Involved</CampaignButton></div>
          </div>
          <nav aria-label="Footer navigation">
            {['Our Story', 'Our Vision', 'Why the Bay', 'Team', 'Updates', 'Prayer', 'Partners', 'FAQ', 'Contact'].map((label) => {
              const href = label === 'Our Story' ? '/story' : label === 'Our Vision' ? '/vision' : `/${label.toLowerCase().replaceAll(' ', '-').replace('our-', '')}`;
              return <a href={href} key={label}>{label}</a>;
            })}
          </nav>
          <div className="footer-meta">
            <EmailSignupForm />
            <p>Giving is processed through the approved nonprofit giving platform with receipts provided for tax records. Final fund designation and 501(c)(3) language should match the launch partner’s official wording.</p>
            <div><a href="https://instagram.com" aria-label="Planting the Bay Instagram">Instagram</a><a href="mailto:hello@plantingthebay.com">Contact</a></div>
          </div>
        </div>
      </footer>
    </main>
  );
}

