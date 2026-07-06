import SiteHeader from '../components/SiteHeader';
import { EmailSignupForm } from '../components/FormspreeForms';

export const metadata = {
  title: 'Planting the Bay — Updates / Stories',
  description: 'Launch updates, supporter notes, prayer needs, short videos, and field notes from the Bay.',
};

const updates = [
  {
    label: 'Launch Prep',
    title: 'Berkeley launch preparation',
    body: 'Milestones, staff recruitment, campus conversations, and first-gathering readiness.',
    href: '/contact',
    cta: 'Send an update idea',
  },
  {
    label: 'Prayer',
    title: 'Prayer needs this month',
    body: 'Focused prayer requests for seekers, staff couples, students, and open doors.',
    href: '/prayer',
    cta: 'View prayer needs',
  },
  {
    label: 'Supporters',
    title: 'Supporter report',
    body: 'Progress toward the Year 1 goal and what monthly partners are helping make possible.',
    href: '/give',
    cta: 'See giving progress',
  },
];

export default function Page() {
  return (
    <main className="ptb-page sub-page">
      <SiteHeader />
      <section className="sub-hero section-reveal is-visible">
        <div className="sub-hero-glow" aria-hidden="true" />
        <p className="section-eyebrow">Updates / Stories</p>
        <h1>Field notes from the Bay.</h1>
        <p>
          A future Sanity-powered updates hub for donor retention, short videos, prayer needs, and stories from the field.
        </p>
        <div className="sub-actions">
          <a href="/give" className="btn btn-dark">Give</a>
          <a href="/prayer" className="btn btn-light">Pray</a>
        </div>
      </section>

      <section className="form-page-section updates-page-section">
        <div className="field-notes-grid updates-card-grid">
          {updates.map(({ label, title, body, href, cta }) => (
            <article className="field-note-card updates-card" key={title}>
              <span>{label}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <a href={href}>{cta} →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="email-section section-reveal is-visible">
        <div className="email-inner">
          <p className="section-eyebrow">Email capture</p>
          <h2>Follow the planting story.</h2>
          <p>Get prayer requests and milestones as Berkeley launches and the Bay Area roadmap unfolds.</p>
          <EmailSignupForm />
        </div>
      </section>
    </main>
  );
}
