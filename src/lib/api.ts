import axios from 'axios';
import { getApiKeys } from '../utils/secretsManager';
import { SECRET_NAMES, ApiKeysSecret } from '../config/secrets';

// API Configuration
const API_URL = '/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Initialize API with secrets
let apiKey: string;

// Function to initialize API with secrets
export async function initializeApi() {
  try {
    const secrets = await getApiKeys();
    apiKey = secrets.xpectrum_api_key;
    
    // Update axios default headers with API key
    api.defaults.headers['x-api-key'] = apiKey;
  } catch (error) {
    console.error('Failed to initialize API with secrets:', error);
    throw error;
  }
}

// API helper functions for Applications
export const applicationsApi = {
  getAll: async () => {
    const response = await api.get(`/terminsurance/api/v1/applications?api_key=${apiKey}`);
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/terminsurance/api/v1/applications/${id}?api_key=${apiKey}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await api.post(`/terminsurance/api/v1/applications?api_key=${apiKey}`, data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/terminsurance/api/v1/applications/${id}?api_key=${apiKey}`, data);
    return response.data;
  }
};

// API helper functions for Plan Quotes
export const planQuoteApi = {
  getById: async (id: string) => {
    const response = await api.get(`/terminsurance/api/v1/plan_quote/${id}?api_key=${apiKey}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await api.post(`/terminsurance/api/v1/plan_quote/?api_key=${apiKey}`, data);
    return response.data;
  }
};

// API helper functions for Policies
export const policiesApi = {
  getById: async (id: string) => {
    const response = await api.get(`/terminsurance/api/v1/policies/${id}?api_key=${apiKey}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await api.post(`/terminsurance/api/v1/policies/?api_key=${apiKey}`, data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/terminsurance/api/v1/policies/${id}?api_key=${apiKey}`, data);
    return response.data;
  }
};

// API helper functions for Riders
export const ridersApi = {
  getById: async (name: string) => {
    const response = await api.get(`/terminsurance/api/v1/riders/${name}?api_key=${apiKey}`);
    return response.data;
  }
};

// API helper functions for Rider Applications
export const ridersApplicationsApi = {
  getById: async (id: string) => {
    const response = await api.get(`/terminsurance/api/v1/riders_applications/${id}?api_key=${apiKey}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await api.post(`/terminsurance/api/v1/riders_applications?api_key=${apiKey}`, data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/terminsurance/api/v1/riders_applications/${id}?api_key=${apiKey}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/terminsurance/api/v1/riders_applications/${id}?api_key=${apiKey}`);
    return response.data;
  }
};

// API helper functions for Rider Quotes
export const ridersQuoteApi = {
  getAll: async () => {
    const response = await api.get(`/terminsurance/api/v1/riders_quote?api_key=${apiKey}`);
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/terminsurance/api/v1/riders_quote/${id}?api_key=${apiKey}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await api.post(`/terminsurance/api/v1/riders_quote?api_key=${apiKey}`, data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await api.put(`/terminsurance/api/v1/riders_quote/${id}?api_key=${apiKey}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await api.delete(`/terminsurance/api/v1/riders_quote/${id}?api_key=${apiKey}`);
    return response.data;
  }
};

// API helper functions for Term Life Insurance Plans
export const termLifePlansApi = {
  getAll: async () => {
    const response = await api.get(`/terminsurance/api/v1/term_life_plans?api_key=${apiKey}`);
    return response.data;
  },
  getById: async (id: string) => {
    const response = await api.get(`/terminsurance/api/v1/term_life_plans/${id}?api_key=${apiKey}`);
    return response.data;
  }
};

export default {
  applicationsApi,
  planQuoteApi,
  policiesApi,
  ridersApi,
  ridersApplicationsApi,
  ridersQuoteApi,
  termLifePlansApi
}; 
