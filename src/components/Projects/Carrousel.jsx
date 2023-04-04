import React, { useEffect, useRef } from 'react'
import { CardProject } from './CardProject'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Pagination, Mousewheel, Keyboard, EffectCoverflow } from 'swiper'

function Carrousel (props) {
  const [slides, setSlides] = React.useState(1)
  const Projects = props.data
  const deviceSize = useRef([window.innerWidth])

  useEffect(() => {
    if (deviceSize.current[0] > 768) {
      setSlides(2)
    }
  }, [])

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      mousewheel={true}
      keyboard={true}
      loop
      slidesPerView={slides}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: false
      }}
      modules={[Pagination, Mousewheel, Keyboard, EffectCoverflow]}
      className='mySwiper'
    >
      {Projects.map((p, index) => (
        <SwiperSlide key={index}>
          <CardProject
            key={p.title}
            title={p.title}
            date={p.date}
            description={p.description}
            url={p.url}
            src={p.img.src}
            alt={p.img.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export { Carrousel }
