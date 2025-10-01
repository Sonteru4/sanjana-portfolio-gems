#!/bin/bash

# GitHub Pages Deployment Script
# This script helps deploy your portfolio to GitHub Pages

echo "🚀 Deploying Portfolio to GitHub Pages..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Error: Not in a git repository"
    exit 1
fi

# Check if we're on main branch
current_branch=$(git branch --show-current)
if [ "$current_branch" != "main" ]; then
    echo "⚠️  Warning: Not on main branch (currently on $current_branch)"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deployment cancelled"
        exit 1
    fi
fi

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ Error: dist folder not found after build"
    exit 1
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy portfolio to GitHub Pages

- Updated portfolio with real work experience
- Added GitHub Pages deployment configuration
- Configured custom domain: sanjanaonteru.com
- Added SPA routing support for React Router"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Deployment initiated successfully!"
    echo ""
    echo "🌐 Next steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Navigate to Settings → Pages"
    echo "3. Select 'GitHub Actions' as source"
    echo "4. Configure DNS in Wix with the provided records"
    echo "5. Your site will be live at: https://sanjanaonteru.com"
    echo ""
    echo "📋 DNS Records for Wix:"
    echo "Type: CNAME, Name: www, Value: sonteru4.github.io"
    echo "Type: CNAME, Name: @, Value: sonteru4.github.io"
    echo ""
    echo "📖 Full deployment guide: DOCS/GITHUB_PAGES_DEPLOYMENT.md"
else
    echo "❌ Push failed"
    exit 1
fi
