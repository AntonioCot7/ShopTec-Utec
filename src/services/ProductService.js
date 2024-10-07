import axios from 'axios';

const API_URL = 'http://ld-produccion-557541709.us-east-1.elb.amazonaws.com/api';

// Servicio de productos
const ProductService = {
  // Obtener producto por ID
  getProductById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/producto/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener el producto con ID ${id}:`, error);
      throw error;
    }
  },

  // Obtener todos los productos con paginación
  getAllProducts: async (page, size) => {
    try {
      const response = await axios.get(`${API_URL}/producto/all`, {
        params: { page, size },
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener todos los productos:', error);
      throw error;
    }
  },

  // Crear nuevo producto
  createProduct: async (productData) => {
    try {
      const response = await axios.post(`${API_URL}/producto/postear`, productData);
      return response.data;
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  },

  // Actualizar un producto por ID
  updateProduct: async (id, productData) => {
    try {
      await axios.put(`${API_URL}/producto/${id}`, productData);
    } catch (error) {
      console.error(`Error al actualizar el producto con ID ${id}:`, error);
      throw error;
    }
  },

  // Eliminar producto por ID
  deleteProduct: async (id) => {
    try {
      await axios.delete(`${API_URL}/producto/${id}`);
    } catch (error) {
      console.error(`Error al eliminar el producto con ID ${id}:`, error);
      throw error;
    }
  },

  // Actualizar el stock del producto
  updateStock: async (id, cantidad) => {
    try {
      await axios.patch(`${API_URL}/producto/${id}`, { cantidad });
    } catch (error) {
      console.error(`Error al actualizar el stock del producto con ID ${id}:`, error);
      throw error;
    }
  },

  // Reducir stock del producto
  reduceStock: async (id, cantidad) => {
    try {
      await axios.patch(`${API_URL}/producto/reducir/${id}`, { cantidad });
    } catch (error) {
      console.error(`Error al reducir el stock del producto con ID ${id}:`, error);
      throw error;
    }
  },

  // Obtener productos por categoría
  getProductsByCategory: async (id, page, size) => {
    try {
      const response = await axios.get(`${API_URL}/producto/categoria/${id}`, {
        params: { page, size },
      });
      return response.data;
    } catch (error) {
      console.error(`Error al obtener productos por categoría con ID ${id}:`, error);
      throw error;
    }
  },

  // Obtener productos por nombre
  getProductsByName: async (nombre, page, size) => {
    try {
      const response = await axios.get(`${API_URL}/producto/nombre`, {
        params: { nombre, page, size },
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener productos por nombre:', error);
      throw error;
    }
  },

  // Servicio de categorías
  createCategory: async (categoryData) => {
    try {
      const response = await axios.post(`${API_URL}/categoria/postear`, categoryData);
      return response.data;
    } catch (error) {
      console.error('Error al crear la categoría:', error);
      throw error;
    }
  },

  getCategoryById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/categoria/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener la categoría con ID ${id}:`, error);
      throw error;
    }
  },

  getAllCategories: async (page, size) => {
    try {
      const response = await axios.get(`${API_URL}/categoria/all`, {
        params: { page, size },
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener todas las categorías:', error);
      throw error;
    }
  },

  updateCategory: async (id, categoryData) => {
    try {
      await axios.patch(`${API_URL}/categoria/${id}`, categoryData);
    } catch (error) {
      console.error(`Error al actualizar la categoría con ID ${id}:`, error);
      throw error;
    }
  },

  deleteCategory: async (id) => {
    try {
      await axios.delete(`${API_URL}/categoria/${id}`);
    } catch (error) {
      console.error(`Error al eliminar la categoría con ID ${id}:`, error);
      throw error;
    }
  },

  getCategoriesByName: async (nombre, page, size) => {
    try {
      const response = await axios.get(`${API_URL}/categoria/nombre`, {
        params: { nombre, page, size },
      });
      return response.data;
    } catch (error) {
      console.error('Error al obtener categorías por nombre:', error);
      throw error;
    }
  },

  // Servicio de reseñas
  createReview: async (reviewData) => {
    try {
      const response = await axios.post(`${API_URL}/reseñas/postear`, reviewData);
      return response.data;
    } catch (error) {
      console.error('Error al crear la reseña:', error);
      throw error;
    }
  },

  getReviewByProduct: async (productoId, page, size) => {
    try {
      const response = await axios.get(`${API_URL}/reseñas/producto/${productoId}`, {
        params: { page, size },
      });
      return response.data;
    } catch (error) {
      console.error(`Error al obtener reseñas del producto con ID ${productoId}:`, error);
      throw error;
    }
  },

  getReviewById: async (productoId, reseñaId) => {
    try {
      const response = await axios.get(`${API_URL}/reseñas/${productoId}/${reseñaId}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener la reseña con ID ${reseñaId} del producto con ID ${productoId}:`, error);
      throw error;
    }
  },

  deleteReview: async (productoId, reseñaId) => {
    try {
      await axios.delete(`${API_URL}/reseñas/${productoId}/${reseñaId}`);
    } catch (error) {
      console.error(`Error al eliminar la reseña con ID ${reseñaId} del producto con ID ${productoId}:`, error);
      throw error;
    }
  },

  updateReview: async (productoId, reseñaId, reviewData) => {
    try {
      await axios.patch(`${API_URL}/reseñas/${productoId}/${reseñaId}`, reviewData);
    } catch (error) {
      console.error(`Error al actualizar la reseña con ID ${reseñaId} del producto con ID ${productoId}:`, error);
      throw error;
    }
  },

  getAverageRating: async (productoId) => {
    try {
      const response = await axios.get(`${API_URL}/reseñas/promedio/${productoId}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener el promedio de reseñas del producto con ID ${productoId}:`, error);
      throw error;
    }
  },
};

export default ProductService;
