import React from "react";
import { CardProject } from "./CardProject";
import { Projects } from "../../global/es-information";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Mousewheel, Keyboard, EffectCoverflow } from "swiper";

function Carrousel() {
  console.log(Projects);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      mousewheel={true}
      keyboard={true}
      loop
      slidesPerView={2}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
      }}
      modules={[
        /* Navigation, */ Pagination,
        Mousewheel,
        Keyboard,
        EffectCoverflow,
      ]}
      className="mySwiper"
    >
      {Projects.map((p) => (
        <SwiperSlide >
          <CardProject
            key={p.title}
            title={p.title}
            description={p.description}
            url={p.url}
            src={p.img.src}
            alt={p.img.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export { Carrousel };
