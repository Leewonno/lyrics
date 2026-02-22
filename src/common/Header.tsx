import styled from "styled-components";
import { HeaderWrapper } from "./components/header/HeaderWrapper";

const Widget = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 60px;
  box-shadow: 0px -9px 15px 1px #0000005b;
  background-color: #ffffffa7;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
`;

export function Header() {
	return (
		<Widget>
			<HeaderWrapper />
		</Widget>
	);
}
