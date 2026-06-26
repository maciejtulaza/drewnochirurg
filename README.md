# Drewnochirurg - Landing Page

Modern, minimal landing page for woodworking business.

## 🚀 Quick Start

1. **View locally**: Open `index.html` in your browser
2. **Deploy to GitHub Pages**: See instructions below

## 📝 Customization Guide

### Replace Placeholder Content

1. **Your Photo** - Replace the "Twoje zdjęcie" placeholder in the About section
2. **Portfolio Images** - Replace the 6 project placeholders with your work
3. **Contact Info** - Update email and phone in the Contact section
4. **Social Links** - Add your Instagram/Facebook URLs in the footer

### Add Real Images

Replace placeholder divs with:
```html
<img src="images/your-photo.jpg" alt="Description">
```

Create an `images` folder and add your photos there.

### Colors

Edit CSS variables in `style.css` (lines 11-18):
- `--primary-color`: Main dark color (navbar, headings)
- `--secondary-color`: Accent brown
- `--accent-color`: Light accent

## 🌐 Deploy to GitHub Pages

1. Create a new GitHub repository named `drewnochirurg`

2. Initialize git and push:
```bash
cd ~/drewnochirurg
git init
git add .
git commit -m "Initial commit: Drewnochirurg landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/drewnochirurg.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings
   - Navigate to Pages (left sidebar)
   - Under "Source", select `main` branch
   - Click Save
   - Your site will be live at `https://YOUR-USERNAME.github.io/drewnochirurg`

### Custom Domain (Optional)

1. Buy a domain (e.g., drewnochirurg.pl)
2. Add a `CNAME` file with your domain:
```bash
echo "drewnochirurg.pl" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```
3. Configure DNS with your registrar (point to GitHub Pages)

## 📧 Contact Form Setup

The form currently shows an alert. To make it functional:

### Option 1: Formspree (Recommended - Free)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, get your endpoint
3. Update form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

### Option 2: Netlify Forms
If you host on Netlify instead:
1. Add `netlify` attribute to form tag
2. Forms auto-work, you get email notifications

### Option 3: EmailJS
Free tier: 200 emails/month, no backend needed.

## 📱 Features

- ✅ Fully responsive (mobile-friendly)
- ✅ Smooth scrolling navigation
- ✅ Modern, clean design
- ✅ Portfolio gallery
- ✅ Contact form
- ✅ SEO-friendly structure
- ✅ Fast loading (no external dependencies)
- ✅ Free hosting ready

## 🛠 Tech Stack

- Pure HTML5, CSS3, JavaScript
- No frameworks = Fast & simple
- Works on all modern browsers

## 📊 Next Steps

1. Add real content (photos, text, contact info)
2. Deploy to GitHub Pages
3. Test on mobile devices
4. Set up contact form backend
5. Add analytics (Google Analytics optional)
6. Consider custom domain

## 💰 Hosting Cost

**$0** - GitHub Pages is completely free for public repositories!

## Support

Questions? Check GitHub Issues or the code comments.
