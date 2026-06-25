import InteriorPage from '../components/InteriorPage';

export const metadata = {
  title: 'Planting the Bay — Our Story',
  description: "A longer narrative page for Stuart and Ashley's story, the partnership with SF Bay Fellowship, and why Berkeley is the first seed for a Bay-wide movement.",
};

export default function Page() {
  return (
    <InteriorPage
      eyebrow='Our Story'
      title='The calling behind Planting the Bay.'
      intro="A longer narrative page for Stuart and Ashley's story, the partnership with SF Bay Fellowship, and why Berkeley is the first seed for a Bay-wide movement."
      primaryCta={{ label: 'Give', href: '/give' }}
      secondaryCta={{ label: 'Get Involved', href: '/get-involved' }}
      cards={[
    { title: 'Stuart & Ashley', body: 'Bios, photography, and the personal story behind the calling.' },
    { title: 'SF Bay Fellowship', body: 'Explain the partnership and why this launch begins from Berkeley.' },
    { title: 'The emotional through-line', body: 'Pull quotes, short video clips, and a clear path to give or get involved.' },
  ]}
    />
  );
}
