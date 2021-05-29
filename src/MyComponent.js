import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      hi, my name is {name} <br />
      child is {children} <br />
      my favorite number is {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: 'default name',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
