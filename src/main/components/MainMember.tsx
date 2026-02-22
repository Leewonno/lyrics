import { motion } from "framer-motion";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bae from "../../assets/images/bae_sp.webp";
import haewon from "../../assets/images/haewon_sp.webp";
import jiwoo from "../../assets/images/jiwoo_sp.webp";
import kyujin from "../../assets/images/kyujin_sp.webp";
import lily from "../../assets/images/lily_sp.webp";
import sullyoon from "../../assets/images/sullyoon_sp.webp";
import { customChildVariants } from "../../motion/animation";
import useObserver from "../../motion/useObserver";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { Scrollbar } from "swiper/modules";
import { media } from "../../lib/media";

const Container = styled.div`
  width: 960px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  gap: 2rem;

  .swiper {
    padding-bottom: 1rem;
  }

  .swiper-scrollbar {
    width: 3rem;
    left: calc(50% - 24px);
    bottom: 0 !important;
    position: absolute;
    cursor: pointer;
    background: rgba(255, 255, 255, 0.2);
  }

  .swiper-scrollbar-drag {
    background: rgba(255, 255, 255, 0.7);
  }

  ${media.phone`
    width: 100%;

    .swiper {
      padding: 1rem;
    }
  `}
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 1rem;

  ${media.phone`
    font-size: 1.4rem;
  `}
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 2rem;
  color: #ffffff;
  letter-spacing: 0.1em;

  ${media.phone`
    font-size: 1.5rem;
  `}
`;

const Slide = styled(SwiperSlide)`
  width: auto !important;
  display: flex;
  gap: 1rem;
`;

export default function MainMember() {
	const { ref, animation } = useObserver();
	const [slides, setSlides] = useState<number>(3.67);

	useEffect(() => {
		const interpolate = (current: number) => {
			if (current > 1100) return 3.67;
			return current / 224;
		};
		const updateSlides = () => {
			const w = window.innerWidth;
			const value = interpolate(w);
			setSlides(value);
		};
		updateSlides();
		window.addEventListener("resize", updateSlides);
		return () => window.removeEventListener("resize", updateSlides);
	}, []);

	return (
		<Container>
			<Title>MEMBER</Title>
			<Wrapper ref={ref} animate={animation} variants={customChildVariants}>
				<Swiper
					loop={false}
					scrollbar={{ draggable: true }}
					modules={[Scrollbar]}
					spaceBetween={16}
					slidesPerView={slides}
					style={{ width: "fit-content" }}
				>
					<Slide>
						<Member
							img={lily}
							name={"LILY"}
							kor={"릴리"}
							birth={"2002.10.17"}
						/>
					</Slide>
					<Slide>
						<Member
							img={haewon}
							name={"HAEWON"}
							kor={"해원"}
							birth={"2003.02.25"}
						/>
					</Slide>
					<Slide>
						<Member
							img={sullyoon}
							name={"SULLYOON"}
							kor={"설윤"}
							birth={"2004.01.26"}
						/>
					</Slide>
					<Slide>
						<Member img={bae} name={"BAE"} kor={"배이"} birth={"2004.12.28"} />
					</Slide>
					<Slide>
						<Member
							img={jiwoo}
							name={"JIWOO"}
							kor={"지우"}
							birth={"2005.04.13"}
						/>
					</Slide>
					<Slide>
						<Member
							img={kyujin}
							name={"KYUJIN"}
							kor={"규진"}
							birth={"2006.05.26"}
						/>
					</Slide>
				</Swiper>
			</Wrapper>
		</Container>
	);
}

type MemberProps = {
	img: string;
	name: string;
	kor: string;
	birth: string;
};

const Link = styled.a`
  text-decoration: none;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 250px;
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${media.phone`
    width: 200px;
  `}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s;

  ${Link}:hover & {
    filter: brightness(0.6);
    transform: scale(1.1);
  }
`;

const DisplayWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: none;
  z-index: 1;
  color: #ffffffe0;
  opacity: 0.8;
  letter-spacing: -0.5px;

  ${Link}:hover & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

const DisplayName = styled.div`
  font-size: 1.6rem;
  font-weight: 700;

  ${media.phone`
    font-size: 1.4rem;
  `}
`;

const DisplayKorName = styled.div`
  font-size: 0.9rem;
`;

const DisplayLine = styled.div`
  width: 50%;
  border-bottom: 1px solid #fff;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%) scaleY(0.1);
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
    transform-origin: center;
    animation: ripple 1.2s ease-out forwards;
    pointer-events: none;
  }

  ${media.phone`
    font-size: 1.4rem;
  `}
`;

const DisplayBirth = styled.div`
  font-size: 0.9rem;
`;

const Member = ({ img, name, kor, birth }: MemberProps) => {
	return (
		<Link href={`/member?name=${name}`}>
			<ImageWrapper>
				<DisplayWrapper>
					<DisplayName>{name}</DisplayName>
					<DisplayKorName>{kor}</DisplayKorName>
					<DisplayLine />
					<DisplayBirth>{birth}</DisplayBirth>
				</DisplayWrapper>
				<Image src={img} />
			</ImageWrapper>
		</Link>
	);
};
