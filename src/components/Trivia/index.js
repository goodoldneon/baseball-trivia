import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Guess from './Guess';
import Answers from './Answers';
import Question from './Question';

class Main extends Component {
  constructor(props) {
    super();

    const { data } = props;
    let { answers } = data;

    answers = answers.map((answer) => {
      const newAnswer = Object.assign({}, answer);
      newAnswer.isGuessed = false;
      return newAnswer;
    });

    this.state = {
      guess: '',
      answers,
    };
  }

  validateGuess = () => {
    const { guess } = this.state;
    let { answers } = this.state;

    answers = answers.slice();

    const index = answers
      .map((answer) => answer.lastName.toLowerCase())
      .indexOf(guess.toLowerCase());

    if (index === -1) {
      this.setState({
        guess,
      });

      return;
    }

    answers[index].isGuessed = true;

    // const newGuessedAnswer = unguessedAnswers[index];

    this.setState({
      guess: '',
      answers,
      // unguessedAnswers: [
      //   ...unguessedAnswers.slice(0, index),
      //   ...unguessedAnswers.slice(index + 1),
      // ],
      // guessedAnswers: [...guessedAnswers, newGuessedAnswer],
    });
  };

  handleGuessChange = (e) => {
    const { value } = e.target;

    this.setState({
      guess: value,
    });
  };

  handleGuessSubmit = () => {
    this.validateGuess();
  };

  render() {
    const { data } = this.props;
    const { guess, answers } = this.state;

    return (
      <div>
        <Question text={data.question} />

        <Guess
          text={guess}
          onChange={this.handleGuessChange}
          onSubmit={this.handleGuessSubmit}
        />

        <Answers answers={answers} />
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
