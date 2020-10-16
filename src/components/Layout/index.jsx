import React from 'react';
import PropTypes from 'prop-types';

import Theme from '../Theme';
import Header from '../Header';
import Footer from '../Footer';

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
  children: PropTypes.node.isRequired,
};
export default Layout;
