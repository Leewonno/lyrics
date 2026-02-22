import styled from "styled-components";
import { HeaderWrapper } from "./components/header/HeaderWrapper";

const Widget = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  height: 60px;
  background: rgba(10, 10, 30, 0.6);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
