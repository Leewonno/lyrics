// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import styled from 'styled-components';

const Container = styled.div`
  width: 960px;
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 9;
    background-color: rgba(255, 255, 255, 0.5); 
    padding: 1rem;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .swiper-button-next {
    right: -1rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .swiper-button-prev {
    transform: rotate(180deg) translateY(50%);
    left: -1rem;
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`

export default function MainSwiper() {
  return (
    <Container>
      <Swiper
        effect={'cards'}
        grabCursor={false}
        modules={[EffectCards, Navigation]}
        cardsEffect={{
          perSlideOffset: 8, // 카드 겹침 정도
          perSlideRotate: 0,
          slideShadows: false, // 카드 그림자
        }}
        navigation={true}
        loop={true}
      >
        <SwiperSlide>
          <iframe src="https://www.youtube.com/embed/EmeW6li6bbo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe src="https://www.youtube.com/embed/aFrQIJ5cbRc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe src="https://www.youtube.com/embed/_Q8Jskeps9w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe src="https://www.youtube.com/embed/7UecFm_bSTU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe src="https://www.youtube.com/embed/Rd2wppggYxo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe src="https://www.youtube.com/embed/kBwikDvbRbI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe src="https://www.youtube.com/embed/EDnwWcFpObo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe src="https://www.youtube.com/embed/p1bjnyDqI9k" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe src="https://www.youtube.com/embed/3GWscde8rM8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </SwiperSlide>
      </Swiper>
    </Container>
  )
}