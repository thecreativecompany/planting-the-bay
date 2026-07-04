import SiteHeader from '../components/SiteHeader';
import { GetInvolvedForm } from '../components/FormspreeForms';

export const metadata = {
  title: 'Planting the Bay — Get Involved',
  description: 'Choose a pathway to join staff, relocate, serve locally, host, or pray with Planting the Bay.',
};

const pathways = [
  {
    label: 'Staffing',
    title: 'Join the Team / Staff Couples',
    body: 'For couples, interns, and families considering relocating to plant with us.',
    cta: 'Explore Staff Roles',
    href: '/team',
  },
  {
    label: 'Volunteer',
    title: 'Serve or Volunteer',
    body: 'Use your time and gifts to support gatherings, outreach, hospitality, and local ministry.',
    cta: 'Serve With Us',
    href: '#interest-form',
  },
  {
    label: 'Relocate',
    title: 'Relocate to the Bay',
    body: 'Join the mission on the ground and help build the next chapter of the Bay Area church.',
    cta: 'Start the Conversation',
    href: '/contact',
  },
  {
    label: 'Prayer',
    title: 'Pray With Us',
    body: 'Join the prayer pipeline and receive updates as the movement grows.',
    cta: 'Join the Prayer List',
    href: '/prayer',
  },
];

export default function Page() {
  return (
    <main className="ptb-page sub-page">
      <SiteHeader />
      <section className="sub-hero section-reveal is-visible">
        <div className="sub-hero-glow" aria-hidden="true" />
        <p className="section-eyebrow">Get Involved</p>
        <h1>Choose your path into the story.</h1>
        <p>
          The recruiting hub for staff couples, families considering relocation, volunteers, local supporters, and prayer partners.
        </p>
        <div className="sub-actions">
          <a href="/give" className="btn btn-dark">Give</a>
          <a href="#interest-form" className="btn btn-light">Start here</a>
        </div>
      </section>

      <section className="sub-content">
        <div className="sub-grid">
          {pathways.map((pathway, index) => (
            <article className="sub-card" key={pathway.title}>
              <span>{String(index + 1).padStart(2, '0')} / {pathway.label}</span>
              <h2>{pathway.title}</h2>
              <p>{pathway.body}</p>
              <a href={pathway.href}>{pathway.cta}</a>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section id="interest-form" className="form-page-section">
        <GetInvolvedForm title="Start with the pathway that fits you best." />
      </section>
    </main>
  );
}

