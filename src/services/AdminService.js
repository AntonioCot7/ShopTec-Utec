import axios from 'axios';

const adminService = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Crear un nuevo administrador
export const createAdmin = async (nombre, email, password) => {
  try {
    const response = await adminService.post('/admin', { nombre, email, password });
    return response.data;
  } catch (error) {
    console.error('Error en createAdmin:', error);
    throw error;
  }
};

// Obtener la lista de administradores
export const getAdmins = async () => {
  try {
    const response = await adminService.get('/admins');
    return response.data;
  } catch (error) {
    console.error('Error en getAdmins:', error);
    throw error;
  }
};

// Obtener un administrador por ID
export const getAdminById = async (id) => {
  try {
    const response = await adminService.get(`/admin/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error en getAdminById:', error);
    throw error;
  }
};

// Actualizar un administrador
export const updateAdmin = async (id, nombre, email, password) => {
  try {
    const response = await adminService.put(`/admin/${id}`, { nombre, email, password });
    return response.data;
  } catch (error) {
    console.error('Error en updateAdmin:', error);
    throw error;
  }
};

// Eliminar un administrador
export const deleteAdmin = async (id) => {
  try {
    const response = await adminService.delete(`/admin/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error en deleteAdmin:', error);
    throw error;
  }
};

// Iniciar sesión como administrador
export const loginAdmin = async (email, password) => {
  try {
    const response = await adminService.post('/admin/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error en loginAdmin:', error);
    throw error;
  }
};

export default adminService;
