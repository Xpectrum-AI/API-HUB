import { ApiKeysSecret, PropelAuthSecret, AuthConfigSecret } from '../config/secrets';

// Cache for storing retrieved secrets
const secretCache: { [key: string]: any } = {};

/**
 * Retrieves a secret from environment variables
 * @param secretName The name of the secret to retrieve
 * @param useCache Whether to use cached value if available (default: true)
 * @returns The secret value
 */
export async function getSecret<T>(secretName: string, useCache: boolean = true): Promise<T> {
  // Check cache first if enabled
  if (useCache && secretCache[secretName]) {
    return secretCache[secretName] as T;
  }

  try {
    let secretValue: T;

    switch (secretName) {
      case 'xpectrum/api-keys':
        secretValue = {
          xpectrum_api_key: import.meta.env.VITE_XPECTRUM_API_KEY || ''
        } as T;
        break;
      case 'xpectrum/propelauth':
        secretValue = {
          api_key: import.meta.env.VITE_PROPELAUTH_API_KEY || '',
          public_key: import.meta.env.VITE_PROPELAUTH_PUBLIC_KEY || '',
          issuer: import.meta.env.VITE_PROPELAUTH_ISSUER || 'https://auth.api.xpectrum-ai.com'
        } as T;
        break;
      case 'xpectrum/auth-config':
        secretValue = {
          auth_url: import.meta.env.VITE_AUTH_URL || 'https://auth.api.xpectrum-ai.com'
        } as T;
        break;
      default:
        throw new Error(`Unknown secret name: ${secretName}`);
    }
    
    // Cache the secret if caching is enabled
    if (useCache) {
      secretCache[secretName] = secretValue;
    }

    return secretValue;
  } catch (error) {
    console.error(`Error retrieving secret ${secretName}:`, error);
    throw error;
  }
}

/**
 * Retrieves multiple secrets from AWS Secrets Manager
 * @param secretNames Array of secret names to retrieve
 * @returns Object containing all requested secrets
 */
export async function getSecrets(secretNames: string[]): Promise<{ [key: string]: any }> {
  const secrets: { [key: string]: any } = {};
  
  await Promise.all(
    secretNames.map(async (secretName) => {
      try {
        secrets[secretName] = await getSecret(secretName);
      } catch (error) {
        console.error(`Failed to retrieve secret ${secretName}:`, error);
        secrets[secretName] = null;
      }
    })
  );

  return secrets;
}

// Specific secret getters with proper typing
export async function getApiKeys(): Promise<ApiKeysSecret> {
  return getSecret<ApiKeysSecret>('xpectrum/api-keys');
}

export async function getPropelAuthConfig(): Promise<PropelAuthSecret> {
  return getSecret<PropelAuthSecret>('xpectrum/propelauth');
}

export async function getAuthConfig(): Promise<AuthConfigSecret> {
  return getSecret<AuthConfigSecret>('xpectrum/auth-config');
} 