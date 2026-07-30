import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import TrustedCompanies from '@/components/sections/TrustedCompanies';
import ServicesOverview from '@/components/sections/ServicesOverview';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import AiAutomationSection from '@/components/sections/AiAutomationSection';
import SeoPerformanceSection from '@/components/sections/SeoPerformanceSection';
import FaqAccordionSection from '@/components/sections/FaqAccordionSection';
import ContactCTASection from '@/components/sections/ContactCTASection';
import JsonLdSchema from '@/components/seo/JsonLdSchema';

export default function HomePage() {
  return (
    <>
      <JsonLdSchema
        type="WebSite"
        data={{
          name: 'VOX Digital Agency',
          url: 'https://voxdigitalagency.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://voxdigitalagency.com/services?search={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />
      <HeroSection />
      <TrustedCompanies />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <ProcessTimeline />
      <AiAutomationSection />
      <SeoPerformanceSection />
      <FaqAccordionSection />
      <ContactCTASection />
    </>
  );
}
