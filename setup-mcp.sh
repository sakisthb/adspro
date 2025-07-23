#!/bin/bash

echo "🔧 Setting up Nhost MCP Server for your project..."

# Check if mcp-nhost is available
if [ -f "./mcp-nhost" ]; then
    echo "✅ MCP server found in current directory"
    MCP_PATH="./mcp-nhost"
elif command -v mcp-nhost &> /dev/null; then
    echo "✅ MCP server found in PATH"
    MCP_PATH="mcp-nhost"
else
    echo "❌ MCP server not found. Installing..."
    curl -L https://raw.githubusercontent.com/nhost/mcp-nhost/main/get.sh | bash
    if [ -f "./mcp-nhost" ]; then
        MCP_PATH="./mcp-nhost"
        echo "✅ MCP server installed successfully"
    else
        echo "❌ Failed to install MCP server"
        exit 1
    fi
fi

echo ""
echo "🎯 Your project configuration:"
echo "   Project ID: kxcevmeaguflcpdyxnsl"
echo "   Region: eu-central-1"
echo ""

echo "📋 Next steps to complete MCP setup:"
echo ""
echo "1. Get your Personal Access Token (PAT):"
echo "   - Go to: https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl"
echo "   - Navigate to Settings → Access Tokens"
echo "   - Create a new Personal Access Token"
echo ""
echo "2. Get your Admin Secret:"
echo "   - Go to Settings → General"
echo "   - Copy the Admin Secret"
echo ""
echo "3. Update the mcp-nhost.toml file with your tokens"
echo ""
echo "4. Test the MCP server:"
echo "   $MCP_PATH start"
echo ""
echo "5. For Cursor integration, add to settings.json:"
echo "   {"
echo "     \"mcpServers\": {"
echo "       \"mcp-nhost\": {"
echo "         \"command\": \"mcp-nhost\","
echo "         \"args\": [\"start\"]"
echo "       }"
echo "     }"
echo "   }"
echo ""
echo "📚 For detailed instructions, see MCP_SETUP.md" 