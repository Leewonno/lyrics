import styled from "styled-components";
import { media } from "../../lib/media";
import MemberContent from "./MemberContent";
import MemberSelect from "./MemberSelect";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(-60px + 100vh);
  margin-top: 60px;
  padding-bottom: 100px;
`;

const Wrapper = styled.div`
  width: 960px;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${media.phone`
    width: 100%;
    padding: 20px;
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
