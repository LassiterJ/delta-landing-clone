import React from 'react';
import styled from 'styled-components';
import OriginDestinationSelector from '../originDestinationSelector/OriginDestinationSelector';

const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MainContainer = styled.div`
  display: grid;
  width: 80%;
  padding:0 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "MainRow"
    "SearchOptionsRow";
}`;

const MainRow = styled.div`
  grid-area: MainRow;
`;

const SearchOptionsRow = styled.div`
  grid-area: SearchOptionsRow;
  color: ${(props) => props.theme.colors.secondary};
`;

const LocationSelector = styled(OriginDestinationSelector)`
  width: 35%;
`;

const BookingWidget = () => {
  return (
    <LayoutWrapper>
      <MainContainer>
        <MainRow>
          <LocationSelector />
        </MainRow>
        <SearchOptionsRow>SearchOptionsRow</SearchOptionsRow>
      </MainContainer>
    </LayoutWrapper>
  );
};

export default BookingWidget;
