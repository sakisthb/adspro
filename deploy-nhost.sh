#!/bin/bash

echo "🚀 Deploying to Nhost.io..."

# Check if nhost CLI is installed
if ! command -v nhost &> /dev/null; then
    echo "❌ Nhost CLI not found. Installing..."
    npm install -g nhost
fi

# Login to Nhost (if needed)
echo "🔐 Checking Nhost authentication..."
nhost status

# Deploy the project
echo "📦 Deploying project..."
nhost up

echo "✅ Deployment completed!"
echo ""
echo "🌐 Your app should be available at:"
echo "   https://kxcevmeaguflcpdyxnsl.eu-central-1.nhost.run"
echo ""
echo "🔗 Useful links:"
echo "   - Hasura Console: https://kxcevmeaguflcpdyxnsl.eu-central-1.nhost.run/console"
echo "   - GraphQL Endpoint: https://kxcevmeaguflcpdyxnsl.eu-central-1.nhost.run/v1/graphql"
echo "   - Nhost Dashboard: https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl" 