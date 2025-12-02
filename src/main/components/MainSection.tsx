import styled from "styled-components";
import { MainContent } from "./MainContent";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export function MainSection() {
  return (
    <Section>
      <MainContent />
    </Section>
  )
}