# Portfolio Architecture Guide

This document outlines the architectural patterns, best practices, and file structure used in this Next.js portfolio project.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main portfolio feed page
│   ├── globals.css        # Global styles
│   └── api/               # API routes
│       └── contact/
│           └── route.ts   # Contact form endpoint
├── components/            # Reusable React components
│   ├── Home.tsx          # Hero and featured projects
│   ├── Projects.tsx      # Projects grid component
│   ├── ProjectCard.tsx   # Individual project card
│   ├── Skills.tsx        # Skills section
│   ├── About.tsx         # About section
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Footer section
├── helpers/               # Utility components
│   ├── Carousel.tsx      # Carousel component
│   ├── SkillsCard.tsx    # Skills card display
│   ├── SocialMediaIcons.tsx
│   └── StoriesCards.tsx  # Project story cards
├── data/                  # Centralized data files
│   └── projects.ts       # Single source of truth for projects
├── constants/             # Configuration constants
│   └── config.ts         # Site config, navigation, colors
├── types.ts              # TypeScript interfaces
└── global.d.ts           # Global type definitions

public/                    # Static assets
├── projects/             # Project images
├── hero/                 # Hero section images
├── testimonials/         # Client testimonials
├── icons/                # Icon assets
└── assets/               # General assets
```

## 🎯 Best Practices Applied

### 1. **Single Source of Truth**
- Projects data is centralized in `src/data/projects.ts`
- Used by both homepage feed and projects page
- Update once, reflect everywhere
- **Benefit**: Eliminates duplication and sync issues

### 2. **Centralized Configuration**
- All hardcoded values moved to `src/constants/config.ts`
- Site metadata, navigation links, colors, and text
- Easy to maintain and update
- **Benefit**: Reduces magic strings, improves maintainability

### 3. **Component Composition**
- Components are small and focused
- Props-based configuration
- Proper TypeScript typing in `src/types.ts`
- **Benefit**: Reusability, testability, maintainability

### 4. **Image Optimization**
- Next.js Image component used throughout
- Automatic WebP/AVIF conversion in `next.config.js`
- Lazy loading and responsive images
- **Benefit**: Better performance, automatic optimization

### 5. **Semantic HTML & Accessibility**
- Proper heading hierarchy
- ARIA labels for interactive elements
- Alt text for all images
- Keyboard navigation support
- **Benefit**: Better SEO, accessibility compliance

### 6. **Performance Optimizations**
- Image compression and format optimization
- CSS minification via Tailwind
- React strict mode enabled
- ISR (Incremental Static Regeneration) configured
- **Benefit**: Faster page loads, better Core Web Vitals

### 7. **Security Headers**
- HSTS, CSP, and other security headers configured
- XSS protection enabled
- Strict referrer policy
- **Benefit**: Enhanced security posture

### 8. **TypeScript**
- Strict mode enabled in `tsconfig.json`
- All components properly typed
- Type interfaces in `src/types.ts`
- **Benefit**: Fewer runtime errors, better IDE support

## 📊 Data Flow

```
projectsData (src/data/projects.ts)
├── Used by: page.tsx (main feed)
├── Used by: Projects.tsx (projects page)
└── Used by: Home.tsx (featured projects)
```

**All components pull from the same data source**, ensuring consistency across the application.

## 🔧 Configuration Management

All configuration is in `src/constants/config.ts`:

```typescript
- SITE_CONFIG     // Metadata, URLs
- SOCIAL_LINKS    // Social media URLs
- NAVIGATION      // Navigation links
- HERO_SECTION    // Hero text content
- COLORS          // Brand colors
```

**Environment Variables** (`.env.local`):
- `NEXT_PUBLIC_SITE_URL` - Base URL for the site
- Contact form email settings

## 🚀 Adding a New Project

1. Add entry to `src/data/projects.ts`:
```typescript
{
  title: 'Project Name',
  url: 'https://project-url.com/',
  image: '/projects/project-image.png',
  description: 'Project description...',
  tags: ['Tag1', 'Tag2'],
}
```

2. Add image to `public/projects/`
3. No other files need changes! The data flows through automatically.

## 🎨 Styling Strategy

- **Tailwind CSS** for utility-first styling
- Custom CSS in `src/app/globals.css`
- Color values centralized in `src/constants/config.ts`
- Consistent spacing, sizing, and typography

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`
- Flexbox and Grid for layouts
- Images optimized for all viewport sizes

## ✅ Code Quality Tools

- **ESLint** (`.eslintrc.json`) - Code quality enforcement
- **TypeScript** - Static type checking
- **Next.js Lint** - Framework-specific rules

Run linting:
```bash
npm run lint
```

## 🔄 Development Workflow

1. **Update project data**: Edit `src/data/projects.ts`
2. **Update config**: Edit `src/constants/config.ts`
3. **Update components**: Edit relevant files in `src/components/` or `src/helpers/`
4. **Test**: Run `npm run dev` and verify changes
5. **Build**: Run `npm run build` to check for errors

## 🚀 Deployment

This project is optimized for deployment on:
- Vercel (recommended - seamless Next.js integration)
- Netlify
- Any Node.js hosting platform

Build command: `npm run build`
Start command: `npm run start`

## 📈 Performance Metrics

The following have been optimized:
- ✅ Image optimization and lazy loading
- ✅ Minimal JavaScript bundles
- ✅ CSS minification
- ✅ Security headers configured
- ✅ SEO metadata configured
- ✅ Open Graph for social sharing

## 🔒 Security

- ✅ Security headers configured
- ✅ XSS protection enabled
- ✅ CSRF tokens handled by Next.js
- ✅ Environment variables for sensitive data
- ✅ Input validation on contact form

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Best Practices](https://react.dev/learn)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

**Last Updated**: 2026-09-06
**Maintained by**: Aaron Anablon
