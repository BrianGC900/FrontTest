import { api } from '../../../utils/libs/axios';

const baseUrl = '/auth';

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
