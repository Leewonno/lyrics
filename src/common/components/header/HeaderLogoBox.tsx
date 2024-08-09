import styled from "styled-components";
import { HeaderLogoAnchor } from "./HeaderLogoAnchor";
import { HeaderLogoLink } from "./HeaderLogoLink";

const HeaderLogoBoxStyled = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export function HeaderLogoBox() {
  return (
    <HeaderLogoBoxStyled>
      <HeaderLogoAnchor />
      <HeaderLogoLink />
    </HeaderLogoBoxStyled>
  )
}