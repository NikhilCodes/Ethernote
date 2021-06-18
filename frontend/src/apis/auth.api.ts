import { apiInstance } from './base.api';

export async function login(email: string, password: string) {
  return apiInstance.post('auth/login', {
    email,
    password,
  });
}

export async function register(name: string, email: string, password: string) {
  return apiInstance.post('auth/register', {
    name,
    email,
    password,
  });
}

export async function getAuthStatus() {
  return apiInstance.get('auth/status');
}
