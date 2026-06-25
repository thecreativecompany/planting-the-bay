import InteriorPage from '../components/InteriorPage';

export const metadata = {
  title: 'Planting the Bay — Give',
  description: 'The conversion page for one-time and recurring gifts, impact tiers, fund designation, tax-deductibility notes, and where-the-gift-goes transparency.',
};

export default function Page() {
  return (
    <InteriorPage
      eyebrow='Give'
      title='Help fund the first three years.'
      intro='The conversion page for one-time and recurring gifts, impact tiers, fund designation, tax-deductibility notes, and where-the-gift-goes transparency.'
      primaryCta={{ label: 'Start giving', href: 'mailto:giving@plantingthebay.com' }}
      secondaryCta={{ label: 'Major gifts / DAF', href: 'mailto:giving@plantingthebay.com' }}
      cards={[
    { title: 'Recurring first', body: 'Frame the Bay Builders monthly partner program and invite sustained support.' },
    { title: 'Impact tiers', body: 'Show suggested giving levels such as $25/mo, $250/mo, and major gifts.' },
    { title: 'Where your gift goes', body: 'Year 1 support funds staff, campus ministry, pop-up services, and expansion infrastructure.' },
  ]}
    />
  );
}
