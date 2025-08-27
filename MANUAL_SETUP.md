# Manual GitHub Pages Setup

If the automatic GitHub Pages enablement doesn't work, you can manually enable it.

## Manual Setup Steps

### 1. Go to Repository Settings
- Navigate to: https://github.com/Dhruvish09/ProDeck
- Click on **"Settings"** tab

### 2. Enable GitHub Pages
- Scroll down to **"Pages"** in the left sidebar
- Under **"Source"**, select **"GitHub Actions"**
- Click **"Save"**

### 3. Verify Configuration
- You should see a message: "Your site is ready to be published"
- The source should show "GitHub Actions"
- Status should indicate that Pages is enabled

## Alternative: Manual Source Setup

If you prefer to use a different source temporarily:

### Option A: Deploy from a branch
1. Set Source to **"Deploy from a branch"**
2. Select branch: **"main"**
3. Select folder: **"/ (root)"**
4. Click **"Save"**

### Option B: Deploy from a folder
1. Set Source to **"Deploy from a folder"**
2. Select branch: **"main"**
3. Select folder: **"/out"** (after building)
4. Click **"Save"**

## Troubleshooting

### If Pages Still Won't Enable:
1. **Check Repository Permissions**: Ensure you have admin access
2. **Verify Repository Type**: Pages works with public repositories or repositories with GitHub Pro
3. **Check Organization Settings**: If it's an organization repo, check org settings
4. **Contact Support**: If issues persist, contact GitHub Support

### Common Issues:
- **"Pages is not available"**: Repository might not support Pages
- **"Source not available"**: Check repository permissions
- **"Build failed"**: Check the Actions tab for build errors

## After Manual Setup

Once Pages is enabled:
1. The workflow will automatically deploy on the next push
2. Your site will be available at: https://dhruvish09.github.io/ProDeck/
3. You can monitor deployment in the Actions tab

## Recommended Approach

1. **Try the automatic workflow first** (with `enablement: true`)
2. **If that fails**, use the manual setup above
3. **Set source to "GitHub Actions"** for automatic deployments
4. **Monitor the Actions tab** for deployment status

The workflow should now work properly with either automatic or manual enablement!
