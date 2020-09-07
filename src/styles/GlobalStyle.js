import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, button, div, h1, p {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: 0 0;
    font-size: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #f5f5f5;
  }

  h1 {
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 2.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  button: {
    --webkit-appearance: button;
    text-transform: none;
    overflow: visible;
    font-family: inherit;
  }
`;