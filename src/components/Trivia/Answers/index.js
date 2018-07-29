import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Player from './Player';

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Row = styled.div`
  grid-column: 1 / -1;
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
        <div>Name</div>
        <div>Debut Decade</div>
        <div>Teams</div>
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
      link: PropTypes.string.isRequired,
      isGuessed: PropTypes.bool.isRequired,
      isForfeited: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onForfeit: PropTypes.func.isRequired,
};

export default Answers;
