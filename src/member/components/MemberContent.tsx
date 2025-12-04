import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import { MemberType } from "../../redux/features/member/member";
import lily from "../../assets/images/lily_profile.jpg"
import haewon from "../../assets/images/haewon_profile.jpg"
import sullyoon from "../../assets/images/sullyoon_profile.jpg"
import bae from "../../assets/images/bae_profile.jpg"
import jiwoo from "../../assets/images/jiwoo_profile.jpg"
import kyujin from "../../assets/images/kyujin_profile.jpg"
import lily_sign from "../../assets/images/lily_sign.webp"
import haewon_sign from "../../assets/images/haewon_sign.webp"
import sullyoon_sign from "../../assets/images/sullyoon_sign.webp"
import bae_sign from "../../assets/images/bae_sign.webp"
import jiwoo_sign from "../../assets/images/jiwoo_sign.webp"
import kyujin_sign from "../../assets/images/kyujin_sign.webp"

type DataType = {
  name: string;
  kor: string;
  birth: string;
  real_name: string;
  story: string[];
  img: string;
  sign: string;
}

const memberData: Record<MemberType, DataType> = {
  "LILY": {
    name: "LILY",
    kor: "릴리",
    birth: "2002.10.17",
    real_name: "박진(Lily Jin Park Morrow)",
    story: [
      // "JYP엔터테인먼트 걸그룹 엔믹스(NMIXX)의 맏언니이자 메인보컬이다.",
      // "호주 빅토리아주 멜버른 출생으로 빅토리아주 메리즈빌에서 자랐다.",
      // "KPOP STAR 시즌4에 출연(최종 4위)해 JYP엔터테인먼트와 계약을 맺었고, 2022년 2월 22일, 약 7년의 연습생 생활 끝에 '엔믹스'로 데뷔하게 되었다.",
      // "책을 굉장히 많이 읽으며, 비하인드 영상에서 종종 책읽는 모습을 보여준다. 유튜브에서 책·영화 리뷰 라이브 방송으로 '릴리리야 릴리딩'을 진행한다.",
      // "테일러 스위프트(Taylor Swift)의 팬으로, 2025년 10월 배이와 함께한 챌린지 영상에 테일러 스위프트가 좋아요를 누르자 눈물을 보이기도 했다.",
      // "릴리 + 황제의 합성어로 '릴황'이라는 별명을 가지고 있다. 주로 뛰어난 가창력과 라이브 실력을 보여줄 때 찬양하는 목적으로 쓰이며, 본인 특유의 순수함이 예능적으로 소화될때도 쓰인다.",
    ],
    img: lily,
    sign: lily_sign
  },
  "HAEWON": {
    name: "HAEWON",
    kor: "해원",
    birth: "2003.02.25",
    real_name: "오해원",
    story: [
      // "JYP엔터테인먼트 걸그룹 엔믹스(NMIXX)의 리더이자 메인보컬이다."
    ],
    img: haewon,
    sign: haewon_sign
  },
  "SULLYOON": {
    name: "SULLYOON",
    kor: "설윤",
    birth: "2004.01.26",
    real_name: "설윤아",
    story: [
      // "JYP엔터테인먼트 걸그룹 엔믹스(NMIXX)의 리더이자 메인보컬이다."
    ],
    img: sullyoon,
    sign: sullyoon_sign
  },
  "BAE": {
    name: "BAE",
    kor: "배이",
    birth: "2004.12.28",
    real_name: "배진솔",
    story: [
      // "JYP엔터테인먼트 걸그룹 엔믹스(NMIXX)의 리더이자 메인보컬이다."
    ],
    img: bae,
    sign: bae_sign
  },
  "JIWOO": {
    name: "JIWOO",
    kor: "지우",
    birth: "2005.04.13",
    real_name: "김지우",
    story: [
      // "JYP엔터테인먼트 걸그룹 엔믹스(NMIXX)의 리더이자 메인보컬이다."
    ],
    img: jiwoo,
    sign: jiwoo_sign
  },
  "KYUJIN": {
    name: "KYUJIN",
    kor: "규진",
    birth: "2006.05.26",
    real_name: "장규진",
    story: [
      // "JYP엔터테인먼트 걸그룹 엔믹스(NMIXX)의 리더이자 메인보컬이다."
    ],
    img: kyujin,
    sign: kyujin_sign
  }
}

const Container = styled.div`
  display: flex;
  gap: 3rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 40%;
  border-radius: 1.5rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
`

const Image = styled.img`
  width: 100%;
  transform: scale(1.05);
`

const Sign = styled.img`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 150px;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
  user-select: none;
`

const ContentWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`

const Name = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Line = styled.div`
  width: 40px;
  height: 1px;
  border-bottom: 1px solid #888888;
  margin-top: 1rem;
`

const Sub = styled.div`
  font-size: 0.9rem;
  font-weight: 400;
  color: #888888;
  text-align: center;
`

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const Story = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  color: #888888;
  text-align: center;
  line-height: 1.6;
`

export default function MemberContent() {
  const member = useSelector((state: RootState) => state.member.member) as MemberType;
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
        <Sub>{data.real_name}</Sub><Sub>{data.birth}</Sub>
        <StoryWrapper>
          {data.story.map((v, i) => {
            return (
              <Story key={i}>
                {v}
              </Story>
            )
          })}
        </StoryWrapper>
      </ContentWrapper>
    </Container>
  )
}