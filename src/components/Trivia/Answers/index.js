import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Player from './Player';
import { Row, Cell } from './styled';

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Answers = (props) => {
  function handleForfeit(index) {
    const { onForfeit } = props;
    onForfeit(index);
  }

  const { answers } = props;

  return (
    <Wrap className="answers">
      <Row className="row header">
        <Cell>Name</Cell>
        <Cell>Debut Decade</Cell>
        <Cell>Main Team</Cell>
      </Row>

      {answers.map((answer, index) => {
        const { fullName } = answer;

        return (
          <Player
            key={fullName}
            index={index}
            data={answer}
            onForfeit={handleForfeit}
          />
        );
      })}
    </Wrap>
  );
};

Answers.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      lastName: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      debutDecade: PropTypes.string.isRequired,
      mainTeam: PropTypes.string,
      brefId: PropTypes.string.isRequired,
      isGuessed: PropTypes.bool.isRequired,
      isForfeited: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onForfeit: PropTypes.func.isRequired,
};

export default Answers;
