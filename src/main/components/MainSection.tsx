import styled from "styled-components";
import mainBg from "../../assets/images/common_bg.webp";
import { media } from "../../lib/media";
import { MainContent } from "./MainContent";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 100px;
  background-image: url(${mainBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;

  ${media.phone`
    background-attachment: scroll;
  `}

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(10, 10, 30, 0.65);
  }
`;

export function MainSection() {
	return (
		<Section>
			<MainContent />
		</Section>
	);
}
