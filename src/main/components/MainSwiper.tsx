import { useState } from "react";
import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

const SlideInner = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 15px;
  overflow: hidden;
  background: #000;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const PlayOverlay = styled.button`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;

const PlayIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;

  ${PlayOverlay}:hover & {
    transform: scale(1.1);
  }

  /* triangle */
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 0 10px 20px;
    border-color: transparent transparent transparent #fff;
    margin-left: 4px;
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  display: block;
`;

type VideoItem = {
	id: string;
	title: string;
};

const videos: VideoItem[] = [
	{ id: "EmeW6li6bbo", title: "Blue Valentine" },
	{ id: "aFrQIJ5cbRc", title: "Know About Me" },
	{ id: "_Q8Jskeps9w", title: "See that?" },
	{ id: "7UecFm_bSTU", title: "DASH" },
	{ id: "Rd2wppggYxo", title: "Party O' Clock" },
	{ id: "EDnwWcFpObo", title: "Love Me Like This" },
	{ id: "kBwikDvbRbI", title: "Funky Glitter Christmas" },
	{ id: "p1bjnyDqI9k", title: "DICE" },
	{ id: "3GWscde8rM8", title: "O.O" },
];

type VideoSlideProps = {
	video: VideoItem;
};

function VideoSlide({ video }: VideoSlideProps) {
	const [active, setActive] = useState(false);

	return (
		<SlideInner>
			{active ? (
				<StyledIframe
					src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					title={video.title}
				/>
			) : (
				<>
					<Thumbnail
						src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
						alt={video.title}
						loading="lazy"
					/>
					<PlayOverlay
						onClick={() => setActive(true)}
						aria-label={`${video.title} 재생`}
					>
						<PlayIcon />
					</PlayOverlay>
				</>
			)}
		</SlideInner>
	);
}

export default function MainSwiper() {
	return (
		<Container>
			<Swiper
				effect={"cards"}
				grabCursor={false}
				modules={[EffectCards, Navigation]}
				cardsEffect={{
					perSlideOffset: 8,
					perSlideRotate: 0,
					slideShadows: false,
				}}
				navigation={true}
				loop={true}
			>
				{videos.map((video) => (
					<SwiperSlide key={video.id}>
						<VideoSlide video={video} />
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
}
