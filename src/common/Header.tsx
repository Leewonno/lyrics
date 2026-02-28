import styled from "styled-components";
import { HeaderWrapper } from "./components/header/HeaderWrapper";

const Widget = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 65px;
  background: rgba(10, 55, 90, 0.6);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(135, 206, 235, 0.2);
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
