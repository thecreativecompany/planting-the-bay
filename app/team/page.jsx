import SiteHeader from '../components/SiteHeader';

export const metadata = {
  title: 'Planting the Bay — The Team',
  description: 'Stuart and Ashley Mains, open staff-couple roles, and the people behind Planting the Bay.',
};

const teamCards = [
  ['Stuart & Ashley Mains', 'Lead Evangelist and Planting Coordinators for the Berkeley-first Bay Area initiative.'],
  ['Two staff-couple roles', 'Year 1 recruiting opportunity focused on campus ministry and local church planting.'],
  ['Advisors and partners', 'A place for supporting leaders, churches, and accountability structures.'],
];

export default function Page() {
  return (
    <main className="ptb-page sub-page">
      <SiteHeader />
      <section className="sub-hero section-reveal is-visible">
        <div className="sub-hero-glow" aria-hidden="true" />
        <p className="section-eyebrow">The Team</p>
        <h1>People give to people.</h1>
        <p>
          Donors and relocating families need to meet the people carrying the vision. Add real bios, photos, and open roles here through Sanity.
        </p>
        <div className="sub-actions">
          <a href="/get-involved" className="btn btn-dark">Join the team</a>
          <a href="/give" className="btn btn-light">Give</a>
        </div>
      </section>

      <section className="sub-content">
        <div className="sub-grid">
          {teamCards.map(([title, body], index) => (
            <article className="sub-card" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h2>{title}</h2>
              <p>{body}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
