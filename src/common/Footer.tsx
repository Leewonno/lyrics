import styled from "styled-components";

const Widget = styled.footer`
  width: 100%;
  height: 150px;
  margin-top: 100px;
  background-color: #202020;
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 0;
  padding-top: 20px;
`;

const Copyright = styled.div`
  font-size: 0.9rem;
  color: #fff;
`

export function Footer() {
  return (
    <Widget>
      <Copyright>
        ⓒ 2025 NMIXXFanPage. All rights reserved.
      </Copyright>
    </Widget>
  )
}