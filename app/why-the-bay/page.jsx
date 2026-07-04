import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'Planting the Bay — Why the Bay',
  description: 'The donor-confidence case for why the Bay Area, why Berkeley first, and why now.',
};

const proofPoints = [
  ['Survey data slot', 'Highest-leverage case', 'Reserved for the final survey finding that identifies the Bay Area as a top planting opportunity in North America.'],
  ['Social reach', '~59K', 'Existing social reach can become prayer updates, RSVP pathways, donor conversations, and local follow-up.'],
  ['Launch anchor', 'Berkeley', 'Campus ministry and a local church are planted together first, then multiplied outward.'],
  ['Expansion roadmap', '6 regions', 'Berkeley, San Francisco, Peninsula, San Jose, Tri-Valley, and beyond.'],
];

const infographicItems = [
  ['Campuses', 'The Bay brings together world-shaping campuses and students who can become future leaders.'],
  ['Neighborhoods', 'The strategy moves from one local church to multiple regional gathering points.'],
  ['Digital reach', 'Content becomes an on-ramp into real conversations, events, prayer, and giving.'],
  ['Donor confidence', 'Clear goals, progress tracking, and budget transparency support major and recurring gifts.'],
];

export default function Page() {
  return (
    <main className="ptb-page sub-page">
      <SiteHeader />
      <section className="sub-hero section-reveal is-visible">
        <div className="sub-hero-glow" aria-hidden="true" />
        <p className="section-eyebrow">Why the Bay</p>
        <h1>The need, the data, and the moment.</h1>
        <p>
          A donor-confidence page explaining why the Bay Area is a high-leverage planting opportunity right now.
        </p>
        <div className="sub-actions">
          <a href="/give" className="btn btn-dark">Give</a>
          <a href="/get-involved" className="btn btn-light">Get Involved</a>
        </div>
      </section>

      <section className="form-page-section">
        <div className="proof-grid">
          {proofPoints.map(([label, value, body]) => (
            <article className="proof-card" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <div className="budget-grid">
          {infographicItems.map(([title, body]) => (
            <article className="budget-card" key={title}>
              <span>Data case</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>

        <p className="budget-note">
          Research, map assets, and infographic numbers are structured for final approved data before public launch.
        </p>
      </section>
    </main>
  );
}
