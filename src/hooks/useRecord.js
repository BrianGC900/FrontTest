import axios from 'axios';

const API_URL = 'http://localhost:3001';
// Función para login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error en el login', error);
    throw error.response ? error.response.data : 'Error al conectar con el servidor';
  }
};


