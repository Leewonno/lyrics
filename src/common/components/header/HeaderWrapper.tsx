import styled from "styled-components";
import { HeaderLogo } from "./HeaderLogo";

const Compoent = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 20px;
`;

export function HeaderWrapper() {
  return (
    <Compoent>
      <HeaderLogo />
    </Compoent>
  )
}