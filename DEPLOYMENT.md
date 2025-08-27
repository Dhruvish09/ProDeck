# Deployment Guide

This project uses GitHub Actions to automatically deploy your Next.js application when changes are pushed to the main branch.

## How It Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:

1. **Tests** your application on every push and pull request
2. **Builds** the production version
3. **Deploys** to your chosen platform when changes are pushed to main/master branch

## Setup Instructions

### 1. Enable GitHub Actions

GitHub Actions are automatically enabled when you push the workflow file to your repository.

### 2. Configure GitHub Pages (Recommended for static sites)

1. Go to your repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically deploy to GitHub Pages

### 3. Optional: Deploy to Vercel

If you prefer to deploy to Vercel:

1. Uncomment the Vercel deployment section in `.github/workflows/deploy.yml`
2. Add these secrets to your repository (Settings → Secrets and variables → Actions):
   - `VERCEL_TOKEN`: Your Vercel API token
   - `ORG_ID`: Your Vercel organization ID
   - `PROJECT_ID`: Your Vercel project ID

### 4. Optional: Deploy to Netlify

If you prefer to deploy to Netlify:

1. Uncomment the Netlify deployment section in `.github/workflows/deploy.yml`
2. Add these secrets to your repository:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify API token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

### 5. Optional: Custom Domain

If you have a custom domain, add it as a secret:
- `CNAME`: Your custom domain (e.g., `example.com`)

## Workflow Details

### Test Job
- Runs on every push and pull request
- Installs dependencies
- Runs linting
- Builds the application
- Uploads build artifacts

### Deploy Job
- Only runs on main/master branch
- Requires the test job to pass
- Deploys to your configured platform(s)

## Manual Deployment

If you need to deploy manually:

1. Go to your repository Actions tab
2. Select "Deploy Next.js App"
3. Click "Run workflow"
4. Choose the branch and click "Run workflow"

## Troubleshooting

### Common Issues

1. **Build fails**: Check the Actions tab for error details
2. **Deployment fails**: Verify your secrets are correctly configured
3. **Page not updating**: GitHub Pages can take a few minutes to update

### Checking Status

- View workflow runs in the Actions tab
- Check deployment status in your platform's dashboard
- Monitor build logs for any errors

## Security Notes

- Never commit sensitive information like API tokens
- Use GitHub Secrets for all sensitive configuration
- Regularly rotate your deployment tokens

## Support

If you encounter issues:
1. Check the Actions tab for detailed error logs
2. Verify your secrets are correctly configured
3. Ensure your platform-specific setup is complete
