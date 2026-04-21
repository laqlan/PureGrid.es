# Quick Start Guide - PureGrid Website

Get your PureGrid website up and running in 5 minutes!

## Step 1: Add Your Logo (Optional)

Place your logo image as `public/logo.png`

- If you don't have a logo ready, the site will show "PureGrid" text instead
- Recommended size: 200x60px or similar aspect ratio
- PNG format with transparent background works best

## Step 2: Add Service Images (Optional)

Create these images in the `public/services/` folder:

1. `digital-strategy.png`
2. `brand-identity.png`
3. `web-development.png`
4. `ui-ux-design.png`
5. `seo-marketing.png`
6. `content-creation.png`

**Don't have images yet?** No problem! The site will show beautiful gradient backgrounds as placeholders.

## Step 3: Add Portfolio Images (Optional)

Create these images in the `public/portfolio/` folder:

1. `ecommerce.png`
2. `brand-redesign.png`
3. `mobile-app.png`
4. `marketing-campaign.png`
5. `saas-dashboard.png`
6. `content-strategy.png`

**Skip this for now?** The site will work perfectly with gradient placeholders.

## Step 4: Test Locally

```bash
npm install
npm run dev
```

Open your browser to `http://localhost:5173`

## Step 5: Deploy to GitHub

### First Time Setup

1. Create a new repository on GitHub
2. In your terminal:

```bash
git init
git add .
git commit -m "Initial PureGrid website"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

3. On GitHub, go to repository Settings → Pages
4. Select "GitHub Actions" as the source
5. Wait a few minutes for the deployment to complete

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

### Future Updates

Whenever you want to update your site:

```bash
# Make your changes (update text, swap images, etc.)
git add .
git commit -m "Update website"
git push
```

GitHub will automatically rebuild and deploy your changes!

## Common Customizations

### Change WhatsApp Number

In `src/App.tsx`, line 17:
```tsx
<WhatsAppButton phoneNumber="+34 695 727 512" />
```

Replace with your number (include country code).

### Update Contact Email

In `src/components/Contact.tsx` and `src/components/Footer.tsx`:
```tsx
<span>hello@puregrid.com</span>
```

Replace with your email address.

### Modify Company Name

Search for "PureGrid" across all files and replace with your company name.

### Change Color Theme

Search for these color classes and replace them:
- `indigo-600` → your primary color
- `purple-600` → your secondary color
- `pink-600` → your accent color

Example: Replace `indigo-600` with `blue-600` for a blue theme.

### Edit Services

Open `src/components/Services.tsx` and modify the `services` array:

```tsx
const services = [
  {
    title: 'Your Service Name',
    description: 'Your service description',
    image: '/services/your-image.png',
    // ... rest of the code
  },
  // Add more services...
];
```

### Update Stats

Open `src/components/Hero.tsx` and find the stats section:

```tsx
<div className="text-4xl font-bold">500+</div>
<div className="text-sm text-gray-600">Projects Delivered</div>
```

Change the numbers and labels to match your agency.

## Need Help?

- 📖 Read the full [README.md](./README.md)
- 🚀 Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment details
- 📁 See `public/README.md` for image specifications
- 💬 WhatsApp: +34 695 727 512

## Tips

- **Start simple**: Deploy the site first, then customize gradually
- **Image optimization**: Use tools like TinyPNG to compress images
- **Mobile testing**: Always check how your site looks on mobile
- **Backup**: Keep your images in a separate folder as backup

---

That's it! You're ready to go live with your premium digital agency website. 🚀
