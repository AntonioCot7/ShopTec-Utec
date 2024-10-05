import React, { useState } from 'react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@shoptec.com' && password === 'admin123') {
      alert('Iniciaste sesión como Administrador');
    } else {
      alert('Credenciales inválidas');
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Iniciar Sesión Administrador</h1>
      <form onSubmit={handleAdminLogin} className="space-y-4">
        <div>
          <label className="block">Correo Electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label className="block">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default AdminLogin;
