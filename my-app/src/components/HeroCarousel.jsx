import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

const HeroCarousel = () => {
  return (
    <Swiper
      effect="fade"
      modules={[EffectFade, Autoplay]}
      autoplay={{ delay: 3000 }}
      className="hero-carousel"
    >
      <SwiperSlide>
        <img src="/quantum1.jpg" alt="Quantum 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/quantum2.jpg" alt="Quantum 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/quantum3.jpg" alt="Quantum 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;