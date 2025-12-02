import styled from "styled-components";

const Widget = styled.footer`
  width: 100%;
  height: 100px;
  margin-top: 100px;
  background-color: #000;
  position: relative;
  bottom: 0;
  color: #fff;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

export function Footer() {
  return (
    <Widget>
      ⓒ JYP Entertainment. All rights reserved.
    </Widget>
  )
}