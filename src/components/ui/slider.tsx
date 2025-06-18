'use client'

import Slider from "react-slick";
import Image from 'next/image';
import { useRef } from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const sliderRef = useRef<Slider>(null);

  const carouselImages = [
    { src: "/digital_marketing.png", alt: "Digital Marketing" },
    { src: "/digital_marketing.png", alt: "SEO Optimization" },
    { src: "/digital_marketing.png", alt: "Social Media" },
    { src: "/digital_marketing.png", alt: "Content Creation" },
    { src: "/digital_marketing.png", alt: "PPC Advertising" },
    { src: "/digital_marketing.png", alt: "Email Marketing" },
    { src: "/digital_marketing.png", alt: "Analytics" }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    arrows: false,
    cssEase: 'linear',
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0, 
    pauseOnHover: true,
    swipeToSlide: false,
    draggable: false,
    touchMove: false
  };

  return (
    <div className="relative w-full  mx-auto px-1 py-8">
      {/* Left smoke overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none 
        bg-gradient-to-r from-gray-950/100 via-gray-950/50 to-transparent backdrop-blur-[2px]" />
      
      <div className="w-full overflow-hidden px-0">
        <Slider ref={sliderRef} {...settings}>
          {carouselImages.map((image, index) => (
            <div key={index} className="px-3 focus:outline-none">
              <div className="relative h-[400px] w-[350px] overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover object-top pointer-events-none"
                  quality={100}
                  priority={index < 3}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Right smoke overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none 
        bg-gradient-to-l from-gray-950/100 via-gray-950/50 to-transparent backdrop-blur-[2px]" />
    </div>
  );
};

export default ImageSlider;