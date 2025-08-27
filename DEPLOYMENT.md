# Deployment Guide

This project uses GitHub Actions to automatically deploy your Next.js application when changes are pushed to the main branch.

## How It Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:

1. **Tests** your application on every push and pull request
2. **Builds** the production version with static export
3. **Deploys** to GitHub Pages when changes are pushed to main/master branch

## Setup Instructions

### 1. Enable GitHub Actions

GitHub Actions are automatically enabled when you push the workflow file to your repository.

### 2. Configure GitHub Pages

1. Go to your repository Settings → Pages
2. Set Source to **"GitHub Actions"**
3. The workflow will automatically deploy to GitHub Pages using the official GitHub Actions

### 3. Repository Settings

The workflow now uses the official GitHub Actions for Pages deployment:
- `actions/configure-pages@v4` - Sets up GitHub Pages
- `actions/upload-pages-artifact@v3` - Uploads build artifacts
- `actions/deploy-pages@v4` - Deploys to GitHub Pages

### 4. Next.js Configuration

The project is configured for static export:
- `output: 'export'` in `next.config.js`
- Builds to `./out` directory
- Optimized for GitHub Pages hosting

### 5. Optional: Deploy to Vercel

If you prefer to deploy to Vercel:

1. Uncomment the Vercel deployment section in `.github/workflows/deploy.yml`
2. Add these secrets to your repository (Settings → Secrets and variables → Actions):
   - `VERCEL_TOKEN`: Your Vercel API token
   - `ORG_ID`: Your Vercel organization ID
   - `PROJECT_ID`: Your Vercel project ID

### 6. Optional: Deploy to Netlify

If you prefer to deploy to Netlify:

1. Uncomment the Netlify deployment section in `.github/workflows/deploy.yml`
2. Add these secrets to your repository:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify API token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

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
- Uses official GitHub Actions for Pages deployment
- Deploys static export from `./out` directory

## Manual Deployment

If you need to deploy manually:

1. Go to your repository Actions tab
2. Select "Deploy Next.js App"
3. Click "Run workflow"
4. Choose the branch and click "Run workflow"

## Troubleshooting

### Common Issues

1. **Build fails**: Check the Actions tab for error details
2. **Deployment fails**: Verify GitHub Pages is set to "GitHub Actions" source
3. **Page not updating**: GitHub Pages can take a few minutes to update
4. **Permission errors**: The workflow now uses proper permissions for Pages deployment

### Checking Status

- View workflow runs in the Actions tab
- Check deployment status in Settings → Pages
- Monitor build logs for any errors
- Look for the green checkmark indicating successful deployment

## Security Notes

- Never commit sensitive information like API tokens
- Use GitHub Secrets for all sensitive configuration
- The workflow uses minimal required permissions
- Regularly rotate your deployment tokens

## Support

If you encounter issues:
1. Check the Actions tab for detailed error logs
2. Verify your GitHub Pages source is set to "GitHub Actions"
3. Ensure your repository has the correct permissions
4. The workflow now uses official GitHub Actions for better reliability
