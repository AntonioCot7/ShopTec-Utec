import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo-ShopTec.png';

const MainNavbar = () => {
  const [showCategories, setShowCategories] = useState(false);

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
        <div className="relative">
          <button 
            className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded" 
            onClick={() => setShowCategories(!showCategories)}
          >
            Todas las categorías
          </button>
          {showCategories && (
            <div className="absolute bg-white shadow-lg mt-2 p-4 w-96 z-50"> {/* Agregado z-50 */}
              <ul className="grid grid-cols-2 gap-4">
                <li><Link to="/" className="hover:text-purple-600">Celulares</Link></li>
                <li><Link to="/" className="hover:text-purple-600">Computadoras y Tablets</Link></li>
                <li><Link to="/" className="hover:text-purple-600">Accesorios</Link></li>
                <li><Link to="/" className="hover:text-purple-600">Televisores</Link></li>
                <li><Link to="/" className="hover:text-purple-600">Juegos y Consolas</Link></li>
                <li><Link to="/" className="hover:text-purple-600">Cámaras</Link></li>
                <li><Link to="/" className="hover:text-purple-600">Componentes</Link></li>
                <li><Link to="/" className="hover:text-purple-600">Audio</Link></li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex items-center">
          {/* Icono de lupa dentro del input de búsqueda */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Buscar aquí..." 
              className="p-2 rounded-full w-80 text-gray-800 pl-10"
            />
            <span className="material-icons absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">search</span>
          </div>
          {/* Icono de cuenta de usuario */}
          <Link to="/login" className="text-white flex items-center ml-4">
            <span className="material-icons mr-1">account_circle</span>
            Mi cuenta
          </Link>
          {/* Icono de carrito de compras */}
          <Link to="/carrito" className="text-white bg-green-500 hover:bg-green-600 py-2 px-4 rounded flex items-center ml-4">
            <span className="material-icons mr-1">shopping_cart</span>
            Mi carrito
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;
