<!--
SYNC IMPACT REPORT
==================

Version change: None (Initial Version) → 1.0.0

Modified Principles: None (Initial)

Added Sections:
- Core Principles: Accessibility-First, Performance-Critical, Privacy by Design, Progressive Enhancement, Astro Best Practices
- Technical Constraints: Technology stack, deployment, performance targets, accessibility standards
- Development Workflow: Code review requirements, quality gates, deployment approval, documentation
- Governance: Amendment procedure, compliance verification, complexity justification

Removed Sections: None

Templates Requiring Updates:
✅ .specify/templates/plan-template.md - Constitution Check section aligns with new principles
✅ .specify/templates/spec-template.md - Requirements section supports principle-driven constraints
✅ .specify/templates/tasks-template.md - Task categorization reflects principle-driven development
✅ All template references generic and compatible with new principles

Follow-up TODOs: None
-->

# OCA Vitrine Constitution

## Core Principles

### I. Accessibility-First (NON-NEGOTIABLE)
OCA's mission is to be accessible to all. Every component MUST meet WCAG 2.1 AA standards by default. Color contrast ratios MUST be ≥ 4.5:1 for text, keyboard navigation MUST work for all interactive elements, and semantic HTML MUST be used to ensure screen reader compatibility. Accessibility testing is mandatory before deployment.

**Rationale**: OCA exists to be "uma internet brasileira, privada por padrão, acessível, e sua" - accessibility is not optional, it's foundational to our mission.

### II. Performance-Critical
Landing pages load times MUST be under 2 seconds on 3G connections. All images MUST be optimized and lazy-loaded, JavaScript bundles MUST be tree-shaken, and Astro's static site generation capabilities MUST be leveraged to deliver pre-rendered HTML. Core Web Vitals (LCP, FID, CLS) MUST be monitored and kept in the "Good" range.

**Rationale**: Slow landing pages lose users before they see OCA's message. Performance is a feature, not an afterthought.

### III. Privacy by Design
No third-party tracking libraries unless explicitly required and user-consented. All data collection MUST be minimal, transparent, and documented. Cookie consent MUST be implemented if any persistence is used. LocalStorage usage MUST be justified and minimal. User data MUST NOT be shared without explicit consent.

**Rationale**: OCA's promise is "privada por padrão" (private by default). We must embody this in our technical implementation.

### IV. Progressive Enhancement
The landing page MUST render meaningful content with HTML/CSS only. JavaScript enhancements SHOULD add interactivity but MUST NOT break core functionality. The morph transition to app shell MUST gracefully degrade if JavaScript is disabled or fails to load. Mobile-first responsive design is mandatory.

**Rationale**: Ensures OCA Vitrine works across all devices, browsers, and network conditions, reaching the widest possible audience.

### V. Astro Best Practices
Follow Astro's conventions for components (`.astro` files), content collections, and routing. Use Astro's built-in optimization features: partial hydration, client directives, and framework components sparingly and purposefully. Static site generation MUST be preferred over SSR unless dynamic data requires otherwise.

**Rationale**: Astro was chosen for its performance and DX benefits. Deviating from best practices undermines these advantages and increases technical debt.

## Technical Constraints

**Technology Stack**: Astro 6.4.2+, Node.js 22.12.0+
**Deployment**: Static site generation (SSG) via `astro build`
**Target Platforms**: Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+), mobile devices (iOS 14+, Android 10+)
**Performance Targets**: <2s LCP on 3G, <100ms TTI, CLS <0.1
**Accessibility Standards**: WCAG 2.1 AA, semantic HTML, ARIA attributes where needed
**Storage**: Client-side only (localStorage/sessionStorage) with minimal usage
**Testing**: Playwright for end-to-end testing, manual accessibility audits

**Language**: Portuguese (pt-BR) as primary language for UI content

## Development Workflow

**Code Review Requirements**: All changes MUST undergo peer review. Reviews MUST verify compliance with this constitution, particularly accessibility and performance requirements.

**Quality Gates**:
- Linting MUST pass (configured ESLint/Prettier rules)
- Accessibility audit MUST be performed (axe DevTools or similar)
- Performance audit SHOULD be run (Lighthouse) for significant changes
- Manual testing on target browsers and mobile devices

**Deployment Approval**: Deployment requires:
- All quality gates passing
- Code review approval
- Successful preview environment validation (`astro preview`)

**Documentation**: Significant features MUST be documented in `especificacoes/` with clear acceptance criteria.

## Governance

This constitution supersedes all other development practices for the OCA Vitrine project. Amendments require:
1. Clear documentation of the change rationale
2. Peer review and approval from project maintainers
3. Migration plan if the amendment introduces breaking changes
4. Version bump following semantic versioning

All pull requests and code reviews MUST verify compliance with core principles. Deviations from principles MUST be explicitly justified and documented in the PR description. Complexity MUST be justified - if a simpler approach exists, it MUST be chosen.

For runtime development guidance, refer to `AGENTS.md` and specification documents in `especificacoes/`.

**Version**: 1.0.0 | **Ratified**: 2026-06-13 | **Last Amended**: 2026-06-13
