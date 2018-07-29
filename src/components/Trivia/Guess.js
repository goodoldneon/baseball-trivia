import React from 'react';
import PropTypes from 'prop-types';

const Guess = (props) => {
  const { text, onChange } = props;
  return <input type="text" value={text} onChange={onChange} />;
};

Guess.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Guess;
