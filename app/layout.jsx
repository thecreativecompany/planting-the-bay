import './globals.css';

export const metadata = {
  title: 'Planting the Bay | Home',
  description: 'A Social Dallas-inspired landing page starter for Planting the Bay, built with Next.js and Tailwind CSS.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
