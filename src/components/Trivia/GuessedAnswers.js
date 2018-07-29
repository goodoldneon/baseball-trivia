import React from 'react';
import PropTypes from 'prop-types';

const GuessedAnswers = (props) => {
  const { guessedAnswers } = props;

  return (
    <div className="guessed-answers">
      {guessedAnswers.map((answer) => {
        const { fullName, link } = answer;
        return (
          <div key={fullName}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {fullName}
            </a>
          </div>
        );
      })}
    </div>
  );
};

GuessedAnswers.propTypes = {
  guessedAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      lastName: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default GuessedAnswers;
