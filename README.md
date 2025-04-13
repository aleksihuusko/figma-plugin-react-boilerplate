# Figma Plugin Boilerplate with React, Vite, Tailwind CSS, and Shadcn/ui

A modern, production-ready boilerplate for building Figma Plugins using React, Vite, Tailwind CSS, and Shadcn/ui. This template provides a robust foundation for creating beautiful and functional Figma plugins with a modern tech stack.

> **Note:** This boilerplate is built on top of the [Figma Plugin API](https://www.figma.com/plugin-docs/). Make sure to check out the official documentation for detailed information about the Plugin API capabilities and limitations.

[![npm](https://img.shields.io/npm/v/figma-plugin-boilerplate)](https://www.npmjs.com/package/figma-plugin-boilerplate)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/aleksihuusko/figma-plugin-boilerplate/blob/master/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5-blue.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-blue.svg)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-Latest-blue.svg)](https://ui.shadcn.com/)

## Features

- ⚡️ Lightning Fast Development with Vite
- 🎨 Beautiful UI Components with Shadcn/ui
- 🎯 TypeScript Support with Figma Plugin Types
- 🎭 Tailwind CSS for Utility-First Styling
- 🔥 Hot Module Replacement (HMR)
- 📦 Optimized Build Size
- 🎯 Type-Safe Message Passing
- 🔧 Easy Configuration
- 📱 Responsive Design Support
- 🌙 Dark Mode Support
- 🚀 Production-Ready Setup

## Tech Stack

- [React](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Shadcn/ui](https://ui.shadcn.com/) - UI Components
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Figma Plugin API](https://www.figma.com/plugin-docs/) - Figma Integration

## Prerequisites

- [Node.js 18](https://nodejs.org/en/) or later
- Package manager (npm, yarn, or pnpm)
- Figma Desktop App
- Basic knowledge of React and TypeScript

## Environment Setup

1. Install Node.js 18 or later
2. Install your preferred package manager:

   ```bash
   # Using npm (comes with Node.js)
   npm --version

   # Using yarn
   npm install -g yarn
   yarn --version

   # Using pnpm
   npm install -g pnpm
   pnpm --version
   ```

3. Install Figma Desktop App

## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/aleksihuusko/figma-plugin-boilerplate.git
cd figma-plugin-boilerplate
```

2. Install dependencies:

```bash
# Using npm
npm install

# Using yarn
yarn

# Using pnpm
pnpm install
```

3. Start development:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

4. Build for production:

```bash
# Using npm
npm run build

# Using yarn
yarn build

# Using pnpm
pnpm build
```

## Adding Plugin to Figma

1. Open Figma Desktop App
2. Go to Plugins > Development > Import plugin from manifest...
3. Select the `manifest.json` file from the `dist` directory
4. Your plugin will now appear in the development plugins menu

## Project Structure

```
figma-plugin-boilerplate/
├── src/                    # Frontend source code
│   ├── components/        # React components
│   ├── lib/              # Utility functions
│   ├── styles/           # Global styles
│   └── main.tsx          # Entry point
├── src-code/             # Figma plugin code
│   └── code.ts           # Plugin logic
├── public/               # Static assets
├── dist/                 # Build output
└── vite.config.ts        # Vite configuration
```

## Adding Shadcn/ui Components

1. Install a component:

```bash
pnpm dlx shadcn-ui@latest add button
```

2. Use the component in your React code:

```tsx
import { Button } from '@/components/ui/button'

export function MyComponent() {
  return <Button>Click me</Button>
}
```

## Message Passing Between UI and Plugin

The boilerplate includes type-safe message passing between the UI and plugin code:

```typescript
// In your UI code
import { dispatchTS } from '@/lib/utils'

dispatchTS('myEvent', { data: 'value' })

// In your plugin code
import { listenTS } from '@/lib/utils'

listenTS('myEvent', (data) => {
  console.log(data.value)
})
```

## Development Tips

1. Enable Hot Reload in Figma:

   - Go to Plugins > Development > Hot Reload Plugin

2. View Console Logs:

   - Go to Plugins > Development > Show/Hide Console

3. Debug Your Plugin:
   - Use Chrome DevTools for UI debugging
   - Use Figma Console for plugin code debugging

## Building for Production

1. Create a production build:

```bash
npm run build
```

2. The build output will be in the `dist` directory:
   - `manifest.json` - Plugin manifest
   - `code.js` - Plugin code
   - `ui.html` - UI code

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find this boilerplate helpful, please consider giving it a star ⭐️ on GitHub!

## Acknowledgments

- [Figma Plugin API](https://www.figma.com/plugin-docs/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [React](https://reactjs.org/)
- [Bolt Figma](https://github.com/hyperbrew/bolt-figma) - The original boilerplate that inspired this template

## Documentation

### Official Documentation

- [Figma Plugin API Documentation](https://www.figma.com/plugin-docs/) - Official Figma Plugin API documentation
- [Figma Plugin API Reference](https://www.figma.com/plugin-docs/api/properties/figma-root/) - Complete API reference
- [Figma Plugin Examples](https://www.figma.com/plugin-docs/examples/) - Official examples and tutorials

### Framework Documentation

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com/docs)
