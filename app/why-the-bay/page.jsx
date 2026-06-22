import PlaceholderPage from '../components/PlaceholderPage';

export const metadata = {
  title: 'Planting the Bay — Why the Bay',
  description: 'A donor-confidence page showing why the Bay Area is a high-leverage planting opportunity right now.',
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow='Why the Bay'
      title='The need, the data, and the moment.'
      intro='A donor-confidence page showing why the Bay Area is a high-leverage planting opportunity right now.'
      primaryCta={{ label: 'Give', href: '/give' }}
      secondaryCta={{ label: 'Get Involved', href: '/get-involved' }}
      cards={[
    { title: 'The data case', body: 'Add survey findings, maps, and simple infographics here.' },
    { title: 'The regional need', body: 'Frame the Bay Area through campuses, neighborhoods, families, and seekers.' },
    { title: 'Why now', body: 'Connect urgency with the September launch and three-year fundraising arc.' },
  ]}
    />
  );
}
