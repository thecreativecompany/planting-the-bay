import InteriorPage from '../components/InteriorPage';

export const metadata = {
  title: 'Planting the Bay — Our Vision',
  description: 'The strategy page for social media outreach, pop-up services, campus ministry growth, and the expansion roadmap across the Bay Area.',
};

export default function Page() {
  return (
    <InteriorPage
      eyebrow='Our Vision'
      title='Berkeley first, then the Bay.'
      intro='The strategy page for social media outreach, pop-up services, campus ministry growth, and the expansion roadmap across the Bay Area.'
      primaryCta={{ label: 'Give', href: '/give' }}
      secondaryCta={{ label: 'Get Involved', href: '/get-involved' }}
      cards={[
    { title: 'Social media outreach', body: 'Digital reach helps discover, invite, and engage people throughout the region.' },
    { title: 'Pop-up services', body: 'Create regional gatherings with RSVP moments and clear next steps.' },
    { title: 'Campus ministry growth', body: 'Build first around Berkeley, then expand toward SF, Peninsula, San Jose, Tri-Valley, and beyond.' },
  ]}
    />
  );
}
