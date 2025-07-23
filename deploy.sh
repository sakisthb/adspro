#!/bin/bash

echo "🚀 Deploying to Nhost.io..."

# Build the application
echo "📦 Building the application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

echo ""
echo "🎯 Next steps:"
echo "1. Go to your Nhost dashboard: https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl"
echo "2. Navigate to Settings → Git"
echo "3. Connect your Git repository"
echo "4. Set build command: npm run build"
echo "5. Set publish directory: .next"
echo "6. Push your code to trigger deployment"
echo ""
echo "🌐 Your app will be available at: https://kxcevmeaguflcpdyxnsl.eu-central-1.nhost.run"
echo ""
echo "📚 For detailed instructions, see DEPLOYMENT.md" 