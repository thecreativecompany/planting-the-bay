import './globals.css';

export const metadata = {
  title: 'Planting the Bay | Home',
  description: 'A bold, animated landing page starter for Planting the Bay.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
