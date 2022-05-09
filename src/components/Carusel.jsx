import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// 
import DualSense from '../img/PS5-Controller-PNG-Image.png';
import Pulse3d from '../img/pulse 3d.png';
import Ps5 from '../img/ps5 - Copy.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// 
function Carusel(props) {
  return (
    <Swiper
    // install Swiper modules
    className={'w-7/12 '+' '+props.className}
    modules={[Navigation, Pagination, Scrollbar]}
    spaceBetween={0}
    slidesPerView={1}
    pagination={{ clickable: true }}
  >
    <SwiperSlide><img className='w-7/12 ml-auto mr-auto' src={DualSense} alt="" /></SwiperSlide>
    <SwiperSlide><img className='w-7/12 ml-auto mr-auto ' src={DualSense} alt="" /></SwiperSlide>
    
    
  </Swiper>
  )
}

export default Carusel
