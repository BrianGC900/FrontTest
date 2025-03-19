import { create } from 'zustand';
import { jwtDecode } from 'jwt-decode';

const initialStates = {
  isAuthenticated: false,
  profile: null,
  token: null,
};

const getStoredAuth = () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const decodedProfile = jwtDecode(token);
      return {
        isAuthenticated: true,
        profile: decodedProfile,
        token: token,
      };
    } catch (error) {
      localStorage.removeItem('token');
      return initialStates;
    }
  }
  return initialStates;
};

export const useAuthStore = create((set) => ({
  ...getStoredAuth(),

  login: (token) => {
    try {

      const decodedProfile = jwtDecode(token);
      localStorage.setItem('token', token);

      set({
        isAuthenticated: true,
        profile: decodedProfile,
        token: token,
      });
    } catch (error) {
      console.error('Error al decodificar el token:', error);
    }
  },

  logout: () => {
    set(initialStates);
    localStorage.removeItem('token');
  },
}));
