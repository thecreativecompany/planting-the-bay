import './globals.css';

export const metadata = {
  title: 'Planting the Bay | Church Planting Initiative',
  description:
    'A fundraising, storytelling, and vision-casting website for a Bay Area church-planting and campus-ministry initiative.',
  openGraph: {
    title: 'Planting the Bay',
    description: 'Planting first in Berkeley, then expanding across the Bay.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
