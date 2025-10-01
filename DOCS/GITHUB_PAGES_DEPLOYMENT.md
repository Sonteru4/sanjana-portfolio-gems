# GitHub Pages Deployment Guide

## 🎯 **Deployment Setup Complete**

Your Vite-based portfolio is now configured for GitHub Pages deployment with custom domain support.

## 📋 **What's Been Configured**

### **1. GitHub Actions Workflow**
- **File**: `.github/workflows/pages.yml`
- **Purpose**: Automated build and deployment
- **Triggers**: Push to main branch, manual dispatch
- **Build Process**: Node 20 → npm ci → npm run build → deploy to Pages

### **2. Custom Domain Configuration**
- **File**: `public/CNAME`
- **Domain**: `sanjanaonteru.com`
- **Purpose**: Tells GitHub Pages to use your custom domain

### **3. SPA Routing Support**
- **File**: `public/404.html`
- **Purpose**: Handles client-side routing for React Router
- **Function**: Redirects 404s to index.html for SPA functionality

## 🚀 **Deployment Steps**

### **Step 1: Push to GitHub**
```bash
# Add all files
git add .

# Commit changes
git commit -m "Add GitHub Pages deployment configuration"

# Push to main branch
git push origin main
```

### **Step 2: Enable GitHub Pages**
1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically run and deploy your site

### **Step 3: Configure Custom Domain (Wix DNS)**

#### **DNS Records to Add in Wix:**
```
Type: CNAME
Name: www
Value: sonteru4.github.io
TTL: 3600

Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

#### **Alternative (Recommended):**
```
Type: CNAME
Name: @
Value: sonteru4.github.io
TTL: 3600

Type: CNAME
Name: www
Value: sonteru4.github.io
TTL: 3600
```

### **Step 4: Verify Domain in GitHub**
1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `sanjanaonteru.com`
3. Check **Enforce HTTPS** (available after DNS propagation)
4. GitHub will verify the domain and issue SSL certificate

## 🔧 **Build Configuration**

### **Vite Configuration**
- **Output**: `dist/` folder
- **Base Path**: Automatically configured for GitHub Pages
- **SPA Routing**: Handled by 404.html redirect

### **Package.json Scripts**
- **Build**: `npm run build` (creates `dist/` folder)
- **Preview**: `npm run preview` (test production build locally)

## 📊 **Deployment Process**

### **Automatic Deployment**
1. **Trigger**: Push to main branch
2. **Build**: Node 20 environment
3. **Dependencies**: `npm ci` (faster, more reliable)
4. **Build**: `npm run build` (creates `dist/` folder)
5. **Deploy**: Uploads `dist/` to GitHub Pages
6. **Domain**: Serves from `sanjanaonteru.com`

### **Manual Deployment**
- Go to **Actions** tab in GitHub
- Click **Deploy to GitHub Pages**
- Click **Run workflow**

## 🌐 **URLs After Deployment**

### **Primary URLs**
- **Custom Domain**: `https://sanjanaonteru.com`
- **WWW**: `https://www.sanjanaonteru.com`
- **GitHub Pages**: `https://sonteru4.github.io`

### **Redirects**
- `www.sanjanaonteru.com` → `sanjanaonteru.com`
- All routes handled by React Router

## 🔍 **Troubleshooting**

### **Common Issues**

#### **1. Build Failures**
```bash
# Test build locally
npm run build

# Check for errors
npm run preview
```

#### **2. DNS Propagation**
- **Time**: 5-60 minutes
- **Check**: [whatsmydns.net](https://whatsmydns.net)
- **Test**: `nslookup sanjanaonteru.com`

#### **3. SSL Certificate**
- **Wait**: 10-30 minutes after DNS setup
- **Check**: GitHub Pages settings
- **Enable**: HTTPS enforcement

#### **4. SPA Routing Issues**
- **Check**: `public/404.html` exists
- **Test**: Direct URL access (e.g., `/projects`)
- **Verify**: React Router configuration

### **Debug Commands**
```bash
# Test production build
npm run build
npm run preview

# Check file structure
ls -la dist/

# Verify CNAME file
cat public/CNAME
```

## 📈 **Performance Optimization**

### **Build Optimization**
- **Vite**: Automatic code splitting
- **Assets**: Optimized images and CSS
- **Bundle**: Tree-shaking and minification

### **GitHub Pages Features**
- **CDN**: Global content delivery
- **HTTPS**: Automatic SSL certificates
- **Caching**: Optimized for static sites

## 🎉 **Success Checklist**

- [ ] Code pushed to GitHub
- [ ] GitHub Actions workflow running
- [ ] Pages deployment successful
- [ ] DNS records configured in Wix
- [ ] Custom domain verified in GitHub
- [ ] HTTPS certificate active
- [ ] Site accessible at `sanjanaonteru.com`
- [ ] SPA routing working
- [ ] All pages loading correctly

## 🚀 **Next Steps**

1. **Push Code**: `git push origin main`
2. **Enable Pages**: GitHub Settings → Pages → GitHub Actions
3. **Configure DNS**: Add records in Wix
4. **Verify Domain**: GitHub Pages settings
5. **Test Site**: Visit `sanjanaonteru.com`

**Your portfolio will be live at `https://sanjanaonteru.com`! 🎉**
