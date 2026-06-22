import PlaceholderPage from '../components/PlaceholderPage';

export const metadata = {
  title: 'Planting the Bay — The Team',
  description: 'Introduce Stuart and Ashley, plus the two open staff-couple roles for Year 1.',
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow='The Team'
      title='People give to people.'
      intro='Introduce Stuart and Ashley, plus the two open staff-couple roles for Year 1.'
      primaryCta={{ label: 'Give', href: '/give' }}
      secondaryCta={{ label: 'Get Involved', href: '/get-involved' }}
      cards={[
    { title: 'Lead coordinators', body: 'Add bios and real photography for Stuart and Ashley.' },
    { title: 'Open staff roles', body: 'Present the two staff-couple opportunities as a recruiting pathway.' },
    { title: 'Advisors and partners', body: 'Show credibility through key leaders and partner organizations.' },
  ]}
    />
  );
}
