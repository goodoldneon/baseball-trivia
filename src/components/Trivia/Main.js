import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Guess from './Guess';
import GuessedAnswers from './GuessedAnswers';
import Question from './Question';

class Main extends Component {
  constructor(props) {
    super();

    const { data } = props;

    this.state = {
      guess: '',
      unguessedAnswers: data.answers,
      guessedAnswers: [],
    };
  }

  validateGuess = (guess) => {
    const { unguessedAnswers, guessedAnswers } = this.state;

    const index = unguessedAnswers
      .map((answer) => answer.lastName.toLowerCase())
      .indexOf(guess.toLowerCase());

    if (index === -1) {
      this.setState({
        guess,
      });

      return;
    }

    const newGuessedAnswer = unguessedAnswers[index];

    this.setState({
      guess: '',
      unguessedAnswers: [
        ...unguessedAnswers.slice(0, index),
        ...unguessedAnswers.slice(index + 1),
      ],
      guessedAnswers: [...guessedAnswers, newGuessedAnswer],
    });
  };

  handleGuessChange = (e) => {
    const { value } = e.target;

    this.validateGuess(value);
  };

  render() {
    const { data } = this.props;
    const { guess, guessedAnswers } = this.state;

    return (
      <div>
        <Question text={data.question} />
        <Guess text={guess} onChange={this.handleGuessChange} />
        <GuessedAnswers guessedAnswers={guessedAnswers} />
      </div>
    );
  }
}

Main.propTypes = {
  data: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        lastName: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Main;
