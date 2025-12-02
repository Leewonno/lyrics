import styled from "styled-components";
import youtube from "../../../assets/icons/youtube.svg"
import instagram from "../../../assets/icons/instagram.svg"
import facebook from "../../../assets/icons/facebook.svg"
import weibo from "../../../assets/icons/weibo.svg"
import twitter from "../../../assets/icons/twitter.svg"
import tiktok from "../../../assets/icons/tiktok.svg"


const Component = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  width: 25px;
  display: flex;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const LinkImage = styled.img`
  width: 90%;
`

export function HeaderRight() {
  return (
    <Component>
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
    </Component>
  )
}