import styled from "styled-components";
import { HeaderWrapper } from "./components/header/HeaderWrapper";

const Widget = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  box-shadow: 0px -9px 15px 1px #0000005b;
  background-color: #fff;
`;

export function Header() {
  return (
    <Widget>
      <HeaderWrapper />
    </Widget>
  )
}