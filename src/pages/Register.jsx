import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderService from '../services/OrderService';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      // Intentar registrar el usuario
      const usuarioData = { nombre, apellido, email, telefono, password };
      const response = await registerUsuario(usuarioData);
      if (response) {
        alert('Registro exitoso');
        // Redirigir al login
        navigate('/login');
      }
    } catch (error) {
      setError('Error al registrar. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Registrarse</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Apellido</label>
            <input
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Teléfono</label>
            <input
              type="tel"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
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
          <div>
            <label className="block text-gray-700">Confirmar Contraseña</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
