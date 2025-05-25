export const SECRET_NAMES = {
  API_KEYS: 'xpectrum/api-keys',
  PROPELAUTH: 'xpectrum/propelauth',
  AUTH_CONFIG: 'xpectrum/auth-config'
} as const;

// Type for API keys secret
export interface ApiKeysSecret {
  xpectrum_api_key: string;
  // Add other API keys as needed
}

// Type for PropelAuth secret
export interface PropelAuthSecret {
  api_key: string;
  public_key: string;
  issuer: string;
}

// Type for Auth config secret
export interface AuthConfigSecret {
  auth_url: string;
} 