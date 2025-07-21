# Tri7 Dashboard - Enterprise Admin Dashboard

A modern, feature-rich enterprise admin dashboard built with Next.js 15, TypeScript, and cutting-edge UI technologies. Features a beautiful orange color theme with smooth animations and professional design.

![Dashboard Preview](https://img.shields.io/badge/Next.js-15.4.2-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38bdf8) ![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-000000)

## ✨ Features

- **🎨 Modern Orange Theme** - Professional orange color scheme with light/dark mode support
- **📊 Interactive Charts** - Beautiful data visualizations using Recharts
- **🎭 Smooth Animations** - Powered by Framer Motion and MagicUI components
- **📱 Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **🔧 Professional Sidebar** - Collapsible navigation with organized sections
- **📈 Live Data Updates** - Real-time activity feeds and animated counters
- **🎯 TypeScript First** - Full type safety and excellent developer experience
- **⚡ High Performance** - Optimized with Next.js 15 and Turbopack

## 🏗️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) with App Router
- **Language:** [TypeScript](https://typescriptlang.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) with custom orange theme
- **UI Components:** [shadcn/ui](https://ui.shadcn.com) 
- **Animations:** [Framer Motion](https://framer.com/motion) + [MagicUI](https://magicui.design)
- **Icons:** [Tabler Icons](https://tabler.io/icons) + [Lucide](https://lucide.dev)
- **Charts:** [Recharts](https://recharts.org)
- **Build Tool:** [Turbopack](https://turbo.build) for faster development

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd tri7_dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your dashboard.

## 🎯 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with orange theme
│   └── page.tsx           # Main dashboard page
├── components/
│   ├── ui/                # shadcn/ui base components
│   ├── magicui/           # MagicUI animated components
│   ├── layout/            # Layout components (sidebar, navigation)
│   ├── dashboard/         # Dashboard-specific components
│   └── charts/            # Chart components
├── lib/
│   └── utils.ts           # Utility functions
└── hooks/                 # Custom React hooks
```

## 🎨 Customization

### Theme Colors

The dashboard uses a professional orange color palette. You can customize colors in `src/app/globals.css`:

```css
:root {
  --primary: oklch(0.648 0.194 52.368); /* Orange primary */
  --chart-1: oklch(0.648 0.194 52.368); /* Primary orange */
  /* ... more color variables */
}
```

### Adding New Components

1. Use shadcn/ui CLI to add components:
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. Add MagicUI components:
   ```bash
   npx shadcn@latest add "https://magicui.design/r/[component-name]"
   ```

## 📊 Dashboard Features

### Statistics Cards
- **Animated Counters** - Numbers animate on page load
- **Trend Indicators** - Visual up/down arrows with percentage changes
- **Responsive Grid** - Adapts to different screen sizes

### Charts & Visualizations
- **Revenue Chart** - Monthly revenue bar chart
- **Analytics Chart** - User engagement area chart
- **Real-time Updates** - Live data visualization

### Activity Feeds
- **Recent Activity** - Latest user actions and transactions
- **Live Marquee** - Scrolling real-time activity feed
- **Interactive Elements** - Hover effects and animations

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to [Vercel](https://vercel.com)
2. Deploy with zero configuration

### Other Platforms
The dashboard can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn](https://twitter.com/shadcn) for the amazing UI components
- [MagicUI](https://magicui.design) for beautiful animations
- [Vercel](https://vercel.com) for Next.js and hosting platform
- [Tabler](https://tabler.io) for the comprehensive icon set
