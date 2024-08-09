import styled from "styled-components";
import { HeaderLogoBox } from "./components/header/HeaderLogoBox";

const HeaderElementStyled = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  box-shadow: 0px -9px 15px 1px #000;
  background-color: #fff;
`;

export function Header() {
  return (
    <HeaderElementStyled>
      <HeaderLogoBox />
    </HeaderElementStyled>
  )
}