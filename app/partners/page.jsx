import PlaceholderPage from '../components/PlaceholderPage';

export const metadata = {
  title: 'Planting the Bay — Partners',
  description: 'A credibility page for SF Bay Fellowship, ICOC affiliation, partner churches, and endorsement quotes.',
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow='Partners'
      title='Planting with trusted partners.'
      intro='A credibility page for SF Bay Fellowship, ICOC affiliation, partner churches, and endorsement quotes.'
      primaryCta={{ label: 'Give', href: '/give' }}
      secondaryCta={{ label: 'Get Involved', href: '/get-involved' }}
      cards={[
    { title: 'SF Bay Fellowship', body: 'Explain the Berkeley partnership and support structure.' },
    { title: 'Church partners', body: 'Add supporting churches, logos, and regions.' },
    { title: 'Endorsements', body: 'Use quotes from trusted leaders to build donor confidence.' },
  ]}
    />
  );
}
