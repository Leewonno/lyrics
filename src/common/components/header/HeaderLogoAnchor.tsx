import styled from "styled-components";

const HeaderLogoAnchorStyled = styled.a`
  width: auto;
  font-size: 21px;
  font-weight: 900;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  user-select: none;
  letter-spacing: -1px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export function HeaderLogoAnchor() {
  return (
    <HeaderLogoAnchorStyled href="/" title="엔믹스팬튜브">
      LIKE NMIXX
    </HeaderLogoAnchorStyled>
  )
}