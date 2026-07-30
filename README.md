# Vertical Forge - World-Class Enterprise Digital Agency Platform

**Tagline:** Building Specialized Digital Solutions for Businesses.  
**Brand Palette:** Primary `#2563EB`, Accent `#06B6D4`, Dark `#0F172A`, Gray `#F8FAFC`.  
**Typography:** Headings: `Space Grotesk`, Body: `Inter`.

---

## ⚡ Tech Stack Architecture

### Frontend
- **Framework:** Next.js 15 (App Router with Server Components & Edge Functions)
- **UI Core:** React 19 & TypeScript (Strict Type Safety)
- **Styling:** Tailwind CSS with custom HSL glow tokens & Glassmorphism
- **Animations:** Framer Motion (spring physics, parallax, hover micro-interactions)
- **Icons:** Lucide React Icons

### Backend & Data
- **Database:** MongoDB via Mongoose Schemas (`Lead`, `Consultation`, `Subscriber`)
- **Email Notifications:** Nodemailer with custom HTML transactional templates
- **API Engine:** Built-in Next.js App Router API Routes + Standalone Express.js API Service (`server/index.js`)

### Deployment
- **Platform:** Vercel / AWS / Docker Support (`Dockerfile` & `docker-compose.yml`)

---

## 🚀 All 24 Services Included

1. **Website Development** (`/services/website-development`)
2. **WordPress Development** (`/services/wordpress-development`)
3. **Shopify Development** (`/services/shopify-development`)
4. **WooCommerce Development** (`/services/woocommerce-development`)
5. **React Development** (`/services/react-development`)
6. **Next.js Development** (`/services/nextjs-development`)
7. **Node.js Development** (`/services/nodejs-development`)
8. **Custom Web Applications** (`/services/custom-web-applications`)
9. **AI Agents & Business Automation** (`/services/ai-agents-business-automation`)
10. **SEO Optimization** (`/services/seo-optimization`)
11. **Technical SEO** (`/services/technical-seo`)
12. **Local SEO** (`/services/local-seo`)
13. **Website Speed Optimization** (`/services/website-speed-optimization`)
14. **UI/UX Design** (`/services/ui-ux-design`)
15. **Logo Design** (`/services/logo-design`)
16. **Brand Identity** (`/services/brand-identity`)
17. **Social Media Marketing** (`/services/social-media-marketing`)
18. **Business Websites** (`/services/business-websites`)
19. **Corporate Websites** (`/services/corporate-websites`)
20. **E-commerce Solutions** (`/services/e-commerce-solutions`)
21. **Website Maintenance** (`/services/website-maintenance`)
22. **Hosting & Server Management** (`/services/hosting-server-management`)
23. **API Development** (`/services/api-development`)
24. **CRM Integrations** (`/services/crm-integrations`)

---

## 📦 Quick Start & Local Setup

### 1. Installation
```bash
# Clone repository
git clone https://github.com/verticalforge/digital-agency.git
cd "Vertical Forge"

# Install all dependencies
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 4. Run Standalone Express Server (Optional)
```bash
npm run server
```
Runs the Express API service on `http://localhost:5000`.

---

## 🐳 Docker Deployment

To build and launch using Docker Compose:
```bash
docker-compose up --build -d
```
This boots up Next.js app (Port 3000), Express backend (Port 5000), and MongoDB database container (Port 27017).

---

## 📊 SEO & Performance Implementation

- **Metadata:** Dynamic metadata generated across all static & dynamic routes via `generateMetadata`.
- **JSON-LD Schemas:** Automatic injection of `Organization`, `WebSite`, `Service`, `BreadcrumbList`, `BlogPosting`, and `FAQPage` schemas.
- **Sitemap & Robots:** Built-in dynamic `/sitemap.xml` and `/robots.txt` endpoints.
- **Lighthouse:** Core Web Vitals optimized for 95+ score across Mobile & Desktop.
