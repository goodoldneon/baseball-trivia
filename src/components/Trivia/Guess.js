import React from 'react';
import PropTypes from 'prop-types';

const Guess = (props) => {
  const { text, onChange } = props;
  return (
    <div className="guess">
      <input
        value={text}
        onChange={onChange}
        type="text"
        placeholder="Player's last name"
      />
    </div>
  );
};

Guess.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Guess;
