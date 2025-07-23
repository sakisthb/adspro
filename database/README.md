# 🗄️ Database Schema Documentation

## Overview

This database schema is designed for a modern content management system with social features, built on PostgreSQL with Hasura GraphQL.

## 📊 Tables

### Core Tables

#### `users`
- Extends Nhost auth.users
- Stores user profiles and preferences
- Automatically synced with auth system

#### `categories`
- Content categorization
- Supports icons and colors
- Public read, admin write access

#### `posts`
- Main content table
- Supports drafts, published, archived status
- Includes SEO metadata
- Tracks view, like, comment counts

#### `comments`
- Nested comment system
- Supports parent-child relationships
- Approval system for moderation

### Social Features

#### `likes`
- User post likes
- Unique constraint prevents duplicate likes

#### `bookmarks`
- User post bookmarks
- Private to each user

#### `follows`
- User following relationships
- Enables social networking features

#### `notifications`
- System notifications
- Supports different notification types
- Read/unread status tracking

### System

#### `settings`
- Application configuration
- JSONB storage for flexible settings
- Admin-only access

## 🔐 Security

### Row Level Security (RLS)
- All tables have RLS enabled
- Policies ensure data privacy
- Users can only access their own data
- Admins have elevated permissions

### Key Policies
- **Users**: Can view all, edit own profile
- **Posts**: Public read for published, author/admin write
- **Comments**: Public read for approved, author write
- **Likes/Bookmarks**: User can only manage own
- **Settings**: Admin-only access

## 🚀 Setup

### 1. Apply Schema
```bash
# Set environment variable
export NHOST_PAT=fd0ad77b-f415-4545-a6ff-132a69f46cfb

# Apply schema
./database/apply_schema.sh
```

### 2. Manual Setup (Alternative)
1. Go to [Hasura Console](https://kxcevmeaguflcpdyxnsl.eu-central-1.nhost.run/console)
2. Navigate to Data → SQL
3. Run each SQL file in order:
   - `schema.sql`
   - `rls_policies.sql`
   - `seed_data.sql`

## 📈 Performance

### Indexes
- Primary keys on all tables
- Foreign key indexes
- Status and date indexes for posts
- User-specific indexes for personal data

### Optimizations
- UUID primary keys
- JSONB for flexible data
- Proper foreign key constraints
- Automatic updated_at triggers

## 🔄 Triggers

### Automatic Updates
- `updated_at` columns automatically updated
- User profile sync with auth.users
- Comment count updates (can be added)

### User Management
- New users automatically get profiles
- Profile updates sync with auth system

## 📝 Sample Data

### Categories
- Technology, Design, Business, Marketing
- Development, Productivity, Lifestyle, Finance

### Settings
- Site configuration
- Theme colors
- Email settings
- Social links

## 🛠️ Development

### TypeScript Types
See `src/types/database.ts` for complete type definitions.

### GraphQL Client
See `src/lib/graphql.ts` for GraphQL operations.

### Testing Queries
```graphql
# Get published posts
query {
  posts(where: { status: { _eq: "published" } }) {
    id
    title
    author {
      full_name
    }
  }
}

# Get categories
query {
  categories(where: { is_active: { _eq: true } }) {
    name
    slug
    color
  }
}
```

## 🔗 Links

- **Hasura Console**: https://kxcevmeaguflcpdyxnsl.eu-central-1.nhost.run/console
- **GraphQL Endpoint**: https://kxcevmeaguflcpdyxnsl.eu-central-1.nhost.run/v1/graphql
- **Nhost Dashboard**: https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl

## 📚 Next Steps

1. **Apply the schema** using the provided script
2. **Test the GraphQL API** in Hasura console
3. **Create your first post** through the application
4. **Set up authentication** for user management
5. **Customize the schema** based on your needs 