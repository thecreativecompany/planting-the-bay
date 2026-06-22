import PlaceholderPage from '../components/PlaceholderPage';

export const metadata = {
  title: 'Planting the Bay — FAQ',
  description: 'Answer practical questions about giving, tax deductibility, relocation, pop-up services, and the church-planting model.',
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow='FAQ'
      title='Clear answers for donors and team members.'
      intro='Answer practical questions about giving, tax deductibility, relocation, pop-up services, and the church-planting model.'
      primaryCta={{ label: 'Give', href: '/give' }}
      secondaryCta={{ label: 'Get Involved', href: '/get-involved' }}
      cards={[
    { title: 'Giving questions', body: 'Where does the money go? Is it tax-deductible? Can I give through DAF or stock?' },
    { title: 'Joining questions', body: 'How do I relocate, join staff, volunteer, or host a pop-up?' },
    { title: 'Church plant questions', body: 'Explain the model, ICOC connection, and Bay Area roadmap.' },
  ]}
    />
  );
}
