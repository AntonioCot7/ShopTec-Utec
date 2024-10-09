import React, { useState } from 'react';
import CrearProducto from '../components/CrearProducto';
import CrearCategoria from '../components/CrearCategoria';
import { useParams } from 'react-router-dom';

const AdminDashboard = () => {
  const [view, setView] = useState('');  

  const { id } = useParams();
  console.log("ID del Administrador:", id);

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-300 to-gray-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido al Panel de Administrador</h1>
        <p className="text-xl mb-6">Aquí podrás gestionar las funcionalidades de la plataforma.</p>

        {/* Buttons to toggle between views */}
        <div className="mb-6">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded" 
            onClick={() => setView('producto')}
          >
            Crear Producto
          </button>
          <button 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" 
            onClick={() => setView('categoria')}
          >
            Crear Categoría
          </button>
        </div>

        {/* Conditional rendering based on view state */}
        {view === 'producto' && <CrearProducto />}
        {view === 'categoria' && <CrearCategoria />}
      </div>
    </div>
  );
};

export default AdminDashboard;
