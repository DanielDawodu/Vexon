import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Clearline Automotive Concepts | Trusted Car Dealers in Nigeria',
  description:
    'Looking for trusted car dealers in Nigeria? Clearline Automotive Concepts facilitates verified car deals through deep inspections and clear documentation in Lagos and nationwide.',
  keywords: 'trusted car dealers in Nigeria, buy verified cars in Lagos, trusted auto dealers in Nigeria, buy cars in Nigeria, genuine car dealers Lagos, Clearline Automotive Concepts, Clearline Auto',
  openGraph: {
    title: 'Clearline Automotive Concepts | Trusted Car Dealers in Nigeria',
    description:
      'Looking for trusted car dealers in Nigeria? Clearline Automotive Concepts helps car buyers move forward with confidence through verified inspections.',
    type: 'website',
    url: 'https://clearlineauto.com.ng',
    siteName: 'Clearline Automotive Concepts',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clearline Automotive Concepts | Trusted Car Dealers in Nigeria',
    description: 'Buy verified cars from trusted dealers across Nigeria with confidence.',
  },
  alternates: {
    canonical: 'https://clearlineauto.com.ng',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  "name": "Clearline Automotive Concepts",
  "url": "https://clearlineauto.com.ng",
  "description": "Trusted car dealers in Nigeria providing verified vehicle inspections and secure deals.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "NG",
    "addressRegion": "Lagos"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+2349113047990",
    "contactType": "customer service"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
