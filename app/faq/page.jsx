import InteriorPage from '../components/InteriorPage';

export const metadata = {
  title: 'Planting the Bay — FAQ',
  description: 'Answer practical questions about giving, tax deductibility, relocation, pop-up services, and the church-planting model.',
};

export default function Page() {
  return (
    <InteriorPage
      eyebrow='FAQ'
      title='Clear answers for donors and team members.'
      intro='Answer practical questions about giving, tax deductibility, relocation, pop-up services, and the church-planting model.'
      primaryCta={{ label: 'Give', href: '/give' }}
      secondaryCta={{ label: 'Get Involved', href: '/get-involved' }}
      cards={[
    { title: 'Giving questions', body: 'Where the money goes, tax-deductibility, DAF gifts, and stock gifts.' },
    { title: 'Joining questions', body: 'How to relocate, join staff, volunteer, host, or support a pop-up gathering.' },
    { title: 'Church plant questions', body: 'The church-planting model, ICOC connection, and Bay Area roadmap.' },
  ]}
    />
  );
}
