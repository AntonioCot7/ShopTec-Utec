import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  return (
    <div className="container mx-auto py-8">
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
        <SwiperSlide><img src={img1} alt="Portada 1" className="w-full h-auto" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="Portada 2" className="w-full h-auto" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="Portada 3" className="w-full h-auto" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="Portada 4" className="w-full h-auto" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="Portada 5" className="w-full h-auto" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="Portada 6" className="w-full h-auto" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="Portada 7" className="w-full h-auto" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="Portada 8" className="w-full h-auto" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PortadaPrincipal;
