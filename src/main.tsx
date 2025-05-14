import { createRoot } from 'react-dom/client'
import { AuthProvider } from "@propelauth/react"
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <AuthProvider authUrl={import.meta.env.VITE_AUTH_URL}>
    <App />
  </AuthProvider>
);
