import type {Metadata} from 'next'
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import './globals.css'

export const metadata: Metadata = {
  title: 'Next Supabase Auth',
  description: 'Authentication with Supabase using Next',
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}