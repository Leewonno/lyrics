import styled from "styled-components";
import { media } from "../../../lib/media";

const Component = styled.div`
  display: flex;
  gap: 2rem;
`;

const LogoContainer = styled.div`
  position: relative;
  transition: all 0.3s;
  letter-spacing: -0.1rem;

  &:hover {
    transform: scale(1.1);
    letter-spacing: 1px;
  }
`;

const Logo = styled.a`
  width: auto;
  font-size: 1.8rem;
  font-weight: 600;
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  user-select: none;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Menu = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  transition: color 0.2s, font-weight 0.2s;

  &:hover {
    color: #ffffff;
    font-weight: 600;
  }

  ${media.phone`
    display: none;
  `}
`;

export function HeaderLeft() {
	return (
		<Component>
			<LogoContainer>
				<Logo href="/" title="NMIXX">
					NMIXX
				</Logo>
			</LogoContainer>
			<MenuContainer>
				<Menu href="/member" title="member">
					멤버
				</Menu>
				<Menu href="/translate" title="translate">
					자막변환
				</Menu>
				<Menu href="/image-convert" title="image-convert">
					이미지변환
				</Menu>
			</MenuContainer>
		</Component>
	);
}
