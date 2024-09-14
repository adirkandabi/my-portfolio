import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

export const Projects = ({ slides }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % slides[activeSlide].image.length);
    }, 3000);

    // Clear interval on component unmount or activeSlide change
    return () => clearInterval(intervalId);
  }, [activeSlide, slides]);

  return (
    <div className="projects-container">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        modules={[Scrollbar]}
        style={{ height: "400px" }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
          setActiveImage(0);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <div className="details">
                <h3 className="project-title">{slide.title}</h3>
                <p className="project-desc">{slide.description}</p>
              </div>
              <img
                className="project-img"
                src={`/${slide.image[activeImage]}`}
                alt={slide.title}
                style={{ width: "500px" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
