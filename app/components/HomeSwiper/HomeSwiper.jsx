'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import barData from '../../database/barData';

import './HomeSwiper.css'
import 'swiper/css';

export default function HomeSwiper() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
  return (
      <div className="swiperItems">
          <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              grabCursor={true}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
              }}
          >
        {isMobile ? (
        barData.flatMap((barItem, index) =>
            barItem.swiper.map((bar, nestedIndex) => (
                <SwiperSlide className='swiperItemAdaptive' key={`${index}-${nestedIndex}`}>
                    <div className="itemInner">
                        <img src={bar.img} alt="" className="swiperImg" />
                        <h5 className="swiperManufacturer">{bar.manufacturer}</h5>
                        <p className="swiperTitle">{bar.title}</p>
                        <p className="swiperPrice">{`${bar.price} ₽`}</p>
                    </div>
                </SwiperSlide>
            ))
        )
        ) : (
        barData.map((barItem, index) => (
            <SwiperSlide key={index} className="swiperItems">
                {barItem.swiper.map((bar, nestedIndex) => (
                    <div className='swiperItem' key={nestedIndex}>
                        <img src={bar.img} alt="" className="swiperImg" />
                        <h5 className="swiperManufacturer">{bar.manufacturer}</h5>
                        <p className="swiperTitle">{bar.title}</p>
                        <p className="swiperPrice">{`${bar.price} ₽`}</p>
                    </div>
                ))}
            </SwiperSlide>
    ))
)}

          </Swiper>
      </div>
  )
};