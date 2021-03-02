import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
      font-family: Roboto, sans-serif;
  }
  html, body, #app {
    height: 100%;
    margin: 0;
  }
  .menu-item-wrapper,
  .active {
      outline: none;
  }
  .scroll-menu-arrow--disabled {
      visibility: hidden;
  }
`;

export default GlobalStyles;
