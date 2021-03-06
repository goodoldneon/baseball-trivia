import React from 'react';
import PropTypes from 'prop-types';

const Question = (props) => {
  const { text } = props;
  return <div className="question">{text}</div>;
};

Question.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Question;
