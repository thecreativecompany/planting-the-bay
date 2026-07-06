import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'Planting the Bay — Partners',
  description: 'Credibility, endorsements, SF Bay Fellowship partnership, and churches supporting Planting the Bay.',
};

const partners = [
  {
    label: 'Local Anchor',
    name: 'SF Bay Fellowship',
    detail: 'Berkeley launch partner and local support structure.',
  },
  {
    label: 'Network',
    name: 'ICOC affiliation',
    detail: 'Existing church network and credibility for donors, churches, and relocating families.',
  },
  {
    label: 'Churches',
    name: 'Partner churches',
    detail: 'A place for supporting churches, logos, regions, and donor confidence signals.',
  },
];

export default function Page() {
  return (
    <main className="ptb-page sub-page">
      <SiteHeader />
      <section className="sub-hero section-reveal is-visible">
        <div className="sub-hero-glow" aria-hidden="true" />
        <p className="section-eyebrow">Partners</p>
        <h1>Planting with trusted partners.</h1>
        <p>
          Partners and endorsements help donors understand the credibility, accountability, and shared ownership behind the Bay-wide vision.
        </p>
        <div className="sub-actions">
          <a href="/give" className="btn btn-dark">Give</a>
          <a href="/contact" className="btn btn-light">Partner with us</a>
        </div>
      </section>

      <section className="partner-section partners-page-section">
        <div className="partner-grid partners-card-grid">
          {partners.map(({ label, name, detail }) => (
            <article className="partner-card partners-card" key={name}>
              <span>{label}</span>
              <strong>{name}</strong>
              <p>{detail}</p>
            </article>
          ))}
        </div>
        <blockquote className="endorsement-quote">
          “We believe the Bay Area is ready for a fresh movement of faith, campus ministry, and regional church planting.”
          <span>Placeholder quote — replace with an approved endorsement.</span>
        </blockquote>
      </section>
    </main>
  );
}
