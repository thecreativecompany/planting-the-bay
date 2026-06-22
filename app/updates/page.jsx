import PlaceholderPage from '../components/PlaceholderPage';

export const metadata = {
  title: 'Planting the Bay — Updates / Stories',
  description: 'A future CMS-powered page for launch updates, supporter notes, short videos, and stories from the field.',
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow='Updates / Stories'
      title='Field notes from the Bay.'
      intro='A future CMS-powered page for launch updates, supporter notes, short videos, and stories from the field.'
      primaryCta={{ label: 'Give', href: '/give' }}
      secondaryCta={{ label: 'Get Involved', href: '/get-involved' }}
      cards={[
    { title: 'Launch preparation', body: 'Berkeley updates and key milestones.' },
    { title: 'Supporter updates', body: 'Monthly giving and prayer pipeline content.' },
    { title: 'Short videos', body: 'Embed reels and story clips as the campaign grows.' },
  ]}
    />
  );
}
