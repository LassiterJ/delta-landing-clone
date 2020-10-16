import React from 'react';
import PropType from 'prop-types';
import SVGIcon from './SVGIcon';

const DoubleArrowHorizontal = ({ className }) => {
  return (
    <SVGIcon viewBox="0 0 611.998 611.998" className={className}>
      <path
        fill="currentColor"
        d="M606.521,291.419l-113.23-113.555c-7.495-7.515-19.656-7.515-27.15,0c-7.495,7.514-7.495,19.713,0,27.227l81.433,81.662
				H64.405l81.433-81.662c7.495-7.514,7.495-19.713,0-27.227c-7.495-7.515-19.656-7.515-27.151,0L5.457,291.419
				c-3.996,4.015-5.698,9.331-5.43,14.57c-0.268,5.258,1.434,10.573,5.43,14.589l113.249,113.555c7.495,7.515,19.656,7.515,27.151,0
				c7.495-7.514,7.495-19.713,0-27.227l-81.452-81.662h483.168l-81.433,81.662c-7.495,7.514-7.495,19.713,0,27.227
				c7.495,7.515,19.655,7.515,27.15,0L606.54,320.578c3.996-4.015,5.698-9.331,5.431-14.589
				C612.218,300.749,610.518,295.434,606.521,291.419z"
      />
    </SVGIcon>
  );
};

DoubleArrowHorizontal.propTypes = {
  className: PropType.string,
};
DoubleArrowHorizontal.defaultProps = {
  className: 'double-arrow_horizontal',
};
export default DoubleArrowHorizontal;