import InteriorPage from '../components/InteriorPage';

export const metadata = {
  title: 'Planting the Bay — Get Involved',
  description: 'A recruiting hub for staff couples, families considering relocation, volunteers, local supporters, and prayer partners.',
};

export default function Page() {
  return (
    <InteriorPage
      eyebrow='Get Involved'
      title='Choose your path into the story.'
      intro='A recruiting hub for staff couples, families considering relocation, volunteers, local supporters, and prayer partners.'
      primaryCta={{ label: 'Start here', href: 'mailto:hello@plantingthebay.com' }}
      secondaryCta={{ label: 'Give', href: '/give' }}
      cards={[
    { title: 'Join the team', body: 'For staff couples, interns, and families considering relocating to plant with us.' },
    { title: 'Serve locally', body: 'For people who want to host, welcome, volunteer, and support pop-up gatherings.' },
    { title: 'Pray with us', body: 'For supporters who want to receive prayer needs and monthly updates.' },
  ]}
    />
  );
}
