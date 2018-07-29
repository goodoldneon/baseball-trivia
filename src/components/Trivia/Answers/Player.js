import React from 'react';
import PropTypes from 'prop-types';

const Player = (props) => {
  function handleForfeit(e) {
    e.preventDefault();
    const { onForfeit, index } = props;
    onForfeit(index);
  }

  function buildClassName(isGuessed, isForfeited) {
    let className = '';

    className = 'row';
    className += isGuessed ? ' is-guessed' : '';
    className += isForfeited ? ' is-forfeited' : '';

    return className;
  }

  function renderName(fullName, link, isRevealed) {
    if (isRevealed) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {fullName}
        </a>
      );
    }

    return (
      <button type="button" onClick={handleForfeit}>
        Forfeit
      </button>
    );
  }

  const { data } = props;
  const { fullName, link, isGuessed, isForfeited } = data;
  const isRevealed = isGuessed || isForfeited;
  const className = buildClassName(isGuessed, isForfeited);

  return (
    <div className={className}>
      <div>{renderName(fullName, link, isRevealed)}</div>
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
    isForfeited: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onForfeit: PropTypes.func.isRequired,
};

export default Player;
