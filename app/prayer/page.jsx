import SiteHeader from '../components/SiteHeader';
import { PrayerSignupForm } from '../components/FormspreeForms';

export const metadata = {
  title: 'Planting the Bay — Prayer',
  description: 'Sign up for prayer updates or submit a prayer request for the Berkeley launch and Bay-wide planting movement.',
};

export default function Page() {
  return (
    <main className="ptb-page sub-page">
      <SiteHeader />
      <section className="sub-hero section-reveal is-visible">
        <div className="sub-hero-glow" aria-hidden="true" />
        <p className="section-eyebrow">Prayer</p>
        <h1>Pray with the planting team.</h1>
        <p>
          A simple on-ramp for people who want to support spiritually even before they give financially, relocate, or serve locally.
        </p>
        <div className="sub-actions">
          <a href="#prayer-form" className="btn btn-dark">Join prayer list</a>
          <a href="/give" className="btn btn-light">Give</a>
        </div>
      </section>

      <section id="prayer-form" className="form-page-section">
        <PrayerSignupForm />
      </section>
    </main>
  );
}
