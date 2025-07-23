# 🚀 Deployment Guide - Nhost.io

This guide will help you deploy your Next.js application to Nhost.io.

## 📋 Prerequisites

1. **Nhost Account**: You need access to your Nhost project at [https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl](https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl)

2. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, etc.)

## 🌐 Method 1: Deploy via Nhost Dashboard (Recommended)

### Step 1: Connect Your Repository

1. Go to your Nhost project dashboard
2. Navigate to **Settings** → **Git**
3. Connect your Git repository (GitHub, GitLab, etc.)
4. Select the branch you want to deploy (usually `main` or `master`)

### Step 2: Configure Build Settings

In your Nhost project settings, configure:

- **Build Command**: `npm run build`
- **Publish Directory**: `.next`
- **Node.js Version**: `18` or `20`

### Step 3: Set Environment Variables

Add these environment variables in your Nhost project:

```
NEXT_PUBLIC_NHOST_SUBDOMAIN=kxcevmeaguflcpdyxnsl
NEXT_PUBLIC_NHOST_REGION=eu-central-1
```

### Step 4: Deploy

1. Push your code to the connected repository
2. Nhost will automatically build and deploy your application
3. Your app will be available at: `https://kxcevmeaguflcpdyxnsl.eu-central-1.nhost.run`

## 🔧 Method 2: Manual Deployment

### Step 1: Build Locally

```bash
npm run build
```

### Step 2: Upload to Nhost

1. Go to your Nhost project dashboard
2. Navigate to **Settings** → **Files**
3. Upload the contents of your `.next` folder
4. Set the root directory to point to your Next.js app

## 📁 Project Structure for Deployment

Your project should have this structure:

```
nhost.io-adspro/
├── src/
│   ├── app/
│   ├── components/
│   └── lib/
├── public/
├── .next/          # Built files (generated after npm run build)
├── package.json
├── next.config.ts
├── nhost.config.ts
└── nhost.toml
```

## 🔍 Verify Deployment

After deployment, you can verify your application is working by:

1. **Check the URL**: Visit `https://kxcevmeaguflcpdyxnsl.eu-central-1.nhost.run`
2. **Check Connection Status**: The app should show "✅ Connected to Nhost!"
3. **Test Features**: Verify all Nhost services are accessible

## 🛠️ Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check that all dependencies are in `package.json`
   - Ensure Node.js version is compatible
   - Verify build command is correct

2. **Connection Issues**:
   - Check environment variables are set correctly
   - Verify project subdomain and region
   - Ensure Nhost services are running

3. **404 Errors**:
   - Check that the publish directory is set to `.next`
   - Verify Next.js routing is configured correctly

### Getting Help

- **Nhost Documentation**: [https://docs.nhost.io/](https://docs.nhost.io/)
- **Nhost Community**: [https://discord.gg/nhost](https://discord.gg/nhost)
- **Project Dashboard**: [https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl](https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl)

## 🎯 Next Steps After Deployment

1. **Set up Custom Domain** (optional)
2. **Configure SSL Certificate**
3. **Set up Monitoring and Logs**
4. **Configure CI/CD Pipeline**
5. **Set up Database and Authentication**

## 📞 Support

If you encounter any issues:

1. Check the Nhost documentation
2. Review the project logs in the Nhost dashboard
3. Contact Nhost support through their Discord community
4. Check the project status at your Nhost dashboard 