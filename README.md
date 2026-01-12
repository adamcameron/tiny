# Tiny

A minimal Vite-based Node.js application for testing Netlify deployment.

## Features

This tiny app demonstrates:
1. **Build step** - Uses Vite for bundling HTML, CSS, and JavaScript
2. **Environment variable usage** - Reads `MSG_NAME` from environment
3. **Asset fetching at runtime** - AJAX call to serverless function
4. **Basic HTML/CSS/JS structure** - Simple, clean architecture

## Structure

- `index.html` - Main page with "G'day [name]" greeting
- `style.css` - Styles with Comic Sans MS font
- `main.js` - JavaScript that fetches name value via AJAX
- `netlify/functions/get-name.js` - Serverless function returning `MSG_NAME` env var
- `.env` - Environment variables (MSG_NAME=default)
- `netlify.toml` - Netlify deployment configuration

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

**Note:** During local development with `npm run dev`, the Netlify function won't be available. The app will fall back to displaying "default". To test with functions locally, deploy to Netlify or use `netlify dev` (requires Netlify CLI setup).

## Deployment

This app is configured for Netlify deployment:

1. Push to GitHub
2. Connect repository to Netlify
3. Set `MSG_NAME` environment variable in Netlify dashboard (optional)
4. Deploy

The `netlify.toml` file configures:
- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`

## Environment Variables

- `MSG_NAME` - The name to display in the greeting (defaults to "default")

