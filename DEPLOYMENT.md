# PureGrid - Deployment Guide

## Hosting on GitHub Pages

Follow these steps to host your PureGrid website on GitHub Pages:

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it whatever you like (e.g., `puregrid-website`)
3. Make it public or private (public for free GitHub Pages)

### 2. Upload Your Code

**Option A: Using Git (Recommended)**

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - PureGrid website"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

**Option B: Upload via GitHub Web Interface**

1. Go to your repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop all your project files
4. Commit the changes

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. GitHub will automatically detect your project and suggest workflows

### 4. Create GitHub Actions Workflow

Create a file `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 5. Add Your Images

Before deploying, add your images to the `public` folder:

1. Add `public/logo.png` - Your agency logo
2. Add service images in `public/services/` folder
3. Add portfolio images in `public/portfolio/` folder

See `public/README.md` for detailed specifications.

### 6. Deploy

1. Push your code to GitHub (including the workflow file)
2. GitHub Actions will automatically build and deploy your site
3. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### 7. Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain (e.g., `puregrid.com`)
2. In your domain registrar, add a CNAME record pointing to `YOUR-USERNAME.github.io`
3. In GitHub repository settings > Pages, add your custom domain

## Updating Your Website

Whenever you want to update your website:

1. Make changes to the code or replace images in the `public` folder
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
3. GitHub Actions will automatically rebuild and redeploy

## Testing Locally

Before deploying, test your site locally:

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see your site.

## Customization Tips

### Update Company Info
- Edit contact information in `src/components/Contact.tsx`
- Update footer details in `src/components/Footer.tsx`

### Change Colors
- The site uses a purple/indigo gradient theme
- Search for color classes like `indigo-600`, `purple-600` and replace with your brand colors

### Modify Services
- Edit the services array in `src/components/Services.tsx`
- Add/remove services as needed

### Update Stats
- Change the statistics in `src/components/Hero.tsx`

### WhatsApp Number
- The WhatsApp number is set to: +34 695 727 512
- To change it, edit the `phoneNumber` prop in `src/App.tsx`

## Support

For issues or questions, check the GitHub repository's Issues section.

---

Built with ❤️ using React, Vite, and Tailwind CSS
