import SiteHeader from './SiteHeader';

export default function InteriorPage({
  eyebrow,
  title,
  intro,
  cards = [],
  primaryCta = { label: 'Give', href: '/give' },
  secondaryCta = { label: 'Get Involved', href: '/get-involved' },
}) {
  return (
    <main className="ptb-page sub-page">
      <SiteHeader />
      <section className="sub-hero section-reveal is-visible">
        <div className="sub-hero-glow" aria-hidden="true" />
        <p className="section-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <div className="sub-actions">
          <a href={primaryCta.href} className="btn btn-dark">{primaryCta.label}</a>
          <a href={secondaryCta.href} className="btn btn-light">{secondaryCta.label}</a>
        </div>
      </section>

      <section className="sub-content" aria-label={`${eyebrow} details`}>
        <div className="sub-grid">
          {cards.map((card, index) => (
            <article className="sub-card" key={card.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{card.title}</h2>
              <p>{card.body}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="sub-cta" aria-label="Recommended next step">
        <p>Ready to move from interest to action?</p>
        <a href={primaryCta.href}>{primaryCta.label} →</a>
      </section>

      <footer className="sub-footer">
        <a href="/">Home</a>
        <a href="/story">Story</a>
        <a href="/vision">Vision</a>
        <a href="/why-the-bay">Why the Bay</a>
        <a href="/get-involved">Get Involved</a>
        <a href="/give">Give</a>
      </footer>
    </main>
  );
}
