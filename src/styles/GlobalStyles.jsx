import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.bgtotal};
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.text};
  }

`