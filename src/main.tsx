import { createRoot } from 'react-dom/client'
import { AuthProvider } from "@propelauth/react"
import App from './App'
import './index.css'

const root = createRoot(document.getElementById("root")!);
root.render(
  <AuthProvider authUrl={import.meta.env.VITE_AUTH_URL}>
    <App />
  </AuthProvider>
);
