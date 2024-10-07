import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

// Servicio de Pedido, Dirección de Envío y Usuario
const OrderService = {
  // PEDIDO ENDPOINTS

  // Obtener detalles de un pedido por su ID
  getPedidoById: async (pedidoId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/pedido/detalles/${pedidoId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener los detalles del pedido');
    }
  },

  // Obtener todos los pedidos de un usuario por su ID
  getPedidosByUserId: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/pedido/usuario/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener los pedidos del usuario');
    }
  },

  // Crear un nuevo pedido
  createPedido: async (pedidoData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/pedido/postear`, pedidoData);
      return response.data;
    } catch (error) {
      throw new Error('Error al crear el pedido');
    }
  },

  // Editar un pedido existente
  editPedido: async (pedidoId, pedidoData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/pedido/editar/${pedidoId}`, pedidoData);
      return response.data;
    } catch (error) {
      throw new Error('Error al editar el pedido');
    }
  },

  // Eliminar un pedido
  deletePedido: async (pedidoId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/pedido/eliminar/${pedidoId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al eliminar el pedido');
    }
  },

  // Obtener pedidos de un usuario por estado
  getPedidosByUserAndEstado: async (userId, estado) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/pedido/usuario/${userId}/estado?estado=${estado}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener los pedidos por estado');
    }
  },

  // Obtener pedidos de un usuario en un rango de fechas
  getPedidosByFecha: async (userId, fechaInicio, fechaFin) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/pedido/usuario/${userId}/fecha?fechaPedidodesde=${fechaInicio}&fechaPedidoHasta=${fechaFin}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener los pedidos por fecha');
    }
  },

  // Obtener los estados de pedidos
  getPedidoEstados: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/pedido/estado`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener los estados de pedidos');
    }
  },

  // Obtener pedidos por estado
  getPedidosByEstado: async (estado) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/pedido/estado?estado=${estado}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener pedidos por estado');
    }
  },

  // Obtener pedidos por rango de fechas
  getPedidosByRangeFecha: async (fechaInicio, fechaFin) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/pedido/fecha?fechaPedidodesde=${fechaInicio}&fechaPedidoHasta=${fechaFin}`
      );
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener pedidos por rango de fechas');
    }
  },

  // Obtener pedido por ID de usuario y pedido
  getPedidoByUserIdAndPedidoId: async (userId, pedidoId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/pedido/usuario/${userId}/pedido/${pedidoId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener el pedido por usuario y pedido');
    }
  },

  // DIRECCIÓN ENVÍO ENDPOINTS

  // Crear una nueva dirección de envío
  createDireccionEnvio: async (direccionData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/direccion/postear`, direccionData);
      return response.data;
    } catch (error) {
      throw new Error('Error al crear la dirección de envío');
    }
  },

  // Obtener detalles de una dirección de envío por su ID
  getDireccionById: async (direccionId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/direccion/detalles/${direccionId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener los detalles de la dirección');
    }
  },

  // Obtener todas las direcciones de un usuario por su ID
  getDireccionesByUserId: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/direccion/usuario/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener las direcciones del usuario');
    }
  },

  // Editar una dirección de envío
  editDireccionEnvio: async (direccionId, usuarioId, direccionData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/direccion/editar/${direccionId}/${usuarioId}`, direccionData);
      return response.data;
    } catch (error) {
      throw new Error('Error al editar la dirección de envío');
    }
  },

  // Eliminar una dirección de envío
  deleteDireccionEnvio: async (direccionId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/direccion/eliminar/${direccionId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al eliminar la dirección de envío');
    }
  },

  // Obtener direcciones por usuario
  getDireccionesByUsuario: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/direccion/usuario/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener las direcciones del usuario');
    }
  },

  // USUARIO ENDPOINTS

  // Registrar un nuevo usuario
  registerUsuario: async (usuarioData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/usuario/registrar`, usuarioData);
      return response.data;
    } catch (error) {
      throw new Error('Error al registrar el usuario');
    }
  },

  // Iniciar sesión como usuario
  loginUsuario: async (loginData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/usuario/login`, loginData);
      return response.data;
    } catch (error) {
      throw new Error('Error al iniciar sesión');
    }
  },

  // Obtener detalles del usuario por su ID
  getUsuarioById: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/usuario/obtenerid/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener los detalles del usuario');
    }
  },

  // Obtener detalles del usuario por email
  getUsuarioByEmail: async (email) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/usuario/detalles-email?email=${email}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener los detalles del usuario por email');
    }
  },

  // Actualizar el email de un usuario
  updateUsuarioEmail: async (userId, emailData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/usuario/actualizar-email/${userId}`, emailData);
      return response.data;
    } catch (error) {
      throw new Error('Error al actualizar el email del usuario');
    }
  },

  // Actualizar el teléfono de un usuario
  updateUsuarioTelefono: async (userId, telefonoData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/usuario/actualizar-telefono/${userId}`, telefonoData);
      return response.data;
    } catch (error) {
      throw new Error('Error al actualizar el teléfono del usuario');
    }
  },

  // Eliminar un usuario
  deleteUsuario: async (userId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/usuario/eliminar/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al eliminar el usuario');
    }
  },

  // Obtener ID del usuario por su email
  getUsuarioIdByEmail: async (email) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/usuario/detalles-email?email=${email}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al obtener el ID del usuario');
    }
  },

  // Actualizar los detalles completos del usuario
  updateUsuario: async (userId, usuarioData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/usuario/actualizar/${userId}`, usuarioData);
      return response.data;
    } catch (error) {
      throw new Error('Error al actualizar los detalles del usuario');
    }
  },
};

export default OrderService;
