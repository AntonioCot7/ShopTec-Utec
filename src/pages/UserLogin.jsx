import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import OrderService from '../services/OrderService';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Intentar iniciar sesión con el email proporcionado
      await loginUsuario({ email, password });

      // Obtener los detalles del usuario por email
      const usuario = await getUsuarioByEmail(email);
      if (usuario) {
        alert(`Iniciaste sesión correctamente. Tu ID de usuario es: ${usuario.idUsuario}`);
        // Redirigir al dashboard o a la página principal
        navigate('/');
      } else {
        setError('Usuario no encontrado');
      }
    } catch (error) {
      setError('Error al iniciar sesión. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Iniciar Sesión Usuario</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
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
        {/* Sección para redirigir a la página de registro */}
        <div className="text-center mt-4">
          <p className="text-gray-600">¿No tienes una cuenta?</p>
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-700 font-semibold"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
