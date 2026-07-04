import SiteHeader from '../components/SiteHeader';
import { GivingInterestForm } from '../components/FormspreeForms';

export const metadata = {
  title: 'Planting the Bay — Give',
  description: 'Recurring giving, impact tiers, fund designation, tax-deductibility notes, and Year 1 budget transparency.',
};

const impactTiers = [
  ['$25/mo', 'Support the movement with a faithful monthly gift.'],
  ['$100/mo', 'Help fuel outreach, hospitality, and follow-up.'],
  ['$250/mo', 'Help fund Berkeley campus ministry and student discipleship.'],
  ['$500/mo', 'Invest in staff couples and planting work.'],
];

const trustNotes = ['Tax-deductible giving', 'Automated receipts', 'Card / ACH / DAF / stock', 'Major gift conversations'];

const giftUses = [
  ['Planting staff', 'Stuart and Ashley plus two additional staff couples focused on church planting and campus ministry.'],
  ['Campus ministry', 'Berkeley-first student outreach, follow-up, discipleship, and future campus expansion.'],
  ['Pop-up services', 'Regional gatherings, venue costs, hospitality, kids, worship, and RSVP-ready entry points.'],
  ['Expansion infrastructure', 'Donor updates, content, systems, communications, travel, and the Bay-wide vision asset.'],
];

export default function Page() {
  return (
    <main id="main-content" className="ptb-page sub-page give-page">
      <SiteHeader />
      <section className="sub-hero section-reveal is-visible">
        <div className="sub-hero-glow" aria-hidden="true" />
        <p className="section-eyebrow">Give</p>
        <h1>Give to plant the Bay.</h1>
        <p>
          Become a monthly partner and help fuel campus ministry, local church planting, staff couples, pop-up services, and regional outreach.
        </p>
        <div className="sub-actions">
          <a href="#giving-interest" className="btn btn-dark">Start giving</a>
          <a href="mailto:giving@plantingthebay.com" className="btn btn-light">Major gifts / DAF</a>
        </div>
      </section>

      <section className="form-page-section">
        <div className="give-card-inner give-page-card">
          <div>
            <p className="section-eyebrow">Impact tiers</p>
            <h2>Bay Builders</h2>
            <p>Recurring giving creates reliable momentum, while one-time, DAF, stock, and major gift conversations remain simple next steps.</p>
          </div>
          <div className="tier-grid give-tier-grid">
            {impactTiers.map(([amount, label]) => (
              <div className="tier-card" key={amount}>
                <strong>{amount}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="give-trust-strip" aria-label="Giving trust notes">
            {trustNotes.map((note) => <span key={note}>{note}</span>)}
          </div>
          <div className="budget-grid give-page-budget">
            {giftUses.map(([title, body]) => (
              <article className="budget-card" key={title}>
                <span>Use of funds</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="giving-widget">
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
            <div className="payment-methods">
              <span>Card</span>
              <span>ACH</span>
              <span>DAF</span>
              <span>Stock</span>
            </div>
            <p>The giving flow is structured for recurring billing, fund designation, automated receipts, and a simple mobile checkout handoff.</p>
            <a className="btn btn-dark giving-widget-cta" href="#giving-interest">Continue to giving interest</a>
          </div>
        </div>
      </section>

      <section id="giving-interest" className="form-page-section">
        <GivingInterestForm />
      </section>
    </main>
  );
}

