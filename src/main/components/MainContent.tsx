import styled from "styled-components";
import { media } from "../../lib/media";
import MainExplain from "./MainExplain";
import MainMember from "./MainMember";
import MainSwiper from "./MainSwiper";

const Box = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 8rem;
  align-items: center;

  iframe {
    border-radius: 15px;
    width: 960px;
    height: 540px;
  }

  ${media.phone`
    iframe{
      width: 100%;
      height: 49vw;
    }
  `}
`;

export function MainContent() {
	return (
		<Box>
			{/* MV 슬라이드 */}
			<MainSwiper />
			{/* NMIXX 소개 */}
			<MainExplain />
			{/* 멤버 */}
			<MainMember />
		</Box>
	);
}
