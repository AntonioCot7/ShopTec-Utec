import axios from 'axios';

// Crear una instancia de axios para el orquestador
const orchestratorService = axios.create({
  baseURL: 'http://ldservidor-2021035466.us-east-1.elb.amazonaws.com:4000',  // Asegúrate de que coincida con la configuración de tu API
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET: Bienvenida a la API
export const getWelcomeMessage = async () => {
  try {
    const response = await orchestratorService.get('/');
    return response.data;
  } catch (error) {
    console.error('Error al obtener el mensaje de bienvenida:', error);
    throw error;
  }
};

// POST: Crear una nueva categoría
export const createCategory = async (categoryData) => {
  try {
    console.log("datos",categoryData )
    const response = await orchestratorService.post('/api/orquestador/categorias', categoryData);
    return response.data;
  } catch (error) {
    console.error('Error al crear la categoría:', error);
    throw error;
  }
};

// POST: Crear un nuevo producto
export const createProduct = async (productData) => {
  try {
    const response = await orchestratorService.post('/api/orquestador/producto', productData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw error;
  }
};

// DELETE: Eliminar una categoría
export const deleteCategory = async (categoryData) => {
  try {
    const response = await orchestratorService.delete('/api/orquestador/categoria/eliminar', {
      data: categoryData
    });
    return response.data;
  } catch (error) {
    console.error('Error al eliminar la categoría:', error);
    throw error;
  }
};

// DELETE: Eliminar un producto
export const deleteProduct = async (productData) => {
  try {
    const response = await orchestratorService.delete('/api/orquestador/producto/eliminar', {
      data: productData
    });
    return response.data;
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    throw error;
  }
};

// Exportar el servicio como un módulo
export default orchestratorService;
