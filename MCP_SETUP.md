# 🔧 Nhost MCP Server Setup Guide

Το Nhost MCP (Model Context Protocol) server επιτρέπει στα AI tools να αλληλεπιδρούν απευθείας με το backend infrastructure σου.

## 🚀 Εγκατάσταση

### 1. Εγκατάσταση του MCP Server

```bash
# Κατέβασε και εγκατέστησε το MCP server
curl -L https://raw.githubusercontent.com/nhost/mcp-nhost/main/get.sh | bash

# Μετακίνησε το binary στο PATH (χρειάζεται sudo)
sudo mv mcp-nhost /usr/local/bin/
```

### 2. Ρύθμιση Configuration

Δημιούργησε ένα configuration file `mcp-nhost.toml`:

```toml
[cloud]
pat = 'your-personal-access-token'
enable_mutations = true

[local]
admin_secret = 'your-local-admin-secret'

[[projects]]
subdomain = 'kxcevmeaguflcpdyxnsl'
region = 'eu-central-1'
admin_secret = 'your-cloud-admin-secret'
allow_queries = ['*']
allow_mutations = ['*']
```

## 🔑 Πώς να βρεις τα Tokens

### Personal Access Token (PAT)

1. Πήγαινε στο [Nhost Dashboard](https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl)
2. Πήγαινε στο **Settings** → **Access Tokens**
3. Δημιούργησε ένα νέο Personal Access Token
4. Αντιγράψε το token στο `pat` field

### Admin Secret

1. Πήγαινε στο **Settings** → **General**
2. Βρες το **Admin Secret**
3. Αντιγράψε το στο `admin_secret` field

## 🛠️ Ρύθμιση για Cursor

Αν χρησιμοποιείς Cursor, πρόσθεσε αυτές τις ρυθμίσεις στο `settings.json`:

```json
{
  "mcpServers": {
    "mcp-nhost": {
      "command": "/usr/local/bin/mcp-nhost",
      "args": ["start"]
    }
  }
}
```

## 🎯 Τι μπορεί να κάνει το MCP Server

Με το MCP server, τα AI tools μπορούν να:

- 🔍 **Δουν το GraphQL schema** του project σου
- 📊 **Εκτελέσουν queries και mutations**
- ⚙️ **Διαχειριστούν configurations**
- 🗄️ **Δημιουργήσουν database migrations**
- 🔐 **Διαχειριστούν permissions**
- 📚 **Αναζητήσουν στην Nhost documentation**

## 🔒 Ασφάλεια

Το MCP server περιλαμβάνει:

- Strict authentication για κάθε request
- Full support για existing roles και permission rules
- Additional query και mutation filtering
- Respect για τα security boundaries του project

## 🚀 Επόμενα Βήματα

1. **Βρες τα tokens** από το Nhost dashboard
2. **Ενημέρωσε το `mcp-nhost.toml`** με τα σωστά tokens
3. **Ρύθμισε το Cursor** (αν το χρησιμοποιείς)
4. **Δοκίμασε το MCP server** με AI tools

## 📞 Βοήθεια

- **Nhost Documentation**: [https://docs.nhost.io/](https://docs.nhost.io/)
- **MCP Server GitHub**: [https://github.com/nhost/mcp-nhost](https://github.com/nhost/mcp-nhost)
- **Project Dashboard**: [https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl](https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl) 