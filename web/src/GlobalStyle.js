import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
    margin: 0;
    padding: 0;
  }
  ::-webkit-scrollbar {
    width: 12px;
    background-color: white;
  }
  ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: white;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #a1a1a1;
  }
`;

export default GlobalStyle;
