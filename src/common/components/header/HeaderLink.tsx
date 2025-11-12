import styled from "styled-components";


const Component = styled.div`
  display: flex;
  gap: 10px;
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
  width: 100%;
`

export function HeaderLink() {
  return (
    <Component>
      <Link href="https://www.youtube.com/@nmixxfantube" title="YT Channel" target="_blank">
        <LinkImage src="../image/yt.png" />
      </Link>
      <Link href="https://www.instagram.com/nmixxfantube/" title="Instagram Channel" target="_blank">
        <LinkImage src="../image/insta.webp" />
      </Link>
    </Component>

  )
}