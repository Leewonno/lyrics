import styled from "styled-components";


const HeaderLogoLinkBoxStyled = styled.div`
  display: flex;
  gap: 10px;
`;

const HeaderLogoLinkStyled = styled.a`
  width: 25px;
  display: flex;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  img{
    width: 100%;
  }
`;

export function HeaderLogoLink() {
  return (
    <HeaderLogoLinkBoxStyled>
        <HeaderLogoLinkStyled href="https://www.youtube.com/@nmixxfantube" title="YT Channel" target="_blank">
            <img src="image/yt.png" />
        </HeaderLogoLinkStyled>
        <HeaderLogoLinkStyled href="https://www.instagram.com/nmixxfantube/" title="Instagram Channel" target="_blank">
            <img src="image/insta.webp" />
        </HeaderLogoLinkStyled>
    </HeaderLogoLinkBoxStyled>
    
  )
}