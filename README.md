# 🎂 Luxury Birthday Landing Page

A beautiful, romantic birthday landing page built with React, TypeScript, and Framer Motion. Features elegant animations, interactive galleries, and a luxurious design aesthetic.

## ✨ Features

- **Elegant Loading Screen** - Animated monogram with progress indicator
- **Hero Section** - Video background with romantic title animations
- **Photo Gallery** - Interactive 3D photo gallery with hover effects
- **Whispers Section** - Floating message icons with hover interactions
- **Golden Moments Game** - Interactive photo discovery game
- **Gift Section** - Animated gift box reveal
- **Love Letter** - Beautiful letter section with animations
- **Animated Backgrounds** - Particle effects, glow orbs, and gradient animations

## 🚀 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations (via CDN)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Photos
Replace photos in `assets/images/` directory:
- `photo-01.jpg` to `photo-61.jpg`
- Update photo data in `src/data/photos.ts`

### Videos
Replace videos in `assets/video/`:
- `intro.mp4` - Hero section background
- `surprise.mp4` - Gift section video

### Colors
Edit CSS variables in `src/index.css`:
```css
--color-gold: #F5D08A;
--color-navy: #0B1020;
--color-ivory: #F7F2E9;
```

## 📁 Project Structure

```
src/
├── components/       # Reusable components
│   ├── GalleryBackground.tsx
│   ├── GlowOrb.tsx
│   ├── ParticleBackground.tsx
│   └── Sparkle.tsx
├── sections/        # Page sections
│   ├── GallerySection.tsx
│   ├── GameSection.tsx
│   ├── GiftSection.tsx
│   ├── HeroSection.tsx
│   ├── LetterSection.tsx
│   ├── LoadingScreen.tsx
│   └── WhispersSection.tsx
├── data/           # Data files
│   └── photos.ts
├── styles/         # CSS files
│   ├── App.css
│   ├── HeroSection.css
│   └── LoadingScreen.css
├── App.tsx         # Main app component
├── main.tsx        # Entry point
└── index.css       # Global styles
```

## 🌐 Deployment

### Vercel
1. Push to GitHub
2. Import project on Vercel
3. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist-react`
3. Deploy

## 📝 License

MIT License - feel free to use for personal projects!

## 💝 Made with Love

Created as a special birthday gift with beautiful animations and interactions.
