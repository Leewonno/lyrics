import styled from "styled-components";
import { HeaderLogoAnchor } from "./HeaderLogoAnchor";

const HeaderLogoBoxStyled = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function HeaderLogoBox() {
  return (
    <HeaderLogoBoxStyled>
      <HeaderLogoAnchor />
    </HeaderLogoBoxStyled>
  )
}