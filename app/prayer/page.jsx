import PlaceholderPage from '../components/PlaceholderPage';

export const metadata = {
  title: 'Planting the Bay — Prayer',
  description: 'A simple on-ramp for people who want to support spiritually even before they give or relocate.',
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow='Prayer'
      title='Pray with the planting team.'
      intro='A simple on-ramp for people who want to support spiritually even before they give or relocate.'
      primaryCta={{ label: 'Give', href: '/give' }}
      secondaryCta={{ label: 'Get Involved', href: '/get-involved' }}
      cards={[
    { title: 'Monthly prayer focus', body: 'List current prayer needs and launch milestones.' },
    { title: 'Prayer signup', body: 'Capture emails for prayer updates.' },
    { title: 'Prayer wall', body: 'Optional future module for requests and answered prayers.' },
  ]}
    />
  );
}
