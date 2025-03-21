import { api } from '../../../utils/libs/axios';  // Importa la configuración de axios

const API_URL = "/api/users"; // Ruta base de los usuarios

// Obtener usuarios con los parámetros de búsqueda, rol, estado, página y límite
export const fetchUsers = async (search, roleFilter, statusFilter, page, rowsPerPage) => {
  try {
    // Construir los parámetros de consulta
    const params = {
        search,  // Puedes probar con un valor de prueba aquí
        roleFilter, 
        statusFilter,
        page,
        rowsPerPage
    };

    // Realizar la solicitud GET usando el api configurado

    const response = await api.get(API_URL, { params });
    console.log("DATA",response.data);

    // Retorna los datos de los usuarios
    return response.data; 
  } catch (error) {
    console.error(error);
    return [];  // En caso de error, devuelve un arreglo vacío
  }
};

// Eliminar un usuario por su id
export const deleteUser = async (id) => {
  try {
    // Realizar la solicitud DELETE usando el api configurado
    await api.delete(`${API_URL}/${id}`);
    return true;  // Retorna true si la eliminación fue exitosa
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    return false;  // Retorna false si ocurrió un error
  }
};
