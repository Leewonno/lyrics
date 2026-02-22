import styled from "styled-components";

const Widget = styled.footer`
  width: 100%;
  height: 150px;
  background: rgba(10, 10, 30, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 0;
  padding-top: 20px;
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.45);
`;

export function Footer() {
	return (
		<Widget>
			<Copyright>ⓒ 2025 NMIXXFanPage. All rights reserved.</Copyright>
		</Widget>
	);
}
