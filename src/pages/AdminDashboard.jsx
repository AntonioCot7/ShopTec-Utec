import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-300 to-gray-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-4">Bienvenido al Panel de Administrador</h1>
        <p className="text-xl">Aquí podrás gestionar las funcionalidades de la plataforma.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
