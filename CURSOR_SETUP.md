# 🎯 Cursor Setup Guide

Οδηγίες για τη ρύθμιση του Cursor με το Nhost MCP server.

## 🚀 Γρήγορη Ρύθμιση

### 1. Άνοιξε το Cursor Settings

1. Πάτησε `Cmd + ,` (ή `Ctrl + ,` σε Windows/Linux)
2. Πήγαινε στο **Extensions** → **MCP**
3. Ή πήγαινε στο **Settings** → **MCP Servers**

### 2. Πρόσθεσε το Nhost MCP Server

Πρόσθεσε αυτή τη ρύθμιση στο `settings.json`:

```json
{
  "mcpServers": {
    "mcp-nhost": {
      "command": "mcp-nhost",
      "args": ["start"]
    }
  }
}
```

### 3. Restart το Cursor

Κλείσε και άνοιξε ξανά το Cursor για να ενεργοποιηθεί το MCP server.

## 🎯 Τι μπορεί να κάνει τώρα το Cursor

Με το MCP server ενεργό, το Cursor μπορεί να:

### 🔍 **Δει το GraphQL Schema**
- Όλα τα types και fields του project σου
- Queries και mutations διαθέσιμες
- Relationships μεταξύ tables

### 📊 **Εκτελέσει GraphQL Queries**
- Διαβάσει δεδομένα από τη βάση
- Εκτελέσει mutations
- Δει real-time data

### ⚙️ **Διαχειριστεί Configurations**
- Ρυθμίσεις authentication
- Database schema
- Permissions και roles

### 🗄️ **Δημιουργήσει Migrations**
- Δημιουργία νέων tables
- Αλλαγές στο schema
- Relationships μεταξύ tables

## 💡 Παραδείγματα Χρήσης

### "Δημιούργησε ένα table για users"
Το Cursor μπορεί να δει το υπάρχον schema και να προτείνει τη σωστή δημιουργία.

### "Πρόσθεσε authentication με Google"
Το Cursor μπορεί να ρυθμίσει το OAuth configuration.

### "Βελτιστοποίησε αυτό το GraphQL query"
Το Cursor μπορεί να δει το schema και να προτείνει optimizations.

## 🔧 Troubleshooting

### Αν το MCP server δεν λειτουργεί:

1. **Ελέγξε αν το mcp-nhost είναι διαθέσιμο:**
   ```bash
   mcp-nhost --version
   ```

2. **Ελέγξε το configuration:**
   ```bash
   cat ~/.config/nhost/mcp-nhost.toml
   ```

3. **Restart το Cursor**

### Αν χρειάζεται να ενημερώσεις το configuration:

1. Ενημέρωσε το `~/.config/nhost/mcp-nhost.toml`
2. Restart το Cursor

## 🎉 Τέλεια!

Τώρα το Cursor έχει πρόσβαση στο πλήρες Nhost infrastructure σου και μπορεί να σε βοηθήσει με:

- Database schema design
- GraphQL queries και mutations
- Authentication setup
- Configuration management
- Performance optimization

## 📞 Βοήθεια

- **Nhost Documentation**: [https://docs.nhost.io/](https://docs.nhost.io/)
- **MCP Documentation**: [https://modelcontextprotocol.io/](https://modelcontextprotocol.io/)
- **Project Dashboard**: [https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl](https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl) 