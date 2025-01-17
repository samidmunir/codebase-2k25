import type { Metadata } from 'next';
import Navbar from './components/Navbar/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maravex',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}