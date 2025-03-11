# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Single-page design with smooth scrolling
- Responsive layout that works on all devices
- Black and white theme with rounded corners
- Animated section transitions
- Navigation dots for easy section access
- Sections include:
  - About
  - Academic Profile
  - Experience
  - Position of Responsibility
  - Entrepreneurial Experiences
  - Extracurricular Activities

## Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Add your profile photo:
- Place your profile photo in the `public/assets` directory
- Name it `profile.jpg`

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio-website/
├── public/
│   └── assets/
│       └── profile.jpg
├── src/
│   └── app/
│       ├── components/
│       │   └── Navigation.tsx
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Intersection Observer

## Customization

You can customize the content by editing the following files:
- `src/app/page.tsx` - Main content and sections
- `src/app/globals.css` - Global styles
- `tailwind.config.js` - Theme configuration 