import axios from 'axios';

const API_URL = 'http://localhost:3001/api/auth';

// Función para login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    
    if (response.data.requiresTwoFactor) {
      return { requiresTwoFactor: true, message: response.data.message };
    }

    return { requiresTwoFactor: false, user: response.data.user, token: response.data.token, message: response.data.message };
    
  } catch (error) {
    console.error('Error en el login:', error);
    throw error.response ? error.response.data : 'Error al conectar con el servidor';
  }
};

