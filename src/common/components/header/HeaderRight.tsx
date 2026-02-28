import { useState } from "react";
import styled from "styled-components";
import close from "../../../assets/icons/close.svg";
import facebook from "../../../assets/icons/facebook.svg";
import instagram from "../../../assets/icons/instagram.svg";
import menu from "../../../assets/icons/menu.svg";
import tiktok from "../../../assets/icons/tiktok.svg";
import twitter from "../../../assets/icons/twitter.svg";
import weibo from "../../../assets/icons/weibo.svg";
import youtube from "../../../assets/icons/youtube.svg";
import { media } from "../../../lib/media";

const Component = styled.div``;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;

  ${media.phone`
    display: none;
  `}
`;

const MobileWrapper = styled.div`
  display: none;

  ${media.phone`
    display: flex;
  `}
`;

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
  filter: invert(1) opacity(0.75);
  transition: filter 0.2s;

  ${Link}:hover & {
    filter: invert(1) opacity(1);
  }
`;

const Toggle = styled.img`
  width: 25px;
  cursor: pointer;
  filter: invert(1);
`;

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
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: rgba(10, 55, 90, 0.88);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(135, 206, 235, 0.2);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
`;

const Menu = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  transition: color 0.2s, font-weight 0.2s;

  &:hover {
    color: #ffffff;
    font-weight: 600;
  }
`;

const MobileLinkBox = styled.div`
  display: none;
  gap: 0.5rem;

  ${media.phone`
    display: flex;
  `}
`;

export function HeaderRight() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<Component>
			<Wrapper>
				<Link
					href="https://www.youtube.com/@NMIXXOfficial"
					title="Official Youtube"
					target="_blank"
				>
					<LinkImage src={youtube} alt="youtube" />
				</Link>
				<Link
					href="https://x.com/NMIXX_official"
					title="Official X"
					target="_blank"
				>
					<LinkImage src={twitter} alt="twitter" />
				</Link>
				<Link
					href="https://www.instagram.com/nmixx_official"
					title="Official Instagram"
					target="_blank"
				>
					<LinkImage src={instagram} alt="instagram" />
				</Link>
				<Link
					href="https://www.facebook.com/p/NMIXXOfficial"
					title="Official Facebook"
					target="_blank"
				>
					<LinkImage src={facebook} alt="facebook" />
				</Link>
				<Link
					href="https://www.tiktok.com/@nmixx_official"
					title="Official TikTok"
					target="_blank"
				>
					<LinkImage src={tiktok} alt="tiktok" />
				</Link>
				<Link
					href="https://weibo.com/u/7710814551"
					title="Official Weibo"
					target="_blank"
				>
					<LinkImage src={weibo} alt="weibo" />
				</Link>
			</Wrapper>
			<MobileWrapper>
				{isOpen ? (
					<Toggle src={close} alt="close" onClick={() => setIsOpen(false)} />
				) : (
					<Toggle src={menu} alt="open" onClick={() => setIsOpen(true)} />
				)}
			</MobileWrapper>
			{isOpen ? (
				<MenuBox>
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
						<MobileLinkBox>
							<Link
								href="https://www.youtube.com/@NMIXXOfficial"
								title="Official Youtube"
								target="_blank"
							>
								<LinkImage src={youtube} alt="youtube" />
							</Link>
							<Link
								href="https://x.com/NMIXX_official"
								title="Official X"
								target="_blank"
							>
								<LinkImage src={twitter} alt="twitter" />
							</Link>
							<Link
								href="https://www.instagram.com/nmixx_official"
								title="Official Instagram"
								target="_blank"
							>
								<LinkImage src={instagram} alt="instagram" />
							</Link>
							<Link
								href="https://www.facebook.com/p/NMIXXOfficial"
								title="Official Facebook"
								target="_blank"
							>
								<LinkImage src={facebook} alt="facebook" />
							</Link>
							<Link
								href="https://www.tiktok.com/@nmixx_official"
								title="Official TikTok"
								target="_blank"
							>
								<LinkImage src={tiktok} alt="tiktok" />
							</Link>
							<Link
								href="https://weibo.com/u/7710814551"
								title="Official Weibo"
								target="_blank"
							>
								<LinkImage src={weibo} alt="weibo" />
							</Link>
						</MobileLinkBox>
					</MenuContainer>
				</MenuBox>
			) : (
				<></>
			)}
		</Component>
	);
}
