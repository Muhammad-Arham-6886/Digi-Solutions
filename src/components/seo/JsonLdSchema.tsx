import React from 'react';

interface JsonLdProps {
  type: 'Organization' | 'WebSite' | 'Service' | 'BreadcrumbList' | 'BlogPosting' | 'FAQPage' | 'CaseStudy';
  data: Record<string, any>;
}

export default function JsonLdSchema({ type, data }: JsonLdProps) {
  let schemaData: Record<string, any> = {};

  if (type === 'Organization') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'VOX Digital Agency',
      legalName: 'VOX Digital Agency',
      url: 'https://voxdigitalagency.com',
      logo: 'https://voxdigitalagency.com/logo.png',
      tagline: 'Building High-Performance Web Applications & AI Systems',
      description: 'Enterprise digital agency specializing in custom web applications, Next.js engineering, AI agents, technical SEO, and GSAP motion design.',
      sameAs: [
        'https://twitter.com/voxdigitalagency',
        'https://linkedin.com/company/voxdigitalagency',
        'https://github.com/voxdigitalagency'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'info@voxdigitalagency.com'
      },
      ...data
    };
  } else if (type === 'Service') {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      provider: {
        '@type': 'Organization',
        name: 'Vertical Forge',
        url: 'https://verticalforge.io'
      },
      areaServed: 'Worldwide',
      ...data
    };
  } else if (type === 'FAQPage') {
    const faqsList = data && Array.isArray(data.faqs) ? data.faqs : [];
    schemaData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqsList.map((faq: { question: string; answer: string }) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  } else {
    schemaData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
