import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';
import BookingWidget from './BookingWidget';

const HeaderStyled = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 1em;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <NavBar />
      <BookingWidget />
    </HeaderStyled>
  );
};

export default Header;
