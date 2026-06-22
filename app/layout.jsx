import './globals.css';

export const metadata = {
  title: 'Planting the Bay',
  description: 'Planting the Bay website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
