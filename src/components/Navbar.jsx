import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo-ShopTec.png';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-purple-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="ShopTec Logo" className="h-16 w-16 mr-3" />
          </Link>
          <Link to="/">
            <h1 className="text-white text-xl font-bold">SHOPTEC</h1>
          </Link>
        </div>
        <div>
          <a href="/admin" className="text-white flex items-center bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded">
            <span className="material-icons mr-2">admin_panel_settings</span>
            Iniciar Sesión Administrador
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
