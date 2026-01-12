# Tiny

A minimal Vite-based static web application.

## Features

This tiny app demonstrates:
1. **Build step** - Uses Vite for bundling HTML, CSS, and JavaScript
2. **Environment variable usage** - Reads `VITE_MSG_NAME` and bakes it into the bundle at build time
3. **Static deployment** - Pure static files, no runtime functions needed
4. **Basic HTML/CSS/JS structure** - Simple, clean architecture

## Structure

- `index.html` - Main page with "G'day [name]" greeting
- `style.css` - Styles with Comic Sans MS font
- `main.js` - JavaScript entry point that imports the name value
- `src/target.js` - Exports the name value from `import.meta.env.VITE_MSG_NAME`
- `.env` - Environment variables (VITE_MSG_NAME=default)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This app can be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.):

1. Push to GitHub
2. Connect repository to your hosting service
3. Set `VITE_MSG_NAME` environment variable in the build settings (optional)
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Deploy

## Environment Variables

- `VITE_MSG_NAME` - The name to display in the greeting (defaults to "default")
  - This variable is baked into the JavaScript bundle at build time, not fetched at runtime


