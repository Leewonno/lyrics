import styled from "styled-components";
import { MainLinkBox } from "./MainLinkBox";

const MainSection = styled.section`
  width: 100%;
  min-height: 100vh;
`;

export function MainBox() {
  return (
    <MainSection>
      <MainLinkBox />
    </MainSection>
  )
}