import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import CustomCursor from '@/components/ui/CustomCursor';
import BackToTopButton from '@/components/ui/BackToTopButton';
import CookieBanner from '@/components/ui/CookieBanner';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import JsonLdSchema from '@/components/seo/JsonLdSchema';

export const metadata: Metadata = {
  title: {
    default: 'VOX Digital Agency | Enterprise Next.js App Router & AI Engineering',
    template: '%s | VOX Digital Agency',
  },
  description:
    'VOX Digital Agency builds high-performance web applications, Next.js App Router architectures, autonomous AI agents, GSAP scroll animation, and technical SEO systems.',
  keywords: [
    'VOX Digital',
    'VOX Digital Agency',
    'Digital Agency',
    'Next.js Development',
    'React Agency',
    'GSAP Motion Design',
    'AI Automation Agents',
    'Technical SEO',
    'UI/UX Design',
  ],
  authors: [{ name: 'VOX Digital Engineering Team' }],
  creator: 'VOX Digital Agency',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://voxdigital.io'),
  icons: {
    icon: '/images/logo/vox-logo.png',
    shortcut: '/images/logo/vox-logo.png',
    apple: '/images/logo/vox-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://voxdigital.io',
    siteName: 'VOX Digital Agency',
    title: 'VOX Digital Agency | Premium Engineering & Modern Web Architecture',
    description:
      'Modern digital agency crafting fast Next.js applications, GSAP micro-interactions, autonomous AI agents, and SEO growth engines.',
    images: [
      {
        url: '/images/logo/vox-banner.png',
        width: 1200,
        height: 630,
        alt: 'VOX Digital Agency Premium Web Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VOX Digital Agency | Modern Web & AI Architecture',
    description: 'Modern digital agency for Next.js 15, GSAP motion, AI agents, and SEO growth.',
    images: ['/images/logo/vox-banner.png'],
    creator: '@voxdigital',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090A0F] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-indigo-600/40 selection:text-white">
        <JsonLdSchema type="Organization" data={{ name: 'VOX Digital Agency', url: 'https://voxdigitalagency.com' }} />
        <ScrollProgressBar />
        <CustomCursor />
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <BackToTopButton />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
