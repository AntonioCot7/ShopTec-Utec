import React, { useState, useEffect } from 'react';
import OrderService from '../services/OrderService'; // Asegúrate de importar los servicios correctos

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = sessionStorage.getItem('userId'); // Asume que el ID del usuario se guarda en sessionStorage

  // Función para obtener los productos del carrito
  const fetchCarrito = async () => {
    try {
      const productos = await getCarritoProductos(userId);
      setCarrito(productos);
    } catch (error) {
      console.error('Error al obtener los productos del carrito:', error);
    } finally {
      setLoading(false);
    }
  };

  // Función para eliminar un producto del carrito
  const handleEliminarProducto = async (productoId) => {
    try {
      await eliminarProductoDelCarrito(userId, productoId);
      // Después de eliminar, actualizamos el carrito
      fetchCarrito();
    } catch (error) {
      console.error('Error al eliminar el producto del carrito:', error);
    }
  };

  // Llamar a la función cuando el componente se monte
  useEffect(() => {
    fetchCarrito();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Mi Carrito</h1>
      {carrito.length === 0 ? (
        <p>No tienes productos en tu carrito.</p>
      ) : (
        <ul className="space-y-4">
          {carrito.map((producto) => (
            <li key={producto.idProducto} className="flex justify-between items-center border-b pb-4">
              <div>
                <h2 className="text-xl font-semibold">{producto.nombre}</h2>
                <p className="text-gray-600">{producto.descripcion}</p>
                <p className="text-gray-800 font-bold">Precio: S/{producto.precio}</p>
              </div>
              <button
                onClick={() => handleEliminarProducto(producto.idProducto)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Carrito;
