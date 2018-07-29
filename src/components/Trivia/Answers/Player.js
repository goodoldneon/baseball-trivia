import React from 'react';
import PropTypes from 'prop-types';

const Player = (props) => {
  const { data } = props;
  const { fullName, link, isGuessed } = data;

  const className = `row ${isGuessed ? 'is-guessed' : ''}`;

  return (
    <div className={className}>
      <div>
        <a href={link}>{fullName}</a>
      </div>
      <div />
      <div />
    </div>
  );
};

Player.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isGuessed: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Player;
