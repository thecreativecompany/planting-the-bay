import SiteHeader from '../components/SiteHeader';
import { ContactForm } from '../components/FormspreeForms';

export const metadata = {
  title: 'Planting the Bay — Contact',
  description: 'Contact Planting the Bay for general inquiries, donor conversations, media, partnerships, and launch interest.',
};

export default function Page() {
  return (
    <main className="ptb-page sub-page">
      <SiteHeader />
      <section className="sub-hero section-reveal is-visible">
        <div className="sub-hero-glow" aria-hidden="true" />
        <p className="section-eyebrow">Contact</p>
        <h1>Start the conversation.</h1>
        <p>
          For general questions, churches, donors, media, partner organizations, or people interested in the Berkeley launch.
        </p>
        <div className="sub-actions">
          <a href="#contact-form" className="btn btn-dark">Email us</a>
          <a href="/get-involved" className="btn btn-light">Get Involved</a>
        </div>
      </section>

      <section id="contact-form" className="form-page-section">
        <ContactForm />
      </section>
    </main>
  );
}
