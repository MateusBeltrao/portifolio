import React from 'react';
import "./testimonials.css";
import Data from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section className='testimonial container section'>
      <h2 className="section_title">Meus clientes dizem</h2>
      <span className='section_subtitle grid'>Depoimento</span>

      <Swiper 
        className='testimonial_container'
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({id, image, title, description}) => {
          return (
            <SwiperSlide className='testimonial_card' key={id}>
              <img src={image} alt="" className='testimonial_img' />
              <h3 className='testimonial_name'>{title}</h3>
              <p className='testimonial_description'>{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
