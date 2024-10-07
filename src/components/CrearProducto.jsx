import React, { useState } from 'react';
import { createProduct } from '../services/OrchestratorService';

const CrearProducto = () => {
  const [productData, setProductData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    stock: '',
    categoriaId: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(productData);
      alert('Producto creado exitosamente');
    } catch (error) {
      console.error('Error al crear producto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-4">Crear Producto</h2>
      <input 
        type="text" 
        placeholder="Nombre del Producto" 
        value={productData.nombre} 
        onChange={(e) => setProductData({ ...productData, nombre: e.target.value })} 
        className="mb-4 px-4 py-2 border rounded w-full"
      />
      <textarea 
        placeholder="Descripción" 
        value={productData.descripcion} 
        onChange={(e) => setProductData({ ...productData, descripcion: e.target.value })} 
        className="mb-4 px-4 py-2 border rounded w-full"
      />
      <input 
        type="number" 
        placeholder="Precio" 
        value={productData.precio} 
        onChange={(e) => setProductData({ ...productData, precio: e.target.value })} 
        className="mb-4 px-4 py-2 border rounded w-full"
      />
      <input 
        type="number" 
        placeholder="Stock" 
        value={productData.stock} 
        onChange={(e) => setProductData({ ...productData, stock: e.target.value })} 
        className="mb-4 px-4 py-2 border rounded w-full"
      />
      <input 
        type="number" 
        placeholder="Categoría ID" 
        value={productData.categoriaId} 
        onChange={(e) => setProductData({ ...productData, categoriaId: e.target.value })} 
        className="mb-4 px-4 py-2 border rounded w-full"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Crear Producto
      </button>
    </form>
  );
};

export default CrearProducto;
