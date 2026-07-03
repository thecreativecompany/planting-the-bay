import SiteHeader from '../components/SiteHeader';
import { GetInvolvedForm } from '../components/FormspreeForms';

export const metadata = {
  title: 'Planting the Bay — Get Involved',
  description: 'Choose a pathway to join staff, relocate, serve locally, host, or pray with Planting the Bay.',
};

const pathways = [
  ['Join the team / planting staff', 'For staff couples, interns, and families considering relocating to plant with us.'],
  ['Serve / volunteer', 'For local supporters who want to welcome, host, volunteer, and support pop-up gatherings.'],
  ['Pray', 'For supporters who want to receive focused prayer needs and monthly updates.'],
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
          {pathways.map(([title, body], index) => (
            <article className="sub-card" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{title}</h2>
              <p>{body}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section id="interest-form" className="form-page-section">
        <GetInvolvedForm />
      </section>
    </main>
  );
}
