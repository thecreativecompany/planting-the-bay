import InteriorPage from '../components/InteriorPage';

export const metadata = {
  title: 'Planting the Bay — The Team',
  description: 'Introduce Stuart and Ashley, plus the two open staff-couple roles for Year 1.',
};

export default function Page() {
  return (
    <InteriorPage
      eyebrow='The Team'
      title='People give to people.'
      intro='Introduce Stuart and Ashley, plus the two open staff-couple roles for Year 1.'
      primaryCta={{ label: 'Give', href: '/give' }}
      secondaryCta={{ label: 'Get Involved', href: '/get-involved' }}
      cards={[
    { title: 'Lead coordinators', body: 'Bios and photography make the leadership story personal and donor-ready.' },
    { title: 'Open staff roles', body: 'The two staff-couple opportunities are framed as a clear recruiting pathway.' },
    { title: 'Advisors and partners', body: 'Show credibility through key leaders and partner organizations.' },
  ]}
    />
  );
}
