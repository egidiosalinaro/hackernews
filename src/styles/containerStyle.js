import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
*, *:before, *:after {
  -webkit-box-sizing: inherit;
  box-sizing:inherit;
}

body {
  margin: 0;
  padding: 0;
  line-height: 1;
  color: #202020;
  background-color: #0F0F0F;
  font-family: 'Poppins', sans-serif;
}

ul {
  margin: 0;
  padding: 0;
}
`;

export const StoriesContainerWrapper = styled.main`
  color: white;
  max-width: 1140px;
  padding: 0 15px;
  margin: auto;
`;
