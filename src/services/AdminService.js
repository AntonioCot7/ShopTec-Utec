import axios from 'axios';

const adminService = axios.create({
  baseURL: 'http://ldservidor-2021035466.us-east-1.elb.amazonaws.com:5000',
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

export const loginAdmin = async (email, password) => {
  try {
    const response = await axios.post('http://ldservidor-2021035466.us-east-1.elb.amazonaws.com:5000/admin/login', { email, password }, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  }  catch (error) {
    if (error.response) {
      console.error('Error en loginAdmin:', error.response.data);
      throw new Error(error.response.data.message || 'Error en la autenticación');
    } else if (error.request) {
      console.error('Error en loginAdmin: No se recibió respuesta del servidor', error.request);
      throw new Error('No se recibió respuesta del servidor');
    } else {
+      console.error('Error en loginAdmin: Error al configurar la solicitud', error.message);
      throw new Error('Error al configurar la solicitud');
    }
  }
};


export default adminService;
