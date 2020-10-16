import React from 'react';
import styled from 'styled-components';
import siteLogo from '../../images/delta-logo.svg';
import NotificationBell from '../Icons/NotificationBell';
import SearchMagnifyingGlass from '../Icons/SearchMagnifyingGlass';

const Container = styled.div``;
const IMG = styled.img`
  display: block;
  float: left;
  width: 7.5rem;
  height: 3.9rem;
  margin-top: 0;
`;
const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 0.0625rem solid ${(props) => props.theme.colors.primary_border};
`;

const StyledNavbar = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const BookingWidgetControlButton = styled.button`
  color: ${(props) => props.theme.colors.secondary};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.semi_bold};
  font-size: 0.875em;
  line-height: 1.25em;
  letter-spacing: 0;
  cursor: pointer;
`;
const DropdownNavButton = styled(BookingWidgetControlButton)`
  font-family: ${(props) => props.theme.fonts.medium};
  text-transform: none;
`;
const SignupNotificationContainer = styled(Container)`
  display: inline-flex;
  align-items: center;
  // border-right: 2px solid ${(props) => props.theme.colors.primary_border};
`;
const SignupButton = styled(BookingWidgetControlButton)`
  font-family: ${(props) => props.theme.fonts.bold};
`;
const LoginButton = styled(BookingWidgetControlButton)`
  background-color: ${(props) => props.theme.colors.accent};
`;
const NotificationButton = styled(BookingWidgetControlButton)``;
const NotificationContainer = styled(Container)`
  width: 2em;
  margin: 0 1em;
`;
const SeparatorBar = styled.span`
  font-size: 2rem;
`;

const SearchButton = styled(BookingWidgetControlButton)`
  width: 2.5rem;
`;
const SearchIcon = styled(SearchMagnifyingGlass)`
  padding-left: 4rem;
`;

const NavBar = () => {
  return (
    <NavbarWrapper>
      <StyledNavbar>
        <IMG src={siteLogo} alt="delta logo" />
        <Container>
          <BookingWidgetControlButton>Book</BookingWidgetControlButton>
          <BookingWidgetControlButton>Check-in</BookingWidgetControlButton>
          <BookingWidgetControlButton>My Trips</BookingWidgetControlButton>
          <BookingWidgetControlButton>Flight Status</BookingWidgetControlButton>
        </Container>
        <Container>
          <DropdownNavButton>Travel Info</DropdownNavButton>
          <DropdownNavButton>SkyMiles</DropdownNavButton>
          <DropdownNavButton>Need Help?</DropdownNavButton>
        </Container>
        <SignupNotificationContainer>
          <Container>
            <SignupButton>Sign Up</SignupButton>
            <LoginButton>Log In</LoginButton>
          </Container>
          <Container>
            <NotificationContainer>
              <NotificationButton as="a" href="/">
                <NotificationBell />
              </NotificationButton>
            </NotificationContainer>
          </Container>
          <SeparatorBar>|</SeparatorBar>
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </SignupNotificationContainer>
      </StyledNavbar>
    </NavbarWrapper>
  );
};

export default NavBar;
