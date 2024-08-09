import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding:0;
    font-family: 'NotoSansKR';
    font-weight: 200;
  }
`;

export default GlobalStyle;