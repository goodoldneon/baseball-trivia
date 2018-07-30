import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ClickToReveal from './ClickToReveal';

const Row = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Cell = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  align-content: middle;
  justify-content: center;
`;

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
      <button type="button" onClick={handleForfeit} className="forfeit-btn">
        Forfeit
      </button>
    );
  }

  const { data } = props;

  const {
    fullName,
    link,
    debutDecade,
    mainTeam,
    isGuessed,
    isForfeited,
  } = data;

  const isRevealed = isGuessed || isForfeited;
  const className = buildClassName(isGuessed, isForfeited);

  return (
    <Row className={className}>
      <Cell>{renderName(fullName, link, isRevealed)}</Cell>

      <Cell>
        <ClickToReveal content={debutDecade} isContentVisible={isRevealed} />
      </Cell>

      <Cell>
        <ClickToReveal content={mainTeam} isContentVisible={isRevealed} />
      </Cell>
    </Row>
  );
};

Player.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    debutDecade: PropTypes.string,
    mainTeam: PropTypes.string,
    link: PropTypes.string.isRequired,
    isGuessed: PropTypes.bool.isRequired,
    isForfeited: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onForfeit: PropTypes.func.isRequired,
};

export default Player;
