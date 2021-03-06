import PropTypes from 'prop-types';
import React from 'react';

const Slide = props => (
  <div {...props} style={{ ...props.style }}>
    {props.children}
    <p>Slaajd</p>
  </div>
);

Slide.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

Slide.defaultProps = {
  children: null,
  style: {},
};

Slide.isSlideOfFullpage = true;

export default Slide;
