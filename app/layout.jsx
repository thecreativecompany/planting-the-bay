import localFont from 'next/font/local';
import './globals.css';
import GsapMotion from './components/GsapMotion';

const geist = localFont({
  src: '../public/fonts/geist/GeistVF.ttf',
  variable: '--font-geist',
  display: 'swap',
});

export const metadata = {
  metadataBase: new globalThis.URL('https://plantingthebay.com'),
  title: {
    default: 'Planting the Bay | Berkeley First. Bay-wide Next.',
    template: '%s | Planting the Bay',
  },
  description:
    'A Berkeley-first church-planting and campus-ministry initiative multiplying prayer, pop-up services, students, and partners across the San Francisco Bay Area.',
  keywords: ['Planting the Bay', 'Berkeley church plant', 'Bay Area campus ministry', 'SF Bay Fellowship'],
  openGraph: {
    title: 'Planting the Bay',
    description: 'Planting first in Berkeley, then expanding across the Bay.',
    type: 'website',
    siteName: 'Planting the Bay',
  },
};

export const viewport = {
  themeColor: '#21482d',
  colorScheme: 'light',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans`}>
        <GsapMotion />
        {children}
      </body>
    </html>
  );
}
