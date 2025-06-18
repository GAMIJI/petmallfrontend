import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination"; // ⬅️ import pagination styles

const BannerSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    // { img: "assets/img/banner/3456342.jpg", alt: "Slide 1" },
    { img: "assets/img/banner/5649620.jpg", alt: "Slide 2" },
    { img: "assets/img/banner/3853637.jpg", alt: "Slide 3" },
  ];

  return (
    <section
      className="banner-slider"
      style={{ position: "relative", width: "100%", height: "500px" }}
    >
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, Pagination, EffectFade]} // ⬅️ Add Pagination here
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={1000}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".slider-next",
          prevEl: ".slider-prev",
        }}
        pagination={{
          clickable: true,
        }} // ⬅️ Enable pagination dots
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={slide.img}
              alt={slide.alt}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional navigation buttons */}
      <button
        className="slider-prev"
        style={{ ...navButtonStyle, left: "20px" }}
      >
        ‹
      </button>
      <button
        className="slider-next"
        style={{ ...navButtonStyle, right: "20px" }}
      >
        ›
      </button>
    </section>
  );
};

const navButtonStyle = {
  position: "absolute",
  top: "50%",
  zIndex: 10,
  background: "rgba(0,0,0,0.5)",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  transform: "translateY(-50%)",
  fontSize: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default BannerSlider;
