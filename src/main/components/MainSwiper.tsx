import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import styled from "styled-components";
import { media } from "../../lib/media";

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
    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  .swiper-button-next {
    right: -1rem;
  }

  .swiper-button-prev {
    transform: rotate(180deg) translateY(50%);
    left: -1rem;
  }

  ${media.phone`
    width: 90%;
    overflow: hidden;

    .swiper-button-next,
    .swiper-button-prev {
      padding: 0.7rem;
      svg {
        width: 1rem;
        height: 1rem;
      }
    }

    .swiper-button-next {
      right: 1rem;
    }

    .swiper-button-prev {
      left: 1rem;
    }
  `}
`;

export default function MainSwiper() {
	return (
		<Container>
			<Swiper
				effect={"cards"}
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
					<iframe
						src="https://www.youtube.com/embed/EmeW6li6bbo"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						title="Blue Valentine"
					></iframe>
				</SwiperSlide>
				<SwiperSlide>
					<iframe
						src="https://www.youtube.com/embed/aFrQIJ5cbRc"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						title="Know About Me"
					></iframe>
				</SwiperSlide>
				<SwiperSlide>
					<iframe
						src="https://www.youtube.com/embed/_Q8Jskeps9w"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						title="See that?"
					></iframe>
				</SwiperSlide>
				<SwiperSlide>
					<iframe
						src="https://www.youtube.com/embed/7UecFm_bSTU"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						title="DASH"
					></iframe>
				</SwiperSlide>
				<SwiperSlide>
					<iframe
						src="https://www.youtube.com/embed/Rd2wppggYxo"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						title="Party O' Clock"
					></iframe>
				</SwiperSlide>
				<SwiperSlide>
					<iframe
						src="https://www.youtube.com/embed/kBwikDvbRbI"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						title="Love Me Like This"
					></iframe>
				</SwiperSlide>
				<SwiperSlide>
					<iframe
						src="https://www.youtube.com/embed/EDnwWcFpObo"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						title="Funky Glitter Christmas"
					></iframe>
				</SwiperSlide>
				<SwiperSlide>
					<iframe
						src="https://www.youtube.com/embed/p1bjnyDqI9k"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						title="DICE"
					></iframe>
				</SwiperSlide>
				<SwiperSlide>
					<iframe
						src="https://www.youtube.com/embed/3GWscde8rM8"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						title="O.O"
					></iframe>
				</SwiperSlide>
			</Swiper>
		</Container>
	);
}
