# TrayReturn Landing Page

A clean, mobile-first landing page for a tray-return referral & rewards service used at food courts/canteens.

## Features

- **Mobile-first responsive design** with Tailwind CSS
- **Hero section** with clear value proposition and CTAs
- **3-step process** explanation with icons
- **Rewards & referral system** showcase
- **Real-time shelf status** visualization
- **Trust & FAQ section** with 5 key questions
- **Sign-up form** with email/phone collection
- **SEO optimized** with proper meta tags
- **Accessibility features** with large tap targets and clear contrast

## Tech Stack

- Next.js 14 with App Router
- React 18
- TypeScript
- Tailwind CSS
- Inter font family

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with SEO meta tags
│   └── page.tsx             # Main landing page
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── next.config.js           # Next.js configuration
├── COPY_CONTENT.md          # All text content for easy editing
└── README.md               # This file
```

## Design System

### Colors
- **Primary**: Blue palette (#3b82f6 to #1e3a8a)
- **Secondary**: Green palette (#22c55e to #14532d)
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)
- **CTAs**: Semibold weight (600)

### Components
- **Buttons**: Rounded corners (xl), large padding, hover states
- **Cards**: Rounded corners (2xl), subtle shadows
- **Forms**: Rounded inputs with focus states
- **Icons**: Heroicons SVG set

## Customization

All text content is available in `COPY_CONTENT.md` for easy editing. The design uses Tailwind's utility classes for easy customization.

### Key Customization Points:
- Colors in `tailwind.config.js`
- Text content in `COPY_CONTENT.md`
- Component styles in `app/globals.css`
- Page structure in `app/page.tsx`

## Deployment

This is a standard Next.js application that can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## License

This project is created for demonstration purposes.





