import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DoubleArrowHorizontal from '../Icons/DoubleArrowHorizontal';

const OriginDestinationContainer = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'from Switch To'
    'Origin . Destination';
`;
const TextContainer = styled.div`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.content};
  font-size: 0.75rem;
  font-weight: 100;
`;
const LargeTextContainer = styled(TextContainer)`
  font-size: 4rem;
  font-family: ${(props) => props.theme.fonts.light};
`;
const To = styled(LargeTextContainer)`
  grid-area: To;
`;
const From = styled(LargeTextContainer)`
  grid-area: from;
`;
const SwitchWrapper = styled(TextContainer)`
  grid-area: Switch;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.accent};
`;
const Origin = styled(TextContainer)`
  grid-area: Origin;
`;
const Destination = styled(TextContainer)`
  grid-area: Destination;
`;
const SwitchContainer = styled.div`
  width: 4rem;
`;
const OriginDestinationSelector = ({ destination, origin, className }) => {
  return (
    <OriginDestinationContainer className={className}>
      <To>{destination}</To> <From>{origin}</From>
      <SwitchWrapper>
        <SwitchContainer>
          <DoubleArrowHorizontal />
        </SwitchContainer>
      </SwitchWrapper>
      <Origin>Your Origin</Origin> <Destination>Your Destination</Destination>
    </OriginDestinationContainer>
  );
};

OriginDestinationSelector.propTypes = {
  destination: PropTypes.string,
  origin: PropTypes.string,
  className: PropTypes.string,
};

OriginDestinationSelector.defaultProps = {
  destination: 'To',
  origin: 'From',
  className: 'originDestinationSelector',
};

export default OriginDestinationSelector;
