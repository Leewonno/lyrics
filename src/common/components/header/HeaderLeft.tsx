import styled from "styled-components";
// import logo from "../../../assets/images/nmixx.svg"

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
    letter-spacing: 0.1rem;
  }
`

const Logo = styled.a`
  width: auto;
  font-size: 1.8rem;
  font-weight: 600;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  user-select: none;
`

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const Menu = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 400;
  transition: font-weight 0.3s;

  &:hover {
    font-weight: 600;
  }
`

// const LogoImage = styled.img`
//   height: 37px;
//   filter: brightness(0) saturate(100%) invert(0%);
// `

export function HeaderLeft() {
  return (
    <Component>
      {/* <LogoImage src={logo} alt="logo" /> */}
      <LogoContainer>
        <Logo href="/" title="NMIXX">NMIXX</Logo>
      </LogoContainer>
      <MenuContainer>
        <Menu href="/member" title="member">멤버</Menu>
        <Menu href="/" title="song">노래</Menu>
        <Menu href="/translate" title="translate">자막변환</Menu>
      </MenuContainer>
    </Component>
  )
}