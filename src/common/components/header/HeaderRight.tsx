import styled from "styled-components";
import youtube from "../../../assets/icons/youtube.svg"
import instagram from "../../../assets/icons/instagram.svg"
import facebook from "../../../assets/icons/facebook.svg"
import weibo from "../../../assets/icons/weibo.svg"
import twitter from "../../../assets/icons/twitter.svg"
import tiktok from "../../../assets/icons/tiktok.svg"
import close from "../../../assets/icons/close.svg"
import menu from "../../../assets/icons/menu.svg"
import { media } from "../../../lib/media";
import { useState } from "react";


const Component = styled.div`

`;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;

  ${media.phone`
    display: none;
  `}
`

const MobileWrapper = styled.div`
  display: none;

  ${media.phone`
    display: flex;
  `}
`

const Link = styled.a`
  width: 25px;
  display: flex;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  ${media.phone`
    width: 20px;
  `}
`;

const LinkImage = styled.img`
  width: 90%;
`

const Toggle = styled.img`
  width: 25px;
  cursor: pointer;
`

const MenuBox = styled.div`
  position: absolute;
  z-index: 1000;
  top: 60px;
  left: 0;
  width: 100%;
  display: none;
  padding: 20px;

  ${media.phone`
    display: block;
  `}
`

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
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

const MobileLinkBox = styled.div`
  display: none;
  gap: 0.5rem;

  ${media.phone`
    display: flex;
  `}
`

export function HeaderRight() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Component>
      <Wrapper>
        <Link href="https://www.youtube.com/@NMIXXOfficial" title="Official Youtube" target="_blank">
          <LinkImage src={youtube} alt="youtube" />
        </Link>
        <Link href="https://x.com/NMIXX_official" title="Official X" target="_blank">
          <LinkImage src={twitter} alt="twitter" />
        </Link>
        <Link href="https://www.instagram.com/nmixx_official" title="Official Instagram" target="_blank">
          <LinkImage src={instagram} alt="instagram" />
        </Link>
        <Link href="https://www.facebook.com/p/NMIXXOfficial" title="Official Facebook" target="_blank">
          <LinkImage src={facebook} alt="facebook" />
        </Link>
        <Link href="https://www.tiktok.com/@nmixx_official" title="Official TikTok" target="_blank">
          <LinkImage src={tiktok} alt="tiktok" />
        </Link>
        <Link href="https://weibo.com/u/7710814551" title="Official Weibo" target="_blank">
          <LinkImage src={weibo} alt="weibo" />
        </Link>
      </Wrapper>
      <MobileWrapper>
        {
          isOpen ?
            <Toggle src={close} alt="close" onClick={() => setIsOpen(false)} />
            :
            <Toggle src={menu} alt="open" onClick={() => setIsOpen(true)} />
        }
      </MobileWrapper>
      {
        isOpen ?
          <MenuBox>
            <MenuContainer>
              <Menu href="/member" title="member">멤버</Menu>
              <Menu href="/album" title="album">앨범</Menu>
              <Menu href="/translate" title="translate">자막변환</Menu>
              <MobileLinkBox>
                <Link href="https://www.youtube.com/@NMIXXOfficial" title="Official Youtube" target="_blank">
                  <LinkImage src={youtube} alt="youtube" />
                </Link>
                <Link href="https://x.com/NMIXX_official" title="Official X" target="_blank">
                  <LinkImage src={twitter} alt="twitter" />
                </Link>
                <Link href="https://www.instagram.com/nmixx_official" title="Official Instagram" target="_blank">
                  <LinkImage src={instagram} alt="instagram" />
                </Link>
                <Link href="https://www.facebook.com/p/NMIXXOfficial" title="Official Facebook" target="_blank">
                  <LinkImage src={facebook} alt="facebook" />
                </Link>
                <Link href="https://www.tiktok.com/@nmixx_official" title="Official TikTok" target="_blank">
                  <LinkImage src={tiktok} alt="tiktok" />
                </Link>
                <Link href="https://weibo.com/u/7710814551" title="Official Weibo" target="_blank">
                  <LinkImage src={weibo} alt="weibo" />
                </Link>
              </MobileLinkBox>
            </MenuContainer>
          </MenuBox>
          :
          <></>
      }
    </Component>
  )
}