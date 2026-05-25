# Rivexis - AI Automation Landing Page

A modern, high-performance landing page built with **Next.js 14**, **React 18**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** component architecture.

## Features

✨ **Modern Stack**
- Next.js 14 with App Router
- React 18 with hooks
- TypeScript for type safety
- Tailwind CSS for utility-first styling
- Responsive design (mobile-first)

🎨 **Beautiful Animations**
- Animated background with mouse-tracking gradient
- Floating elements with scroll triggers
- Word-by-word reveal animations
- Ripple effects on click
- Grid pattern animations

🚀 **Conversion-Focused**
- Pain-first messaging (Problem → Agitate → Solve)
- Verifiable social proof
- Multiple CTAs with trust signals
- Responsive navigation
- Accessible components

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & Tailwind directives
├── components/
│   └── ui/
│       └── digital-serenity-animated-landing-page.tsx  # Animated background
├── public/                 # Static assets
├── Brand asset/            # Brand guidelines & logos
├── package.json            # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind configuration
├── postcss.config.js      # PostCSS config
├── next.config.js         # Next.js config
└── README.md              # This file
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- tailwindcss-animate
- clsx & tailwind-merge (for utility classes)

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

### 3. Build for Production

```bash
npm run build
npm run start
```

## Key Components

### `DigitalSerenity` Component
Located in `/components/ui/digital-serenity-animated-landing-page.tsx`

Provides the animated background with:
- Mouse-tracking gradient
- Floating elements
- Grid pattern SVG
- Ripple effects on click
- Word reveal animations
- Corner decorations

### Main Landing Page
Located in `/app/page.tsx`

Includes:
- Fixed navigation with mobile menu
- Hero section with CTAs and trust signals
- Features grid (6 features)
- How It Works section (3 steps)
- Testimonials section (3 reviews with verification)
- FAQ section (5 questions)
- Final CTA section
- Footer with links

## Customization

### Colors
Colors are defined in `tailwind.config.ts` and `app/globals.css`. The design uses:
- Primary Blue: #0052CC
- Secondary Cyan: #00D4FF
- Background Navy: #0A0E27

To change colors:
1. Update CSS variables in `app/globals.css`
2. Update Tailwind theme in `tailwind.config.ts`

### Content
Edit `/app/page.tsx` to update:
- Headlines and copy
- Features list
- Testimonials
- FAQ questions & answers
- Navigation links

### Fonts
Currently uses system fonts. To add custom fonts:
1. Add to `@import` in `app/globals.css` or next/font
2. Update `tailwind.config.ts` font-family settings

### Animations
Animations are defined in:
- `app/globals.css` - CSS keyframes
- `components/ui/digital-serenity-animated-landing-page.tsx` - React-controlled animations

## Performance

- **Image Optimization**: No external images (uses emoji icons and SVG)
- **Code Splitting**: Next.js automatically splits code at route boundaries
- **CSS-in-JS**: Tailwind provides optimized CSS output
- **Type Safety**: TypeScript prevents runtime errors

## Responsive Design

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

All sections use responsive utilities for optimal mobile experience.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- AWS Amplify
- Netlify
- Heroku
- Any Node.js hosting

## Environment Variables

Currently no env variables needed. If adding backend features, create `.env.local`:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Testing

To add testing:
```bash
npm install --save-dev jest @testing-library/react
```

## SEO

Metadata is configured in `app/layout.tsx`:
- Title
- Description
- Open Graph tags

Update these values to match your branding.

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Color contrast compliance

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Styles not applying
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### TypeScript errors
```bash
# Run type check
npx tsc --noEmit
```

## Support

For issues or questions:
1. Check Next.js docs: https://nextjs.org/docs
2. Check Tailwind docs: https://tailwindcss.com/docs
3. Check React docs: https://react.dev

## License

Built for Rivexis. All rights reserved.

---

**Built with ❤️ using Next.js, React, and TypeScript**
