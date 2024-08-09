import styled from "styled-components";
import { TranslateWidget } from "./TranslateWidget";

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export function TranslateBox() {
  return (
    <StyledSection>
      <TranslateWidget />
    </StyledSection>
  )
}