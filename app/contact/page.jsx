import InteriorPage from '../components/InteriorPage';

export const metadata = {
  title: 'Planting the Bay — Contact',
  description: 'A simple page for general inquiries, donor conversations, media, and people wanting to join the launch.',
};

export default function Page() {
  return (
    <InteriorPage
      eyebrow='Contact'
      title='Start the conversation.'
      intro='A simple page for general inquiries, donor conversations, media, and people wanting to join the launch.'
      primaryCta={{ label: 'Email us', href: 'mailto:hello@plantingthebay.com' }}
      secondaryCta={{ label: 'Give', href: '/give' }}
      cards={[
    { title: 'General inquiries', body: 'Email hello@plantingthebay.com for general questions, donor conversations, and launch interest.' },
    { title: 'Giving conversations', body: 'Dedicated follow-up for major gifts, donor-advised funds, and stock conversations.' },
    { title: 'Media and partnerships', body: 'A direct path for churches, partners, and media contacts to connect with the team.' },
  ]}
    />
  );
}
