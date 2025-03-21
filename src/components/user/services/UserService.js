import { api } from '../../../utils/libs/axios';

const API_URL = "/api/users";

export const fetchUsers = async (search, roleFilter, statusFilter, page, rowsPerPage) => {
  try {
    const params = {
        search, 
        roleFilter, 
        statusFilter,
        page,
        rowsPerPage
    };

    const response = await api.get(API_URL, { params });
    return response.data; 
  } catch (error) {
    console.error(error);
    return []; 
  }
};

export const deleteUser = async (id) => {
  try {
    await api.delete(`${API_URL}/${id}`);
    return true;
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return false; 
  }
};

// Actualizar un usuario por su ID
export const updateUser = async (userData) => {
  try {
    const { _id, ...dataToUpdate } = userData;
    const response = await api.put(`${API_URL}/${_id}`, dataToUpdate);  
    return response.data; 
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    return null;
  }
};