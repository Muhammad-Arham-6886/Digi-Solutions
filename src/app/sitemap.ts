import { MetadataRoute } from 'next';
import { SERVICES_DATA } from '@/data/servicesData';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { BLOG_DATA } from '@/data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://voxdigitalagency.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/industries',
    '/pricing',
    '/process',
    '/testimonials',
    '/faqs',
    '/blog',
    '/contact',
    '/book-consultation',
    '/coming-soon',
    '/privacy',
    '/terms',
    '/cookies',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const caseStudyRoutes = PORTFOLIO_DATA.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogRoutes = BLOG_DATA.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...blogRoutes];
}
