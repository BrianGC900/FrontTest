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

// Cambiar el nombre de la función a `verifyTwoFactor`
export const verifyTwoFactor = async (token, userId) => {
  const response = await api.post(`${baseUrl}/verify2fa/${userId}`, {
    token,
  });
  return response.data;
};
