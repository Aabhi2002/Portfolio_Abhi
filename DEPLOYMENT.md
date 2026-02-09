# 🚀 GitHub Pages Deployment Guide

## Portfolio Website: Abhishek Rajput
**Custom Domain**: abhishek-rajput.me  
**GitHub Pages URL**: https://aabhi2002.github.io

---

## ✅ Pre-Deployment Checklist

All configurations are complete! Your portfolio is ready for deployment.

### What's Been Configured:

1. ✅ **Next.js Static Export** - Configured for GitHub Pages
2. ✅ **Custom Domain Setup** - CNAME file created
3. ✅ **Asset Paths** - All paths are relative (no basePath)
4. ✅ **SEO Optimization** - Meta tags, Open Graph, Twitter Cards
5. ✅ **GitHub Actions** - Automatic deployment workflow
6. ✅ **Performance** - Image optimization, compression enabled
7. ✅ **Favicon** - Present in src/app/favicon.ico
8. ✅ **Robots.txt** - SEO-friendly robots file
9. ✅ **.nojekyll** - Prevents Jekyll processing

---

## 📋 Manual Steps Required

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository: https://github.com/Aabhi2002/portfolio
2. Click **Settings** → **Pages**
3. Under **Source**, select: **GitHub Actions**
4. The deployment will start automatically

### Step 3: Configure Custom Domain

1. In **Settings** → **Pages**
2. Under **Custom domain**, enter: `abhishek-rajput.me`
3. Click **Save**
4. Wait for DNS check (may take a few minutes)
5. Enable **Enforce HTTPS** (recommended)

### Step 4: Configure DNS Records

Go to your domain registrar (where you bought abhishek-rajput.me) and add these DNS records:

**For Root Domain (abhishek-rajput.me):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For WWW Subdomain (optional):**
```
Type: CNAME
Name: www
Value: aabhi2002.github.io
```

**DNS Propagation**: May take 24-48 hours, but usually completes within 1 hour.

---

## 🔍 Verification

After deployment, verify your site works at:

1. ✅ https://aabhi2002.github.io
2. ✅ https://abhishek-rajput.me
3. ✅ https://www.abhishek-rajput.me (if configured)

### Test Checklist:

- [ ] Homepage loads correctly
- [ ] All images display properly
- [ ] Navigation works
- [ ] Contact form sends emails
- [ ] Responsive design works on mobile
- [ ] All sections scroll smoothly
- [ ] Social links work (GitHub, LinkedIn)

---

## 🛠️ Build Locally (Optional)

To test the production build locally:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The static files will be in the 'out' folder
# You can serve them with any static server:
npx serve out
```

---

## 📊 Performance Optimizations Applied

1. **Image Optimization**: Unoptimized for static export
2. **Code Splitting**: Lazy loading for sections
3. **Font Optimization**: Google Fonts with Next.js optimization
4. **Compression**: Enabled in Next.js config
5. **Package Optimization**: Framer Motion optimized imports

---

## 🔧 Troubleshooting

### Issue: 404 on custom domain
**Solution**: Wait for DNS propagation (up to 48 hours)

### Issue: Images not loading
**Solution**: Check that all images are in the `public` folder and paths don't start with `/`

### Issue: Styles not applying
**Solution**: Clear browser cache and hard refresh (Ctrl+Shift+R)

### Issue: GitHub Actions failing
**Solution**: 
1. Check Actions tab in GitHub
2. Ensure GitHub Pages is enabled
3. Verify repository permissions

---

## 📞 Contact Information

- **Email**: abhishekrajput90094@gmail.com
- **GitHub**: https://github.com/Aabhi2002
- **LinkedIn**: https://linkedin.com/in/abhishekrajput0007

---

## 🎉 Deployment Complete!

Once DNS propagates, your portfolio will be live at:
**https://abhishek-rajput.me**

Good luck! 🚀
