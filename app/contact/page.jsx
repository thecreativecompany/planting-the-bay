import PlaceholderPage from '../components/PlaceholderPage';

export const metadata = {
  title: 'Planting the Bay — Contact',
  description: 'A simple page for general inquiries, donor conversations, media, and people wanting to join the launch.',
};

export default function Page() {
  return (
    <PlaceholderPage
      eyebrow='Contact'
      title='Start the conversation.'
      intro='A simple page for general inquiries, donor conversations, media, and people wanting to join the launch.'
      primaryCta={{ label: 'Email us', href: 'mailto:hello@plantingthebay.com' }}
      secondaryCta={{ label: 'Give', href: '/give' }}
      cards={[
    { title: 'General inquiries', body: 'Use hello@plantingthebay.com or connect this to a contact form.' },
    { title: 'Giving conversations', body: 'Route major gifts, DAF, and stock conversations clearly.' },
    { title: 'Media and partnerships', body: 'Give churches and partners a clear contact path.' },
  ]}
    />
  );
}
