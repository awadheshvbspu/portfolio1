import React from 'react';
import './testimonial.css';
import {Data} from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Pagination from '../../../node_modules/swiper/modules/pagination.mjs'

export default function Testimonial() {
  return (
    <section className='testimonial container section' id='portfolio'>
         <h2 className='section__title'>My clients say</h2>
        <span className='section__subtitle'>Testimonial</span>
        <Swiper className='testimonial__container mySwiper'
         loop={true}
         grabCursor={true}
         spaceBetween={24}
         pagination={{
            576: {
                slidesPerView:2,
            },
            768: {
                slidesPerView:2,
                spaceBetween:48,
            },
            1024: {
                slidesPerView:2,
                spaceBetween:48,
            }
         }}
         modules={[Pagination]}
        //  className="mySwiper"
             >
            {Data.map(({id, image, title, description})=>{
                return(
                    <SwiperSlide className='testimonial__card' key={id}>
                        <img src={image} className='testimonial__img' alt=''/>
                        <h3 className='testimonial__name'>{title}</h3>
                        <p className='testimonial__description'>{description}</p>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </section>
  )
}
