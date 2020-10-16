import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

import Colors from './colors';
import Fonts from './fonts';

const GlobalStyles = createGlobalStyle`
 html {
   box-sizing: border-box;
}
 *,
 *::before,
 *::after {
   box-sizing: inherit;
}
*{
  background-color:transparent;
}
button{
  border:0;
}
`;
const theme = {
  colors: Colors,
  fonts: Fonts,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);
export default Theme;

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.elementType),
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
