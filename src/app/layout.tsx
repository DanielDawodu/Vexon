import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'VEXON – Verified Cars. Transparent Deals.',
  description:
    'VEXON facilitates verified car deals through inspections, documentation checks, and a transparent process. Move forward with confidence.',
  keywords: 'verified cars, car inspection, car deals, car brokerage, transparent deals',
  openGraph: {
    title: 'VEXON – Verified Cars. Transparent Deals.',
    description:
      'VEXON helps car buyers move forward with confidence through verified inspections and clear documentation.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
