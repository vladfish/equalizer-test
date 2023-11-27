import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body{
    background-color: #F2F2F2;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  img {
    margin: 0;
    padding: 0;
  }
`
export default GlobalStyles