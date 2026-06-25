import InteriorPage from '../components/InteriorPage';

export const metadata = {
  title: 'Planting the Bay — Partners',
  description: 'A credibility page for SF Bay Fellowship, ICOC affiliation, partner churches, and endorsement quotes.',
};

export default function Page() {
  return (
    <InteriorPage
      eyebrow='Partners'
      title='Planting with trusted partners.'
      intro='A credibility page for SF Bay Fellowship, ICOC affiliation, partner churches, and endorsement quotes.'
      primaryCta={{ label: 'Give', href: '/give' }}
      secondaryCta={{ label: 'Get Involved', href: '/get-involved' }}
      cards={[
    { title: 'SF Bay Fellowship', body: 'Explain the Berkeley partnership and support structure.' },
    { title: 'Church partners', body: 'Supporting churches, logos, and regions build credibility for the launch.' },
    { title: 'Endorsements', body: 'Quotes from trusted leaders build donor confidence and show shared ownership.' },
  ]}
    />
  );
}
