import InteriorPage from '../components/InteriorPage';

export const metadata = {
  title: 'Planting the Bay — Updates / Stories',
  description: 'Launch updates, supporter notes, short videos, and stories from the field.',
};

export default function Page() {
  return (
    <InteriorPage
      eyebrow='Updates / Stories'
      title='Field notes from the Bay.'
      intro='Launch updates, supporter notes, short videos, and stories from the field.'
      primaryCta={{ label: 'Give', href: '/give' }}
      secondaryCta={{ label: 'Get Involved', href: '/get-involved' }}
      cards={[
    { title: 'Launch preparation', body: 'Berkeley updates and key milestones.' },
    { title: 'Supporter updates', body: 'Monthly giving and prayer pipeline content.' },
    { title: 'Short videos', body: 'Reels and story clips can keep supporters close to the campaign as it grows.' },
  ]}
    />
  );
}
