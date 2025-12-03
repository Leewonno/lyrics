import styled from "styled-components";
import MemberSelect from "./MemberSelect";
import MemberContent from "./MemberContent";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(-60px + 100vh);
  margin-top: 60px;
`;

const Wrapper = styled.div`
  width: 960px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export default function MemberSection() {
  return (
    <Section>
      <Wrapper>
        <MemberContent />
        <MemberSelect />
      </Wrapper>
    </Section>
  )
}