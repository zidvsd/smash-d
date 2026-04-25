# Smash'd - Comic Book Burger Shop

A modern, vibrant burger restaurant website built with React, TypeScript, and Tailwind CSS. Features bold comic-book inspired design with dark mode support and smooth animations.

## Features

- **Comic Book Design**: Bold, colorful UI with a retro comic aesthetic
- **Dark Mode Support**: Automatic dark/light theme switching using CSS variables
- **Responsive Layout**: Mobile-first design that adapts to all screen sizes
- **Smooth Animations**: Subtle transitions and hover effects for enhanced UX
- **Menu System**: Interactive burger menu with categories and filtering
- **Featured Products**: Showcase hero section for promotional items
- **Contact Section**: Integrated contact form and location map
- **Accessibility**: Semantic HTML and keyboard navigation support

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd smash'd
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server at `http://localhost:5173`

### Build

```bash
npm run build
```

Generates optimized production build in `dist/`

### Preview

```bash
npm run preview
```

Serves the production build locally

## Project Structure

```
src/
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, Menu, Bestsellers, Featured, etc
│   ├── ui/              # Reusable UI components (Button, Avatar)
│   ├── hooks/           # Custom React hooks
│   └── theme-provider.tsx
├── data/                # Menu and navigation JSON data
├── lib/                 # Utility functions
├── App.tsx              # Main component
├── main.tsx             # Entry point
└── index.css            # Global styles with Tailwind
```

## Key Technologies

- **React 19** - UI framework
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS 4** - Utility-first styling with custom theme
- **Vite** - Lightning-fast build tool
- **Motion** - Animation library
- **Lucide React** - Icon library

## Development Scripts

| Command             | Description                |
| ------------------- | -------------------------- |
| `npm run dev`       | Start development server   |
| `npm run build`     | Build for production       |
| `npm run preview`   | Preview production build   |
| `npm run lint`      | Run ESLint                 |
| `npm run format`    | Format code with Prettier  |
| `npm run typecheck` | Type check with TypeScript |

## Styling & Theme

The project uses Tailwind CSS with a custom theme defined in `src/index.css`:

- **Primary**: Electric Yellow (#FFD600)
- **Secondary**: Ketchup Red (#E8272A)
- **Background**: Warm Cream (light) / Neutral Dark (dark)

### Dark Mode

Theme switching is handled via the `theme-provider.tsx`. The app automatically respects system preferences and includes manual theme toggle support.

CSS variables automatically adapt colors across the entire application:

```css
--foreground    /* Text color */
--background    /* Background color */
--primary       /* Primary accent color */
--secondary     /* Secondary accent color */
```

## Performance Optimizations

- **Code Splitting**: Automatic route-based splitting with Vite
- **CSS Variables**: Reduces duplication and enables fast theme switching
- **Lazy Loading**: Components load only when needed
- **Image Optimization**: Using native browser image loading
- **Memoization**: React components optimized with memo where beneficial
- **Tree Shaking**: Unused code removed during build

## Contributing

To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run `npm run format` and `npm run lint` to ensure code quality
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Code Quality

The project maintains high code quality standards:

- ESLint configuration for code consistency
- Prettier for automatic formatting
- TypeScript for type safety
- Tailwind CSS for consistent styling

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Created with passion for bold, functional design.

---

For questions or support, feel free to open an issue in the repository.
