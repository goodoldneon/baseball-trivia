import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Answers from './Answers';
import Detail from './Detail';
import Guess from './Guess';
import Question from './Question';

class Main extends Component {
  constructor(props) {
    super();

    const { data } = props;
    let { answers } = data;

    answers = answers.map((answer) => {
      const newAnswer = Object.assign({}, answer);
      newAnswer.isGuessed = false;
      newAnswer.isForfeited = false;
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

    // Incorrect guess.
    if (index === -1) {
      this.setState({
        guess,
      });

      return;
    }

    // Can't get credit for an answer that's alreadt forfeited.
    if (!answers[index].isForfeited) {
      answers[index].isGuessed = true;
    }

    this.setState({
      guess: '',
      answers,
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

  handleAnswerForfeit = (index) => {
    let { answers } = this.state;

    answers = answers.slice();
    answers[index].isForfeited = true;

    this.setState({ answers });
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

        <Detail answers={answers} />

        <Answers answers={answers} onForfeit={this.handleAnswerForfeit} />
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
