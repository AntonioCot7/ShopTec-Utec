import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProductService from '../services/ProductService'; // Importar el servicio para obtener productos

// Importar imágenes
import img1 from '../assets/portada1.png';
import img2 from '../assets/portada2.png';
import img3 from '../assets/portada3.png';
import img4 from '../assets/portada4.png';
import img5 from '../assets/portada5.png';
import img6 from '../assets/portada6.png';
import img7 from '../assets/portada7.png';
import img8 from '../assets/portada8.png';

const PortadaPrincipal = () => {
  const [products, setProducts] = useState([]); // Almacena los productos
  const [page, setPage] = useState(0); // Controla la página de paginación
  const [loading, setLoading] = useState(false); // Controla el estado de carga

  // Función para obtener productos con paginación
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const newProducts = await ProductService.getAllProducts(page, 6); // Obtener 6 productos por página
      setProducts((prevProducts) => [...prevProducts, ...newProducts.content]); // Agregar productos nuevos a la lista
      setPage(page + 1); // Incrementar la página
    } catch (error) {
      console.error('Error al obtener productos:', error);
    }
    setLoading(false);
  };

  // Llama a la función cuando el componente se monta
  useEffect(() => {
    fetchProducts();
  }, []);

  // Manejar el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 50 && !loading) {
        fetchProducts(); // Cargar más productos cuando se llega al final de la página
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div className="w-screen min-h-screen bg-gray-100"> {/* Ajustar para que cubra toda la pantalla */}
      {/* Slider de Portadas */}
      <div className="w-full h-screen"> {/* Ajuste para que el slider cubra toda la pantalla */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide><img src={img1} alt="Portada 1" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src={img2} alt="Portada 2" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src={img3} alt="Portada 3" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src={img4} alt="Portada 4" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src={img5} alt="Portada 5" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src={img6} alt="Portada 6" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src={img7} alt="Portada 7" className="w-full h-full object-cover" /></SwiperSlide>
          <SwiperSlide><img src={img8} alt="Portada 8" className="w-full h-full object-cover" /></SwiperSlide>
        </Swiper>
      </div>

      {/* Lista de productos debajo del slider */}
      <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">{product.nombre}</h3>
            <p className="text-gray-700 mb-2">{product.descripcion}</p>
            <p className="text-green-600 font-bold text-lg">S/{product.precio}</p>
          </div>
        ))}
      </div>
      {loading && <p className="text-center mt-5">Cargando productos...</p>}
    </div>
  );
};

export default PortadaPrincipal;
