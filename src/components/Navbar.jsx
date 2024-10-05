import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo-ShopTec.png'; // Importar el logo

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="ShopTec Logo" className="h-12 w-12 mr-3" />
          <h1 className="text-white text-2xl font-bold">SHOPTEC</h1>
        </div>
        <div>
          <Link to="/admin" className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded">
            Iniciar Sesión Administrador
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
