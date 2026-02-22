import styled from "styled-components";
import memberBg from "../../assets/images/common_bg.webp";
import { media } from "../../lib/media";
import MemberContent from "./MemberContent";
import MemberSelect from "./MemberSelect";

const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  background-image: url(${memberBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  padding-top: 100px;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(10, 10, 30, 0.65);
  }

  ${media.phone`

  `}
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 960px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 2rem;

  ${media.phone`
    width: 90%;
    padding: 1.2rem;
  `}
`;

export default function MemberSection() {
	return (
		<Section>
			<Wrapper>
				<MemberContent />
				<MemberSelect />
			</Wrapper>
		</Section>
	);
}
