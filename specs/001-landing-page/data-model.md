# Data Model: Landing Page for OCA

**Feature**: Landing Page for OCA
**Date**: 2026-06-13
**Purpose**: Define data structures and entities for the landing page

## Overview

The landing page is a static web application with minimal data requirements. Content is embedded directly in components rather than retrieved from a database, following Astro's static site generation approach. This section defines the entities and their structure for clarity and maintainability.

## Entities

### Landing Page

**Purpose**: Main page entity representing the public-facing landing page

**Attributes**:
- `id`: String - Unique identifier for the page ("landing-page")
- `title`: String - Page title for browser tab ("Oca")
- `slug`: String - URL path ("/")
- `locale`: String - Content language ("pt-BR")
- `status`: String - Publication status ("published")

**Relationships**:
- Has one: `PageMetadata` (SEO and social media information)
- Has many: `ContentSection` (Mission, About, Hero sections)

**Validation Rules**:
- `title` must not be empty and must be exactly "Oca" per requirements
- `locale` must be "pt-BR" per constitution
- `status` must be "published" for production deployment

**Example**:
```typescript
interface LandingPage {
  id: string;
  title: string;
  slug: string;
  locale: string;
  status: string;
}

const landingPage: LandingPage = {
  id: "landing-page",
  title: "Oca",
  slug: "/",
  locale: "pt-BR",
  status: "published"
};
```

---

### Page Metadata

**Purpose**: SEO and social media metadata for search engines and social platforms

**Attributes**:
- `metaTitle`: String - Title for search engines ("Oca | Uma internet brasileira")
- `metaDescription`: String - Description for search engines (mission statement)
- `ogTitle`: String - Open Graph title for social sharing
- `ogDescription`: String - Open Graph description for social sharing
- `ogImage`: String - Path to social sharing image ("/images/oca-social.jpg")
- `twitterCard`: String - Twitter card type ("summary_large_image")
- `canonicalUrl`: String - Canonical URL for SEO ("https://oca.net.br/")
- `robots`: String - Search engine robots directives ("index, follow")

**Relationships**:
- Belongs to: `LandingPage`

**Validation Rules**:
- `metaTitle` must be 50-60 characters for optimal SEO
- `metaDescription` must be 150-160 characters for optimal SEO
- `ogImage` must reference an existing optimized image file
- `canonicalUrl` must be absolute URL starting with https://oca.net.br

**Example**:
```typescript
interface PageMetadata {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterCard: string;
  canonicalUrl: string;
  robots: string;
}

const pageMetadata: PageMetadata = {
  metaTitle: "Oca | Uma internet brasileira",
  metaDescription: "Uma internet brasileira, privada por padrão, acessível, e sua. Conheça a OCA e construa um futuro digital soberano.",
  ogTitle: "Oca | Uma internet brasileira",
  ogDescription: "Uma internet brasileira, privada por padrão, acessível, e sua.",
  ogImage: "/images/oca-social.jpg",
  twitterCard: "summary_large_image",
  canonicalUrl: "https://oca.net.br/",
  robots: "index, follow"
};
```

---

### Content Section

**Purpose**: Reusable content sections that make up the landing page

**Attributes**:
- `id`: String - Unique section identifier ("hero", "mission", "about", "footer")
- `type`: String - Section type (hero, text-section, cta-section, footer)
- `heading`: String - Section heading text
- `content`: String - Main content text (HTML allowed)
- `subHeading`: String (Optional) - Subheading or subtitle
- `imageUrl`: String (Optional) - Path to section image
- `callToAction`: CallToAction (Optional) - CTA button configuration
- `order`: Number - Display order on page

**Relationships**:
- Belongs to: `LandingPage`
- Has one: `CallToAction` (Optional)

**Validation Rules**:
- `id` must be unique within landing page
- `type` must be one of: hero, text-section, cta-section, footer
- `heading` must not be empty
- `order` must be a positive integer

**Example**:
```typescript
interface ContentSection {
  id: string;
  type: 'hero' | 'text-section' | 'cta-section' | 'footer';
  heading: string;
  content: string;
  subHeading?: string;
  imageUrl?: string;
  callToAction?: CallToAction;
  order: number;
}

interface CallToAction {
  text: string;
  url: string;
  variant: 'primary' | 'secondary';
}

const heroSection: ContentSection = {
  id: "hero",
  type: "hero",
  heading: "Uma internet brasileira",
  subHeading: "Privada por padrão, acessível, e sua",
  content: "<p>A OCA está construindo uma internet soberana para o Brasil, onde você tem controle sobre seus dados e sua identidade digital.</p>",
  imageUrl: "/images/hero.jpg",
  callToAction: {
    text: "Conheça nossa missão",
    url: "#about",
    variant: "primary"
  },
  order: 1
};

const missionSection: ContentSection = {
  id: "mission",
  type: "text-section",
  heading: "Nossa Missão",
  content: "<p>Construir uma infraestrutura digital brasileira que garante soberania, privacidade e acessibilidade para todos os cidadãos.</p>",
  order: 2
};
```

---

## Entity Relationships

```
Landing Page (1)
  ├── (1) Page Metadata
  └── (*) Content Section(s)
         ├── Hero Section
         ├── Mission Section
         ├── About Section
         ├── CTA Section
         └── Footer
```

## Data Flow

1. **Static Generation**: Astro reads component files during build time
2. **Content Embedding**: Content is embedded directly in `.astro` component files
3. **Metadata Injection**: Page metadata is injected via the Layout component
4. **Static Output**: Build generates optimized HTML, CSS, and static assets

## No Database Required

**Rationale**:
- This is a static landing page with no user-generated content
- Content changes require deployment (managed via git and CI/CD)
- Static site generation provides optimal performance and security
- Aligns with Astro best practices and project constitution

## Content Management

**Approach**: Content is managed through source code files
- Content is embedded in `.astro` component files
- Changes tracked via git version control
- Deployment triggers static site rebuild
- No CMS required for MVP

**Future Considerations** (Out of scope for MVP):
- Astro Content Collections for structured content management
- Headless CMS integration for non-technical content editors
- Multi-language support via i18n collections

## Validation Strategy

**Static Validation**:
- TypeScript type checking during development
- ESLint and Prettier for code quality
- Schema validation for metadata consistency

**Runtime Validation**:
- HTML validation via W3C validator
- Accessibility validation via axe DevTools
- Performance validation via Lighthouse

## Summary

The data model for the OCA landing page is intentionally simple, reflecting the static nature of the application. No database is required - all content is embedded in components and generated at build time. This approach ensures optimal performance, security, and maintainability while meeting all constitutional requirements for accessibility and privacy.
