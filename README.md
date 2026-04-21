# PureGrid - Premium Digital Marketing Agency Website

A high-level, modern marketing agency website built with React, Vite, and Tailwind CSS. Features a beautiful, responsive design with smooth animations and a vibecoded aesthetic perfect for showcasing your digital agency.

![PureGrid](https://img.shields.io/badge/Built%20with-React-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **Modern, High-End Design** - Premium aesthetic with gradient accents and smooth animations
- **Fully Responsive** - Looks perfect on all devices (mobile, tablet, desktop)
- **WhatsApp Integration** - Floating WhatsApp button and header CTA linked to +34 695 727 512
- **Customizable Images** - Easy image swapping via public folder
- **Smooth Animations** - Engaging user experience with custom animations
- **SEO Optimized** - Semantic HTML and proper meta tags
- **Fast Performance** - Built with Vite for lightning-fast load times
- **GitHub Pages Ready** - Includes deployment workflow

## 📋 Sections

1. **Hero** - Eye-catching landing section with animated background
2. **Services** - 6 service cards with hover effects
3. **About** - Company information with feature highlights
4. **Portfolio** - Project showcase grid
5. **Contact** - Contact form and information
6. **Footer** - Links, social media, and company info

## 🚀 Quick Start

### Installation

```bash
# Clone or download this repository
git clone <your-repo-url>

# Navigate to project folder
cd puregrid-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to view your site.

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

## 🖼️ Adding Your Images

### Logo

Place your logo file as `public/logo.png` (recommended size: 200x60px)

The logo appears in:
- Header/Navigation
- Footer

### Service Images

Create images and place them in `public/services/`:

- `digital-strategy.png`
- `brand-identity.png`
- `web-development.png`
- `ui-ux-design.png`
- `seo-marketing.png`
- `content-creation.png`

Recommended size: 800x600px

### Portfolio Images

Create images and place them in `public/portfolio/`:

- `ecommerce.png`
- `brand-redesign.png`
- `mobile-app.png`
- `marketing-campaign.png`
- `saas-dashboard.png`
- `content-strategy.png`

Recommended size: 800x600px

**Note:** All images are optional! The site displays beautiful gradient fallbacks if images aren't present.

## 📱 WhatsApp Integration

The site includes WhatsApp integration in two places:

1. **Header Button** - Desktop and mobile navigation
2. **Floating Button** - Bottom-right corner with tooltip

Current number: **+34 695 727 512**

To change the number, edit `src/App.tsx`:

```tsx
<WhatsAppButton phoneNumber="+34 695 727 512" />
```

## 🎨 Customization

### Colors

The site uses an indigo/purple gradient theme. To change colors:

1. Search for `indigo-600`, `purple-600`, etc. in component files
2. Replace with your brand colors (e.g., `blue-600`, `green-600`)

### Content

- **Services**: Edit `src/components/Services.tsx`
- **About**: Edit `src/components/About.tsx`
- **Portfolio**: Edit `src/components/Portfolio.tsx`
- **Contact Info**: Edit `src/components/Contact.tsx`
- **Stats**: Edit `src/components/Hero.tsx`

### Company Name

Replace "PureGrid" throughout the codebase with your company name.

## 🌐 Deploy to GitHub Pages

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

Quick steps:

1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. The site will auto-deploy via GitHub Actions

Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## 📁 Project Structure

```
puregrid-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
├── public/
│   ├── services/               # Service images
│   ├── portfolio/              # Portfolio images
│   └── logo.png               # Your logo
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Navigation
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Services.tsx       # Services grid
│   │   ├── About.tsx          # About section
│   │   ├── Portfolio.tsx      # Portfolio grid
│   │   ├── Contact.tsx        # Contact form
│   │   ├── Footer.tsx         # Footer
│   │   └── WhatsAppButton.tsx # Floating WhatsApp
│   ├── App.tsx                # Main component
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── package.json              # Dependencies
└── vite.config.ts            # Vite config
```

## 🛠️ Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **GitHub Actions** - CI/CD

## 📄 License

This project is open source and available under the MIT License.

## 💬 Support

For questions or issues:
- Check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide
- Review component files for customization examples
- WhatsApp: +34 695 727 512

---

**Built with ❤️ for PureGrid**

Ready to elevate your digital presence? Start customizing your site today!
