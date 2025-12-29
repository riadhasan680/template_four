# The Gamer Clone - Hugo + Tailwind CSS Template

A modern, responsive gaming news website template built with Hugo and Tailwind CSS, inspired by [TheGamer](https://www.thegamer.com/).

## Features

- ✅ **Hugo Static Site Generator** - Fast, secure, and SEO-friendly
- ✅ **Tailwind CSS v3** - Modern utility-first CSS framework
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark Theme** - Gaming-focused aesthetic with red accents
- ✅ **Dynamic Content** - Blog posts with categories and tags
- ✅ **Hero Section** - Featured article showcase
- ✅ **Article Grid** - Latest news layout
- ✅ **Single Post Layout** - Clean article reading experience
- ✅ **Custom Typography** - Google Fonts (Oswald + Roboto)

## Project Structure

```
template_four/
├── assets/
│   └── css/
│       └── main.css          # Tailwind CSS with custom styles
├── content/
│   └── posts/                # Blog posts in Markdown
├── layouts/
│   ├── _default/
│   │   ├── baseof.html       # Base template
│   │   ├── list.html         # Archive/list pages
│   │   └── single.html       # Single post template
│   ├── partials/
│   │   ├── header.html       # Site header/navigation
│   │   └── footer.html       # Site footer
│   └── index.html            # Homepage template
├── hugo.toml                 # Hugo configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Node.js dependencies
```

## Installation

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.101.0 or higher)
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn

### Setup

1. **Clone or navigate to the project directory:**

   ```bash
   cd template_four
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

### Development Server

Run the development server with live reload and no caching:

```bash
npm run dev
```

The site will be available at `http://localhost:1313/`

**Alternative start command:**

```bash
npm start
```

### Build for Production

Generate static files for deployment:

```bash
npm run build
```

The built site will be in the `public/` directory.

## Creating Content

### New Blog Post

Create a new post in `content/posts/`:

```markdown
+++
title = 'Your Post Title'
date = 2025-12-25T10:00:00+06:00
draft = false
featured = false
category = 'News'
tags = ['Gaming', 'News']
image = 'https://example.com/image.jpg'
summary = 'A brief summary of your post.'
+++

Your post content goes here...
```

### Front Matter Fields

- `title` - Post title
- `date` - Publication date (TOML format)
- `draft` - Set to `false` to publish
- `featured` - Set to `true` for hero section
- `category` - Post category (News, Guides, Reviews, Features)
- `tags` - Array of tags
- `image` - Featured image URL
- `summary` - Short description for cards

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'tg-primary': '#d32f2f',    // Primary red
  'tg-dark': '#121212',       // Background
  'tg-card': '#1e1e1e',       // Card background
  'tg-text': '#e0e0e0',       // Text color
  'tg-accent': '#ff5252'      // Accent color
}
```

### Navigation Menu

Edit `hugo.toml` to modify the navigation menu:

```toml
[[menu.main]]
  name = 'Your Link'
  url = '/your-page'
  weight = 50
```

### Typography

The template uses:

- **Display Font**: Oswald (headings, navigation)
- **Body Font**: Roboto (content, UI)

Change fonts in `layouts/_default/baseof.html` and `tailwind.config.js`.

## npm Scripts

- `npm run dev` - Start development server with drafts, no caching
- `npm start` - Start production-like server, no caching
- `npm run build` - Build static site for production

## Server Flags

The development server uses these flags to prevent caching issues:

- `--disableFastRender` - Rebuild all pages on change
- `--noHTTPCache` - Disable HTTP caching
- `--buildDrafts` - Include draft posts (dev only)

## Deployment

The built site is static HTML/CSS/JS and can be deployed to:

- **Netlify** - Drop the `public/` folder
- **Vercel** - Connect your Git repository
- **GitHub Pages** - Push `public/` to gh-pages branch
- **Any static host** - Upload `public/` directory

## Technologies

- [Hugo](https://gohugo.io/) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [PostCSS](https://postcss.org/) - CSS Processing
- [Google Fonts](https://fonts.google.com/) - Typography

## License

This is a template project for educational and commercial use.

## Credits

Design inspired by [TheGamer](https://www.thegamer.com/)

---

**Enjoy building your gaming news site! 🎮**
