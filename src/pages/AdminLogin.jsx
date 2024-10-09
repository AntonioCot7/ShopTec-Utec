import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../services/AdminService'; // Importa la función de login del servicio

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  
    try {
      const response = await loginAdmin(email, password);
      console.log("Respuesta del servidor:");  
      if (response) {
        const id = response.id; 
        navigate(`/admin-dashboard/${id}`); 
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response ? error.response.data : error.message);
      setErrorMessage('Credenciales inválidas. Por favor, inténtalo nuevamente.');
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-300 to-gray-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Iniciar Sesión Administrador</h1>
        {errorMessage && (
          <div className="bg-red-200 text-red-700 p-2 rounded mb-4 text-center">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleAdminLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
