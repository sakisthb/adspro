'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [status, setStatus] = useState('Connecting...');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        // Test the connection by checking if we can access the GraphQL endpoint
        const response = await fetch(`https://kxcevmeaguflcpdyxnsl.eu-central-1.nhost.run/v1/graphql`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: '{ __schema { types { name } } }'
          })
        });
        
        if (response.ok) {
          setStatus('✅ Connected to Nhost!');
          setIsConnected(true);
        } else {
          setStatus('❌ Connection failed');
          setIsConnected(false);
        }
      } catch {
        setStatus('❌ Connection error');
        setIsConnected(false);
      }
    };

    checkConnection();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              🚀 AdsPro
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your Digital Hub for Amazing Content
            </p>
          </div>

          {/* Status Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Connection Status
            </h2>
            <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
              isConnected 
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
            }`}>
              {status}
            </div>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p><strong>Project ID:</strong> kxcevmeaguflcpdyxnsl</p>
              <p><strong>Region:</strong> eu-central-1</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Create Content
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share your thoughts and ideas with the world
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Build meaningful relationships with creators
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Grow
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Expand your reach and influence
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🗄️</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Database
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                PostgreSQL with 8 tables and RLS security
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                GraphQL
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Auto-generated API with Hasura
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                AI Ready
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                MCP server configured for Cursor AI
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-x-4">
            <a
              href="https://app.nhost.io/orgs/waupbahqvcxvbzixkydr/projects/kxcevmeaguflcpdyxnsl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              🎯 Nhost Dashboard
            </a>
            <a
              href="https://kxcevmeaguflcpdyxnsl.eu-central-1.nhost.run/console"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              🗄️ Hasura Console
            </a>
            <a
              href="https://docs.nhost.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              📚 Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
