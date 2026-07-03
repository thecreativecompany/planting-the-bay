const formspreeActions = {
  getInvolved: process.env.NEXT_PUBLIC_FORMSPREE_GET_INVOLVED_URL || 'https://formspree.io/f/YOUR_GET_INVOLVED_FORM_ID',
  emailSignup: process.env.NEXT_PUBLIC_FORMSPREE_EMAIL_SIGNUP_URL || 'https://formspree.io/f/YOUR_EMAIL_SIGNUP_FORM_ID',
  prayer: process.env.NEXT_PUBLIC_FORMSPREE_PRAYER_URL || 'https://formspree.io/f/YOUR_PRAYER_FORM_ID',
  contact: process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_URL || 'https://formspree.io/f/YOUR_CONTACT_FORM_ID',
  giving: process.env.NEXT_PUBLIC_FORMSPREE_GIVING_URL || 'https://formspree.io/f/YOUR_GIVING_FORM_ID',
};

function Honeypot() {
  return (
    <label className="form-honeypot" aria-hidden="true">
      Do not fill this out
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
    </label>
  );
}

export function GetInvolvedForm({ title = 'Tell us how you want to help.' }) {
  return (
    <form className="ptb-form" action={formspreeActions.getInvolved} method="POST">
      <input type="hidden" name="_subject" value="Planting the Bay — Get Involved" />
      <Honeypot />
      <div className="form-heading">
        <p className="section-eyebrow">Interest Form</p>
        <h3>{title}</h3>
        <p>Choose a pathway and the team can follow up with the right next step.</p>
      </div>
      <label>
        Pathway
        <select name="pathway" defaultValue="serve" required>
          <option value="staff-relocate">Join staff / relocate</option>
          <option value="serve">Serve locally</option>
          <option value="host">Host a pop-up</option>
          <option value="pray">Pray with us</option>
          <option value="curious">I am curious / seeking</option>
        </select>
      </label>
      <label>
        Name
        <input name="name" type="text" placeholder="Your name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="you@example.com" required />
      </label>
      <label className="form-full">
        Message
        <textarea name="message" placeholder="Tell us what you are interested in, where you are located, and the best next step." rows={5} />
      </label>
      <button type="submit">Send interest →</button>
    </form>
  );
}

export function EmailSignupForm() {
  return (
    <form className="email-form" action={formspreeActions.emailSignup} method="POST">
      <input type="hidden" name="_subject" value="Planting the Bay — Email Signup" />
      <Honeypot />
      <input type="email" name="email" placeholder="Email address" aria-label="Email address" required />
      <button type="submit">Subscribe</button>
    </form>
  );
}

export function PrayerSignupForm() {
  return (
    <form className="ptb-form" action={formspreeActions.prayer} method="POST">
      <input type="hidden" name="_subject" value="Planting the Bay — Prayer Request / Prayer Signup" />
      <Honeypot />
      <div className="form-heading">
        <p className="section-eyebrow">Prayer</p>
        <h3>Join the prayer pipeline.</h3>
        <p>Share a prayer request or sign up for monthly prayer needs.</p>
      </div>
      <label>
        Name
        <input name="name" type="text" placeholder="Your name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="you@example.com" required />
      </label>
      <label>
        Prayer focus
        <select name="focus" defaultValue="monthly-prayer">
          <option value="monthly-prayer">Send me monthly prayer updates</option>
          <option value="berkeley-launch">Berkeley launch</option>
          <option value="staff-couples">Staff couples</option>
          <option value="campus-ministry">Campus ministry</option>
          <option value="personal-request">Personal prayer request</option>
        </select>
      </label>
      <label className="form-full">
        Prayer request / note
        <textarea name="message" rows={5} placeholder="Optional prayer request or note" />
      </label>
      <button type="submit">Send prayer note →</button>
    </form>
  );
}

export function GivingInterestForm() {
  return (
    <form className="ptb-form" action={formspreeActions.giving} method="POST">
      <input type="hidden" name="_subject" value="Planting the Bay — Giving Interest" />
      <Honeypot />
      <div className="form-heading">
        <p className="section-eyebrow">Giving Interest</p>
        <h3>Start a giving conversation.</h3>
        <p>Use this until the final giving platform is connected.</p>
      </div>
      <label>
        Gift type
        <select name="gift_type" defaultValue="monthly">
          <option value="monthly">Monthly / recurring</option>
          <option value="one-time">One-time</option>
          <option value="major-gift">Major gift</option>
          <option value="daf">Donor-Advised Fund</option>
          <option value="stock">Stock gift</option>
        </select>
      </label>
      <label>
        Name
        <input name="name" type="text" placeholder="Your name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="you@example.com" required />
      </label>
      <label className="form-full">
        Note
        <textarea name="message" rows={5} placeholder="Tell us what you are considering or ask a giving question." />
      </label>
      <button type="submit">Send giving interest →</button>
    </form>
  );
}

export function ContactForm() {
  return (
    <form className="ptb-form" action={formspreeActions.contact} method="POST">
      <input type="hidden" name="_subject" value="Planting the Bay — Contact Form" />
      <Honeypot />
      <div className="form-heading">
        <p className="section-eyebrow">Contact</p>
        <h3>Start the conversation.</h3>
        <p>For general questions, partnerships, media, and launch interest.</p>
      </div>
      <label>
        Name
        <input name="name" type="text" placeholder="Your name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" placeholder="you@example.com" required />
      </label>
      <label>
        Topic
        <select name="topic" defaultValue="general">
          <option value="general">General inquiry</option>
          <option value="partnership">Partnership</option>
          <option value="media">Press / media</option>
          <option value="giving">Giving conversation</option>
          <option value="events">Pop-up service / event</option>
        </select>
      </label>
      <label className="form-full">
        Message
        <textarea name="message" rows={5} placeholder="How can we help?" required />
      </label>
      <button type="submit">Send message →</button>
    </form>
  );
}
