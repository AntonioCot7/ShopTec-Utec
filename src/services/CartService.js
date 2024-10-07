import axios from 'axios';

// Crear la instancia de axios con la configuración por defecto
const cartService = axios.create({
  baseURL: 'http://ld-produccion-557541709.us-east-1.elb.amazonaws.com:3000',  // Aquí puedes configurar la URL base de tu API
  headers: {
    'Content-Type': 'application/json',
  },
});

class CartService {
  
  // POST: Crear un nuevo carrito
  async createCart(data) {
    try {
      const response = await cartService.post('/api/carrito/postear', data);
      return response.data;
    } catch (error) {
      console.error("Error creating cart:", error);
      throw error;
    }
  }

  // GET: Obtener todos los carritos
  async getAllCarts() {
    try {
      const response = await cartService.get('/api/carrito/all');
      return response.data;
    } catch (error) {
      console.error("Error fetching all carts:", error);
      throw error;
    }
  }

  // GET: Obtener carrito por ID
  async getCartById(id) {
    try {
      const response = await cartService.get(`/api/carrito/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching cart by ID:", error);
      throw error;
    }
  }

  // GET: Obtener carritos por usuario
  async getCartsByUser(userId) {
    try {
      const response = await cartService.get(`/api/carrito/usuario/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching carts by user:", error);
      throw error;
    }
  }

  // PUT: Modificar carrito a pagado
  async markCartAsPaid(id) {
    try {
      const response = await cartService.put(`/api/carrito/pagado/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error marking cart as paid:", error);
      throw error;
    }
  }

  // DELETE: Eliminar carrito
  async deleteCart(id) {
    try {
      const response = await cartService.delete(`/api/carrito/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting cart:", error);
      throw error;
    }
  }

  // PUT: Editar detalle del carrito
  async updateCartDetails(id, detallesCarritoId) {
    try {
      const response = await cartService.put(`/api/carrito/detalles/${id}`, { detallesCarritoId });
      return response.data;
    } catch (error) {
      console.error("Error updating cart details:", error);
      throw error;
    }
  }

  // --- DetalleCarrito Endpoints ---

  // POST: Crear un nuevo detalle del carrito
  async createCartDetail(data) {
    try {
      const response = await cartService.post('/api/detalleCarrito/postear', data);
      return response.data;
    } catch (error) {
      console.error("Error creating cart detail:", error);
      throw error;
    }
  }

  // PUT: Agregar un producto al detalle del carrito
  async addProductToCartDetail(id, productData) {
    try {
      const response = await cartService.put(`/api/detalleCarrito/agregarProducto/${id}`, productData);
      return response.data;
    } catch (error) {
      console.error("Error adding product to cart detail:", error);
      throw error;
    }
  }

  // GET: Obtener todos los detalles del carrito
  async getAllCartDetails() {
    try {
      const response = await cartService.get('/api/detalleCarrito/all');
      return response.data;
    } catch (error) {
      console.error("Error fetching all cart details:", error);
      throw error;
    }
  }

  // GET: Obtener detalle del carrito por ID
  async getCartDetailById(id) {
    try {
      const response = await cartService.get(`/api/detalleCarrito/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching cart detail by ID:", error);
      throw error;
    }
  }

  // DELETE: Eliminar un detalle del carrito
  async deleteCartDetail(id) {
    try {
      const response = await cartService.delete(`/api/detalleCarrito/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting cart detail:", error);
      throw error;
    }
  }

  // DELETE: Eliminar un producto del detalle del carrito
  async deleteProductFromCartDetail(id, productId) {
    try {
      const response = await cartService.delete(`/api/detalleCarrito/${id}/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting product from cart detail:", error);
      throw error;
    }
  }

  // PUT: Editar la cantidad de un producto en el detalle del carrito
  async updateProductQuantity(id, productId, quantity) {
    try {
      const response = await cartService.put(`/api/detalleCarrito/${id}/${productId}`, { cantidad: quantity });
      return response.data;
    } catch (error) {
      console.error("Error updating product quantity:", error);
      throw error;
    }
  }

  // GET: Obtener un producto específico por el ID del detalle del carrito y el ID del producto
  async getProductFromCartDetail(id, productId) {
    try {
      const response = await cartService.get(`/api/detalleCarrito/${id}/${productId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product from cart detail:", error);
      throw error;
    }
  }
}

// Exportar la instancia de CartService
module.exports = new CartService();
