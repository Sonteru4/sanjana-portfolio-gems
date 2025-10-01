# Deployment Guide

## 🚀 **Vercel Deployment (Recommended)**

### **Step 1: Local Development**
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### **Step 2: Deploy to Vercel**

#### **Option A: Vercel CLI (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? [Your account]
# - Link to existing project? N
# - Project name: sanjana-portfolio
# - Directory: ./
# - Override settings? N
```

#### **Option B: GitHub Integration**
1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import from GitHub repository
5. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### **Step 3: Environment Variables**
Add these environment variables in Vercel dashboard:

```bash
# Optional: Analytics
ENABLE_ANALYTICS=true

# Optional: Contact form (if implemented)
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
```

### **Step 4: Custom Domain Setup**

#### **DNS Configuration**
1. **Get Vercel Domain Info**:
   - Go to Vercel Dashboard → Project → Settings → Domains
   - Note the "A" record IP address (e.g., `76.76.19.61`)

2. **Configure DNS Records**:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   TTL: 3600
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

3. **Verify Domain**:
   - Add domain in Vercel: `sanjanaonteru.com`
   - Vercel will provide DNS records to add
   - Wait for DNS propagation (5-60 minutes)
   - SSL certificate will be automatically issued

#### **Domain Providers**

**Cloudflare**:
1. Add domain to Cloudflare
2. Update nameservers at domain registrar
3. Add DNS records as shown above

**GoDaddy/Namecheap**:
1. Go to DNS management
2. Add A record: `@` → `76.76.19.61`
3. Add CNAME record: `www` → `cname.vercel-dns.com`

**Google Domains**:
1. Go to DNS settings
2. Add custom resource records as above

### **Step 5: Performance Optimization**

#### **Build Optimization**
```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist

# Optimize images
# Use WebP format, compress to <200KB
```

#### **Vercel Configuration**
Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/resume",
      "destination": "/resume.pdf"
    }
  ]
}
```

## 🔧 **Alternative Deployments**

### **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### **GitHub Pages**
```bash
# Add to package.json scripts
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## 📊 **Performance Targets**

- **Lighthouse Score**: ≥95 (Performance, SEO, Accessibility)
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Bundle Size**: <500KB gzipped

## 🔍 **Post-Deployment Checklist**

- [ ] Site loads at custom domain
- [ ] HTTPS certificate active
- [ ] All pages accessible
- [ ] Contact form working (if implemented)
- [ ] Analytics tracking (if enabled)
- [ ] Mobile responsive
- [ ] Social media previews working
- [ ] Resume download working
- [ ] All external links functional

## 🚨 **Troubleshooting**

### **Build Failures**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### **Domain Issues**
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Verify SSL certificate: [ssllabs.com](https://ssllabs.com)
- Check Vercel domain status in dashboard

### **Performance Issues**
- Optimize images (WebP, compression)
- Enable Vercel Edge Functions
- Use Vercel Analytics
- Implement lazy loading

## 📞 **Support**

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)
- **Tailwind Docs**: [tailwindcss.com](https://tailwindcss.com)
