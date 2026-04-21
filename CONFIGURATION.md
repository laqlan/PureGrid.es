# Configuration Guide

## GitHub Pages Base Path

If you're deploying to a **repository page** (not a user/organization page), you may need to configure the base path.

### When to Configure

- ✅ **Repository page**: `https://username.github.io/repository-name/` - **NEEDS BASE PATH**
- ❌ **User/Org page**: `https://username.github.io/` - **NO BASE PATH NEEDED**

### How to Configure

If deploying to a repository page, edit `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repository-name/', // Add this line
  plugins: [react(), tailwindcss(), viteSingleFile()],
  // ... rest of config
});
```

**Example:**
If your repo is `https://github.com/john/puregrid`, set:
```typescript
base: '/puregrid/',
```

### Custom Domain

If using a custom domain (e.g., `puregrid.com`):

1. Add a `CNAME` file in the `public/` folder containing your domain:
   ```
   puregrid.com
   ```

2. Set the base path in `vite.config.ts`:
   ```typescript
   base: '/', // Root path for custom domain
   ```

3. Configure DNS:
   - Add a CNAME record pointing to `username.github.io`
   - Or A records pointing to GitHub's IP addresses

4. In GitHub Settings → Pages, add your custom domain

## Environment Variables

Create a `.env` file for environment-specific settings:

```env
# Example environment variables
VITE_CONTACT_EMAIL=hello@puregrid.com
VITE_WHATSAPP_NUMBER=+34695727512
VITE_SITE_URL=https://puregrid.com
```

Access in code:
```typescript
const email = import.meta.env.VITE_CONTACT_EMAIL;
```

## Build Options

### Single File Build (Current)

The site is configured to build as a single HTML file (current setup).

**Pros:**
- Easy to deploy anywhere
- No asset path issues
- Single file to manage

**Cons:**
- Larger initial file size
- Less caching optimization

### Multi-File Build (Alternative)

To switch to standard multi-file build, edit `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(), 
    // viteSingleFile() // Comment out this line
  ],
  // ... rest
});
```

**Pros:**
- Better caching
- Smaller initial load (with code splitting)

**Cons:**
- Requires proper base path configuration
- More complex asset management

## Performance Optimization

### Image Optimization

1. Use WebP format for better compression:
   ```bash
   # Convert PNG to WebP
   cwebp -q 80 logo.png -o logo.webp
   ```

2. Provide multiple sizes:
   ```
   public/
   ├── logo.png
   ├── logo@2x.png (for Retina displays)
   └── logo.webp
   ```

### Lazy Loading

Images in services and portfolio are already set up for optimal loading.

### Bundle Size

Check your bundle size:
```bash
npm run build
```

Look at the output to see file sizes.

## Custom Fonts

To add custom fonts:

1. Add font files to `public/fonts/`

2. Update `src/index.css`:
   ```css
   @font-face {
     font-family: 'YourFont';
     src: url('/fonts/YourFont.woff2') format('woff2');
   }
   
   body {
     font-family: 'YourFont', sans-serif;
   }
   ```

## Analytics

### Google Analytics

Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

In `src/App.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <>
      {/* Your components */}
      <Analytics />
    </>
  );
}
```

## SEO Configuration

### Meta Tags

Edit `index.html`:

```html
<head>
  <meta name="description" content="PureGrid - Premium digital marketing agency">
  <meta name="keywords" content="digital marketing, web development, branding">
  
  <!-- Open Graph -->
  <meta property="og:title" content="PureGrid - Digital Marketing Agency">
  <meta property="og:description" content="Transform your digital presence">
  <meta property="og:image" content="https://yoursite.com/og-image.jpg">
  <meta property="og:url" content="https://yoursite.com">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="PureGrid">
  <meta name="twitter:description" content="Premium digital solutions">
</head>
```

### Sitemap

Create `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### robots.txt

Create `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

## Form Integration

The contact form currently shows an alert. To integrate with a backend:

### EmailJS (Recommended for static sites)

```bash
npm install @emailjs/browser
```

Update `src/components/Contact.tsx`:

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  ).then(() => {
    alert('Message sent successfully!');
  }).catch(() => {
    alert('Failed to send message.');
  });
};
```

### Formspree

Or use Formspree - change form action:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Browser Support

The site supports:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

For older browser support, add polyfills as needed.

## Troubleshooting

### Images Not Loading

1. Check file paths (case-sensitive)
2. Verify images are in `public/` folder
3. Check browser console for errors
4. Ensure base path is configured correctly

### GitHub Pages 404

1. Check GitHub Actions workflow ran successfully
2. Verify Pages is enabled in repository settings
3. Check base path in `vite.config.ts`
4. Clear browser cache

### Styling Issues

1. Run `npm run build` and check for errors
2. Clear Tailwind cache: `rm -rf node_modules/.cache`
3. Verify Tailwind config is correct

---

Need more help? Contact via WhatsApp: +34 695 727 512
