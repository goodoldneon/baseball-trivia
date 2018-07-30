import React from 'react';
import PropTypes from 'prop-types';

import ClickToReveal from './ClickToReveal';
import { Row, Cell } from './styled';

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

  function renderName(fullName, brefId, isRevealed) {
    if (isRevealed) {
      const brefUrlBase = 'https://www.baseball-reference.com/players';
      const brefIdFirstChar = brefId.substring(0, 1);
      const brefUrl = `${brefUrlBase}/${brefIdFirstChar}/${brefId}.shtml`;

      return (
        <a href={brefUrl} target="_blank" rel="noopener noreferrer">
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
    debutDecade,
    mainTeam,
    brefId,
    isGuessed,
    isForfeited,
  } = data;

  const isRevealed = isGuessed || isForfeited;
  const className = buildClassName(isGuessed, isForfeited);

  return (
    <Row className={className}>
      <Cell>{renderName(fullName, brefId, isRevealed)}</Cell>

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
    brefId: PropTypes.string.isRequired,
    isGuessed: PropTypes.bool.isRequired,
    isForfeited: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onForfeit: PropTypes.func.isRequired,
};

export default Player;
