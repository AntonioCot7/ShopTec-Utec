import React, { useState } from 'react';
import { createCategory } from '../services/OrchestratorService';

const CrearCategoria = () => {
  const [categoryData, setCategoryData] = useState({
    nombre: '',
    descripcion: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCategory(categoryData);
      alert('Categoría creada exitosamente');
    } catch (error) {
      console.error('Error al crear categoría:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl mb-4">Crear Categoría</h2>
      <input 
        type="text" 
        placeholder="Nombre de la Categoría" 
        value={categoryData.nombre} 
        onChange={(e) => setCategoryData({ ...categoryData, nombre: e.target.value })} 
        className="mb-4 px-4 py-2 border rounded w-full"
      />
      <textarea 
        placeholder="Descripción" 
        value={categoryData.descripcion} 
        onChange={(e) => setCategoryData({ ...categoryData, descripcion: e.target.value })} 
        className="mb-4 px-4 py-2 border rounded w-full"
      />
      <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Crear Categoría
      </button>
    </form>
  );
};

export default CrearCategoria;
