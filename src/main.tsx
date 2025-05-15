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

// Access environment variables from the runtime-generated config
// This allows for Docker environment variable injection
const authUrl = window.ENV?.VITE_AUTH_URL || import.meta.env.VITE_AUTH_URL;

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