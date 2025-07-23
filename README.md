# 🚀 Nhost.io Project

A modern Next.js application connected to Nhost.io for backend services.

## ✨ Features

- **🔐 Authentication** - Built-in user authentication with social logins
- **🗄️ Database** - PostgreSQL database with real-time subscriptions
- **📁 Storage** - File storage with CDN and image transformations
- **⚡ Functions** - Serverless functions for custom business logic
- **🔍 GraphQL** - Auto-generated GraphQL API with Hasura
- **🌐 Hosting** - Automatic deployments and global CDN

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Nhost.io (PostgreSQL, Hasura, Auth, Storage, Functions)
- **Deployment**: Nhost.io hosting

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Nhost CLI (`npm install -g nhost`)

### Local Development

1. **Clone and install dependencies:**
   ```bash
   git clone <your-repo>
   cd nhost.io-adspro
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment to Nhost.io

### 1. Build the Application

```bash
npm run build
```

### 2. Deploy to Nhost

```bash
# Login to Nhost (if not already logged in)
nhost login

# Deploy to your project
nhost deploy
```

### 3. View Your Live Application

Your application will be available at:
`https://kxcevmeaguflcpdyxnsl.eu-central-1.nhost.run`

## 📁 Project Structure

```
nhost.io-adspro/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Root layout with Nhost provider
│   │   └── page.tsx        # Main page component
│   ├── components/         # React components
│   │   └── NhostProvider.tsx
│   └── lib/               # Utility libraries
│       └── nhost.ts       # Nhost client configuration
├── nhost.config.ts        # Nhost deployment configuration
├── nhost.toml            # Nhost project settings
└── package.json
```

## 🔧 Configuration

### Nhost Configuration

The project is configured to connect to your Nhost project:
- **Project ID**: `kxcevmeaguflcpdyxnsl`
- **Region**: `eu-central-1`

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_NHOST_SUBDOMAIN=kxcevmeaguflcpdyxnsl
NEXT_PUBLIC_NHOST_REGION=eu-central-1
```

## 📚 Useful Links

- **Nhost Dashboard**: [https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl](https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl)
- **Nhost Documentation**: [https://docs.nhost.io/](https://docs.nhost.io/)
- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)

## 🎯 Next Steps

1. **Set up Authentication**: Configure user sign-up and login
2. **Create Database Schema**: Design your data models in Hasura
3. **Add Real-time Features**: Implement GraphQL subscriptions
4. **Upload Files**: Integrate file storage functionality
5. **Create Functions**: Add custom serverless logic

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
