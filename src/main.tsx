declare global {
  interface Window {
    ENV?: {
      VITE_AUTH_URL?: string;
    };
  }
}

import { createRoot } from 'react-dom/client'
import { AuthProvider } from "@propelauth/react"
import App from './App'
import './index.css'
import { initializeApi } from './lib/api'
import { getPropelAuthConfig, getAuthConfig } from './utils/secretsManager'

// Initialize all secrets
async function initializeSecrets() {
  try {
    // Initialize API with API keys
    await initializeApi();
    
    // Get PropelAuth and Auth config
    const [propelAuthConfig, authConfig] = await Promise.all([
      getPropelAuthConfig(),
      getAuthConfig()
    ]);

    // Return the auth URL from secrets or fallback to environment variable
    return authConfig.auth_url || window.ENV?.VITE_AUTH_URL || import.meta.env.VITE_AUTH_URL;
  } catch (error) {
    console.error('Failed to initialize secrets:', error);
    // Fallback to environment variable if secrets fail to load
    return window.ENV?.VITE_AUTH_URL || import.meta.env.VITE_AUTH_URL;
  }
}

// Initialize secrets and start the app
initializeSecrets().then(authUrl => {
  // Validate the URL before using it
  let validAuthUrl;
  try {
    // Ensure the URL is valid before passing it to AuthProvider
    validAuthUrl = new URL(authUrl).toString();
    console.log("Using auth URL:", validAuthUrl);
  } catch (error) {
    console.error("Invalid auth URL:", authUrl, error);
    // Fallback to a default or show an error
    validAuthUrl = "https://auth.api.xpectrum-ai.com";
  }

  const root = createRoot(document.getElementById("root")!);
  root.render(
    <AuthProvider authUrl={validAuthUrl}>
      <App />
    </AuthProvider>
  );
});