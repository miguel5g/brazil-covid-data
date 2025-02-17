import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Poppins, Arial, Helvetica, sans-serif;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  html, body {
    background: ${({ theme }) => theme.colors.background};
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: 0;
  }

  li {
    list-style: none;
  }
`;
