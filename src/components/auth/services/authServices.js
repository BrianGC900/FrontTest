import { api } from '../../../utils/libs/axios';

const baseUrl = '/api/auth';

export const login = async (data) => {
  const response = await api.post(`${baseUrl}/login`, data);
  return response.data;
};

export const register = async (data) => {
  const response = await api.post(`${baseUrl}/register`, data);
  return response.data;
};

export const setupPassword = async (data) => {
  const response = await api.post(`${baseUrl}/setup-password`, data);
  return response.data;
};

export const verifyTwoFactor = async (email, code) => {
  try {
    console.log("Enviando datos al backend:", { email, code });
    const response = await api.post(`${baseUrl}/verify-2fa`,{ email, code }, {
      headers: { "Content-Type": "application/json" }
    });
    return response.data;
  } catch (error) {
    console.error("Error en la verificación 2FA:", error.response?.data || error.message);
    throw error;
  }
};
