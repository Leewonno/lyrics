import { useSelector } from "react-redux";
import styled from "styled-components";
import bae from "../../assets/images/bae_profile.jpg";
import bae_sign from "../../assets/images/bae_sign.webp";
import haewon from "../../assets/images/haewon_profile.jpg";
import haewon_sign from "../../assets/images/haewon_sign.webp";
import jiwoo from "../../assets/images/jiwoo_profile.jpg";
import jiwoo_sign from "../../assets/images/jiwoo_sign.webp";
import kyujin from "../../assets/images/kyujin_profile.jpg";
import kyujin_sign from "../../assets/images/kyujin_sign.webp";
import lily from "../../assets/images/lily_profile.jpg";
import lily_sign from "../../assets/images/lily_sign.webp";
import sullyoon from "../../assets/images/sullyoon_profile.jpg";
import sullyoon_sign from "../../assets/images/sullyoon_sign.webp";
import { media } from "../../lib/media";
import type { MemberType } from "../../redux/features/member/member";
import type { RootState } from "../../redux/store";

type DataType = {
	name: string;
	kor: string;
	birth: string;
	real_name: string;
	story: string[];
	img: string;
	sign: string;
};

const memberData: Record<MemberType, DataType> = {
	LILY: {
		name: "LILY",
		kor: "릴리",
		birth: "2002.10.17",
		real_name: "박진(Lily Jin Park Morrow)",
		story: [],
		img: lily,
		sign: lily_sign,
	},
	HAEWON: {
		name: "HAEWON",
		kor: "해원",
		birth: "2003.02.25",
		real_name: "오해원",
		story: [],
		img: haewon,
		sign: haewon_sign,
	},
	SULLYOON: {
		name: "SULLYOON",
		kor: "설윤",
		birth: "2004.01.26",
		real_name: "설윤아",
		story: [],
		img: sullyoon,
		sign: sullyoon_sign,
	},
	BAE: {
		name: "BAE",
		kor: "배이",
		birth: "2004.12.28",
		real_name: "배진솔",
		story: [],
		img: bae,
		sign: bae_sign,
	},
	JIWOO: {
		name: "JIWOO",
		kor: "지우",
		birth: "2005.04.13",
		real_name: "김지우",
		story: [],
		img: jiwoo,
		sign: jiwoo_sign,
	},
	KYUJIN: {
		name: "KYUJIN",
		kor: "규진",
		birth: "2006.05.26",
		real_name: "장규진",
		story: [],
		img: kyujin,
		sign: kyujin_sign,
	},
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  ${media.phone`
    flex-direction: column;
    gap: 2rem;
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 40%;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);

  ${media.phone`
    width: 100%;
  `}
`;

const Image = styled.img`
  width: 100%;
  transform: scale(1.05);
  display: block;
`;

const Sign = styled.img`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 150px;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
  user-select: none;

  ${media.phone`
    width: 50%;
  `}
`;

const ContentWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const Name = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.phone`
    font-size: 1.6rem;
  `}
`;

const Line = styled.div`
  width: 40px;
  height: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  margin-top: 1rem;

  ${media.phone`
    width: 30px;
  `}
`;

const Sub = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65);
  text-align: center;
`;

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Story = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  line-height: 1.6;
`;

export default function MemberContent() {
	const member = useSelector(
		(state: RootState) => state.member.member,
	) as MemberType;
	const data = memberData[member];
	return (
		<Container>
			<ImageWrapper>
				<Image loading="lazy" src={data.img} alt="profile_img" />
				<Sign src={data.sign} alt="sign_img" />
			</ImageWrapper>
			<ContentWrapper>
				<Name>
					{data.name}
					<Line />
				</Name>
				<Sub>{data.real_name}</Sub>
				<Sub>{data.birth}</Sub>
				<StoryWrapper>
					{data.story.map((v, i) => {
						return <Story key={`${data.name}-${i}`}>{v}</Story>;
					})}
				</StoryWrapper>
			</ContentWrapper>
		</Container>
	);
}
