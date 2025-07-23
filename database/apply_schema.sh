#!/bin/bash

echo "🗄️ Applying Database Schema to Nhost Project..."

# Check if we have the necessary environment variables
if [ -z "$NHOST_PAT" ]; then
    echo "❌ NHOST_PAT environment variable not set"
    echo "Please set it with: export NHOST_PAT=fd0ad77b-f415-4545-a6ff-132a69f46cfb"
    exit 1
fi

# Project details
PROJECT_ID="kxcevmeaguflcpdyxnsl"
REGION="eu-central-1"
GRAPHQL_URL="https://${PROJECT_ID}.${REGION}.nhost.run/v1/graphql"

echo "📋 Project Details:"
echo "   Project ID: ${PROJECT_ID}"
echo "   Region: ${REGION}"
echo "   GraphQL URL: ${GRAPHQL_URL}"
echo ""

# Function to apply SQL file
apply_sql_file() {
    local file=$1
    local description=$2
    
    echo "🔧 Applying ${description}..."
    
    # Use curl to send SQL to Hasura
    response=$(curl -s -X POST "${GRAPHQL_URL}" \
        -H "Content-Type: application/json" \
        -H "x-hasura-admin-secret: $@123#@!aQ111" \
        -d "{
            \"type\": \"run_sql\",
            \"args\": {
                \"sql\": $(cat "$file" | jq -Rs .)
            }
        }")
    
    if echo "$response" | jq -e '.error' > /dev/null; then
        echo "❌ Error applying ${description}:"
        echo "$response" | jq -r '.error'
    else
        echo "✅ ${description} applied successfully"
    fi
}

# Apply schema files in order
echo "🚀 Starting schema application..."
echo ""

# Apply main schema
apply_sql_file "database/schema.sql" "Main Database Schema"

# Apply RLS policies
apply_sql_file "database/rls_policies.sql" "Row Level Security Policies"

# Apply seed data
apply_sql_file "database/seed_data.sql" "Seed Data"

echo ""
echo "🎉 Database schema application complete!"
echo ""
echo "📊 Next steps:"
echo "1. Check the Hasura console: https://${PROJECT_ID}.${REGION}.nhost.run/console"
echo "2. Verify all tables are created"
echo "3. Test the GraphQL API"
echo "4. Start building your application!"
echo ""
echo "🔗 Useful links:"
echo "   - Hasura Console: https://${PROJECT_ID}.${REGION}.nhost.run/console"
echo "   - GraphQL Endpoint: ${GRAPHQL_URL}"
echo "   - Nhost Dashboard: https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/${PROJECT_ID}" 