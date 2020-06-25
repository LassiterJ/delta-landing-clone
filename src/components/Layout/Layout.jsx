import React from 'react';
import PropTypes from 'prop-types';
import Theme from '../Theme/Theme';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <Theme>
      <Header />
      {children}
      <Footer />
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.elementType.isRequired,
};
export default Layout;
