import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

const Answers = (props) => {
  const { answers } = props;

  return (
    <div className="answers">
      <div className="row">
        <div>Name</div>
        <div>Debut Decade</div>
        <div>Teams</div>
      </div>

      {answers.map((answer, index) => {
        const { fullName } = answer;

        return <Player key={fullName} index={index} data={answer} />;
      })}
    </div>
  );
};

Answers.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      lastName: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Answers;
