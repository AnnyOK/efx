
import React from 'react';

const ColoredSVG = ({ svg, color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <path d={svg} fill={color} />
    </svg>
  );
};

export default ColoredSVG;