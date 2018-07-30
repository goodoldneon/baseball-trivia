import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Row = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Detail = (props) => {
  const { answers } = props;
  const correctCount = answers.filter((answer) => answer.isGuessed).length;
  const forfeitCount = answers.filter((answer) => answer.isForfeited).length;

  return (
    <Wrap className="detail">
      <Row>
        <div>Correct</div>
        <div>Forfeited</div>
      </Row>

      <Row>
        <div>{correctCount}</div>
        <div>{forfeitCount}</div>
      </Row>
    </Wrap>
  );
};

Detail.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      isGuessed: PropTypes.bool.isRequired,
      isForfeited: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Detail;
