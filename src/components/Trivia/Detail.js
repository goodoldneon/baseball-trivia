import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Row = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Detail = (props) => {
  const renderLastNamesStatus = (status) => {
    if (status === 'loading') {
      return <div className="loading">Loading last name checker...</div>;
    }

    if (status === 'success') {
      return (
        <div className="success">
          Last name checker loaded. The Guess button will be enabled if you have
          entered a valid last name.
        </div>
      );
    }

    if (status === 'error') {
      return (
        <div className="error">
          Last name checker failed to load. You can still play, but you will not
          be warned if you enter a non-existent last name.
        </div>
      );
    }

    return <div className="error">Unknown lastNamesStatus {status}.</div>;
  };

  const { answers, lastNamesStatus } = props;
  const correctCount = answers.filter((answer) => answer.isGuessed).length;
  const forfeitCount = answers.filter((answer) => answer.isForfeited).length;

  return (
    <div className="detail">
      <Grid className="stats">
        <Row>
          <div>Correct</div>
          <div>Forfeited</div>
        </Row>

        <Row>
          <div>{correctCount}</div>
          <div>{forfeitCount}</div>
        </Row>
      </Grid>

      <div className="last-name-status">
        {renderLastNamesStatus(lastNamesStatus)}
      </div>
    </div>
  );
};

Detail.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      isGuessed: PropTypes.bool.isRequired,
      isForfeited: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  lastNamesStatus: PropTypes.string.isRequired,
};

export default Detail;
