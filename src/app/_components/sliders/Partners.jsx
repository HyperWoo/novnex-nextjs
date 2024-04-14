"use client";

import { useState } from 'react';
import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import Data from '@data/sliders/partners';

// Initialize Swiper modules
SwiperCore.use([Autoplay]);

const PartnersSlider = ({ bgStyle }) => {
  const [swiper, setSwiper] = useState(null);

  const handleReachEnd = () => {
    swiper.slideTo(0); // Go back to the first slide when reaching the end
  };

  return (
    <>
      {/* partners */}
      <div className={`mil-${bgStyle}-bg mil-partners mil-relative`}>
        {bgStyle === "soft" && <img src="/img/other/bg.svg" className="mil-bg-img" alt="image" />}

        <div className="container mil-p-120-120">
          <div className="mil-background-grid mil-softened" />

          <Swiper
            {...SliderProps.milInfiniteSlider}
            className="swiper-container mil-infinite-show mil-up"
            loop={true} // Set loop to false to prevent automatic looping
            autoplay={{ delay: 1000 }} // Optional: add autoplay with a delay of 3 seconds
            onSwiper={setSwiper}
            onReachEnd={handleReachEnd} // Call handleReachEnd when reaching the end of slides
          >
            {Data.items.map((item, key) => (
              <SwiperSlide className="swiper-slide" key={`partners-slider-item-${key}`}>
                <a href={item.link} target="_blank" className="mil-partner-frame" style={{ "width": "60px" }}>
                  <img src={item.image} alt={item.alt} />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* partners end */}
    </>
  );
};
export default PartnersSlider;
