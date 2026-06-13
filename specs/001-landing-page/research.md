# Research: Landing Page for OCA

**Feature**: Landing Page for OCA
**Date**: 2026-06-13
**Purpose**: Technical research and decision documentation for implementation

## Research Tasks & Decisions

### 1. Astro Configuration for Static Landing Page

**Question**: What is the optimal Astro configuration for a high-performance static landing page?

**Decision**: Use Astro default static site generation with optimization enabled

**Rationale**:
- Astro's static site generation is perfect for this use case
- Pre-rendered HTML provides instant page loads and excellent SEO
- Built-in optimizations (image optimization, code splitting, tree-shaking) out-of-the-box
- Zero JavaScript by default (unless explicitly added via client directives)

**Configuration**:
```astro
// astro.config.mjs
export default defineConfig({
  site: 'https://oca.net.br',
  output: 'static',
  compressHTML: true,
  image: {
    service: 'sharp',
    dirs: ['./src/images', './public/images']
  },
  build: {
    inlineStylesheets: 'auto'
  }
});
```

**Alternatives Considered**:
- Server-Side Rendering (SSR): Rejected as overkill for static content, adds complexity
- Static Site Generator alternatives (Next.js, Hugo): Rejected as Astro provides better performance for this use case and aligns with project constitution

---

### 2. Accessibility Best Practices for Landing Pages

**Question**: How to ensure WCAG 2.1 AA compliance for the landing page?

**Decision**: Follow comprehensive accessibility guidelines with semantic HTML and ARIA attributes

**Rationale**:
- Accessibility is a NON-NEGOTIABLE principle in OCA's constitution
- WCAG 2.1 AA is the industry standard for web accessibility
- Semantic HTML provides foundation for screen readers and keyboard navigation

**Implementation Guidelines**:
- Use semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<footer>`, `<section>`, `<article>`)
- Ensure color contrast ratios ≥ 4.5:1 for text
- All interactive elements must be keyboard accessible
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- ARIA labels for interactive elements without visible text
- Skip navigation link for keyboard users
- Focus management for interactive elements

**Testing Tools**:
- axe DevTools for automated accessibility testing
- Manual keyboard navigation testing
- Screen reader testing (NVDA, VoiceOver)
- Lighthouse accessibility audit

**Alternatives Considered**: None - accessibility is mandatory per constitution

---

### 3. SEO Optimization for Landing Page

**Question**: How to optimize the landing page for search engines while maintaining performance?

**Decision**: Use Astro's built-in SEO capabilities with meta tags and Open Graph support

**Rationale**:
- Landing page needs good search visibility for OCA's mission
- Static site generation provides excellent SEO foundation
- Meta tags and Open Graph enable proper display in search results and social media

**Implementation**:
```astro
---
// src/layouts/Layout.astro
const canonicalURL = new URL(Astro.url.pathname, Astro.site);

const meta = {
  title: 'Oca',
  description: 'Uma internet brasileira, privada por padrão, acessível, e sua.',
  image: '/images/oca-social.jpg',
  locale: 'pt_BR',
  type: 'website'
};
---

<!-- HTML head with meta tags -->
<meta charset="UTF-8" />
<link rel="canonical" href={canonicalURL} />
<meta name="description" content={meta.description} />
<meta name="viewport" content="width=device-width" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content={meta.type} />
<meta property="og:url" content={canonicalURL} />
<meta property="og:title" content={meta.title} />
<meta property="og:description" content={meta.description} />
<meta property="og:image" content={new URL(meta.image, Astro.site)} />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={canonicalURL} />
<meta property="twitter:title" content={meta.title} />
<meta property="twitter:description" content={meta.description} />
<meta property="twitter:image" content={new URL(meta.image, Astro.site)} />
```

**Alternatives Considered**: External SEO libraries (react-helmet) - Rejected as overkill for static site, Astro's built-in capabilities sufficient

---

### 4. Image Optimization Strategy

**Question**: How to optimize images for performance while maintaining visual quality?

**Decision**: Use Astro's built-in Image component with Sharp service for optimization

**Rationale**:
- Images are often the largest assets on landing pages
- Astro's Image component provides automatic optimization, lazy-loading, and responsive resizing
- Sharp service provides high-quality, fast image processing
- Supports multiple formats (WebP, AVIF) with fallback to JPEG/PNG

**Implementation**:
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../public/images/hero.jpg';
---

<Image 
  src={heroImage}
  alt="OCA - Uma internet brasileira"
  format="webp"
  widths={[400, 800, 1200]}
  loading="eager"
  placeholder="blur"
/>
```

