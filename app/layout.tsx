import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DefaultSeo, LogoJsonLd, LocalBusinessJsonLd, FAQPageJsonLd, SiteLinksSearchBoxJsonLd } from 'next-seo';
import './globals.css';
import Navbar from '@/components/Navbar';
import ChatWidget from '@/components/ChatWidget';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bluetradeai.com';

export const metadata: Metadata = {
  title: 'Blue Trade AI | AI-Powered Growth Systems for Trade and Home Service Businesses',
  description:
    'Blue Trade AI delivers AI-powered websites, Google Ads management, lead tracking, and automation systems built exclusively for trade and home service businesses. Schedule a free strategy session today.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Blue Trade AI',
    title: 'Blue Trade AI | AI-Powered Growth Systems for Trade and Home Service Businesses',
    description:
      'Blue Trade AI delivers AI-powered websites, Google Ads management, lead tracking, and automation systems built exclusively for trade and home service businesses.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Blue Trade AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blue Trade AI | AI-Powered Growth Systems for Trade and Home Service Businesses',
    description:
      'Blue Trade AI delivers AI-powered websites, Google Ads management, lead tracking, and automation systems built exclusively for trade and home service businesses.',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqItems = [
  {
    questionName: 'What services does Blue Trade AI offer?',
    acceptedAnswerText:
      'Blue Trade AI offers four core services: AI-powered website builds, Google Ads management, lead tracking and reporting, and automation and AI tools — all built specifically for trade and home service businesses.',
  },
  {
    questionName: 'What types of businesses does Blue Trade AI work with?',
    acceptedAnswerText:
      'Blue Trade AI works exclusively with trade and home service businesses including plumbers, roofers, electricians, painters, general contractors, landscapers, tree service companies, flooring companies, and more.',
  },
  {
    questionName: 'How does Blue Trade AI help businesses rank on Google?',
    acceptedAnswerText:
      'Blue Trade AI builds conversion-optimized websites with proper SEO architecture, manages Google Ads campaigns targeting high-intent local keywords, and implements structured data and local business schema to improve Google Maps and organic search rankings.',
  },
  {
    questionName: 'How long does it take to see results?',
    acceptedAnswerText:
      'Google Ads campaigns can generate leads within the first week of launch. Organic SEO results typically improve over 60–90 days as the website gains authority and indexing.',
  },
  {
    questionName: 'How do I get started with Blue Trade AI?',
    acceptedAnswerText:
      'Schedule a free strategy session through our website. We will learn about your business, your market, and your goals, then recommend the right combination of services for your operation.',
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Blue Trade AI',
              description:
                'AI-powered growth systems for trade and home service businesses including website builds, Google Ads management, lead tracking, and automation.',
              url: siteUrl,
              telephone: '+1-000-000-0000',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              areaServed: {
                '@type': 'Country',
                name: 'United States',
              },
              serviceType: [
                'AI-Powered Website Builds',
                'Google Ads Management',
                'Lead Tracking and Reporting',
                'Marketing Automation',
              ],
              priceRange: '$$',
              sameAs: [
                'https://www.linkedin.com/company/bluetradeai',
                'https://www.facebook.com/bluetradeai',
                'https://www.instagram.com/bluetradeai',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqItems.map((item) => ({
                '@type': 'Question',
                name: item.questionName,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.acceptedAnswerText,
                },
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'AI-Powered Website Builds',
                provider: { '@type': 'LocalBusiness', name: 'Blue Trade AI' },
                description:
                  'Professional websites built with conversion in mind — designed to turn visitors into inquiries and calls for trade and home service businesses.',
                serviceType: 'AI-Powered Website Builds',
                areaServed: { '@type': 'Country', name: 'United States' },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Google Ads Management for Trade Businesses',
                provider: { '@type': 'LocalBusiness', name: 'Blue Trade AI' },
                description:
                  'Targeted local Google Ads campaigns that put your business in front of high-intent customers actively searching for your services.',
                serviceType: 'Google Ads Management for Trade Businesses',
                areaServed: { '@type': 'Country', name: 'United States' },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Lead Tracking and Reporting',
                provider: { '@type': 'LocalBusiness', name: 'Blue Trade AI' },
                description:
                  'Clear, accurate reporting that shows which channels are generating leads and which are generating revenue for home service businesses.',
                serviceType: 'Lead Tracking and Reporting',
                areaServed: { '@type': 'Country', name: 'United States' },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: 'Business Automation and AI Tools',
                provider: { '@type': 'LocalBusiness', name: 'Blue Trade AI' },
                description:
                  'Practical automation and AI tools that handle follow-up, save time, and keep your trade business operating efficiently.',
                serviceType: 'Business Automation and AI Tools',
                areaServed: { '@type': 'Country', name: 'United States' },
              },
            ]),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <ChatWidget />
      </body>
    </html>
  );
}
