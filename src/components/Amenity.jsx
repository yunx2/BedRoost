import React from 'react';

const Amenity = (props) => (
  <div>
    {props.name} 
    <span>{props.description}</span>
  </div>
);

export default Amenity;
