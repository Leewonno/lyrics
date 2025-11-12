import styled from "styled-components";

const Component = styled.a`
  width: auto;
  font-size: 25px;
  font-weight: 900;
  text-decoration: none;
  color: #000;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export function HeaderLogo() {
  return (
    <Component href="/" title="LYRICS">
      LYRICS
    </Component>
  )
}