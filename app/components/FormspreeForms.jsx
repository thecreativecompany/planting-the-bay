'use client';

import { useId, useState } from 'react';

const formspreeActions = {
  getInvolved: process.env.NEXT_PUBLIC_FORMSPREE_GET_INVOLVED_URL || 'https://formspree.io/f/placeholder-get-involved',
  emailSignup: process.env.NEXT_PUBLIC_FORMSPREE_EMAIL_SIGNUP_URL || 'https://formspree.io/f/placeholder-email-signup',
  prayer: process.env.NEXT_PUBLIC_FORMSPREE_PRAYER_URL || 'https://formspree.io/f/placeholder-prayer',
  contact: process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_URL || 'https://formspree.io/f/placeholder-contact',
  giving: process.env.NEXT_PUBLIC_FORMSPREE_GIVING_URL || 'https://formspree.io/f/placeholder-giving',
};

function Honeypot() {
  const id = useId();

  return (
    <div className="form-honeypot" aria-hidden="true">
      <label htmlFor={`${id}-gotcha`}>Leave this field empty</label>
      <input id={`${id}-gotcha`} type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    </div>
  );
}

function useFormStatus(successMessage = 'Thanks — you are on the list. We will follow up soon.') {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const action = form.action;
    const formName = form.dataset.formName || 'planting_the_bay_form';

    setStatus('loading');
    setMessage('');
    window.dataLayer?.push?.({ event: 'form_submit_started', form_name: formName });

    if (action.includes('/placeholder-')) {
      setStatus('success');
      setMessage(successMessage);
      window.dataLayer?.push?.({ event: 'form_submit_placeholder', form_name: formName });
      form.reset();
      return;
    }

    try {
      const response = await window.fetch(action, {
        method: 'POST',
        body: new window.FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Form submission failed');
      setStatus('success');
      setMessage(successMessage);
      window.dataLayer?.push?.({ event: 'form_submit_success', form_name: formName });
      form.reset();
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again or email hello@plantingthebay.com.');
      window.dataLayer?.push?.({ event: 'form_submit_error', form_name: formName });
    }
  }

  return { status, message, handleSubmit };
}

function FormStatus({ id, status, message, fallback }) {
  return (
    <p id={id} className={`form-status ${status === 'success' ? 'is-success' : ''} ${status === 'error' ? 'is-error' : ''}`} aria-live="polite">
      {message || fallback}
    </p>
  );
}

export function GetInvolvedForm({ title = 'Tell us how you want to help.' }) {
  const statusId = useId();
  const { status, message, handleSubmit } = useFormStatus('Thanks — your interest has been received. The team will follow up with a clear next step.');

  return (
    <form className="ptb-form" action={formspreeActions.getInvolved} method="POST" onSubmit={handleSubmit} data-form-name="get_involved" noValidate>
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
        <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required aria-describedby={statusId} />
      </label>
      <label className="form-full">
        Message
        <textarea name="message" placeholder="Tell us what you are interested in, where you are located, and the best next step." rows={5} />
      </label>
      <button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send interest →'}</button>
      <FormStatus id={statusId} status={status} message={message} fallback="You will receive a clear follow-up pathway after submitting." />
    </form>
  );
}

export function EmailSignupForm() {
  const emailId = useId();
  const { status, message, handleSubmit } = useFormStatus();

  return (
    <form className="email-form" action={formspreeActions.emailSignup} method="POST" onSubmit={handleSubmit} data-form-name="email_signup" noValidate>
      <input type="hidden" name="_subject" value="Planting the Bay — Email Signup" />
      <Honeypot />
      <label className="email-form-label" htmlFor={emailId}>Email Address</label>
      <input id={emailId} type="email" name="email" placeholder="you@example.com" autoComplete="email" required aria-describedby={`${emailId}-status`} />
      <button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Joining…' : 'Join the Supporter List'}</button>
      <FormStatus id={`${emailId}-status`} status={status} message={message} fallback="Monthly updates, prayer needs, and launch stories. No spam." />
    </form>
  );
}

export function PrayerSignupForm() {
  const statusId = useId();
  const { status, message, handleSubmit } = useFormStatus('Thanks — your prayer note has been received. We are grateful to pray with you.');

  return (
    <form className="ptb-form" action={formspreeActions.prayer} method="POST" onSubmit={handleSubmit} data-form-name="prayer" noValidate>
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
        <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required aria-describedby={statusId} />
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
      <button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send prayer note →'}</button>
      <FormStatus id={statusId} status={status} message={message} fallback="Your note goes to the launch prayer pipeline." />
    </form>
  );
}

export function GivingInterestForm() {
  const statusId = useId();
  const { status, message, handleSubmit } = useFormStatus('Thanks — your giving interest has been received. The team will follow up with giving options.');

  return (
    <form className="ptb-form" action={formspreeActions.giving} method="POST" onSubmit={handleSubmit} data-form-name="giving_interest" noValidate>
      <input type="hidden" name="_subject" value="Planting the Bay — Giving Interest" />
      <Honeypot />
      <div className="form-heading">
        <p className="section-eyebrow">Giving Interest</p>
        <h3>Start a giving conversation.</h3>
        <p>Share the kind of gift you are considering and the team will help with the clearest next step.</p>
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
        <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required aria-describedby={statusId} />
      </label>
      <label className="form-full">
        Note
        <textarea name="message" rows={5} placeholder="Tell us what you are considering or ask a giving question." />
      </label>
      <button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send giving interest →'}</button>
      <FormStatus id={statusId} status={status} message={message} fallback="For recurring partners, major gifts, donor-advised funds, stock gifts, and fund-designation questions." />
    </form>
  );
}

export function ContactForm() {
  const statusId = useId();
  const { status, message, handleSubmit } = useFormStatus('Thanks — your message has been received. The Planting the Bay team will follow up soon.');

  return (
    <form className="ptb-form" action={formspreeActions.contact} method="POST" onSubmit={handleSubmit} data-form-name="contact" noValidate>
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
        <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required aria-describedby={statusId} />
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
      <button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Send message →'}</button>
      <FormStatus id={statusId} status={status} message={message} fallback="For partnerships, giving, media, and launch questions." />
    </form>
  );
}

