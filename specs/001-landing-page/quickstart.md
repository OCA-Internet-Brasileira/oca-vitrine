# Quickstart Guide: Landing Page for OCA

**Feature**: Landing Page for OCA
**Date**: 2026-06-13
**Purpose**: Developer guide for setting up, running, and contributing to the landing page

## Prerequisites

- Node.js 22.12.0 or higher
- Git
- Text editor (VS Code recommended)
- Web browser (Chrome, Firefox, Safari, or Edge)
- Terminal access

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/OCA-Internet-Brasileira/oca-vitrine.git
cd oca-vitrine
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required dependencies including Astro and development tools.

### 3. Start Development Server

```bash
npm run dev
```

The landing page will be available at `http://localhost:4321`

## Project Structure

```
oca-vitrine/
├── src/
│   ├── components/          # Reusable Astro components
│   ├── layouts/           # Page layout templates
│   ├── pages/             # Page routes
│   └── styles/            # Global styles
├── public/                # Static assets (images, icons)
├── tests/                 # Test files
├── .specify/             # Project configuration
├── package.json           # Project dependencies
└── astro.config.mjs      # Astro configuration
```

## Development Workflow

### Making Changes

1. **Edit Component Files**: Modify `.astro` component files in `src/components/`
2. **Live Preview**: Changes automatically refresh in the browser
3. **Test Responsiveness**: Use browser dev tools to test mobile/tablet views
4. **Verify Accessibility**: Run accessibility audit after significant changes

### Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run type checking
npm run check

# Run linting
npm run lint

# Run formatting
npm run format

# Run tests
npm run test

# Run accessibility audit
npm run test:accessibility

# Run performance audit
npm run test:performance
```

## Component Structure

### Creating a New Component

```bash
# Create component file
touch src/components/MyComponent.astro
```

```astro
---
// src/components/MyComponent.astro
const props = Astro.props;
interface Props {
  title: string;
  content: string;
}

const { title, content } = props;
---

<section>
  <h2>{title}</h2>
  <p>{content}</p>
</section>

<style>
  section {
    padding: 2rem;
    margin: 1rem 0;
  }

  h2 {
    color: #333;
    font-size: 1.5rem;
  }
</style>
```

### Using Images

```astro
---
import { Image } from 'astro:assets';
import myImage from '../public/images/my-image.jpg';
---

<Image 
  src={myImage} 
  alt="Descriptive text for accessibility"
  widths={[400, 800, 1200]}
  loading="lazy"
/>
```

## Styling Guidelines

### Scoped Styles

Styles in `.astro` components are scoped by default:

```astro
<style>
  h1 {
    color: blue;
  }
</style>
```

### Global Styles

For global styles, use `src/styles/global.css`:

```css
:root {
  --primary-color: #0066cc;
  --text-color: #333;
  --background-color: #fff;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

Import in layout:

```astro
---
import '../styles/global.css';
---
```

### Responsive Design

Use mobile-first approach:

```css
.component {
  padding: 1rem;
}

@media (min-width: 768px) {
  .component {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .component {
    padding: 3rem;
  }
}
```

## Accessibility Guidelines

### Semantic HTML

```html
<header>
  <nav>
    <ul>
      <li><a href="/about">Sobre</a></li>
      <li><a href="/contact">Contato</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Heading</h1>
    <p>Content</p>
  </article>
</main>

<footer>
  <p>&copy; 2026 OCA</p>
</footer>
```

### Keyboard Navigation

```html
<!-- Ensure interactive elements are keyboard accessible -->
<button type="button">Click me</button>
<a href="/page">Link</a>

<!-- Add ARIA labels when needed -->
<button aria-label="Close modal">×</button>
```

### Color Contrast

Ensure text contrast ratio ≥ 4.5:1:

```css
/* Good contrast */
.text {
  color: #333;  /* Dark text on light background */
}

/* Good contrast with accent color */
.accent {
  color: #0066cc;  /* Blue accent color */
}
```

## Performance Guidelines

### Image Optimization

- Use Astro's Image component for all images
- Set appropriate widths for responsive display
- Use WebP format with JPEG fallback
- Lazy-load images below the fold

### Code Splitting

Astro automatically splits JavaScript. Use client directives sparingly:

```astro
<!-- Use only when necessary -->
<MyComponent client:load />
<MyComponent client:visible />
```

### Build Optimization

```javascript
// astro.config.mjs
export default defineConfig({
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
```

## Testing

### End-to-End Tests

```bash
# Run E2E tests
npm run test:e2e

# Run tests in headed mode
npm run test:e2e:headed
```

### Accessibility Testing

```bash
# Run accessibility audit
npm run test:accessibility
```

Manual accessibility testing checklist:
- [ ] Test with keyboard navigation (Tab, Enter, Escape)
- [ ] Test with screen reader (NVDA, VoiceOver)
- [ ] Check color contrast ratios
- [ ] Verify heading structure
- [ ] Test form focus management
- [ ] Verify alt text on images

### Performance Testing

```bash
# Run Lighthouse audit
npm run test:performance
```

Performance targets:
- LCP < 2.5s on 3G
- FID < 100ms
- CLS < 0.1
- Performance score > 90

## Deployment

### Build for Production

```bash
npm run build
```

This generates optimized static files in `dist/` directory.

### Deploy to Hosting

**GitHub Pages**:
```bash
# Install GitHub Pages adapter
npx astro add github-pages

# Build and deploy
npm run build
npm run deploy
```

**Netlify**:
```bash
# Connect repository to Netlify
# Build command: npm run build
# Publish directory: dist
```

**Vercel**:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Variables

Create `.env` file for production:

```env
# Add any environment variables here
# Example: SITE_URL=https://oca.net.br
```

## Troubleshooting

### Common Issues

**Port 4321 already in use**:
```bash
# Use different port
npm run dev -- --port 3000
```

**Build fails**:
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

**Styles not applying**:
- Check that styles are imported in layout
- Verify style specificity
- Clear browser cache

**Images not loading**:
- Verify image paths in public/ directory
- Check Image component configuration
- Ensure images are optimized and in supported formats

## Contributing

### Code Style

- Follow existing code conventions
- Use meaningful variable names
- Add comments for complex logic
- Keep functions small and focused

### Commit Messages

```bash
# Format: type(scope): description
git commit -m "feat(hero): add mission statement section"
git commit -m "fix(accessibility): improve keyboard navigation"
git commit -m "style(typography): adjust heading sizes"
git commit -m "refactor(components): extract reusable button"
```

### Pull Request Process

1. Create feature branch from main
2. Make changes with commits
3. Run tests and ensure they pass
4. Run accessibility and performance audits
5. Submit pull request with description
6. Address review feedback
7. Merge after approval

## Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [MDN Web Docs](https://developer.mozilla.org)

## Support

For questions or issues:
- Check existing documentation
- Review codebase examples
- Open issue on GitHub
- Contact project maintainers

---

**Next Steps**:
1. Complete installation
2. Start development server
3. Explore component files
4. Make your first change
5. Run tests and audits
6. Deploy to production