**Optimization Techniques**:
- Use WebP format with JPEG fallback
- Implement lazy-loading for below-the-fold images
- Generate responsive image sizes for different breakpoints
- Apply blur placeholders for better perceived performance
- Compress images to <100KB where possible

**Alternatives Considered**:
- Manual image optimization: Rejected as time-consuming and error-prone
- External CDN (Cloudinary, ImageKit): Rejected as adds external dependency and cost

---

### 5. Portuguese (pt-BR) Language Support

**Question**: How to properly configure Portuguese language support for the landing page?

**Decision**: Set HTML lang attribute and use Portuguese content throughout

**Rationale**:
- Portuguese is the primary language for OCA's target audience
- Proper language declaration ensures correct screen reader pronunciation
- Aligns with constitution requirement for pt-BR as primary language

**Implementation**:
```astro
---
// src/layouts/Layout.astro
const lang = 'pt-BR';
---

<html lang={lang}>
  <head>
    <meta http-equiv="Content-Language" content="pt-br" />
  </head>
</html>
```

**Content Guidelines**:
- Use natural, conversational Portuguese
- Avoid direct translations - write for Brazilian Portuguese audience
- Use culturally appropriate terminology
- Test readability with native Portuguese speakers

**Alternatives Considered**: Multi-language support (i18n) - Rejected as out of scope for MVP, Portuguese-only is sufficient for initial launch

---

### 6. Performance Monitoring and Testing

**Question**: How to ensure performance targets are met and maintained?

**Decision**: Use Lighthouse for automated performance audits with defined thresholds

**Rationale**:
- Constitution requires performance-critical approach
- Automated testing ensures performance targets are met
- Lighthouse is industry standard for web performance measurement

**Performance Targets**:
- Largest Contentful Paint (LCP): <2.5s on 3G
- First Input Delay (FID): <100ms
- Cumulative Layout Shift (CLS): <0.1
- Time to Interactive (TTI): <3.8s

**Testing Setup**:
```bash
# Run Lighthouse audit
npx lighthouse http://localhost:4321 --view --preset=desktop

# Continuous monitoring
# Add to CI/CD pipeline
npx lighthouse http://oca.net.br --output=json --output-path=./reports/lighthouse.json
```

**Performance Budgets**:
- Total JavaScript: <100KB
- Total CSS: <50KB
- Total images: <500KB
- Initial page size: <1MB

**Alternatives Considered**: Custom performance monitoring tools - Rejected as Lighthouse provides comprehensive coverage and integrates well with development workflow

---

## Summary of Technical Decisions

| Component | Technology/Approach | Rationale |
|-----------|-------------------|-----------|
| Framework | Astro 6.4.2+ | Static site generation, performance, accessibility support |
| Build Output | Static HTML | Pre-rendered for instant loads, excellent SEO |
| Language | TypeScript + Portuguese content | Type safety, native Brazilian Portuguese |
| Styling | CSS with Astro scoped styles | Performance, maintainability, scoped to components |
| Images | Astro Image component + Sharp | Automatic optimization, responsive images, lazy-loading |
| Accessibility | WCAG 2.1 AA + Semantic HTML | Constitutional requirement, inclusive design |
| Testing | Playwright + Lighthouse + axe DevTools | Comprehensive coverage, automated and manual testing |
| Deployment | Static hosting (GitHub Pages, Netlify, Vercel) | Simple, cost-effective, aligns with static output |

## Technical Dependencies

```json
{
  "devDependencies": {
    "@astrojs/check": "^0.9.4",
    "@playwright/test": "^1.48.0",
    "axe-core": "^4.10.0",
    "typescript": "^5.7.2"
  },
  "dependencies": {
    "astro": "^6.4.2",
    "sharp": "^0.33.5"
  }
}
```

## Next Steps

1. Configure Astro project with optimal settings
2. Set up project structure following defined structure
3. Implement landing page components with accessibility best practices
4. Create responsive design with mobile-first approach
5. Optimize images and assets for performance
6. Implement SEO meta tags and Open Graph support
7. Set up testing infrastructure (Playwright, Lighthouse, axe DevTools)
8. Conduct accessibility and performance audits
9. Deploy and validate on production environment
